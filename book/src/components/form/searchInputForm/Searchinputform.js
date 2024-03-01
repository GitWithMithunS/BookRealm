// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import './searchinputform.styles.css';

// const SearchInputForm = ({ darkTheme }) => {
//     const [searchField, setSearchField] = useState('');
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setSearchField(e.target.value);
//     }

//     const redirectToSearch = () => {
//         if(searchField === ''){
//             alert('SearchField is Empty');
//         } else{
//             navigate('/search',{state:searchField});
//         }
//     }   

//     return (
//         <div className={ `search-input-form-container ${ darkTheme ? 'dark-box-shadow' : 'light-box-shadow' }` }>
//             <input 
//                 type="text" 
//                 className='search-input' 
//                 placeholder="Search Books" 
//                 value={searchField}
//                 onChange={handleChange}
//             />
//             <button onClick={redirectToSearch} className="search-button">Search</button>
//         </div>
//     )
// }

// export default SearchInputForm;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './searchinputform.styles.css';

const SearchInputForm = ({ darkTheme }) => {
    const [searchField, setSearchField] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setSearchField(e.target.value);
    };

    const redirectToSearch = () => {
        if (searchField.trim() === '') {
            alert('SearchField is Empty');
        } else {
            // Check if navigate function is available
            if (navigate) {
                navigate('/search', { state: searchField });
            } else {
                console.error('Navigate function not available');
            }
        }
    };

    return (
        <div className={`search-input-form-container ${darkTheme ? 'dark-box-shadow' : 'light-box-shadow'}`}>
            <input
                type="text"
                className='search-input'
                placeholder="Search Books"
                value={searchField}
                onChange={handleChange}
            />
            <button onClick={redirectToSearch} className="search-button">Search</button>
        </div>
    );
};

export default SearchInputForm;
