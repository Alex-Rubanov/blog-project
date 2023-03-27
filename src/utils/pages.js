export const getTotalPages = (totalCountOfPosts, limitPerPage) => {
    return Math.ceil(totalCountOfPosts / limitPerPage);
}