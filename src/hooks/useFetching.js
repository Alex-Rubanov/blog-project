import { useState } from "react"

export const useFetching = (callback) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetching = async (...args) => {
        setIsLoading(true);
        try {
            await callback(...args);
        } catch (error) {
            setError(error.message)
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, error];
}