import noReview from "../../../../assets/no-review.png";

const Emptystate = () => {
  return (
    <div><div className="no-transaction">
    <img src={noReview} alt="" />
    <p>No Transaction(s) yet</p>
  </div></div>
  )
}

export default Emptystate