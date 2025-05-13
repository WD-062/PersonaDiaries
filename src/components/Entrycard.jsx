const Entrycard = ({ entry }) => {
    return (
        <div className="grid m-2 bg-gray-300 rounded-2xl overflow-hidden">
            <img
                src={entry.image}
                className="w-[400px] h-[200px]"
            />
            <div>
                <p className="text-black text-xs ml-2 mt-2 pl-2">
                    {entry.date}
                </p>
                <h1 className="text-black ml-2 mb-3 pl-2">{entry.title}</h1>
            </div>
        </div>
    );
};

export default Entrycard;
