// import Entrycard from "../components/Entrycard";
// import { use, useEffect, useState } from "react";
// import OpenEntryCard from "../components/OpenEntryCard";

// const Home = ({ entries }) => {
//   const [isActive, setIsActive] = useState(entries.active);

//   return (
//     <div>
//       <h1 className="m-2">Latest Entries</h1>
//       <div className="grid grid-cols-2 gap-2 max-w-3xl">
//         {entries.some((entry) => entry.active)
//           ? entries
//               .filter((entry) => entry.active)
//               .map((entry) => (
//                 <OpenEntryCard
//                   key={entry.id}
//                   entry={entry}
//                   isActive={isActive}
//                   setIsActive={setIsActive}
//                 />
//               ))
//           : entries.map((entry) => (
//               <Entrycard
//                 key={entry.id}
//                 entry={entry}
//                 isActive={isActive}
//                 setIsActive={setIsActive}
//               />
//             ))}
//       </div>
//     </div>
//   );
// };

// export default Home;

import Entrycard from "../components/Entrycard";
import OpenEntryCard from "../components/OpenEntryCard";
import { useEffect, useState } from "react";

const Home = ({ entries }) => {
  const [entryList, setEntryList] = useState(entries);

  const handleToggleActive = (id) => {
    const updatedEntries = entryList.map((entry) =>
      entry.id === id ? { ...entry, active: !entry.active } : entry
    );
    setEntryList(updatedEntries);
    localStorage.setItem("entries", JSON.stringify(updatedEntries));
  };

  return (
    <div>
      <h1 className="m-2">Latest Entries</h1>
      <div className="grid grid-cols-2 gap-2 max-w-3xl">
        {entryList.some((entry) => entry.active)
          ? entryList
              .filter((entry) => entry.active)
              .map((entry) => (
                <OpenEntryCard
                  key={entry.id}
                  entry={entry}
                  toggleActive={() => handleToggleActive(entry.id)}
                />
              ))
          : entryList.map((entry) => (
              <Entrycard
                key={entry.id}
                entry={entry}
                toggleActive={() => handleToggleActive(entry.id)}
              />
            ))}
      </div>
    </div>
  );
};

export default Home;
