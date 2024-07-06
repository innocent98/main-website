import { useState } from 'react';
import Button from '../../../../atomic/atoms/button/Button';
import useJobStore from '../../../../../zustand/clientStore/useJobStore.js';
import { jobCategories, serviceTypes, countries } from '../../../../molecules/custom-select/optionsData.js';
import CustomSelect from '../../../../molecules/custom-select/CustomSelect';
import JobModal from "../../dashboard/jobs/Modaljob";
import "./job.scss";

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

  const handlePostJob = async () => {
    console.log('clicked');
    try {
     const response =  await postJob();
     if (response ) {
      setIsModalOpen(true);
      handleShowPreview()
     } else (
      ""
     ) 
    } catch (error) {
      console.error('Error posting job:', error);
    }
  
  };

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

  return (
    <>
      {firstDiv && (
        <div className="jobs_wrapper">
          <div>
            <label htmlFor="work-category">Select Work Category</label>
            <div className="custom-select">
              <CustomSelect
                options={jobCategories.map(category => category.name)}
                selectedOption={jobCategory}
                onChange={(value) => setJobCategory(value)}
                placeholder="Search to select category..."
              />
            </div>
          </div>
          <div>
            <label htmlFor="service-type">Service type</label>
            <div className="custom-select">
              <CustomSelect
                options={serviceTypes.map(serviceType => serviceType.name)}
                selectedOption={serviceType}
                onChange={(value) => setServiceType(value)}
                placeholder="Search to select category..."
              />
            </div>
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
            <label htmlFor="job-desc">
              Please describe your project as detailed as you can
            </label>
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
            <span className="special_span">
              Number of Freelancers to be hired for this Job
            </span>
            <input
              className="jobs_input"
              placeholder="1"
              value={noToHire}
              onChange={(e) => setNoToHire(e.target.value)}
            />
          </div>
          <Button variant="default--fit" onClick={handleNextClick}>
            Next
          </Button>
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
            <CustomSelect
              options={countries.map(country => country.name)}
              selectedOption={country}
              onChange={(value) => setCountry(value)}
              placeholder="Select Country"
            />
          </div>
          <div>
            <label htmlFor="start-date">Propose start date</label>
            <input
              style={{padding:" 0px 10px 0px 0px"}}
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
            <Button variant="default--fit" onClick={handlePostJob}>
              Post a Job
            </Button>
            <Button variant="default--fit" onClick={handleBackClick}>
              Back
            </Button>
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
              <Button variant="default--fit" isDisabled={true} style={{color:"white"}}>
                Under review
              </Button>
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
          </div>
        </div>
      )}

      {isModalOpen && 
        <JobModal
          show={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          content="addFunds"
        />
      }
    </>
  );
};

export default Jobs;
