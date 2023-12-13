"use client";

import Image from "next/image";
import { koho } from "../fonts";
import Link from "next/link";
import { PageForm } from "../components/PageForm";

type Props = {};

const RegisterForm = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="flex-1 flex flex-col items-center justify-center md:ml-9">
        <Link href="/">
          <Image
            src="/img/vemprofut.png"
            alt="logo"
            className="w-3/4 md:w-auto"
            width={391} // 75% of 522
            height={330} // 75% of 440
          />
        </Link>
        <p className={`mt-7 text-lg md:text-xl text-center ${koho.className}`}>
          Conectando paixões, simplificando partidas!
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center md:mr-9">
        <h1 className="flex text-4xl font-bold text-white">Cadastre-se</h1>
        <PageForm />
        <div className="flex flex-col mb-5 md:mb-0">
          <div className="flex items-center justify-center rounded-lg dark:bg-gray-800 mt-5">
            <button className="w-full px-10 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
              <Image
                className="w-6 h-6"
                width={24}
                height={24}
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                loading="lazy"
                alt="google logo"
              />
              <span>Register with Google</span>
            </button>
          </div>
          <div className="flex items-center justify-center rounded-lg dark:bg-gray-800 mt-5">
            <button className="px-10 py-2 border flex gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
              <Image
                className="w-6 h-6"
                width={24}
                height={24}
                src="https://www.svgrepo.com/show/475647/facebook-color.svg"
                loading="lazy"
                alt="facebook logo"
              />
              <span>Register with Facebook</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;




        {/* <form
          className="mt-10 space-y-4 w-11/12 md:w-full md:max-w-md"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-white-700"
            >
              Nome completo
            </label>
            <input
              type="name"
              placeholder="João da Silva"
              id="name"
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              className="mt-1 block w-full py-3 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white-700"
            >
              Email
            </label>
            <input
              type="text"
              placeholder="example@gmail.com"
              id="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="mt-1 block w-full py-3 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-withe-700"
            >
              Senha
            </label>
            <input
              type="password"
              placeholder="********"
              id="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="mt-1 block w-full py-3 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-withe-700"
            >
              Confirmar senha
            </label>
            <input
              type="password"
              placeholder="********"
              id="confirmPassword"
              value={user.confirmPassword}
              onChange={handleInputChange}
              className="mt-1 block w-full py-3 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
            />
          </div>
          <div className="mt-7">
            <button
              type="submit"
              onClick={Register}
              className="w-full mt-3 bg-green-500 hover:bg-green-400 text-white font-bold text-xl py-3 border-b-4 border-green-700 hover:border-green-500 rounded"
            >
              Cadastrar-se
            </button>
            <div className="flex justify-center mt-5">
              <p>ou</p>
            </div>
          </div>
        </form> */}