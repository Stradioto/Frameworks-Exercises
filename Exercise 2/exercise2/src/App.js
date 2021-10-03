import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };
  }

  addProduct = (product, quantity) => {
    return () => {
      const searchResult = this.state.items.findIndex((element) => {
        if(element.value === product) {
          return true;
        }
        else {
          return false;
        } 
      });

      if (searchResult != -1) {
        let newItemsArray = [...this.state.items];
        newItemsArray[searchResult].qty += quantity;
        this.setState({items: newItemsArray});
      }

      
    } 
  }

  randomNumber = () => {
    let number = Math.floor(Math.random() * 6) + 1;
    return number;
  }
  
  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <h1>SHOPPING LIST</h1>
      <ShoppingList items={ this.state.items } />
      <button onClick={this.addProduct("Milk", this.randomNumber())}>Milk</button>
      <button onClick={this.addProduct("Bananas", this.randomNumber())}>Banana</button>
      <button onClick={this.addProduct("Bread", this.randomNumber())}> Bread</button>
      <button onClick={this.addProduct("Eggs", this.randomNumber())}>Eggs</button>
    </div>
  }
}

export default App;
