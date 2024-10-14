import React from 'react';

const round = (number, decimalPlaces) => {
  return Math.round(number * 10 ** decimalPlaces) / 10 ** decimalPlaces;
};

const Table = ({ sortedItems, renderSortArrow, indexOfFirstItem, handleSortChange }) => {
  const renderTableRows = () => {
    return sortedItems.map((item, index) => {
      const placement = indexOfFirstItem + index + 1; // Calculate the placement

      return (
        <tr key={item.Name}>
          <td className='placement'>{placement}</td>
          <td className='name'>{item.name}</td>
          <td className='teamName'>{item.team_name.replace(/�/g, "é")}</td>
          <td className='stat'>{(item.stat * 100).toFixed(2)}%</td>
          <td className='gpg'>{item.gpg.toFixed(2)}</td>
          <td className='fiveGpg'>{item.five_gpg.toFixed(2)}</td>
          <td className='hgpg'>{item.hgpg.toFixed(2)}</td>
          <td className='tgpg'>{item.tgpg.toFixed(2)}</td>
          <td className='otga'>{item.otga.toFixed(2)}</td>
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
            <span className='header-text' onClick={() => handleSortChange('name')}>Player Name</span> {renderSortArrow('name')}
          </th>
          <th className="teamName">
            <span className='header-text' onClick={() => handleSortChange('team_name')}>Team Name</span> {renderSortArrow('team_name')}
          </th>
          <th className="stat">
            <span className='header-text' onClick={() => handleSortChange('stat')}>Probability</span> {renderSortArrow('stat')}
          </th>
          <th className="gpg">
            <span className='header-text' onClick={() => handleSortChange('gpg')}>GPG</span> {renderSortArrow('gpg')}
          </th>
          <th className="fiveGpg">
            <span className='header-text' onClick={() => handleSortChange('five_gpg')}>5GPG</span> {renderSortArrow('five_gpg')}
          </th>
          <th className="hgpg">
            <span className='header-text' onClick={() => handleSortChange('hgpg')}>HGPG</span> {renderSortArrow('hgpg')}
          </th>
          <th className="tgpg">
            <span className='header-text' onClick={() => handleSortChange('tgpg')}>TGPG</span> {renderSortArrow('tgpg')}
          </th>
          <th className="otga">
            <span className='header-text' onClick={() => handleSortChange('otga')}>OTGA</span> {renderSortArrow('otga')}
          </th>
        </tr>
      </thead>
      <tbody className='body'>{renderTableRows()}</tbody>
    </table>
  );
};

export default Table;
