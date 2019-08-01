import YOUTUBE_API_KEY from '../config/youtube.js'

var searchYouTube = (query = 'react', successCB, errorCB = null) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      part: 'snippet',
      maxResults: 5,
      type: 'video',
      q: query,
      key: YOUTUBE_API_KEY
    },
    success: successCB,
    error: errorCB || function (error) {
      console.log('youTube API failed to fetch videos', error)
    },
  });
};

export default searchYouTube;
