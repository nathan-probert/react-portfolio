import React, { useState, useEffect, useMemo } from 'react';
import './hockeypicks.css';

import Table from './Table/table';
import Checkbox from './Checkbox/checkbox';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} className="arrowLeft" />;


// comparator for sorting
const getSortComparator = (sortColumn1, sortOrder1) => {
  return (a, b) => {
    const parseValue = (value, column) => {
      return column === 'bet' ? parseFloat(value) : value;
    };
  
    const compareValues = (valueA, valueB, sortOrder) => {
      if (sortOrder === 'asc') {
        return valueA > valueB ? 1 : valueA < valueB ? -1 : 0;
      } else if (sortOrder === 'desc') {
        return valueA < valueB ? 1 : valueA > valueB ? -1 : 0;
      }
      // Handle other cases or invalid sortOrder
      return 0; // Default to 0 if sortOrder is not recognized
    };
  
    const sortColumns = [
      { column: sortColumn1, order: sortOrder1 },
      // { column: sortColumn2, order: sortOrder2 }
      // Add more columns here if needed
    ];
  
    // Loop through each sort column and compare values
    for (let i = 0; i < sortColumns.length; i++) {
      const { column, order } = sortColumns[i];
      const aValue = parseValue(a[column], column);
      const bValue = parseValue(b[column], column);
  
      const compareResult = compareValues(aValue, bValue, order);
      return compareResult;
    }
  
    // If all sort columns are equal, use default comparison
    return 0;
  };
};

function App() {
  const [sortColumn1, setSortColumn1] = useState('stat');
  const [sortOrder1, setSortOrder1] = useState('desc');
  const [timsGroups, setTims] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [sortedList, setSortedList] = useState([]);
  const [list, setList] = useState([]);
  const [date, setDate] = useState(''); // Declare date state
  
  // get the data from my api
  useEffect(() => {
    fetch('https://x8ki-letl-twmt.n7.xano.io/api:OvqrJ0Ps/players')
      .then((response) => response.json())
      .then((data) => {
        setDate(data[0].data);
        setList(data);
      })
    .catch((error) => console.error('Error fetching list:', error));
  
    document.title = 'Nathan Probert | SmartScore';
  }, [setDate, setList]);

  // toggle if tims is checked
  const handleTims = (isChecked) => {
    setTims(isChecked);
};

  // Define sorting comparator using useMemo
  const sortComparator = useMemo(() => {
    return getSortComparator(sortColumn1, sortOrder1);
  }, [sortColumn1, sortOrder1]);

  useEffect(() => {
    const filteredList = list.filter(item => item.Date === date);
    const sortedList = [...filteredList].sort(sortComparator);
    setSortedList(sortedList);
    setCurrentItems(sortedList.slice(0, list.length));
  }, [list, date, sortComparator]);

  const renderSortArrow = (column) => {
    if (sortColumn1 === column) {
      return <span className='primary sort-arrow'>{sortOrder1 === 'asc' ? '↑' : '↓'}</span>;
    } 
    // else if (sortColumn2 === column) {
    //   return <span className='secondary sort-arrow'>{sortOrder2 === 'asc' ? '↑' : '↓'}</span>;
    // }
    return null;
  };

  const handleSortChange = (column) => {
    if (sortColumn1 === column) {
      setSortOrder1(sortOrder1 === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn1(column);
      setSortOrder1('desc');
    }
    setCurrentItems([...sortedList].sort(sortComparator));
  }

  return (
    <div className='container'>
      <h1 className='title'>SmartScore</h1>
      <h3 className='date'>{date}</h3>

      <Checkbox 
        timsFunc={handleTims}
      />

      {timsGroups !== 0 ? (
        // If timsGroups is not equal to 0

        <div>
          <h3 className='timsTitle'>Group 1</h3>
          <Table 
            sortedItems={currentItems.filter(item => item.tims === 1)}
            renderSortArrow={renderSortArrow}
            indexOfFirstItem={0}
            handleSortChange={handleSortChange}
          />      
          <h3 className='timsTitle'>Group 2</h3>  
          <Table 
            sortedItems={currentItems.filter(item => item.tims === 2)}
            renderSortArrow={renderSortArrow}
            indexOfFirstItem={0}
            handleSortChange={handleSortChange}
          />
          <h3 className='timsTitle'>Group 3</h3> 
          <Table 
            sortedItems={currentItems.filter(item => item.tims === 3)}
            renderSortArrow={renderSortArrow}
            indexOfFirstItem={0}
            handleSortChange={handleSortChange}
          />
        </div>
      ) : (
        // If timsGroups is equal to 0
        <Table 
          sortedItems={currentItems}
          renderSortArrow={renderSortArrow}
          indexOfFirstItem={0}
          handleSortChange={handleSortChange}
        />
      )}

      <a href="/projects" className="backHome">
            <div className="btn">
                {arrowLeft}
            </div>
      </a>
    </div>
  );

}

export default App;
