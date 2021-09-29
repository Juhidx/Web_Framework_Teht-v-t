import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';
import update from 'immutability-helper'


class App extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Carrots', qty: 5, unit: 'x' },
        { id: 2, value: 'Strawberries', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Yogurt', qty: 3, unit: 'ltr' },
        { id: 4, value: 'Beer', qty: 16, unit: 'ltr' }
      ]
    };
  }

  addCarrots = () => {
    const index = this.state.items.findIndex((items) => items.value === 'Carrots')
    const newqty = this.state.items[index].qty + this.randomNumber()
    const updateItems = update(this.state.items, {$splice: [[index, 1, {id: this.state.items[index].id, value: this.state.items[index].value, 
                                                                          qty: newqty, unit: this.state.items[index].unit}]]})
    this.updateItems(updateItems)
  }

  addStrawberries = () => {
    const index = this.state.items.findIndex((items) => items.value === 'Strawberries')
    const newqty = this.state.items[index].qty + this.randomNumber()
    const updateItems = update(this.state.items, {$splice: [[index, 1, {id: this.state.items[index].id, value: this.state.items[index].value, 
                                                                          qty: newqty, unit: this.state.items[index].unit}]]})
    this.updateItems(updateItems)
  }

  addYogurt = () => {
    const index = this.state.items.findIndex((items) => items.value === 'Yogurt')
    const newqty = this.state.items[index].qty + this.randomNumber()
    const updateItems = update(this.state.items, {$splice: [[index, 1, {id: this.state.items[index].id, value: this.state.items[index].value, 
                                                                          qty: newqty, unit: this.state.items[index].unit}]]})
    this.updateItems(updateItems)
  }

  addBeer = () => {
    const index = this.state.items.findIndex((items) => items.value === 'Beer')
    const newqty = this.state.items[index].qty + this.randomNumber()
    const updateItems = update(this.state.items, {$splice: [[index, 1, {id: this.state.items[index].id, value: this.state.items[index].value, 
                                                                          qty: newqty, unit: this.state.items[index].unit}]]})
    this.updateItems(updateItems)
  }

  randomNumber = () => {
    return Math.floor(Math.random() * 10) + 1
  }

  updateItems = (arrayUpdate) => {
    this.setState({ items: arrayUpdate})
  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <div className = {styles.buttons}>
        <button onClick = { this.addCarrots }>Add Carrots!</button>
        <button onClick = { this.addStrawberries }>Add Strawberries!</button>
        <button onClick = { this.addYogurt }>Add Yogurt!</button>
        <button onClick = { this.addBeer }>Add Beer!</button>
      </div>
    </div>
  }
}

export default App;