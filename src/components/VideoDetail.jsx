import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import ReactPlayer from 'react-player';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null)

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}`)
      .then((data) => setVideos(data.items))
  }, [id]);

  if (!videoDetail?.snippet) return "Loading...";

  // const { snippet: { title, channelId, channelTitle }, statistics: {viewCount, likeCount}} = videoDetail;



  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs: 'column', md: 'row'}}>
        <Box flex={1}>
          <Box sx={{ width: '100%', position: 'sticky', top: '86px' }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant='h5' fontWeight="bold" p={2}>
              {videoDetail.snippet.title
              }
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: '#fff' }} py={1} px={2}>
              <Link to={`/channel/${videoDetail.snippet.channelId}`}>
                <Typography variant={{ sm: 'subtitle1', md: 'h6' }} color='#fff'>
                  {videoDetail.snippet.channelTitle}
                </Typography>

                <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail.statistics.viewCount).toLocaleString()} Views
                </Typography>
                <Typography variant='body1' sx={{ opacity: 0.7 }}>
                  {parseInt(videoDetail.statistics.likeCount).toLocaleString()} Likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box justifyContent="center" px={2} py={{ xs: 5, md: 1 }} alignItems="center">
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail
