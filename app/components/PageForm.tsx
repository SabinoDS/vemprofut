import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPwd: string;
}

export function PageForm() {
  const formSchema = Yup.object().shape({
    name: Yup.string()
      .required("O nome é obrigatório")
      .min(3, "O nome deve ter no mínimo 3 caracteres"),
    email: Yup.string()
      .required("O email é obrigatório")
      .email("Email inválido"),
    password: Yup.string()
      .required("A senha é obrigatória")
      .min(3, "A senha deve ter no mínimo 3 caracteres"),
    confirmPwd: Yup.string()
      .required("A confirmação da senha é obrigatória")
      .oneOf([Yup.ref("password")], "Senha não confere"),
  });

  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } =
    useForm<FormData>(formOptions);
  const { errors } = formState;

  async function onSubmit(data: FormData) {
    console.log(data);
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Handle response if necessary
    // const res = await response.json();
    // console.log(res);
    // ...
  }

  return (
    <form
      className="mt-10 space-y-4 w-11/12 md:w-full md:max-w-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-group">
        <label>Nome</label>
        <input
          type="text"
          {...register("name")}
          className={`mt-1 block w-full py-3 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm ${
            errors.name ? "is-invalid" : ""
          }`}
        />
        <div className="invalid-feedback">{errors.name?.message}</div>
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          {...register("email")}
          className={`mt-1 block w-full py-3 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm ${
            errors.email ? "is-invalid" : ""
          }`}
        />
        <div className="invalid-feedback">{errors.email?.message}</div>
      </div>
      <div className="form-group">
        <label>Senha</label>
        <input
          type="password"
          {...register("password")}
          className={`mt-1 block w-full py-3 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm ${
            errors.password ? "is-invalid" : ""
          }`}
        />
        <div className="invalid-feedback">{errors.password?.message}</div>
      </div>
      <div className="form-group">
        <label>Confirmar Senha</label>
        <input
          type="password"
          {...register("confirmPwd")}
          className={`mt-1 block w-full py-3 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm ${
            errors.confirmPwd ? "is-invalid" : ""
          }`}
        />
        <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
      </div>
      <div className="mt-3">
        <button
          type="submit"
          className="w-full mt-3 bg-green-500 hover:bg-green-400 text-white font-bold text-xl py-3 border-b-4 border-green-700 hover:border-green-500 rounded"
        >
          Cadastre-se
        </button>
      </div>
    </form>
  );
}
