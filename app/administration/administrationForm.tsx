import React from "react";

type Props = {};

const AdministrationForm = (props: Props) => {
  return (
    <div className="container mx-auto">
      <h2 className="mt-2 text-2xl font-bold">Cadastro de Filmes</h2>
      <form className="mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="titulo"
              className="block text-sm font-medium text-gray-700"
            >
              Título do Filme
            </label>
            <input
              type="text"
              id="titulo"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              // {...register("titulo")}
              // required
            />
          </div>
          <div>
            <label
              htmlFor="genero"
              className="block text-sm font-medium text-gray-700"
            >
              Gênero
            </label>
            <input
              type="text"
              id="genero"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              // {...register("genero")}
              // required
            />
          </div>
          <div>
            <label
              htmlFor="preco"
              className="block text-sm font-medium text-gray-700"
            >
              Preço R$
            </label>
            <input
              type="number"
              step="0.10"
              id="preco"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              // {...register("preco")}
              // required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          <div>
            <label
              htmlFor="duracao"
              className="block text-sm font-medium text-gray-700"
            >
              Duração
            </label>
            <input
              type="text"
              id="duracao"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              // {...register("duracao")}
              // required
            />
          </div>
          <div>
            <label
              htmlFor="data"
              className="block text-sm font-medium text-gray-700"
            >
              Data Estreia:
            </label>
            <input
              type="date"
              id="data"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              // {...register("data")}
              // required
            />
          </div>
          <div>
            <label
              htmlFor="classif"
              className="block text-sm font-medium text-gray-700"
            >
              Classif. Indicativa
            </label>
            <select
              id="classif"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              // {...register("classif")}
              // required
            >
              <option value="livre">Livre</option>
              <option value="10">10 anos</option>
              <option value="12">12 anos</option>
              <option value="14">14 anos</option>
              <option value="16">16 anos</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label
              htmlFor="artista"
              className="block text-sm font-medium text-gray-700"
            >
              Ator/Atriz Principal
            </label>
            <input
              type="text"
              id="artista"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              // {...register("artista")}
              // required
            />
          </div>
          <div>
            <label
              htmlFor="capa"
              className="block text-sm font-medium text-gray-700"
            >
              Capa do Filme
            </label>
            <input
              type="url"
              id="capa"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              // {...register("capa")}
              // required
            />
          </div>
        </div>

        <div className="mb-4 mt-4">
          <label
            htmlFor="sinopse"
            className="block text-sm font-medium text-gray-700"
          >
            Sinopse
          </label>
          <textarea
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            id="sinopse"
            // rows="3"
            // {...register("sinopse")}
            required
          ></textarea>
        </div>

        <input type="submit" value="Enviar" className="btn btn-primary me-3" />
        <input type="button" value="Limpar" className="btn btn-danger" />
      </form>
    </div>
  );
};

export default AdministrationForm;
