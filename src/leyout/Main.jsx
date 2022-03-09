import React from 'react'
import {Movies} from '../components/Movies'
<<<<<<< HEAD
import {Preloader} from '../components/Preloader'
=======
import {Preloader} from '../components/preloader'
>>>>>>> 43cd07c751583dba207a079c5bf4ba3c695ca849
import {Search} from '../components/Search'


export default class Main extends React.Component {
<<<<<<< HEAD
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
=======
  state = { 
    movies: [],
  }

  componentDidMount() { 
    fetch('http://www.omdbapi.com/?apikey=a74de10&s=matrix')
    .then(response => response.json())
    .then(data => this.setState({movies: data.Search}))
>>>>>>> 43cd07c751583dba207a079c5bf4ba3c695ca849
  }
  
  render () {
    const {movies} = this.state
    
    return <main className="conteiner content">
<<<<<<< HEAD
        <Search SearchMovie={this.SearchMovie} />
        {movies.length ? (
        <Movies movie={this.state.movies} />
      ) : <Preloader />}
        
=======
        <Search />
        {this.movies ? <Preloader /> : <Movies movie={this.state.movies} /> }
>>>>>>> 43cd07c751583dba207a079c5bf4ba3c695ca849
    </main>
  };
}

export {Main}