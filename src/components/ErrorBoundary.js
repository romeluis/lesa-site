import React from "react";
import "./ErrorBoundary.css";

//Catches render errors so a bad response cannot blank the whole site.
//Pass resetKey (the current path) so navigating away clears a caught error.
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false, resetKey: props.resetKey};
    }

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    static getDerivedStateFromProps(props, state) {
        if (props.resetKey === state.resetKey) {
            return null;
        }
        //New page, give it a clean slate
        return {hasError: false, resetKey: props.resetKey};
    }

    componentDidCatch(error, errorInfo) {
        console.error("Unhandled error while rendering:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary-container">
                    <h2 className="error-boundary-title">Something went wrong</h2>
                    <p className="error-boundary-message">We couldn't load this page right now. Please try again in a moment.</p>
                    <button className="error-boundary-button" onClick={() => window.location.reload()}>Reload page</button>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
