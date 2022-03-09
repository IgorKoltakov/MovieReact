function Movie(props) {
  const {
    Poster: poster,
    Title: title,
  } = props

  return ( 
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={poster}/>
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{title}</span>
      </div>
    </div> 
  );
}

export {Movie}