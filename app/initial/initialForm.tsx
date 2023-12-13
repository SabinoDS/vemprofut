"use client";

import React from "react";
import Navbar from "../components/Navbar";
import AsidePerfil from "../components/AsidePerfil";
import ListaQuadras from "../components/ListaQuadras";
import Footer from "../components/Footer";

type Props = {};

const InitialForm = (props: Props) => {
  return (
    <div>
      <Navbar />
      <div
        className="flex flex-col md:flex-row h-screen mt-5"
        style={{ justifyContent: "center" ,}}
      >
        <AsidePerfil />
        <ListaQuadras />
      </div>
      <Footer />
    </div>
  );
};

export default InitialForm;
