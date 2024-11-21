import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Paper, IconButton} from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {

    e.preventDefault();
    if (searchTerm){
      navigate(`search/${searchTerm}`);

      setSearchTerm('');
    }
  }
  return (
    <Paper
        component= "form"
        onSubmit={handleSubmit}
         sx={{
          borderRadius: '20px',
          border: '1px solid #E3E3E3',
          boxShadow: 'none',
          mr: { sm:5},
          pl: 2
        }}
    >  <input
          placeholder='Search...'
          className='search-bar'
          value={searchTerm}
          onChange= {(e) => {setSearchTerm(e.target.value)}}
          sx={{
            borderStyle: 'none'
          }} />
          <IconButton
            type='submit'
            sx={{p: '10px', color: 'red'}}
          ><Search />
          </IconButton>
          </Paper>
  )
}

export default SearchBar