import quote from "/src/assets/quote.png";
import { clientReviews } from "../clientReviews";
import { Outlet } from "react-router";

export default function Reviews() {
  const reviewList = clientReviews.map((review) => (
    <div className="review-card" key={review.id}>
      <img src={quote} />
      <p>
        <b>{review.name}</b>
      </p>
      <p>{review.review}</p>
    </div>
  ));

  return (
    <>
      <div className="reviews__container">
        
        <div className="title-reviews__container">
          <h2>Отзывы</h2>
        </div>

        <ul className="review-box">{reviewList}</ul>
      </div>

      <Outlet />
    </>
  );
}
