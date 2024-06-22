import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import "./wallet.scss"
import { IoClose } from 'react-icons/io5';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
 
};

export default function BasicModal({ show, onClose }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open</Button>
      <Modal 
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            
            
        <div className="modal-content">
        <h2>Select Payment Method <IoClose onClick={handleClose} style={{position:"absolute",cursor:"pointer", right:"0",top:"-10px",color:"black", fontSize:"30px"}}/></h2>
        <hr style={{height:"1px", width:"100%"}}/>
        <p>Select Payment Method below</p>
        <form>
          <div>Paystack</div>
          <div>Flutterwave</div>
        </form>
        </div>

        </Box>
      </Modal>
    </div>
  );
}

<Modal className="modal">
        <div className="modal-content">
        <h2>Select Payment Method</h2>
        <p>Select Payment Method below</p>
        <form>
          <div>Paystack</div>
          <div>Flutterwave</div>
        </form>
        </div>


        <div className="modal-content">
        <h2>PayStack Checkout</h2>
        <p>Use one of the payment method below to fund your Zealworkers Account</p>
        <form>
          <div>Pay with Card</div>
          <div>Pay with Bank</div>
          <bold>Secured by paystack</bold>
        </form>
        </div>

        <div className="modal-content">
        <h2>Add Funds</h2>
        <p>Fill the Following Details</p>
        <form>
          <label>Amount</label>
          <input placeholder="NGN 30,OOO"/>
          
        </form>
        <Button>Proceed</Button>
        </div>
        
        
        </Modal>
