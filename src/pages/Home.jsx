import Entrycard from "../components/Entrycard";
import { use, useState } from "react";
import OpenEntryCard from "../components/OpenEntryCard";

const Home = ({ entries }) => {
  const [isActive, setIsActive] = useState(entries.active);
  console.log(entries);
  return (
    <div>
      <h1 className="m-2">Latest Entries</h1>
      <div className="grid grid-cols-2 gap-2 max-w-3xl">
        {entries.some((entry) => entry.active)
          ? entries
              .filter((entry) => entry.active)
              .map((entry) => (
                <OpenEntryCard
                  key={entry.id}
                  entry={entry}
                  isActive={isActive}
                  setIsActive={setIsActive}
                />
              ))
          : entries.map((entry) => <Entrycard key={entry.id} entry={entry} />)}
      </div>
    </div>
  );
};

export default Home;
