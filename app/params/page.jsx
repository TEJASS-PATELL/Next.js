const SearchParams = async ({ searchParams }) => {
    const searchParam = await searchParams;
    const Category = searchParam?.category;
    const Sort = searchParam?.sort;

    return <h1>Showing {Category} products, sorted by {Sort}</h1>   
}

export default SearchParams;