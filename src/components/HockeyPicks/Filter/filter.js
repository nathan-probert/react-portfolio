import React from 'react';

const Filter = ({ sort1Cat, sort1Col, sort1Dir, sort1DirChange, sort2Cat, sort2Col, sort2Dir, sort2DirChange }) => {

    const allValues = [
        { label: 'Player Name', value: 'Name' },
        { label: 'Team Name', value: 'Team' },
        { label: 'Probability', value: 'Stat' },
        { label: 'Bet', value: 'Bet' },
        { label: 'GPG', value: 'GPG' },
        { label: '5GPG', value: '5GPG' },
        { label: 'HGPG', value: 'HGPG' },
        { label: 'HPPG', value: 'HPPG' },
        { label: 'OTPM', value: 'OTPM' },
        { label: 'TGPG', value: 'TGPG' },
        { label: 'OTGA', value: 'OTGA' },
        { label: 'Location', value: 'Home_1' }
    ];    

    // Function to handle change in primary sorting category
    const handlePrimarySortChange = (e) => {
        const selectedValue = e.target.value;
        sort1Col(selectedValue); // Call the function passed as sort1Col prop with the selected value
    };

    // Function to handle change in secondary sorting category
    const handleSecondarySortChange = (e) => {
        const selectedValue = e.target.value;
        sort2Col(selectedValue); // Call the function passed as sort2Col prop with the selected value
    };

    // Function to handle change in primary sorting category
    const handlePrimaryOrderChange = (e) => {
        const selectedValue = e.target.value;
        sort1DirChange(selectedValue); // Call the function passed as sort1Col prop with the selected value
    };

    // Function to handle change in secondary sorting category
    const handleSecondaryOrderChange = (e) => {
        const selectedValue = e.target.value;
        sort2DirChange(selectedValue); // Call the function passed as sort2Col prop with the selected value
    };

    return(
        <div className='filter'>
            <div className="sort-options">
                <label htmlFor="primarySort">Primary Sort: </label>
                <select id="primarySort" value={sort1Cat} onChange={handlePrimarySortChange}>
                    {allValues.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
                <select value={sort1Dir} onChange={handlePrimaryOrderChange}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>

                <label htmlFor="secondarySort"> Secondary Sort: </label>
                <select id="secondarySort" value={sort2Cat} onChange={handleSecondarySortChange}>
                    {allValues.map(option => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))}
                </select>
                <select value={sort2Dir} onChange={handleSecondaryOrderChange}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
        </div>
    )
}

export default Filter;
