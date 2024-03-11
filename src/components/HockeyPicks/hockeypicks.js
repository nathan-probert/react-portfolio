// import React, { useState, useEffect } from 'react';
// import './hockeypicks.css';

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faArrowLeft,
// } from "@fortawesome/free-solid-svg-icons";

// const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} className="arrowLeft" />;

// function App() {
//   const [list, setList] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);

//   const [sortColumn, setSortColumn] = useState('Team');
//   const [sortOrder, setSortOrder] = useState('desc');
//   const [sortColumn2, setSortColumn2] = useState('Stat');
//   const [sortOrder2, setSortOrder2] = useState('desc');

//   const [date, setDate] = useState(''); // Declare date state

//   const itemsPerPage = 25;

//   const sortComparator = (a, b) => {
//     var aValue = a[sortColumn];
//     var bValue = b[sortColumn];
//     var aValue2 = a[sortColumn2];
//     var bValue2 = b[sortColumn2];

//     if (sortColumn === 'Bet') {
//       aValue = parseFloat(aValue);
//       bValue = parseFloat(bValue);
//     }
//     if (sortColumn2 === 'Bet') {
//       aValue2 = parseFloat(aValue2);
//       bValue2 = parseFloat(bValue2);
//     }

//     if (sortOrder === 'asc') {
//       if (sortOrder2 === 'asc') {
//         if (aValue == bValue) {
//           return aValue2 > bValue2 ? 1 : -1;
//         } else {
//           return aValue > bValue ? 1 : -1;
//         }
//       } else {
//         if (aValue == bValue) {
//           return aValue2 < bValue2 ? 1 : -1;
//         } else {
//           return aValue > bValue ? 1 : -1;
//         }
//       }
//     } else {
//       if (sortOrder2 === 'asc') {
//         if (aValue == bValue) {
//           return aValue2 > bValue2 ? 1 : -1;
//         } else {
//           return aValue < bValue ? 1 : -1;
//         }
//       } else {
//         if (aValue == bValue) {
//           return aValue2 < bValue2 ? 1 : -1;
//         } else {
//           return aValue < bValue ? 1 : -1;
//         }
//       }    
//     }
//   };

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

//   const round = (number, decimalPlaces) => {
//     return Math.round(number * 10 ** decimalPlaces) / 10 ** decimalPlaces;
//   };

//   const booleanConvert = (number) => {
//     return number === 0 ? 'Away' : 'Home';
//   };

//   const sortedList = [...list].sort(sortComparator);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = sortedList.slice(indexOfFirstItem, indexOfLastItem);

