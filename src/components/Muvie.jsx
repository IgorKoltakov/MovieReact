function Muvie(props) {
  const {muvie} = props

  const MuvImg = muvie.Poster
  const MuvName = muvie.title
  return ( 
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={MuvImg}/>
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
        <p><a href="#">This is a link</a></p>
      </div>
      <div className="card-reveal">
        <span className="card-title grey-text text-darken-4">{MuvName}<i className="material-icons right">close</i></span>
        <p>Body</p>
      </div>
    </div> 
  );
}


export {Muvie}