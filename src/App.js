import './App.css';
import { Component } from 'react';
import axios from 'axios';
import Restaurant from './Components/Restaurant/Restaurant.js'

class App extends Component {
  state = {
    display: [],
    restaurants: [],
    noResults: false,
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
      this.setState({display: sortedData})
      this.setState({restaurants: sortedData})
    });
  };

  stateFilter = (event) => {
    const filtered = [];
    const restaurants = [...this.state.restaurants];
    restaurants.map(restaurant => {
      if (restaurant.state === event.target.value.toUpperCase()) {
        return filtered.push(restaurant);
      };
    });
    if (filtered.length) {
      this.setState({noResults: false});
      return this.setState({display: filtered});
    } else {
      return this.setState({noResults: true})
    };
  };

  clearFilter = () => {
    this.setState({noResults: false});
    return this.setState({display: this.state.restaurants});
  };
 
  render() {
    if (this.state.noResults) {
      return (
        <div className="App">
        <header className="App-header">
          <h1>Charter-Spectrum FE Code Challenge</h1>
          <p>Filter by State (abbreviation):<br></br><input onChange={this.stateFilter}></input><button onClick={this.clearFilter}>Clear</button></p>
          <div>
            <p>No Restaurants.</p>
          </div>
        </header>
      </div>
      );
    } else {
      const restaurants = this.state.display.map(restaurant => {
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
            <p>Filter by State (abbreviation):<br></br><input onChange={this.stateFilter}></input><button onClick={this.clearFilter}>Clear</button></p>
            <table className="restaurants">
              <th>Name,</th>
              <th>City,</th>
              <th>State,</th>
              <th>Telephone,</th>
              <th>Genre</th>
            </table>
            {restaurants}
          </header>
        </div>
      );
    };
  };
};

export default App;
