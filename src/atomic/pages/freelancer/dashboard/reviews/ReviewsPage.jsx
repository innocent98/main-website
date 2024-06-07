import EmptyState from '../EmptyState'
import reviewData from './reviewdata'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Image from '../../../../atoms/image/Image'
import Container from '../../../../atoms/container/Container'

const ReviewsPage = () => {

  const [reviewCount, setReviewCount] = useState(0)

  return (
    <div>
      <NavLink className="link" to="/overview">Back to Dashboard</NavLink>
      <p className='review-count'>Reviews 0 total</p>
      {
        reviewCount === 0
          ?
          <EmptyState
            stateTitle={"You have no review(s) yet"}
            stateDescription={"Finish jobs for clients to get reviews"}
            toggleState={() => setReviewCount(1)}
          />
          :
          <>
            {reviewData.map((data, i) => {
              return (
                <section key={i} className='review--item'>
                  <Container variant="wrapper--flex" className="review--username">
                    <div>
                      <Image src={data.image} extension='svg' width={25} />
                    </div>
                    <p>{data.name}</p>
                  </Container>
                  <Container variant="wrapper--flex">
                    <small>hello {data.date}</small>
                  </Container>
                  <p className='review-text'>{data.review}</p>
                </section>
              )
            })}
          </>
      }
    </div>
  )
}

export default ReviewsPage
