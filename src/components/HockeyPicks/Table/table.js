import React from 'react';

const round = (number, decimalPlaces) => {
    return Math.round(number * 10 ** decimalPlaces) / 10 ** decimalPlaces;
};

const booleanConvert = (number) => {
    return number === 0 ? 'Away' : 'Home';
};

const Table = ({ sortedItems, handleSort, renderSortArrow, indexOfFirstItem }) => {
  const renderTableRows = () => {
    return sortedItems.map((item, index) => {
      const placement = indexOfFirstItem + index + 1; // Calculate the placement
  
      return (
        <tr key={item.Name}>
          <td className='placement'>{placement}</td>
          <td className='name'>{item.Name}</td>
          <td className='teamName'>{item.Team.replace(/�/g, "é")}</td>
          <td className='stat'>{round(item.Stat, 3)}</td>
          <td className='bet'>{parseInt(item.Bet)}</td>
          <td className='gpg'>{round(item.GPG, 2)}</td>
          <td className='5gpg'>{round(item.Last_5_GPG, 2)}</td>
          <td className='hgpg'>{round(item.HGPG, 2)}</td>
          <td className='ppg'>{round(item.PPG, 2)}</td>
          <td className='otpm'>{round(item.OTPM, 2)}</td>
          <td className='tgpg'>{round(item.TGPG, 2)}</td>
          <td className='otga'>{round(item.OTGA, 2)}</td>
          <td className='isHome'>{booleanConvert(item.Home_1)}</td>
        </tr>
      );
    });
  };

  return (
    <table className='table'>
      <thead className='header'>
        <tr>
          <th>
            <span className='header-text'></span>
          </th>
          <th onClick={() => handleSort('Name')}>
            <span className='header-text'>Player Name</span> {renderSortArrow('Name')}
          </th>
          <th onClick={() => handleSort('Team')}>
            <span className='header-text'>Team Name</span> {renderSortArrow('Team')}
          </th>
          <th onClick={() => handleSort('Stat')}>
            <span className='header-text'>Probablity</span> {renderSortArrow('Stat')}
          </th>
          <th onClick={() => handleSort('Bet')}>
            <span className='header-text'>Bet</span> {renderSortArrow('Bet')}
          </th>
          <th onClick={() => handleSort('GPG')}>
            <span className='header-text'>GPG</span> {renderSortArrow('GPG')}
          </th>
          <th onClick={() => handleSort('5GPG')}>
            <span className='header-text'>5GPG</span> {renderSortArrow('5GPG')}
          </th>
          <th onClick={() => handleSort('HGPG')}>
            <span className='header-text'>HGPG</span> {renderSortArrow('HGPG')}
          </th>
          <th onClick={() => handleSort('PPG')}>
            <span className='header-text'>HPPG</span> {renderSortArrow('PPG')}
          </th>
          <th onClick={() => handleSort('OTPM')}>
            <span className='header-text'>OTPM</span> {renderSortArrow('OTPM')}
          </th>
          <th onClick={() => handleSort('TGPG')}>
            <span className='header-text'>TGPG</span> {renderSortArrow('TGPG')}
          </th>
          <th onClick={() => handleSort('OTGA')}>
            <span className='header-text'>OTGA</span> {renderSortArrow('OTGA')}
          </th>
          <th onClick={() => handleSort('Home_1')}>
            <span className='header-text'>Location</span> {renderSortArrow('Home_1')}
          </th>
        </tr>
      </thead>
      <tbody className='body'>{renderTableRows()}</tbody>
    </table>
  );
};

export default Table;
