import {useEffect, useState} from "react";

const REQUEST_TIMEOUT = 15000; //Give up on a hanging request instead of loading forever

//The API can answer 200 with an upstream driver error in place of the resource, e.g.
//{"errorno":"ETIMEDOUT","code":"ETIMEDOUT","syscall":"connect","fatal":true}
//Those payloads are not data, so treat them as failures instead of handing them to callers.
const isErrorPayload = (data) => {
    if (data === null || typeof data !== 'object' || Array.isArray(data)) {
        return false;
    }
    return 'errorno' in data || data.fatal === true || ('code' in data && 'syscall' in data);
}

//expect: 'array' rejects any payload that is not an array, 'any' accepts whatever parses
const useFetchJSON = (url, expect = 'any') => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        let timedOut = false;
        const timeout = setTimeout(() => {
            timedOut = true;
            abortController.abort();
        }, REQUEST_TIMEOUT);

        //Drop any result of a previous url while the new one is in flight
        setIsPending(true);
        setData(null);
        setError(null);

        fetch(url, {signal: abortController.signal, mode: 'cors'}) //Fetch Data
        //Check result, throw error fetch failed
        .then(result => {
            if (!result.ok) {
                throw Error('Resource does not exist or is not ok.');
            }
            return result.json();
        })
        //Parse data
        .then(data => {
            if (isErrorPayload(data)) {
                throw Error('Server returned an error in place of the resource.');
            }
            if (expect === 'array' && !Array.isArray(data)) {
                throw Error('Server returned an unexpected response shape.');
            }

            clearTimeout(timeout);
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            clearTimeout(timeout);
            if (err.name === 'AbortError' && !timedOut) {
                //Do nothing, fetch aborted by unmount
            } else {
                setIsPending(false);
                setData(null);
                setError(timedOut ? 'Request timed out.' : err.message);
            }
        })

        //Abort fetch if component is unmounted
        return () => {
            clearTimeout(timeout);
            abortController.abort();
        };
    }, [url, expect]);

    return {data, isPending, error};
}

export default useFetchJSON;
