import React from "react";

function OpenEntryCard() {
  return (
    <div className=" absolute w-1/2 border place-content-center place-self-center">
      <div className=" p-5 bg-teal-800 mt-10 rounded-4xl">
        <div className="">
          <img
            className="h-100 w-full object-cover rounded-2xl"
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2h8ZW58MHx8MHx8fDA%3D"
            alt=""
          />
        </div>
        <p className="mt-4">date</p>
        <h2 className="text-3xl font-bold">Title</h2>
        <p className="mb-3">CONTENT HERE</p>
      </div>
    </div>
  );
}

export default OpenEntryCard;
