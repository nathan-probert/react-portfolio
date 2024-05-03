// import React, { useState, useEffect } from 'react';
// import './hockeypicks.css';

// import Table from './Table/table';
// import PageNav from './PageNav/pagenav';
// import Filter from './Filter/filter';
// import Checkbox from './Checkbox/checkbox';


// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faArrowLeft,
// } from "@fortawesome/free-solid-svg-icons";

// const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} className="arrowLeft" />;

// function App() {
//   const [list, setList] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);

//   const [sortColumn1, setSortColumn1] = useState('Stat');
//   const [sortOrder1, setSortOrder1] = useState('desc');
//   const [sortColumn2, setSortColumn2] = useState('Stat');
//   const [sortOrder2, setSortOrder2] = useState('desc');
//   const [timsGroups, setTims] = useState(0);
//   const [currentItems, setCurrentItems] = useState([]);


//   const [date, setDate] = useState(''); // Declare date state

//   const [itemsPerPage, setItemsPerPage] = useState(25); // Initialize itemsPerPage

//   const sortComparator = (a, b) => {
//     const parseValue = (value, column) => {
//       return column === 'Bet' ? parseFloat(value) : value;
//     };
  
//     const compareValues = (valueA, valueB, sortOrder) => {
//       return sortOrder === 'asc' ? valueA > valueB : valueA < valueB;
//     };
  
//     const sortColumns = [
//       { column: sortColumn1, order: sortOrder1 },
//       { column: sortColumn2, order: sortOrder2 }
//       // Add more columns here if needed
//     ];
  
//     // Loop through each sort column and compare values
//     for (let i = 0; i < sortColumns.length-1; i++) {
//       const { column, order } = sortColumns[i];
//       const aValue = parseValue(a[column], column);
//       const bValue = parseValue(b[column], column);
  
//       const compareResult = compareValues(aValue, bValue, order);
//       if (compareResult !== 0) {
//         return compareResult;
//       }
//     }
  
//     // If all sort columns are equal, use default comparison
//     return 0;
//   };
  
//   // get the data from my api
//   useEffect(() => {
//     fetch('https://x8ki-letl-twmt.n7.xano.io/api:Cmz3Gtkc/export')
//       .then((response) => response.json())
//       .then((data) => {
//         setDate(data[0]?.Date || '');
//         setList(data);
//       })
//       .catch((error) => console.error('Error fetching list:', error));

//       document.title = 'Nathan Probert | SmartScore';
//   }, []);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   const handleTims = (isChecked) => {
//     setTims(isChecked);
//   };

//   const filteredList = list.filter(item => item.Date === date);
//   const sortedList = [...filteredList].sort(sortComparator);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   setCurrentItems(sortedList.slice(indexOfFirstItem, indexOfLastItem));

//   const pageNum = Array.from({ length: Math.ceil(list.length / itemsPerPage) }, (_, index) => index + 1);

//   const renderSortArrow = (column) => {
//     if (sortColumn1 === column) {
//       return <span className='primary sort-arrow'>{sortOrder1 === 'asc' ? '↑' : '↓'}</span>;
//     } 
//     // else if (sortColumn2 === column) {
//     //   return <span className='secondary sort-arrow'>{sortOrder2 === 'asc' ? '↑' : '↓'}</span>;
//     // }
//     return null;
//   };

//   const handleSortChange = (column) => {
//     console.log(column);
//     if (sortColumn1 === column) {
//       setSortOrder1(sortOrder1 === 'asc' ? 'desc' : 'asc');
//     } else {
//       setSortColumn1(column);
//       setSortOrder1('desc');
//     }

//     setCurrentPage(1);
//     currentItems = [...filteredList].sort(sortComparator).slice(indexOfFirstItem, indexOfLastItem);
//   }

//   return (
//     <div className='container'>
//       <h1 className='title'>SmartScore</h1>
//       <h3 className='date'>{date}</h3>
// {/* 
//       <Filter
//         sort1Cat={sortColumn1}
//         sort1Col={setSortColumn1}
//         sort1Dir={sortOrder1}
//         sort1DirChange={setSortOrder1}
//         sort2Cat={sortColumn2}
//         sort2Col={setSortColumn2}
//         sort2Dir={sortOrder2}
//         sort2DirChange={setSortOrder2}
//       /> */}

//       <Checkbox 
//         timsFunc={handleTims}
//       />

//       {timsGroups !== 0 ? (
//         // If timsGroups is not equal to 0

//         <div>
//           <Table 
//             sortedItems={list.filter(item => item.onTims === 1)}
//             renderSortArrow={renderSortArrow}
//             indexOfFirstItem={0}
//           />        
//           <Table 
//             sortedItems={list.filter(item => item.onTims === 2)}
//             renderSortArrow={renderSortArrow}
//             indexOfFirstItem={0}
//           />        
//           <Table 
//             sortedItems={list.filter(item => item.onTims === 3)}
//             renderSortArrow={renderSortArrow}
//             indexOfFirstItem={0}
//           />
//         </div>
//       ) : (
//         // If timsGroups is equal to 0
//         <Table 
//           sortedItems={currentItems}
//           renderSortArrow={renderSortArrow}
//           indexOfFirstItem={indexOfFirstItem}
//           handleSortChange={handleSortChange}
//         />
//       )}

//       <PageNav
//         currentPage={currentPage}
//         pageNumbers={pageNum}
//         setPageFunc={handlePageChange}
//       />

//       <a href="/projects" className="backHome">
//             <div className="btn">
//                 {arrowLeft}
//             </div>
//       </a>
//     </div>
//   );

// }

// export default App;


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
  console.log(sortColumn1, sortOrder1);
  return (a, b) => {
    const parseValue = (value, column) => {
      return column === 'Bet' ? parseFloat(value) : value;
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
      console.log(compareResult)
      return compareResult;
    }
  
    // If all sort columns are equal, use default comparison
    return 0;
  };
};

function App() {
  const [sortColumn1, setSortColumn1] = useState('Stat');
  const [sortOrder1, setSortOrder1] = useState('desc');
  const [timsGroups, setTims] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [sortedList, setSortedList] = useState([]);
  const [list, setList] = useState([]);
  const [date, setDate] = useState(''); // Declare date state
  
  // get the data from my api
  useEffect(() => {
    fetch('https://x8ki-letl-twmt.n7.xano.io/api:Cmz3Gtkc/export')
      .then((response) => response.json())
      .then((data) => {
        setDate(data[0]?.Date || '');
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
    console.log(column);
    if (sortColumn1 === column) {
      setSortOrder1(sortOrder1 === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn1(column);
      setSortOrder1('desc');
    }
    console.log("here")
    setCurrentItems([...sortedList].sort(sortComparator));
    console.log(currentItems)
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
            sortedItems={currentItems.filter(item => item.onTims === 1)}
            renderSortArrow={renderSortArrow}
            indexOfFirstItem={0}
            handleSortChange={handleSortChange}
          />      
          <h3 className='timsTitle'>Group 2</h3>  
          <Table 
            sortedItems={currentItems.filter(item => item.onTims === 2)}
            renderSortArrow={renderSortArrow}
            indexOfFirstItem={0}
            handleSortChange={handleSortChange}
          />
          <h3 className='timsTitle'>Group 3</h3> 
          <Table 
            sortedItems={currentItems.filter(item => item.onTims === 3)}
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
