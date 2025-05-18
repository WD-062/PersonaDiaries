import React from "react";

function OpenEntryCard({ entry, toggleActive }) {
  return (
    <div className=" absolute ml-70 mt-140 w-1/2 place-content-center place-self-center">
      <div className=" p-5 bg-teal-800 mt-10 rounded-4xl">
        <div className="">
          <img
            className="h-100 w-full object-cover rounded-2xl"
            src={entry.image}
            alt=""
          />
        </div>
        <p className="mt-4">{entry.date}</p>
        <h2 className="text-3xl font-bold">{entry.title}</h2>
        <p className="mb-3">{entry.content}</p>
        <button id={entry.id} className="btn" onClick={toggleActive}>
          BUTTON
        </button>
      </div>
    </div>
  );
}

export default OpenEntryCard;
