import Button from "../../../../atomic/atoms/button/Button";
import Card from "./Card";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const jobAvailable = true;
  return (
    <>
      <div className="dashboard_wrapper">
        <Card cardColor="#007AFF" cardTitle="Post Jobs" postJobNumber="0" />
        <Card cardColor=" #53C546" cardTitle="Pending Jobs" postJobNumber="0" />
        <Card cardColor="#2D432C" cardTitle="Approved Jobs" postJobNumber="0" />
        <Card
          cardColor="#7E6F84"
          cardTitle="Sucessful Jobs"
          postJobNumber="0"
        />
      </div>
      <div className="groupB_wrapper">
        <div>
          <p>Post Jobs</p>
        </div>
        {jobAvailable ? (
          <div className="job-details">
            <div className="job-details_content">
              <div>
                <div>
                  <p>Product Designer</p> <span>LOVECLIP | Lagos, Nigeria</span>
                </div>
                <div>$1,000 - $2,000</div>
              </div>

              <div>
                <div>
                  {" "}
                  <p>Freelancer's Name</p> <span>Surname Solomon</span>
                </div>
              </div>

              <div>
                <Button className="btn" variant="default--fit">
                  Mark as complete
                </Button>
                <Button className="btn" variant="border--fit">
                  Report
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <p>Jobs will appear when you are approved</p>
          </div>
        )}
        <div>
          <Link className="link" to="/">
            <p>View All Jobs</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
