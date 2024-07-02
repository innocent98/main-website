import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import "./wallet.scss";
import { IoClose } from "react-icons/io5";
import Button from "../../../../atomic/atoms/button/Button";
import Check from "../../../../assets/check.png"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  padding: 0,
  '@media (max-width: 600px)': {
            width: '90%',
            p: 0,
          },
};

export default function BasicModal({
  show,
  onClose,
  content,
  onPayClick,
  onPaywithClick,
  onAddFundsClick,
}) {
  const renderContent = () => {
    switch (content) {
      case "pay":
        return (
          <div className="modal-content">
          <header>
            <div className="title">
              <p> PayStack Checkout</p>
            </div>
            <div className="close" onClick={onClose} ><IoClose/></div>
          </header>
         <div className="modal-body">
         <p> Use one of the payment methods below to fund your Zealworkers
         Account</p>
         <form>
              <div onClick={onPaywithClick}>Pay with Card</div>
              <div onClick={onPaywithClick}>Pay with Bank</div>
              <bold className="secured">Secured by paystack</bold>
            </form>
         </div>  
          </div>
        );
      case "paywith":
        return (
          <div className="modal-content">
           <header>
            <div className="title">
              <p>PayStack Checkout</p>
            </div>
            <div className="close" onClick={onClose} > <IoClose/> </div>
          </header>
          <div className="modal-body" style={{display:"flex", justifyContent:"flex-start", alignItems:"flex-start" , marginLeft:"30px"}}>
          <p>Fill the Following Details</p>
          <form>
              <label>Amount</label>
              <input placeholder="NGN 30,000" />
            </form>
            <Button className='btn' variant="default--fit" onClick={onAddFundsClick} >
              {" "}
              Proceed{" "}
            </Button>
         
         </div>  
            
            
            
          </div>
        );
      case "addFunds":
        return (
          <div className="modal-content">
             <header>
              <div className="title">
                <p>Payment Sucessful</p>
              </div>
              <div className="close" onClick={onClose} ><IoClose/></div>
            </header>
           <div className="modal-body">
           <img src={Check} alt=""/>
            <Button variant="default--fit" onClick={onClose}>Back To Dashboard</Button>
           </div>
          </div>
        );
      default:
        return (
          <div className="modal-content">
            <header>
              <div className="title">
                <p>Select Payment Method</p>
              </div>
              <div className="close" onClick={onClose} ><IoClose/></div>
            </header>
           <div className="modal-body">
           <p>Select Payment Method below</p>
            <form>
              <div onClick={onPayClick}>Paystack</div>
              <div onClick={onPayClick}>Flutterwave</div>
            </form>
           </div>
            
          </div>
        );
    }
  };

  return (
    <Modal
      open={show}
      onClose={onClose} // Close modal on outside click
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal" sx={style}>{renderContent()}</Box>
    </Modal>
  );
}
