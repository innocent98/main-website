import  { useState } from "react";
import Button from "../../../../atomic/atoms/button/Button";
import Modal from "../../../../atomic/molecules/modal/Modal";
import check from "../../../../assets/check-circle.svg";
import jobData from "./dummyjob";

const Jobs = () => {
  const [firstdiv, showFirstdiv] = useState(true);
  const [seconddiv, showSeconddiv] = useState(false);
  const [previewdiv, showPreviewdiv] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNextClick = () => {
    showFirstdiv(false);
    showSeconddiv(true);
  };

  const handleBackClick = () => {
    showFirstdiv(true);
    showSeconddiv(false);
    showPreviewdiv(false);
    setIsModalOpen(false);
  };

  const handleShowPreview = () => {
    showFirstdiv(false);
    showSeconddiv(false);
    showPreviewdiv(true);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {firstdiv && (
        <div className="jobs_wrapper">
          <div>
            <label htmlFor="work-category">Select Work Category</label>
            <select className="jobs_select" id="work-category">
              <option disabled value="category" selected>
                Search to select category...
              </option>
              <option value="Art and Creative designs">
                Art and Creative designs
              </option>
              <option value="Video And Animation">Video And Animation</option>
              <option value="Event Planning">Event Planning</option>
            </select>
          </div>
          <div>
            <label htmlFor="service-type">Service type</label>
            <select className="jobs_select" id="service-type">
              <option disabled value="service" selected>
                Search to select category...
              </option>
              <option value="UI/UX Designs">UI/UX Designs</option>
              <option value="Blockchain Developer">Blockchain Developer</option>
              <option value="Web Design">Web Design</option>
              <option value="Video Editing">Video Editing</option>
              <option value="Translation And Transcription">
                Translation And Transcription
              </option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Enter a title for your post</label>
            <input
              className="jobs_input"
              placeholder="The Landing Page for Elementary School"
            />
            <span>Max. 100 characters</span>
          </div>
          <div>
            <label htmlFor="">
              Please describe your project as detailed as you can
            </label>
            <input className="jobs_input" />
            <span>Max. 100 characters</span>
          </div>
          <div>
            <label htmlFor="">Required contents</label>
            <span className="special_span">
              The Frelancer must have e.g content in HTML, Figma, JavaScript etc
            </span>
            <input className="jobs_input" />
          </div>
          <div>
            <label htmlFor="">Number to Hire</label>
            <span className="special_span">
              Number of Frelancer to be hired for this Job
            </span>
            <input className="jobs_input" placeholder="1" />
          </div>
          <Button onClick={handleNextClick}>Next</Button>
        </div>
      )}

      {seconddiv && (
        <div className="jobs_wrapper">
          <div>
            <label htmlFor="">Budget</label>
            <span className="special_span">Leave blank if not sure</span>
            <input
              className="jobs_input"
              placeholder="The Landing Page for Elementary School"
            />
          </div>
          <div>
            <label htmlFor="work-category">Select Country</label>
            <select className="jobs_select" id="select_country">
              <option disabled value="category" selected>
                Select Country
              </option>
              <option value="Pending">Pending</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Propose start date</label>
            <input className="jobs_input" />
            <span>Max. 100 characters</span>
          </div>
          <div>
            <label htmlFor="">Duration</label>
            <input className="jobs_input" />
          </div>
          <div className="jobs_buttons">
            <Button onClick={handleBackClick}>Back</Button>
            <Button onClick={handleShowPreview}>Preview</Button>
          </div>
        </div>
      )}

      {previewdiv && (
        <div className="jobs-preview_wrapper">
          <div className="jobs-preview_div1">
            <div>
              <span>{jobData.datePosted}</span>
              <p>Freelance job for {jobData.duration}</p>
              <h3>{jobData.title}</h3>
              <span>{jobData.country}</span>
            </div>
            <div>
              <Button isDisabled={true}>Under review</Button>
            </div>
          </div>
          <div className="jobs-preview_div2">
            <p>Acceptance Criteria</p>
            {jobData.acceptanceCriteria.map((criteria, index) => (
              <span key={index}>{criteria}</span>
            ))}
          </div>
          <div className="jobs-preview_div3">
            <div className="jobs-preview_div3_sub">
              <div>
                <p>Proposed start date</p>
                <p>{jobData.startDate}</p>
              </div>
              <div>
                <p>Estimated Budget</p>
                <p>{jobData.budget}</p>
              </div>
            </div>
            <hr />
            <div className="jobs-preview_div3_sub">
              <div>
                <p>Preferred candidate</p>
                <p>{jobData.preferredCandidate}</p>
              </div>
              <div>
                <p>Category</p>
                <p>{jobData.category}</p>
              </div>
            </div>
            <hr />
            <div className="jobs-preview_div3_main">
              <small>Responses: {jobData.responses}</small>
              <small>Slot Left: {jobData.slotsLeft}</small>
              <small>Hired: {jobData.hired}</small>
              <small>Application: {jobData.applications}</small>
            </div>
          </div>
          <div className="jobs-link">
            <div>
              <label htmlFor="job-link">Copy Job Link</label>
              <input id="job-link" value={jobData.jobLink} />
            </div>
            <div>
              <p>
                Note: A notification message will be sent to your email if your
                post has been reviewed and published to the public
              </p>
            </div>
          </div>
          <Button onClick={handleModalOpen}>Post a Job</Button>
        </div>
      )}

      {isModalOpen && (
        <Modal className="modal">
          <div onClick={handleModalOpen}>
            <img src={check} alt="submitted" />
            <h3>Job Post Submitted</h3>
            <p>
              Kindly note that your post will be reviewed before it is made
              public
            </p>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Jobs;
