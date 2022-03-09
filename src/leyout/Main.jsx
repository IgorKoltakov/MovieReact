import React from 'react'
import {Movies} from '../components/Movies'
import {Preloader} from '../components/Preloader'
import {Search} from '../components/Search'


export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      movies: [],
    }
  }

  componentDidMount() { 
    fetch(`http://www.omdbapi.com/?apikey=a74de10&s=matrix`)
     .then(response => response.json())
     .then(data => this.setState({movies: data.Search}))
  }

  SearchMovie = (search) => {
    fetch(`http://www.omdbapi.com/?apikey=a74de10&s=${search}`)
     .then(response => response.json())
     .then(data => this.setState({movies: data.Search}))
  }
  
  render () {
    const {movies} = this.state
    
    return <main className="conteiner content">
        <Search SearchMovie={this.SearchMovie} />
        {movies.length ? (
        <Movies movie={this.state.movies} />
      ) : <Preloader />}
        
    </main>
  };
}

export {Main}