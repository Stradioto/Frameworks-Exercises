import React from 'react';
//import style from './App.css';
//import data from './data.json';
import SearchView from './components/SearchView';
import ManagerMode from './components/ManagerMode';
import axios from 'axios';
const {v4: uuidv4} = require("uuid");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      searchString: "",
      managerMode: false,
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/products')
    .then(response => {
      this.setState({items: response.data.items});
    })
    .catch(error => console.log(error));
  }


  onSearchChange = (event) => {
    //console.log(event.target.value);
    this.setState({ searchString: event.target.value})
  }

   addNewItem = (name, brand, price, normalPrice, rating, image, description) => {
    let newItems = [...this.state.items];
    newItems.push({
      id: uuidv4(),
      name: name,
      brand: brand,
      price: price,
      normalPrice: normalPrice,
      rating: rating,
      image: image, //verify
      description: description
    });

    this.setState({ items: newItems });
  }

  deleteItem = itemId => this.setState({items: this.state.items.filter(item => item.id !== itemId)})

  render()
  {
    return (
  <>
    {this.state.managerMode ? <ManagerMode disableManagerMode={() => this.setState({managerMode: false})}
                              addNewItem={ this.addNewItem }
                              items={ this.state.items }
                              deleteItem={ this.deleteItem }
    />:
    <div>
        <input type="text" onChange={this.onSearchChange} value={this.state.searchString} placeholder="Search..."></input> 
        <div className="containers">
          <SearchView items={this.state.items.filter((item)=>item.name.includes(this.state.searchString))} />
          <button onClick={() => this.setState({managerMode: !this.state.managerMode})}>Manager Mode</button>
        </div> 
    </div>
    } 
  </>
  )
  }
}

export default App;