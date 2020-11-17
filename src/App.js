import './App.css';
import { Component } from 'react';
import axios from 'axios'
import env from 'dotenv'

env.config();

class App extends Component {
  state = {
    restaurants: []
  }
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


  render() {
    const restaurants = this.state.restaurants.map(restaurant => {
      return(
        <div>
          <tbody className="restaurant">
            <td className="cell-name">{restaurant.name}</td>
            <td className="cell-city">{restaurant.city}</td>
            <td className="cell-state">{restaurant.state}</td>
            <td className="cell-phone">{restaurant.telephone}</td>
            <td className="cell-genre">{restaurant.genre}</td>
          </tbody>
        </div>
      )
    })
    return (
      <div className="App">
        <header className="App-header">
          Charter-Spectrum FE Code Challenge
        <tbody>
          {/* <th>Name</th>
          <th>City</th>
          <th>State</th>
          <th>Telephone</th>
          <th>Genre</th> */}
          {restaurants}
        </tbody>  
        </header>
      </div>
    );
  }
}

export default App;
