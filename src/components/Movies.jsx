import {Movie} from './Movie'

function Movies(props) {
  const {movie} = props  


  return (
  <div className="movies">
    {movie.map(mov => (
<<<<<<< HEAD
      <Movie key={mov.imdbID} {...mov} />
    )) 
    }
=======
        <Movie key={mov.imdbID} {...mov} />
      ))}
>>>>>>> 43cd07c751583dba207a079c5bf4ba3c695ca849
  </div>
  )  
}

export {Movies}