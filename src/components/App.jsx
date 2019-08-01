import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js'
import YOUTUBE_API_KEY from '../config/youtube.js'
import searchYouTube from '../lib/searchYouTube.js';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      results: exampleVideoData,
      currentVideo: exampleVideoData[0],
      queryState: 'cats',
      isLoaded: false
    }
  }

  updateQuery(value) {
    this.setState({ queryState: value }, () => { this.fetchVideos() });
    //this.fetchVideos();
  }

  componentWillMount() {
    this.fetchVideos();
  }

  fetchVideos() {
    var baseURL = 'https://www.googleapis.com/youtube/v3/search?'
    var apiKey = YOUTUBE_API_KEY;
    var query = this.state.queryState;
    var max = 10;
    var part = 'snippet';
    baseURL += `part=${part}&videoEmbeddable=true&type=video&q=${query}&maxResults=${max}&key=${apiKey}`;
    console.log(baseURL)
    fetch(baseURL)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            results: result.items
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
          console.log(error)
        }
      )
  }
  // searchYouTube('react', function (data) {
  //   window.data = data.items;
  // });
  // var a = window.data;
  // this.setState({ results: a })

  changeCurrentVideo(video) {
    this.setState({ currentVideo: video })
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search updateQuery={this.updateQuery.bind(this)} /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video={this.state.currentVideo} /></div>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={this.state.results}
              select={this.changeCurrentVideo.bind(this)}
              currentVideo={this.state.currentVideo}
            /></div>
          </div>
        </div>
      </div>
    )
  }
};

// ReactDOM.Render(<App />, document.getElementById('app'));

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
