import App from './App.js';
import VideoListEntry from './VideoListEntry.js';
import exampleVideoData from '../data/exampleVideoData.js'
// import PropTypes from 'prop-types'
var VideoList = (props) => {
  console.log(props)
  return (
    <div className="video-list">
      {props.videos.map(videoItem =>
        <VideoListEntry video={videoItem} select={props.select} />
      )}
    </div>
  )
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired,
  select: React.PropTypes.func,
  currentVideo: React.PropTypes.object
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
