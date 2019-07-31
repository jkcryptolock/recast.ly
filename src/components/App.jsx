import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <div><Search /></div>
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <div><VideoPlayer /></div>
        </div>
        <div className="col-md-5">
          <div><VideoList videos={exampleVideoData} /></div>
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
