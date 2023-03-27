import usePagination from "../../../hooks/usePagination";
import MyButton from "../button/MyButton";
import classes from './pagination.module.css';

const Pagination = ({ totalPages, currentPage, setCurrentPage , isLoading}) => {

    const pagesArray = usePagination(totalPages);

    return (
            <div className={classes.page__wrapper}>
                {pagesArray.map((_, index) => {

                    return (
                        !isLoading && <MyButton
                            key={index}
                            onClick={() => {
                                setCurrentPage(() =>  index + 1);
                            }}
                            style={currentPage === index + 1 ? {backgroundColor: 'teal', color: '#fff', borderColor: '#fff'} : null} 
                        >
                            {index + 1}
                        </MyButton>
                    )
                })
                }
              </div>
        
    )
}

export default Pagination;