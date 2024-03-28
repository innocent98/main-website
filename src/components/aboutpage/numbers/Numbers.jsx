import React from 'react'
import "./numbers.scss"
import Num from '../../../organisms/numbers/Num'

const Numbers = () => {
  return (
    <div className='numbers'>
        <h2>Trust The Numbers</h2>
        <div className='numbers-content'>
            <Num/>
            <Num/>
            <Num/>
        </div>
    </div>
  )
}

export default Numbers