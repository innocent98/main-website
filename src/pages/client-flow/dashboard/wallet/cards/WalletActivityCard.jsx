import { BsArrowDown } from "react-icons/bs"
import { FaArrowUpLong, FaArrowDownLong } from "react-icons/fa6";
import "../wallet.scss"

const WalletActivityCard = ({type, amount, status, withdraw, time}) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "pending":
        return "gray";
      case "completed":
        return "green";
      case "cancel":
        return "red";
      default:
        return "black";
    }
  };
  return (
    <div className="walletact">
        <div className="arrow">{withdraw && <FaArrowDownLong style={{color:"green"}}/> || <FaArrowUpLong style={{color:"blue"}}/> || <BsArrowDown style={{color:"red"}}/> } </div>
        <div className="type"><p>{type}</p><span className="time">{time}</span></div>
        <div className="amount"><p>{amount}</p></div>
        <div className="status"style={{ color: getStatusColor(status) }}><p>{status}</p></div>
    </div>
  )
}

export default WalletActivityCard