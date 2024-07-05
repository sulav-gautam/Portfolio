"use client";
import React, { useState } from "react";
import Navo from "./Components/Navo";
import Profile from "./Components/Profile";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Experieince from "./Components/Experieince";

const Page = () => {
  return (
    <>
      <Navo />
      <Profile />
      <About />

      <Experieince />

      <Contact />

      <Footer />
    </>
  );
};

export default Page;
