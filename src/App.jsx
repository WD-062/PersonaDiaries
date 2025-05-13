import { useState } from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import OpenEntryCard from "./components/OpenEntryCard";

function App() {
    return (
        <>
            <Navbar />
            <Home />
          <Form />
    </>
    );
}

export default App;
