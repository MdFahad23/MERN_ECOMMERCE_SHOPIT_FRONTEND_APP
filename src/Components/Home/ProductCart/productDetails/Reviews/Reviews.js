import React from "react";
import ReactStart from "react-rating-stars-component";

const Reviews = ({ reviews }) => {
  const options = {
    edit: false,
    color: "rgba(20, 20, 20, 0.1)",
    activeColor: "tomato",
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
  };
  return (
    <>
      {reviews && reviews[0] ? (
        <div className="grid grid-cols-6 gap-[30px] mt-[50px] pb-[50px]">
          {reviews.map((reviews) => (
            <div className="col-span-2 max-lg:col-span-3 max-sm:col-span-6 bg-[#FAFAFA] pb-[30px]">
              <div className="py-[30px] text-center">
                <span className="text-[25px] border rounded-full py-[10px] px-[20px] bg-[#fdfdfd]">
                  F
                </span>
              </div>
              <p className="text-[20px] font-Roboto font-semibold text-center">
                {reviews.name}
              </p>
              <div className="flex justify-center">
                <ReactStart {...options} value={reviews.rating} />
              </div>
              <span className="text-[18px] text-center block font-Mulish font-medium pl-[10px]">
                {reviews.comment}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-[20px] font-Roboto font-semibold text-center py-[20px]">
          No Reviews Yet
        </p>
      )}
    </>
  );
};

export default Reviews;
