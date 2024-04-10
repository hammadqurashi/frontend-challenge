import React from "react";
import Spinner from "./PageSpinner";

const ShowMore = ({
  totalResults,
  showingResults,
  btnDisable = false,
  handleShowMore,
  isFetching,
}) => {
  return (
    <div className="w-max mx-auto flex flex-col gap-2 my-7">
      <p className="text-xs text-secondary">
        SHOWING {showingResults} OF {totalResults} PRODUCTS
      </p>
      <div
        className="h-1 bg-tertiary"
        style={{ width: `${(showingResults / totalResults) * 100}%` }}
      ></div>
      <button
        className="bg-tertiary text-white text-sm py-2 px-4"
        style={{ opacity: btnDisable ? "0.7" : "1" }}
        disabled={btnDisable}
        onClick={handleShowMore}
      >
        {isFetching ? "Showing.." : "Show More"}
      </button>
    </div>
  );
};

export default ShowMore;
