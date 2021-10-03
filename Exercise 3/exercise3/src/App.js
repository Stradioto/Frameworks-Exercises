import React from 'react';
import style from './App.css';
import data from './data.json';
import SearchView from './components/SearchView';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: data.items,
      searchString: ""
    }
  }

  onSearchChange = (event) => {
    console.log(event.target.value);
    this.setState({ searchString: event.target.value})
  }

  render()
  {
    return (
      <div>
        <input type="text" onChange={this.onSearchChange} value={this.state.searchString} placeholder="Search..."></input> 
        <div className="containers">
          <SearchView items={this.state.items.filter((item)=>item.name.includes(this.state.searchString))} />
        </div>
    </div> )
  }
}

export default App;