import App from './App.js'

var Search = (props) => (
  <form className="search-bar form-inline" onSubmit={(event) => { event.preventDefault(); props.updateQuery(document.getElementById('searchNode').value) }}>
    <input className="form-control" id="searchNode" type="text" />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </form>
);

Search.propTypes = {
  updateQuery: React.PropTypes.func,
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
