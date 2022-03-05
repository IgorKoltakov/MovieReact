import { logDOM } from '@testing-library/react'
import {Muvie} from './Muvie'

function Muvies(props) {
  const {muvie} = props  


  return (
    <>
      {muvie.map(muv => (
        <Muvie key={muv.imdbID} muvie={muv} />
      ))}
    </>
  )  
}

export {Muvies}