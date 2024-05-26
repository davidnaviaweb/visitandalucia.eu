import PropTypes from 'prop-types';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const paginationRange = 2; // Define el rango de páginas visibles alrededor de la página actual
    const pages = [...Array(totalPages).keys()].map(i => i + 1);

    const getPaginationGroup = () => {
        let start = Math.max(currentPage - paginationRange, 1);
        let end = Math.min(currentPage + paginationRange, totalPages);

        let pagesGroup = pages.slice(start - 1, end);

        if (start >= 2) {
            pagesGroup.unshift('...');
            pagesGroup.unshift(1);
        }

        if (end < totalPages - 1) {
            pagesGroup.push('...');
            pagesGroup.push(totalPages);
        }

        return pagesGroup;
    };

    return (
        <div className='flex flex-wrap justify-center gap-2 mt-4'>
            {(currentPage === 1) ? (<></>) : (
                <button
                    className='p-3 py-1 font-semibold text-white rounded bg-puertoRico-500 disabled:bg-puertoRico-200 hover:bg-puertoRico-700'
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Anterior
                </button>
            )}

            {getPaginationGroup().map((page, index) =>
                <button
                    className={`p-3 py-1 font-semibold text-white rounded
                        ${page === (currentPage) ? 'bg-puertoRico-800 dark:bg-puertoRico-300' : 'bg-puertoRico-500 hover:bg-puertoRico-700'}
                        ${page === '...' ? 'bg-gray-300 dark:bg-slate-700' : ''}
                        `
                    }
                    key={index}
                    onClick={() => typeof page === 'number' && onPageChange(page)}
                    disabled={page === '...' || page === (currentPage)}
                >
                    {page}
                </button>
            )}
            {((currentPage) === totalPages) ? (<></>) : (
                <button
                    className='p-3 py-1 font-semibold text-white rounded bg-puertoRico-500 disabled:bg-puertoRico-200 hover:bg-puertoRico-700'
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={(currentPage) === totalPages}
                >
                    Siguiente
                </button>
            )}

        </div>
    );
}

Pagination.propTypes = {
    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;