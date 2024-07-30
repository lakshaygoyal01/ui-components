import React, { useState, useCallback } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import debounce from 'lodash.debounce';
import InputBox from '../ui/InputBox';

const DebouncedSearchInput = () => {
  const [query, setQuery] = useState('');

  const handleSearch = useCallback(
    debounce((value) => {
      console.log('Search query:', value);
    }, 500),
    []
  );

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    handleSearch(value);
  };

  const handleClear = () => {
    setQuery('');
    handleSearch('');
  };

  return (
    <div className="relative pl-4">
      <InputBox
        type="search"
        placeholder="Search..."
        value={query}
        onChange={handleChange}
        label="Deboounce Search"
        prefixIcon={<FaSearch />}
        endAdornment={
          query && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <FaTimes />
            </button>
          )
        }
        sx={{ borderColor: 'blue-500' }}
      />
    </div>
  );
};

export default DebouncedSearchInput;
