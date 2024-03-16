import React from 'react';

const PageNav = ({ currentPage, pageNumbers, setPageFunc }) => {

    return(
        <div className='pagination'>
            {pageNumbers.map((number, index) => {
            if (index===currentPage-1) {
                return (
                <button className='active' key={number} onClick={() => setPageFunc(number)}>
                    {number}
                </button>
                );
            } else if (index === 0 || index === pageNumbers.length - 1 || (index >= currentPage - 3 && index <= currentPage + 1)) {
                return (
                <button key={number} onClick={() => setPageFunc(number)}>
                    {number}
                </button>
                );
            } else if (index === currentPage + 3 || index === currentPage - 4) {
                return (
                <span key={index} className='ellipsis'>
                    ...
                </span>
                );
            }
            return null;
            })}
            <button onClick={() => setPageFunc(currentPage+1)}>Next</button>
        </div>
    )
}

export default PageNav;