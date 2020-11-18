import './App.css';
import { Component } from 'react';
import axios from 'axios';
import Restaurant from './Components/Restaurant/Restaurant.js'

class App extends Component {
  state = {
    restaurants: [],
    filtered: [],
    filter: false
  };

  componentDidMount() {
    axios.get("https://code-challenge.spectrumtoolbox.com/api/restaurants", {
      headers: { 
        "Authorization": "Api-Key q3MNxtfep8Gt"
      }
    })
      .then(result => {
        const sortedData = result.data.sort((a,b) => {
          return a.name.localeCompare(b.name);
        })
        this.setState({restaurants: sortedData})
      });
  };

  stateFilter = (event) => {
    const filtered = []
    const restaurants = [...this.state.restaurants]
    restaurants.map(restaurant => {
      if (restaurant.state === event.target.value) {
        filtered.push(restaurant);
      }
    })
    console.log(filtered)
    this.setState({filter: true})
    // this.setState({restaurants: filtered})
  };
 
  render() {

    const restaurants = this.state.restaurants.map(restaurant => {
      return(
        <Restaurant
          key={restaurant.id}
          name={restaurant.name} 
          city={restaurant.city} 
          state={restaurant.state} 
          telephone={restaurant.telephone}
          genre={restaurant.genre}
        />
        );
      });
      
      return (
        <div className="App">
        <header className="App-header">
          <h1>Charter-Spectrum FE Code Challenge</h1>
          <p>State:<br></br><input onChange={this.stateFilter}></input><button onClick={this.stateFilter}>Filter</button></p>
          <table>
            <th>Name,</th>
            <th>City,</th>
            <th>State,</th>
            <th>Telephone</th>
          </table>
          {restaurants}
        </header>
      </div>
    );
  };
};

export default App;
