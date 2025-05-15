import { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import OpenEntryCard from "./components/OpenEntryCard";
import Footer from "./components/Footer";

function App() {
    const [entries, setEntries] = useState(
        JSON.parse(localStorage.getItem("entries")) || []
    );
    return (
        <>
            <Navbar />
            <Home entries={entries} />
            <Form entries={entries} setEntries={setEntries} />
            <Footer />
        </>
    );
}

export default App;
