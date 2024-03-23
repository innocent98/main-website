import React from 'react'
import "./zealtoken.scss"
import zealIcon from "../../assets/image 10.png"

const ZealToken = () => {
  return (
    <div className='zealtoken'>
        <div className='zeal-header'>
        <h1>Zealworkers Tokens</h1>
        <p>Aside the traditional currency, you will also get our token <br/> for transactions too.</p>
        </div>
       <div className='zeal-image'>
        <img src={zealIcon} alt='icon'/>
        </div>
    </div>
  )
}

export default ZealToken