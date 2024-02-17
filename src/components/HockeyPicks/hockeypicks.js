import React, { useState, useEffect } from 'react';
import './hockeypicks.css';

function App() {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState('stat');
  const [sortOrder, setSortOrder] = useState('desc');
  const itemsPerPage = 25;

  useEffect(() => {
    fetch('http://localhost:5000/api/list')
      .then((response) => response.json())
      .then((data) => setList(data))
      .catch((error) => console.error('Error fetching list:', error));
  }, []);

  const round = (number, decimalPlaces) => {
    return Math.round(number * 10 ** decimalPlaces) / 10 ** decimalPlaces;
  };

  const booleanConvert = (number) => {
    return number === 0 ? 'Away' : 'Home';
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = list.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleSort = (column) => {
    if (sortColumn == column) {
      setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortOrder('desc')
    }
    setSortColumn(column);
  };

  const sortComparator = (a, b) => {
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];

    if (sortOrder === 'asc') {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  };

  const sortedItems = currentItems.slice().sort(sortComparator);

  const renderTableRows = () => {
    return sortedItems.map((item) => (
      <tr key={item.name}>
        <td className='name'>{item.name}</td>
        <td className='teamName'>{item.team_name}</td>
        <td className='bet'>{item.bet}</td>
        <td className='stat'>{round(item.stat, 2)}</td>
        <td className='gpg'>{round(item.goals_per_game, 2)}</td>
        <td className='5gpg'>{round(item.five_gpg, 2)}</td>
        <td className='hgpg'>{round(item.historic_gpg, 2)}</td>
        <td className='ppg'>{round(item.ppg, 2)}</td>
        <td className='otpm'>{round(item.otpm, 2)}</td>
        <td className='tgpg'>{round(item.team_goals_per_game, 2)}</td>
        <td className='otga'>{round(item.other_team_goals_against, 2)}</td>
        <td className='isHome'>{booleanConvert(item.is_home)}</td>
      </tr>
    ));
  };

  const pageNumbers = Array.from({ length: Math.ceil(list.length / itemsPerPage) }, (_, index) => index + 1);

  const renderSortArrow = (column) => {
    if (sortColumn === column) {
      return <span className='sort-arrow'>{sortOrder === 'asc' ? '↑' : '↓'}</span>;
    }
    return null;
  };

  return (
    <div className='container'>
      <h1 className='title'>Probablity Leaderboard</h1>
      <table className='table'>
        <thead className='header'>
          <tr>
            <th onClick={() => handleSort('name')}>
              <span className='header-text'>Player Name</span> {renderSortArrow('name')}
            </th>
            <th onClick={() => handleSort('team_name')}>
              <span className='header-text'>Team Name</span> {renderSortArrow('team_name')}
            </th>
            <th onClick={() => handleSort('bet')}>
              <span className='header-text'>Bet</span> {renderSortArrow('bet')}
            </th>
            <th onClick={() => handleSort('stat')}>
              <span className='header-text'>Stat</span> {renderSortArrow('stat')}
            </th>
            <th onClick={() => handleSort('goals_per_game')}>
              <span className='header-text'>GPG</span> {renderSortArrow('goals_per_game')}
            </th>
            <th onClick={() => handleSort('five_gpg')}>
              <span className='header-text'>5GPG</span> {renderSortArrow('five_gpg')}
            </th>
            <th onClick={() => handleSort('historic_gpg')}>
              <span className='header-text'>HGPG</span> {renderSortArrow('historic_gpg')}
            </th>
            <th onClick={() => handleSort('ppg')}>
              <span className='header-text'>HPPG</span> {renderSortArrow('ppg')}
            </th>
            <th onClick={() => handleSort('otpm')}>
              <span className='header-text'>OTPM</span> {renderSortArrow('otpm')}
            </th>
            <th onClick={() => handleSort('team_goals_per_game')}>
              <span className='header-text'>TGPG</span> {renderSortArrow('team_goals_per_game')}
            </th>
            <th onClick={() => handleSort('other_team_goals_against')}>
              <span className='header-text'>OTGA</span> {renderSortArrow('other_team_goals_against')}
            </th>
            <th onClick={() => handleSort('is_home')}>
              <span className='header-text'>Location</span> {renderSortArrow('is_home')}
            </th>
          </tr>
        </thead>
        <tbody className='body'>{renderTableRows()}</tbody>
      </table>

      <div className='pagination'>
        {pageNumbers.map((number) => (
          <button key={number} onClick={() => handlePageChange(number)}>
            {number}
          </button>
        ))}
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );

}

export default App;