//   const handlePageChange = (newPage) => {
//     setCurrentPage(newPage);
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handleSort = (column) => {
//     if (sortColumn == column) {
//       setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
//     } else {
//       setSortOrder('desc')
//     }
//     setSortColumn(column);
//   };

//   const sortedItems = currentItems.slice().sort(sortComparator);

//   const renderTableRows = () => {
//     return sortedItems.map((item, index) => {
//       const placement = indexOfFirstItem + index + 1; // Calculate the placement
  
//       return (
//         <tr key={item.Name}>
//           <td className='placement'>{placement}</td>
//           <td className='name'>{item.Name}</td>
//           <td className='teamName'>{item.Team.replace(/�/g, "é")}</td>
//           <td className='stat'>{round(item.Stat, 3)}</td>
//           <td className='bet'>{parseInt(item.Bet)}</td>
//           <td className='gpg'>{round(item.GPG, 2)}</td>
//           <td className='5gpg'>{round(item.Last_5_GPG, 2)}</td>
//           <td className='hgpg'>{round(item.HGPG, 2)}</td>
//           <td className='ppg'>{round(item.PPG, 2)}</td>
//           <td className='otpm'>{round(item.OTPM, 2)}</td>
//           <td className='tgpg'>{round(item.TGPG, 2)}</td>
//           <td className='otga'>{round(item.OTGA, 2)}</td>
//           <td className='isHome'>{booleanConvert(item.Home_1)}</td>
//         </tr>
//       );
//     });
//   };

//   const pageNumbers = Array.from({ length: Math.ceil(list.length / itemsPerPage) }, (_, index) => index + 1);

//   const renderSortArrow = (column) => {
//     if (sortColumn === column) {
//       return <span className='sort-arrow'>{sortOrder === 'asc' ? '↑' : '↓'}</span>;
//     }
//     return null;
//   };

//   return (
//     <div className='container'>
//       <h1 className='title'>SmartScore</h1>
//       <h3 className='date'>{date}</h3>
//       <table className='table'>
//         <thead className='header'>
//           <tr>
//             <span className='header-text'></span>
//             <th onClick={() => handleSort('Name')}>
//               <span className='header-text'>Player Name</span> {renderSortArrow('Name')}
//             </th>
//             <th onClick={() => handleSort('Team')}>
//               <span className='header-text'>Team Name</span> {renderSortArrow('Team')}
//             </th>
//             <th onClick={() => handleSort('Stat')}>
//               <span className='header-text'>Probablity</span> {renderSortArrow('Stat')}
//             </th>
//             <th onClick={() => handleSort('Bet')}>
//               <span className='header-text'>Bet</span> {renderSortArrow('Bet')}
//             </th>
//             <th onClick={() => handleSort('GPG')}>
//               <span className='header-text'>GPG</span> {renderSortArrow('GPG')}
//             </th>
//             <th onClick={() => handleSort('5GPG')}>
//               <span className='header-text'>5GPG</span> {renderSortArrow('5GPG')}
//             </th>
//             <th onClick={() => handleSort('HGPG')}>
//               <span className='header-text'>HGPG</span> {renderSortArrow('HGPG')}
//             </th>
//             <th onClick={() => handleSort('PPG')}>
//               <span className='header-text'>HPPG</span> {renderSortArrow('PPG')}
//             </th>
//             <th onClick={() => handleSort('OTPM')}>
//               <span className='header-text'>OTPM</span> {renderSortArrow('OTPM')}
//             </th>
//             <th onClick={() => handleSort('TGPG')}>
//               <span className='header-text'>TGPG</span> {renderSortArrow('TGPG')}
//             </th>
//             <th onClick={() => handleSort('OTGA')}>
//               <span className='header-text'>OTGA</span> {renderSortArrow('OTGA')}
//             </th>
//             <th onClick={() => handleSort('Home_1')}>
//               <span className='header-text'>Location</span> {renderSortArrow('Home_1')}
//             </th>
//           </tr>
//         </thead>
//         <tbody className='body'>{renderTableRows()}</tbody>
//       </table>

//       <div className='pagination'>
//         {pageNumbers.map((number, index) => {
//           if (index===currentPage-1) {
//             return (
//               <button className='active' key={number} onClick={() => handlePageChange(number)}>
//                 {number}
//               </button>
//             );
//           } else if (index === 0 || index === pageNumbers.length - 1 || (index >= currentPage - 3 && index <= currentPage + 1)) {
//             return (
//               <button key={number} onClick={() => handlePageChange(number)}>
//                 {number}
//               </button>
//             );
//           } else if (index === currentPage + 3 || index === currentPage - 4) {
//             return (
//               <span key={index} className='ellipsis'>
//                 ...
//               </span>
//             );
//           }
//           return null;
//         })}
//         <button onClick={handleNextPage}>Next</button>
//       </div>
//       <a href="/projects" class="backHome">
//             <div class="btn">
//                 {arrowLeft}
//             </div>
//       </a>
//     </div>
//   );

// }

// export default App;


import React, { useState, useEffect } from 'react';
import './hockeypicks.css';
import Table from './Table/table';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

const arrowLeft = <FontAwesomeIcon icon={faArrowLeft} className="arrowLeft" />;

function App() {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const [sortColumn, setSortColumn] = useState('Team');
  const [sortOrder, setSortOrder] = useState('desc');
  const [sortColumn2, setSortColumn2] = useState('Stat');
  const [sortOrder2, setSortOrder2] = useState('desc');

  const [date, setDate] = useState(''); // Declare date state

  const itemsPerPage = 25;

  const sortComparator = (a, b) => {
    var aValue = a[sortColumn];
    var bValue = b[sortColumn];
    var aValue2 = a[sortColumn2];
    var bValue2 = b[sortColumn2];

    if (sortColumn === 'Bet') {
      aValue = parseFloat(aValue);
      bValue = parseFloat(bValue);
    }
    if (sortColumn2 === 'Bet') {
      aValue2 = parseFloat(aValue2);
      bValue2 = parseFloat(bValue2);
    }

    if (sortOrder === 'asc') {
      if (sortOrder2 === 'asc') {
        if (aValue == bValue) {
          return aValue2 > bValue2 ? 1 : -1;
        } else {
          return aValue > bValue ? 1 : -1;
        }
      } else {
        if (aValue == bValue) {
          return aValue2 < bValue2 ? 1 : -1;
        } else {
          return aValue > bValue ? 1 : -1;
        }
      }
    } else {
      if (sortOrder2 === 'asc') {
        if (aValue == bValue) {
          return aValue2 > bValue2 ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      } else {
        if (aValue == bValue) {
          return aValue2 < bValue2 ? 1 : -1;
        } else {
          return aValue < bValue ? 1 : -1;
        }
      }    
    }
  };

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
  }, []);

  const sortedList = [...list].sort(sortComparator);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedList.slice(indexOfFirstItem, indexOfLastItem);

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

  const renderSortArrow = (column) => {
    if (sortColumn === column) {
      return <span className='sort-arrow'>{sortOrder === 'asc' ? '↑' : '↓'}</span>;
    }
    return null;
  };

  return (
    <div className='container'>
      <h1 className='title'>SmartScore</h1>
      <h3 className='date'>{date}</h3>
      <Table 
        sortedItems={currentItems}
        handleSort={handleSort}
        renderSortArrow={renderSortArrow}
        indexOfFirstItem={indexOfFirstItem}
      />
      {/* <div className='pagination'>
        {pageNumbers.map((number, index) => {
          if (index===currentPage-1) {
            return (
              <button className='active' key={number} onClick={() => handlePageChange(number)}>
                {number}
              </button>
            );
          } else if (index === 0 || index === pageNumbers.length - 1 || (index >= currentPage - 3 && index <= currentPage + 1)) {
            return (
              <button key={number} onClick={() => handlePageChange(number)}>
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
        <button onClick={handleNextPage}>Next</button>
      </div> */}
      <a href="/projects" className="backHome">
            <div className="btn">
                {arrowLeft}
            </div>
      </a>
    </div>
  );

}

export default App;
