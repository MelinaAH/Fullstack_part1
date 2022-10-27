import { useState } from "react";

const Filter = ({ handleSearch }) => {
    const [searchCriterion, setSearchCriterion] = useState('');

    const handleSearchField = (e) => {
        console.log('name to search:', e.target.value);
        setSearchCriterion(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchCriterion);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                filter shown with <input value={searchCriterion} onChange={handleSearchField} />
            </form>
        </div>
    )
}

export default Filter