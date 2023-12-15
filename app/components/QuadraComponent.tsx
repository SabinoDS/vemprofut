import React from "react";
import Image from "next/image";
import quadra from "../../public/img/quadra.png";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { QuadraModal } from "./QuadraModal";

export const QuadraComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const HandleOpenModal = () => {
    onOpen();
  };

  const handle = () => {
    console.log("Abrir quadra component");
  };

  return (
    <div className="border rounded relative overflow-hidden h-max group">
      <div className="flex items-center justify-center h-full">
        <Image
          src={quadra}
          width={260}
          height={100}
          alt="Quadra"
          className="hover:opacity-80 transition-opacity duration-300"
        />
      </div>

      <div
        className="p-3 mb-1 absolute flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ top: "25%", left: "35%" }}
        onClick={HandleOpenModal}
      >
        <svg
          className="cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          width="55"
          height="45"
          viewBox="0 0 88 75"
          fill="none"
          onClick={HandleOpenModal}
        >
          <g opacity="0.6">
            <path
              d="M51.3333 37.5C51.3333 39.1576 50.5607 40.7473 49.1854 41.9194C47.8102 43.0915 45.9449 43.75 44 43.75C42.0551 43.75 40.1898 43.0915 38.8145 41.9194C37.4393 40.7473 36.6667 39.1576 36.6667 37.5C36.6667 35.8424 37.4393 34.2527 38.8145 33.0806C40.1898 31.9085 42.0551 31.25 44 31.25C45.9449 31.25 47.8102 31.9085 49.1854 33.0806C50.5607 34.2527 51.3333 35.8424 51.3333 37.5Z"
              fill="#F8F8F8"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M44 9.375C23.496 9.375 6.26999 21.325 1.38599 37.5C6.26999 53.675 23.496 65.625 44 65.625C64.5003 65.625 81.73 53.675 86.614 37.5C81.73 21.325 64.504 9.375 44 9.375ZM58.6666 37.5C58.6666 40.8152 57.1214 43.9946 54.3709 46.3388C51.6203 48.683 47.8898 50 44 50C40.1101 50 36.3796 48.683 33.6291 46.3388C30.8785 43.9946 29.3333 40.8152 29.3333 37.5C29.3333 34.1848 30.8785 31.0054 33.6291 28.6612C36.3796 26.317 40.1101 25 44 25C47.8898 25 51.6203 26.317 54.3709 28.6612C57.1214 31.0054 58.6666 34.1848 58.6666 37.5Z"
              fill="#F8F8F8"
            />
          </g>
        </svg>
      </div>
      <div className="p-3 mb-1">
        <p>Ginásio Bola na Rede</p>
        <span>R. Barão de Santa Tecla, 193 A</span>
      </div>

      {isOpen && <QuadraModal isOpen={isOpen} onClose={onClose} />}
    </div>
  );
};
