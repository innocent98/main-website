import React from 'react'
import Container from '../../../../../atoms/container/Container'
import Button from '../../../../../atoms/button/Button'
import Image from '../../../../../atoms/image/Image'
import jobData from './jobsData'
import { Link } from 'react-router-dom'
import SearchSection from '../../header/SearchSection'

const Jobs = () => {
    return (
        <main className='jobs'>
            <SearchSection/>
            {jobData.map((job, i) => {
                return (
                    <main key={i} className="jobs--job-single" >
                        <Container variant="wrapper--flex--between" >
                            <Container variant="wrapper--flex" className="jobs-flex-gap">
                                <div>
                                    <Image src={job.image} extension='svg' width={70} height={70}/>
                                </div>
                                <div>
                                    <small>{job.time_stamp}</small>
                                    <p>{job.role}</p>
                                    <div className='job--location-section'>
                                        <p>{job.company}</p>
                                        <div className='vr'></div>
                                        <p> {job.location}</p>
                                    </div>
                                </div>
                            </Container>
                            <section>
                                <p>${job.amount_paid}</p>
                            </section>
                        </Container>
                        <div className='hr'></div>
                        <Container variant="wrapper--flex--between" >
                            <Container variant="wrapper--flex" className="jobs-flex-gap">
                                <p>{job.role}</p>
                            </Container>
                            {job.is_badge && <small>You have applied fpr this Job</small>}
                        </Container>
                    </main>
                )
            })}
        </main>
    )
}

export default Jobs
