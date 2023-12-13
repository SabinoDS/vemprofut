import React from "react";
import { QuadraComponent } from "../components/QuadraComponent";

type Props = {};

const ListaQuadras = (props: Props) => {
  return (
    <div>
      <div
        className="border flex flex-wrap gap-7 border-white justify-center rounded-md p-10 mt-12 ml-10 w-10 overflow-auto"
        style={{ width: "1000px", maxHeight: "640px" }}
      >
        <QuadraComponent />
        <QuadraComponent />
        <QuadraComponent />
        <QuadraComponent />
        <QuadraComponent />
        <QuadraComponent />
        <QuadraComponent />
        <QuadraComponent />
        <QuadraComponent />
      </div>
    </div>
  );
};

export default ListaQuadras;
