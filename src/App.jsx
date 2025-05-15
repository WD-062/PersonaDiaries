import { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import OpenEntryCard from "./components/OpenEntryCard";

function App() {
  const [entries, setEntries] = useState(
    JSON.parse(localStorage.getItem("entries")) || []
    
  );
  return (
    <>
      <Navbar />
      <Home entries={entries} setEntries={setEntries} />
      <Form entries={entries} setEntries={setEntries} />
    </>
  );
}

export default App;
