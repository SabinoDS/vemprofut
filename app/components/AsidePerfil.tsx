import React from "react";
import { PiUserCirclePlusLight } from "react-icons/pi";
import { DiAptana } from "react-icons/di";

type Props = {};

const AsidePerfil = (props: Props) => {
  return (
    <div className="border relative border-white p-10 rounded-md mt-12 w-[330px] h-[640px]">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center">
          <PiUserCirclePlusLight size="100" />
        </div>
        <div className="flex flex-col items-center justify-center mt-3">
          <h1 className="text-2xl text-white font-medium">Arthur Sabino</h1>
        </div>
        <div className="text-center p-5 font-thin text-xs w-72">
          {/* bio */}
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry standard dummy text ever since the
            1500s.
          </p>
        </div>
      </div>
      <div className="mt-10">
        {/* nome */}
        <div>
          <p className="text-sm">Data de Nascimento:</p>
          <p className="text-xs font-thin">07/12/1971</p>
        </div>
        {/* email */}
        <div className="mt-5">
          <p className="text-sm">Email:</p>
          <p className="text-xs font-thin"> sabinoprog03@icloud.com</p>
        </div>
        {/* cpf */}
        <div className="mt-5">
          <p className="text-sm">CPF:</p>
          <p className="text-xs font-thin"> 123.456.789-10</p>
        </div>
        {/* telefone */}
        <div className="mt-5">
          <p className="text-sm">Telefone:</p>
          <p className="text-xs font-thin"> (11) 9 1234-5678</p>
        </div>
      </div>
      <div className="absolute" style={{bottom:"10px", right:"10px"}}>
        <DiAptana size="40"/>
      </div>
    </div>
  );
};

export default AsidePerfil;
