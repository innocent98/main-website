import { useState } from 'react';
import { IoAdd, IoCopy } from "react-icons/io5";
import Button from "../../../../../atomic/atoms/button/Button";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import "../wallet.scss";

const Card = ({ cardTitle, walletBalance, lastChild, lastChildContent, onFundWalletClick, type, walletAddress }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(walletAddress)
      .then(() => {
        alert('Copied to clipboard');
      })
      .catch(err => {
        alert('Failed to copy: ', err);
      });
  };
  
  return (
    <div className="wallet_card">
      <span>{cardTitle}</span>
      <div className="wallet_balances">
        <div>
          <p className="wallet_balance">
            {isVisible ? walletBalance : "....."}
          </p>
          {isVisible ? (
            <BsEyeSlash style={{ fontSize: "22px", cursor: "pointer" }} onClick={toggleVisibility} />
          ) : (
            <BsEye style={{ fontSize: "22px", cursor: "pointer" }} onClick={toggleVisibility} />
          )}
        </div>
        <small>
          {type === 'crypto' ? (
            <>
              <small style={{ color: "gray", letterSpacing: "3px" }}>{walletAddress}</small>
              <small style={{ marginLeft: "20px", cursor: "pointer" }} onClick={copyToClipboard}><IoCopy /></small>
            </>
          ) : (
            <>
              {lastChild} <small>{lastChildContent}</small>
            </>
          )}
        </small>
      </div>
      <div className="wallet_buttons">
        <Button variant="default--fit" className="btn" onClick={onFundWalletClick}><IoAdd /> Fund Wallet</Button>
        <Button variant="border--fit" className="btn"><IoAdd /> Withdraw</Button>
      </div>
    </div>
  );
};

export default Card;
