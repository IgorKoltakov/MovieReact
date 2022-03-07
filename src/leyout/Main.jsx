import React from 'react'
import {Movies} from '../components/Movies'
import {Preloader} from '../components/preloader'
import {Search} from '../components/Search'


export default class Main extends React.Component {
  state = { 
    movies: [],
  }

  componentDidMount() { 
    fetch('http://www.omdbapi.com/?apikey=a74de10&s=matrix')
    .then(response => response.json())
    .then(data => this.setState({movies: data.Search}))
  }
  
  render () {
    return <main className="conteiner content">
        <Search />
        {this.movies ? <Preloader /> : <Movies movie={this.state.movies} /> }
    </main>
  };
}

export {Main}