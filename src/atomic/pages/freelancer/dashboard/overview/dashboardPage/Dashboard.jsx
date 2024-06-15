import clsx from "clsx"
import data from "./data"
import React, { useState } from 'react'
import SearchSection from "../../header/SearchSection"
import { LuDownload } from "react-icons/lu";
import Container from '../../../../../atoms/container/Container'



const Dashboard = () => {
  const [jobs, setJobs] = useState(false)

  return (
    <main>
      <SearchSection />
      <Container variant="wrapper--flex--between" className="Fdashboard">
        {data.map((card, i) => {
          return (
            <section key={i}
              className={clsx(card.color === "blue" ? "blue-card" : card.color === "green" ? "green-card" : "deep-green", "card-wrapper")}>
              <Container
                variant="wrapper--flex"
                className="Dashboard__item-Fcard"
              >
                <p>{card.total}</p>
                <div className="downloadIcon">
                  <a href="" download={""}><LuDownload /></a>
                </div>
              </Container>
              <p className="card-title">{card.title}</p>
            </section>
          )
        })}
      </Container>
      <aside className='jobs--section'>
        <p className='jobs--section__label'>Current Jobs</p>
        <div className='jobs--section__jobsSection'>
          {jobs ? <div></div> : <p className='jobs--section__jobsText'>Jobs will appear when you get hired</p>}
        </div>
        <p className='jobs--section-footer'>
          View All Jobs
        </p>
      </aside>
    </main>
  )
}

export default Dashboard