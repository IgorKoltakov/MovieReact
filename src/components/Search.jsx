import React from 'react'

class Search extends React.Component {
  state = {
    search: '',

  }

  
  render() {
    return <div className="row">
        <div className="col s12">
            <input 
              className="validate" 
              id="email_inline" 
              placeholder='Search' 
              type="search"
              value={this.state.search}
              onChange={(e) => this.setState({search: e.target.value})
              }
            />
        </div>
      </div>
  }
}

export {Search}