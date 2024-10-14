import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Check from "../../../../assets/check-circle.png"


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  padding: 10,
 
  '@media (max-width: 600px)': {
            width: '60%',
            p: 4,
          },
};

export default function JobModal({
  show,
  onClose,
  content,
}) {
  const renderContent = () => {
    switch (content) {
      case "addFunds":
        return (
          <div className="jobmodal-content" >
           <div className="jobmodal-body">
           <img src={Check} alt=""/>
           <h2>Job Post Submitted</h2>
           <p>Kindly note that your post will be reviewed before it is made public</p>
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
      <Box className="jobmodal" sx={style}>{renderContent()}</Box>
    </Modal>
  );
}
