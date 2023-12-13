"use client";

import Image from "next/image";
import Link from "next/link";
import { koho } from "./fonts";
import React from "react";
import { DiRequirejs } from "react-icons/di";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Footer from "./components/Footer";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");

  const sizes = ["xl"];

  const handleOpen = (size: any) => {
    setSize(size);
    onOpen();
  };

  return (
    <div>
      <div className="flex flex-wrap gap-3 m-5">
        {sizes.map((size) => (
          <DiRequirejs
            className="cursor-pointer shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            key={size}
            onPress={() => handleOpen(size)}
            onClick={onOpen}
            size={50}
          />
        ))}
      </div>
      <Modal size={"xl"} isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-3">
                Objetivo - Vem pro Fut
              </ModalHeader>
              <ModalBody
                className={`text-md ${koho.className} overflow-auto max-h-custom`}
              >
                <p>
                  Bem-vindo ao Vem Pro Fut! Simplificamos a organização de
                  partidas de futebol. Seja você um entusiasta do esporte,
                  amador ou profissional, oferecemos a solução ideal. Reúna
                  amigos ou colegas para jogar futebol em apenas alguns cliques.
                  Conectamos times, facilitamos a marcação de jogos e melhoramos
                  a experiência para todos os apaixonados pelo futebol. Crie seu
                  perfil de equipe, convide jogadores, escolha datas e locais, e
                  encontre adversários compatíveis.
                </p>
                <p>
                  Seja um veterano ou iniciante, simplificamos o processo para
                  tornar cada partida memorável. Além disso, oferecemos recursos
                  como estatísticas, compartilhamento de resultados e torneios
                  personalizados. Seja para partidas casuais ou ligas
                  competitivas, o Vem Pro Fut é a escolha certa. Explore nosso
                  site para descobrir como facilitamos sua vida esportiva.
                  Junte-se a nós nesta revolução esportiva, onde o futebol une
                  pessoas e comunidades. Fortaleça essa paixão conosco e ajude a
                  criar um futuro emocionante para o esporte que amamos. Nosso
                  compromisso com a comunidade esportiva vai além da organização
                  de partidas. Acreditamos que o esporte tem o poder de unir
                  pessoas e fortalecer laços.
                </p>
                <p>
                  É por isso que, além de facilitar a marcação de jogos,
                  promovemos a amizade e a camaradagem entre os participantes.
                  Queremos que cada experiência no Vem Pro Fut seja uma
                  oportunidade para criar memórias incríveis e compartilhar
                  momentos especiais com amigos, colegas e até mesmo
                  adversários. Junte-se a nós e faça parte desta comunidade que
                  valoriza a paixão pelo futebol e o espírito esportivo. Estamos
                  aqui para tornar sua jornada esportiva mais enriquecedora e
                  emocionante.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="success" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <div className="flex flex-col items-center justify-center text-center">
          <Image src="/logo.png" alt="Vem pro Fut" width={482} height={400} />
          <p className={`text-white text-2xl mt-7 ${koho.className}`}>
            Conectando paixões, simplificando partidas!
          </p>

          <div className="flex flex-col mt-7 space-y-5">
            <Link href="/login">
              <button className="w-full bg-green-500 hover:bg-green-400 text-white font-bold text-xl py-3 px-20 border-b-4 border-green-700 hover:border-green-500 rounded">
                Login
              </button>
            </Link>
            <Link href="/register">
              <button className="w-full bg-green-500 hover:bg-green-400 text-white font-bold text-xl py-3 border-b-4 border-green-700 hover:border-green-500 rounded">
                Cadastre-se
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-[120px]"></div>
      </div>
      <Footer />
    </div>
  );
}
