import { useState } from "react";
import Button from "../../../../atomic/atoms/button/Button";
import Modal from "../../../../atomic/molecules/modal/Modal";
import check from "../../../../assets/check-circle.svg";
import useJobStore from "../../../../../zustand/client/useJobStore.js";

const Jobs = () => {
  const {
    jobCategory,
    serviceType,
    jobTitle,
    jobDesc,
    requiredSkills,
    noToHire,
    budget,
    country,
    startDate,
    duration,
    setJobCategory,
    setServiceType,
    setJobTitle,
    setJobDesc,
    setRequiredSkills,
    setNoToHire,
    setBudget,
    setCountry,
    setStartDate,
    setDuration,
    postJob,
  } = useJobStore();

  const [firstDiv, showFirstDiv] = useState(true);
  const [secondDiv, showSecondDiv] = useState(false);
  const [previewDiv, showPreviewDiv] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNextClick = () => {
    showFirstDiv(false);
    showSecondDiv(true);
  };

  const handleBackClick = () => {
    showFirstDiv(true);
    showSecondDiv(false);
    showPreviewDiv(false);
    setIsModalOpen(false);
  };

  const handleShowPreview = () => {
    showFirstDiv(false);
    showSecondDiv(false);
    showPreviewDiv(true);
  };

  const handlePostJob = async () => {
    try {
      await postJob();
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error posting job:", error);
    }
  };

  return (
    <>
      {firstDiv && (
        <div className="jobs_wrapper">
          <div>
            <label htmlFor="work-category">Select Work Category</label>
            <select
              className="jobs_select"
              id="work-category"
              value={jobCategory}
              onChange={(e) => setJobCategory(e.target.value)}
            >
              <option disabled value="">
                Search to select category...
              </option>
              <option value="Art and Creative designs">Art and Creative designs</option>
              <option value="Video And Animation">Video And Animation</option>
              <option value="Event Planning">Event Planning</option>
            </select>
          </div>
          <div>
            <label htmlFor="service-type">Service type</label>
            <select
              className="jobs_select"
              id="service-type"
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
            >
              <option disabled value="">
                Search to select category...
              </option>
              <option value="UI/UX Designs">UI/UX Designs</option>
              <option value="Blockchain Developer">Blockchain Developer</option>
              <option value="Web Design">Web Design</option>
              <option value="Video Editing">Video Editing</option>
              <option value="Translation And Transcription">Translation And Transcription</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div>
            <label htmlFor="job-title">Enter a title for your post</label>
            <input
              className="jobs_input"
              placeholder="The Landing Page for Elementary School"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
            <span>Max. 100 characters</span>
          </div>
          <div>
            <label htmlFor="job-desc">Please describe your project as detailed as you can</label>
            <input
              className="jobs_input"
              value={jobDesc}
              onChange={(e) => setJobDesc(e.target.value)}
            />
            <span>Max. 100 characters</span>
          </div>
          <div>
            <label htmlFor="required-skills">Required contents</label>
            <span className="special_span">
              The Freelancer must have e.g content in HTML, Figma, JavaScript etc
            </span>
            <input
              className="jobs_input"
              value={requiredSkills}
              onChange={(e) => setRequiredSkills(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="no-to-hire">Number to Hire</label>
            <span className="special_span">Number of Freelancers to be hired for this Job</span>
            <input
              className="jobs_input"
              placeholder="1"
              value={noToHire}
              onChange={(e) => setNoToHire(e.target.value)}
            />
          </div>
          <Button variant="default--fit" onClick={handleNextClick}>Next</Button>
        </div>
      )}

      {secondDiv && (
        <div className="jobs_wrapper">
          <div>
            <label htmlFor="budget">Budget</label>
            <span className="special_span">Leave blank if not sure</span>
            <input
              className="jobs_input"
              placeholder="Budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="country">Select Country</label>
            <select
              className="jobs_select"
              id="select_country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            >
              <option disabled value="">
                Select Country
              </option>
              <option value="Canada">Canada</option>
              <option value="USA">USA</option>
            </select>
          </div>
          <div>
            <label htmlFor="start-date">Propose start date</label>
            <input
              className="jobs_input"
              type="datetime-local"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <span>Max. 100 characters</span>
          </div>
          <div>
            <label htmlFor="duration">Duration</label>
            <input
              className="jobs_input"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div className="jobs_buttons">
            <Button variant="default--fit" onClick={handleBackClick}>Back</Button>
            <Button variant="default--fit" onClick={handleShowPreview}>Preview</Button>
          </div>
        </div>
      )}

      {previewDiv && (
        <div className="jobs-preview_wrapper">
          <div className="jobs-preview_div1">
            <div>
              <span>{new Date().toLocaleDateString()}</span>
              <p>Freelance job for {duration}</p>
              <h3>{jobTitle}</h3>
              <span>{country}</span>
            </div>
            <div>
              <Button variant="default--fit" isDisabled={true}>Under review</Button>
            </div>
          </div>
          <div className="jobs-preview_div2">
            <p>Acceptance Criteria</p>
            <span>{jobDesc}</span>
          </div>
          <div className="jobs-preview_div3">
            <div className="jobs-preview_div3_sub">
              <div>
                <p>Proposed start date</p>
                <p>{startDate}</p>
              </div>
              <div>
                <p>Estimated Budget</p>
                <p>{budget}</p>
              </div>
            </div>
            <hr />
            <div className="jobs-preview_div3_sub">
              <div>
                <p>Preferred candidate</p>
                <p>{requiredSkills}</p>
              </div>
              <div>
                <p>Category</p>
                <p>{jobCategory}</p>
              </div>
            </div>
            <hr />
            <div className="jobs-preview_div3_main">
              <small>Responses: 0</small>
              <small>Slot Left: {noToHire}</small>
              <small>Hired: 0</small>
              <small>Application: 0</small>
            </div>
          </div>
          <div className="jobs-link">
            <div>
              <label htmlFor="job-link">Copy Job Link</label>
              <input id="job-link" value="" readOnly />
            </div>
            <div>
              <p>
                Note: A notification message will be sent to your email if your
                post has been reviewed and published to the public
              </p>
            </div>
          </div>
          <Button variant="default--fit" onClick={handlePostJob}>Post a Job</Button>
        </div>
      )}

      {isModalOpen && (
        <Modal className="modal">
          <div onClick={() => setIsModalOpen(false)}>
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
