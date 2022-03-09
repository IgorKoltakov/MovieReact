import {Movie} from './Movie'

function Movies(props) {
  const {movie} = props  


  return (
  <div className="movies">
    {movie.map(mov => (
      <Movie key={mov.imdbID} {...mov} />
    )) 
    }
  </div>
  )  
}

export {Movies}