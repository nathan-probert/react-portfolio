import React from 'react';

const round = (number, decimalPlaces) => {
  return Math.round(number * 10 ** decimalPlaces) / 10 ** decimalPlaces;
};

const booleanConvert = (number) => {
  return number === 0 ? 'Away' : 'Home';
};

const Table = ({ sortedItems, renderSortArrow, indexOfFirstItem, handleSortChange }) => {
  const renderTableRows = () => {
    return sortedItems.map((item, index) => {
      const placement = indexOfFirstItem + index + 1; // Calculate the placement

      return (
        <tr key={item.Name}>
          <td className='placement'>{placement}</td>
          <td className='name'>{item.Name}</td>
          <td className='teamName'>{item.Team.replace(/�/g, "é")}</td>
          <td className='stat'>{(item.Stat * 100).toFixed(2)}%</td>
          <td className='bet'>{parseInt(item.Bet, 10)}</td>
          <td className='gpg'>{item.GPG.toFixed(2)}</td>
          <td className='fiveGpg'>{item.Last_5_GPG.toFixed(2)}</td>
          <td className='hgpg'>{item.HGPG.toFixed(2)}</td>
          <td className='ppg'>{item.PPG.toFixed(0)}</td>
          <td className='otpm'>{item.OTPM.toFixed(0)}</td>
          <td className='tgpg'>{item.TGPG.toFixed(2)}</td>
          <td className='otga'>{item.OTGA.toFixed(2)}</td>
          <td className='isHome'>{booleanConvert(item.Home_1)}</td>
        </tr>
      );
    });
  };

  return (
    <table className='table'>
      <thead className='header'>
        <tr>
          <th className="placement">
            <span className='header-text'></span>
          </th>
          <th className="name">
            <span className='header-text' onClick={() => handleSortChange('Name')}>Player Name</span> {renderSortArrow('Name')}
          </th>
          <th className="teamName">
            <span className='header-text' onClick={() => handleSortChange('Team')}>Team Name</span> {renderSortArrow('Team')}
          </th>
          <th className="stat">
            <span className='header-text' onClick={() => handleSortChange('Stat')}>Probability</span> {renderSortArrow('Stat')}
          </th>
          <th className="bet">
            <span className='header-text' onClick={() => handleSortChange('Bet')}>Bet</span> {renderSortArrow('Bet')}
          </th>
          <th className="gpg">
            <span className='header-text' onClick={() => handleSortChange('GPG')}>GPG</span> {renderSortArrow('GPG')}
          </th>
          <th className="fiveGpg">
            <span className='header-text' onClick={() => handleSortChange('5GPG')}>5GPG</span> {renderSortArrow('5GPG')}
          </th>
          <th className="hgpg">
            <span className='header-text' onClick={() => handleSortChange('HGPG')}>HGPG</span> {renderSortArrow('HGPG')}
          </th>
          <th className="ppg">
            <span className='header-text' onClick={() => handleSortChange('PPG')}>HPPG</span> {renderSortArrow('PPG')}
          </th>
          <th className="otpm">
            <span className='header-text' onClick={() => handleSortChange('OTPM')}>OTPM</span> {renderSortArrow('OTPM')}
          </th>
          <th className="tgpg">
            <span className='header-text' onClick={() => handleSortChange('TGPG')}>TGPG</span> {renderSortArrow('TGPG')}
          </th>
          <th className="otga">
            <span className='header-text' onClick={() => handleSortChange('OTGA')}>OTGA</span> {renderSortArrow('OTGA')}
          </th>
          <th className="home">
            <span className='header-text'>Location</span> {renderSortArrow('Home_1')}
          </th>
        </tr>
      </thead>
      <tbody className='body'>{renderTableRows()}</tbody>
    </table>
  );
};

export default Table;
