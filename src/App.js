import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/AboutUs";
import ContactList from "./Components/ContactList";
import Contacts from "./Components/Contacts";
import Favorites from "./Components/Favorites";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
