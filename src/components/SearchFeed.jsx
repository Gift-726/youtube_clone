import { useState, useEffect } from 'react';
import { Box, Typography } from "@mui/material"
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from './Videos';



const SearchFeed = () => {
    const [ videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

     useEffect(() => {
      fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
     }, [searchTerm]);
  return (
    <div>
    <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: '2'}}>
    <Typography variant='h4' fontWeight="bold" mb={2} sx={{color: 'white'}}>
      Search Results For: <span style={{color: '#f31503'}}>{searchTerm}</span> videos
    </Typography>
    <Videos videos={videos} />
  </Box>
    </div>
  )
}

export default SearchFeed
