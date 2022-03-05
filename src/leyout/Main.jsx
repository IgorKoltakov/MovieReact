import React from 'react'
import {Muvies} from 'C:/Users/Mavi/Desktop/programing/muvie/src/components/Muvies.jsx'


export default class Main extends React.Component {
  state = { 
    muv: []
  }

  componentDidMount() { 
    fetch('http://www.omdbapi.com/?apikey=a74de10&s=matrix')
    .then(response => response.json())
    .then(data => this.setState({muv: data}))
    .then(console.log('Feach complited'))
  }
  
  render () {
    return <main className="conteiner content">
        <Muvies muvie={this.state.muv.Search} />
    </main>
  };
}

export {Main}