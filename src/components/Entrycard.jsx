const Entrycard = (entry) => {
    return (
        <div>
            <img src={entry.image} />
            <div>
                <h1>{entry.title}</h1>
                <p>{entry.date}</p>
            </div>
        </div>
    );
};

export default Entrycard;
