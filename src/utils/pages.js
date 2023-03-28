export const getTotalPages = (totalCountOfPosts, limitPerPage) => {
    return Math.ceil(totalCountOfPosts / limitPerPage);
}

export const createArray = (arrayLength) => Array.from({length: arrayLength}, (_, index) => index + 1);