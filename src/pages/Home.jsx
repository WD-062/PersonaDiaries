import Entrycard from "../components/Entrycard";

const Home = () => {
    const entries = [
        {
            id: 1,
            image: "https://picsum.photos/400/200",
            date: "01.01.2025",
            title: "placeholder",
        },
        {
            id: 2,
            image: "https://picsum.photos/400/200",
            date: "01.02.2025",
            title: "placeholder",
        },
        {
            id: 3,
            image: "https://picsum.photos/400/200",
            date: "01.03.2025",
            title: "placeholder",
        },
    ];
    return (
        <div className="bg-gray-100">
            {/* <Entrycard /> */}
            {entries.map((entry) => (
                <Entrycard key={entry.id} entry={entry} />
            ))}
        </div>
    );
};

export default Home;
