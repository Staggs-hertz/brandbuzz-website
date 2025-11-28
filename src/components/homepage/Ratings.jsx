import React from "react";
import { ratingIcons } from "../../assets/assets";
import RatingItem from "./RatingItem";

const Ratings = ({ rate }) => {
  switch (rate) {
    case 1:
      rate = (
        <div className="flex gap-1 absolute bottom-3 left-5">
          <RatingItem src={ratingIcons.full_star} />
          <RatingItem src={ratingIcons.empty_star} />
          <RatingItem src={ratingIcons.empty_star} />
          <RatingItem src={ratingIcons.empty_star} />
          <RatingItem src={ratingIcons.empty_star} />
        </div>
      );
      break;

    case 2:
      rate = (
        <div className="flex gap-1 absolute bottom-3 left-5">
          <RatingItem src={ratingIcons.full_star} />
          <RatingItem src={ratingIcons.full_star} />
          <RatingItem src={ratingIcons.empty_star} />
          <RatingItem src={ratingIcons.empty_star} />
          <RatingItem src={ratingIcons.empty_star} />
        </div>
      );
      break;

    case 3:
      rate = (
        <div className="flex gap-1 absolute bottom-3 left-5">
          <RatingItem src={ratingIcons.full_star} />
          <RatingItem src={ratingIcons.full_star} />
          <RatingItem src={ratingIcons.full_star} />
          <RatingItem src={ratingIcons.empty_star} />
          <RatingItem src={ratingIcons.empty_star} />
        </div>
      );
      break;

    case 4:
      rate = (
        <div className="flex gap-1 absolute bottom-3 left-5">
          <RatingItem src={ratingIcons.full_star} />
          <RatingItem src={ratingIcons.full_star} />
          <RatingItem src={ratingIcons.full_star} />
          <RatingItem src={ratingIcons.full_star} />
          <RatingItem src={ratingIcons.empty_star} />
        </div>
      );
      break;

    case 5:
      rate = (
        <div className="flex gap-1 absolute bottom-3 left-5">
          <RatingItem src={ratingIcons.full_star} />
          <RatingItem src={ratingIcons.full_star} />
          <RatingItem src={ratingIcons.full_star} />
          <RatingItem src={ratingIcons.full_star} />
          <RatingItem src={ratingIcons.full_star} />
        </div>
      );
      break;

    default:
      break;
  }
  return <div>{rate}</div>;
};

export default Ratings;
