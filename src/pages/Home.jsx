import Entrycard from "../components/Entrycard";
import { useState } from "react";

const Home = ({ entries }) => {
    //   const [entries, setEntries] = useState([
    //     {
    //       id: 1,
    //       image: "https://picsum.photos/370/200",
    //       date: "01.01.2025",
    //       title: "Entry placeholder",
    //       active: false,
    //     },
    //     {
    //       id: 2,
    //       image: "https://picsum.photos/370/200",
    //       date: "01.02.2025",
    //       title: "Entry placeholder",
    //       active: false,
    //     },
    //     {
    //       id: 3,
    //       image: "https://picsum.photos/370/200",
    //       date: "01.03.2025",
    //       title: "Entry placeholder",
    //       active: false,
    //     },
    //     {
    //       id: 4,
    //       image: "https://picsum.photos/370/200",
    //       date: "01.04.2025",
    //       title: "Entry placeholder",
    //       active: false,
    //     },
    //   ]);

    return (
        <div>
            <h1 className="m-2 font-bold">Latest Entries</h1>
            <div className="grid grid-cols-2 gap-2 max-w-3xl">
                {/* <Entrycard /> */}
                {entries.map((entry) => (
                    <Entrycard key={entry.id} entry={entry} />
                ))}
            </div>
        </div>
    );
};

export default Home;
