import React from "react";

type Props = {};

const AdministrationForm = (props: Props) => {
  return (
    <div className="container mx-auto mt-8 p-24">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Cadastro de Quadras
      </h2>
      <form className="mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="nome"
              className="block text-sm font-medium text-gray-700"
            >
              Nome
            </label>
            <input
              type="text"
              id="nome"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label
              htmlFor="Tipo"
              className="block text-sm font-medium text-gray-700"
            >
              Tipo
            </label>
            <input
              type="text"
              id="tipo"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label
              htmlFor="valor"
              className="block text-sm font-medium text-gray-700"
            >
              Valor R$
            </label>
            <input
              type="number"
              step="0.10"
              id="valor"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          <div>
            <label
              htmlFor="endereco"
              className="block text-sm font-medium text-gray-700"
            >
              Endereço
            </label>
            <input
              type="text"
              id="endereco"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label
              htmlFor="horarisoFunc"
              className="block text-lg font-medium text-gray-700 mb-2"
            >
              Horários de Funcionamento
            </label>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="horario-17"
                  value="17"
                  className="mr-2"
                />
                <label htmlFor="horario-17">17 horas</label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="horario-18"
                  value="18"
                  className="mr-2"
                />
                <label htmlFor="horario-18">18 horas</label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="horario-19"
                  value="19"
                  className="mr-2"
                />
                <label htmlFor="horario-19">19 horas</label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="horario-20"
                  value="20"
                  className="mr-2"
                />
                <label htmlFor="horario-20">20 horas</label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="horario-21"
                  value="21"
                  className="mr-2"
                />
                <label htmlFor="horario-21">21 horas</label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="horario-22"
                  value="22"
                  className="mr-2"
                />
                <label htmlFor="horario-22">22 horas</label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="horario-23"
                  value="23"
                  className="mr-2"
                />
                <label htmlFor="horario-23">23 horas</label>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <div>
            <label
              htmlFor="tel"
              className="block text-sm font-medium text-gray-700"
            >
              Telefone
            </label>
            <input
              type="text"
              id="telefone"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div>
            <label
              htmlFor="capa"
              className="block text-sm font-medium text-gray-700"
            >
              Imagem da Quadra
            </label>
            <input
              type="url"
              id="capa"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>

        <div className="mb-4 mt-4">
          <label
            htmlFor="descricao"
            className="block text-sm font-medium text-gray-700"
          >
            Descrição
          </label>
          <textarea
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            id="descricao"
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
