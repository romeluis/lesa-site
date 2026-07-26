import {render, screen, waitFor} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";

import EventSpread from "../components/EventSpread";
import ErrorBoundary from "../components/ErrorBoundary";

//The shape the API actually returns when its database connection times out, served with a 200
const upstreamErrorPayload = {errorno: "ETIMEDOUT", code: "ETIMEDOUT", syscall: "connect", fatal: true};

const respondWith = (body, ok = true) => {
    global.fetch = jest.fn(() => Promise.resolve({
        ok,
        json: () => Promise.resolve(body),
    }));
}

const renderEventSpread = () => render(
    <MemoryRouter>
        <ErrorBoundary resetKey="/">
            <EventSpread maxPreviews={2} maxMonths={6}/>
        </ErrorBoundary>
    </MemoryRouter>
);

afterEach(() => {
    jest.restoreAllMocks();
});

describe("degrading when /events fails", () => {
    test("a 200 carrying an upstream error renders the fallback instead of crashing", async () => {
        respondWith(upstreamErrorPayload);
        const {container} = renderEventSpread();

        await waitFor(() => {
            expect(container.querySelectorAll(".shimmerLoad").length).toBeGreaterThan(0);
        });
        expect(screen.queryByText("Something went wrong")).toBeNull();
    });

    test("a non-array payload renders the fallback instead of crashing", async () => {
        respondWith({unexpected: "shape"});
        const {container} = renderEventSpread();

        await waitFor(() => {
            expect(container.querySelectorAll(".shimmerLoad").length).toBeGreaterThan(0);
        });
        expect(screen.queryByText("Something went wrong")).toBeNull();
    });

    test("a non-ok response renders the fallback instead of crashing", async () => {
        respondWith({}, false);
        const {container} = renderEventSpread();

        await waitFor(() => {
            expect(container.querySelectorAll(".shimmerLoad").length).toBeGreaterThan(0);
        });
        expect(screen.queryByText("Something went wrong")).toBeNull();
    });

    test("a well formed response still renders events", async () => {
        respondWith([{
            id: 1,
            name: "Test Event",
            day: 1,
            month: 1,
            year: 3000,
            startHour: 18,
            startMinute: 30,
            location: "Bahen",
            price: 0,
            link: "0",
            type: "LESA Event",
        }]);
        renderEventSpread();

        expect(await screen.findByText("Test Event")).toBeTruthy();
    });
});

describe("ErrorBoundary", () => {
    test("catches a render error rather than blanking the page", () => {
        jest.spyOn(console, "error").mockImplementation(() => {});
        const Boom = () => {
            throw new Error("render blew up");
        };

        render(
            <ErrorBoundary resetKey="/">
                <Boom/>
            </ErrorBoundary>
        );

        expect(screen.getByText("Something went wrong")).toBeTruthy();
    });
});
