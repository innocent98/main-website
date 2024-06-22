import { IoAdd } from "react-icons/io5"
import Button from "../../../../../atomic/atoms/button/Button"
import { BsEyeSlash } from "react-icons/bs"
import "../wallet.scss"
import { useState } from "react"


const Card = ({cardTitle, walletBalance, lastChild, lastChildContent , onFundWalletClick }) => {
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    setShowModal(!showModal)
  }
  return (
    <div className="wallet_card">
        <span>{cardTitle}</span>
        <div className="wallet_balances">
            <div>
                <p className="wallet_balance">{walletBalance}</p>
                <BsEyeSlash style={{fontSize:"22px"}}/>
            </div>
           
            <small>{lastChild} <b>{lastChildContent}</b></small>
            
          
        </div>
        <div className="wallet_buttons">
            <Button variant="default--fit" className="btn" onClick={onFundWalletClick}><IoAdd/> Fund Wallet</Button>
            <Button variant="border--fit" className="btn"><IoAdd/> Withdraw</Button>
        </div>
       
       

    </div>
  )
}

export default Card