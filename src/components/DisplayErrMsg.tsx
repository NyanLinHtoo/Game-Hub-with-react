import React from "react";

const DisplayErrMsg = () => {
  return (
    <span className="bg-slate-300 p-5 w-full rounded-xl">
      We can't filter by "Genres," "Platform," or "Order by" because the free
      API I'm using returns the same results regardless of these filters.
    </span>
  );
};

export default DisplayErrMsg;
