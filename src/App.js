import './App.css';
import { Component } from 'react';
import axios from 'axios';
import Restaurant from './Components/Restaurant/Restaurant.js'
import Header from './Components/Header/Header.js'
import Table from './Components/Table/Table.js'
import Genres from './Components/Genres/Genres.js'

class App extends Component {
  state = {
    display: [],
    restaurants: [],
    genres: [],
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
      });
      this.setState({display: sortedData});
      this.setState({restaurants: sortedData});
      this.uniqueGenres(sortedData);
    });
  };

  uniqueGenres = (data) => {
    data.map(restaurant => {
      const unique = this.state.genres.concat(restaurant.genre.split(','));
      return this.setState({genres: unique});
    })
    const unique = (value, index, self) => {
      return self.indexOf(value) === index;
    }
    const uniqueGenres = [...this.state.genres].filter(unique)
    this.setState({genres: uniqueGenres})
  };

  stateFilter = (event) => {
    const filtered = [];
    const restaurants = [...this.state.restaurants];
    restaurants.map(result => {
      if (result.state === event.target.value.toUpperCase()) {
        return filtered.push(result);
      } else {
        return null;
      };
    });
    if (filtered.length) {
      this.setState({noResults: false});
      return this.setState({display: filtered});
    } else {
      return this.setState({noResults: true});
    };
  };

  genreFilter = (event) =>{
    console.log("Filter by Genre.")
  };

  clearFilter = () => {
    this.setState({noResults: false});
    return this.setState({display: [...this.state.restaurants]});
  };
 
  render() {
    if (this.state.noResults) {
      return (
        <div className="App">
        <header className="App-header">
          <Header stateFilter={this.stateFilter} clearFilter={this.clearFilter}/>
          <div>
              <Genres genres={this.state.genres} genreFilter={this.genreFilter}/>
            </div>
          <div>
            <p>No Restaurants.</p>
          </div>
        </header>
      </div>
      );
    } else {
      const restaurants = [...this.state.display].map(restaurant => {
        return(
          <Restaurant
            key={restaurant.id}
            name={restaurant.name} 
            city={restaurant.city} 
            state={restaurant.state} 
            telephone={restaurant.telephone}
            // genre={restaurant.genre}
          />
        );
      });
      return (
        <div className="App">
          <header className="App-header">
            <Header stateFilter={this.stateFilter} clearFilter={this.clearFilter}/>
            <div>
              <Genres genres={this.state.genres} genreFilter={this.genreFilter}/>
            </div>
            <Table/>
            {restaurants}
          </header>
        </div>
      );
    };
  };
};

export default App;
