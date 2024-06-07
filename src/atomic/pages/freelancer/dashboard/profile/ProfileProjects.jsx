import React, { lazy, Suspense } from 'react'
import Container from '../../../../atoms/container/Container'
const LazyLoadedImg = lazy(() => import("../../../../atoms/image/Image"))


const ProfileProjects = () => {
    return (
        <section className='profile-projects'>
            <h2>My Works</h2>
            <Container variant="wrapper--flex" className="projectsContainer">
                <aside className='project-wrapper'>
                    <div className='project--imageWrapper'>
                        <Suspense fallback={<div>loading...</div>}>
                            <LazyLoadedImg src="profile-project" extension='png' className="project-img" />
                        </Suspense>
                    </div>
                    <h3>Project Name</h3>
                    <p>Project Description</p>
                </aside>
                <aside className='project-wrapper'>
                    <div className='project--imageWrapper'>
                        <Suspense fallback={<div>loading...</div>}>
                            <LazyLoadedImg src="profile-project" extension='png' className="project-img" />
                        </Suspense>
                    </div>
                    <h3>Project Name</h3>
                    <p>Project Description</p>
                </aside>
            </Container>
        </section>
    )
}

export default ProfileProjects
