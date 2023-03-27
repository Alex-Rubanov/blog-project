import { useMemo } from 'react';

const usePagination = (arrayLength) => {
    console.log('USE PAGINATION');
    const getArrayPages = useMemo(() => {
        
        return Array.from({length: arrayLength}, (_, index) => index + 1);
    }, [arrayLength])

    return getArrayPages
}

export default usePagination;