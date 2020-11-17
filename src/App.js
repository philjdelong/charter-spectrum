import './App.css';
import { Component } from 'react';
import axios from 'axios'
import env from 'dotenv'

env.config();

class App extends Component {
  componentDidMount() {
    axios.get("https://code-challenge.spectrumtoolbox.com/api/restaurants", {
      headers: { 
        "Authorization": "Api-Key q3MNxtfep8Gt"
      }
    })
      .then(result => {
        console.log(result.data)
      })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          Charter-Spectrum FE Code Challenge
        </header>
        {/* <Table /> */}
      </div>
    );
  }
}

export default App;
