import React from 'react'

class Search extends React.Component {
  constructor(props) {
    super(props)
      this.state = {
        search: '',
      }

      this.SearchRef = React.createRef()
  }  

<<<<<<< HEAD
  HandleKey = (event) => {
    if (event.key === 'Enter') {
      this.props.SearchMovie(this.state.search)
    }
  }
  
  componentDidMount() {
    this.SearchRef.current.focus()
  }


=======
>>>>>>> 43cd07c751583dba207a079c5bf4ba3c695ca849
  render() {
    return <div className="row">
        <div className="col s12">
          <div class="input-field">
            <input 
              className="validate" 
              id="email_inline" 
              placeholder='Search' 
              type="search"
              value={this.state.search}
              onChange={(e) => this.setState({search: e.target.value})}
              onKeyDown={this.HandleKey}
              ref={this.SearchRef}
            />
            <button className='btn search-btn' onClick={() => this.props.SearchMovie(this.state.search)}>search</button>
        </div>
      </div>
    </div>
  };
}


export {Search}