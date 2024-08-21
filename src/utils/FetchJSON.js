import {useEffect, useState} from "react";

const useFetchJSON = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

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
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                //Do nothing, fetch aborted
            } else {
                setIsPending(false);
                setError(err.message);
            }
        })

        //Abort fetch if component is unmounted
        return () => abortController.abort();
    }, [url]);

    return {data, isPending, error};
}
 
export default useFetchJSON;