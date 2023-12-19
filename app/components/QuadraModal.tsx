import { Dialog, Transition } from "@headlessui/react";
import quadra from "../../public/img/quadra.png";
import { Fragment } from "react";
import Select from "../components/Select";
import Image from "next/image";

interface MyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuadraModal({ isOpen, onClose }: MyModalProps) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay />

          <div
            className="inline-block align-middle my-16 bg-green-500 text-left shadow-md rounded-3xl"
            style={{ width: "900px", marginTop: "6em" }}
          >
            <div>
              <Image src={quadra} alt="quadra" className="w-full" />
            </div>
            <Dialog.Description className="mt-2 text-sm p-2">
              <div className="flex flex-row">
                <div className="w-full">
                  <div className="flex flex-row gap-10 mb-1">
                    <Select />

                    <h3 className="text-lg font-semibold">
                      Horários para agendamento
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-white text-black w-24 text-center rounded font-bold p-1">
                      15:00 - 16:00
                    </div>
                    <div className="bg-white text-black w-24 text-center rounded font-bold p-1">
                      15:00 - 16:00
                    </div>
                    <div className="bg-white text-black w-24 text-center rounded font-bold p-1">
                      15:00 - 16:00
                    </div>
                    <div className="bg-white text-black w-24 text-center rounded font-bold p-1">
                      15:00 - 16:00
                    </div>
                    <div className="bg-white text-black w-24 text-center rounded font-bold p-1">
                      15:00 - 16:00
                    </div>
                    <div className="bg-white text-black w-24 text-center rounded font-bold p-1">
                      15:00 - 16:00
                    </div>
                    <div className="bg-white text-black w-24 text-center rounded font-bold p-1">
                      15:00 - 16:00
                    </div>
                    <div className="bg-white text-black w-24 text-center rounded font-bold p-1">
                      15:00 - 16:00
                    </div>
                  </div>
                </div>

                <div className="flex flex-col w-2/4 pl-4">
                  <span className="text-lg font-semibold text-center">
                    Ginásio Bola na Rede
                  </span>
                  <div className="flex flex-col">
                    <span className="flex flex-row items-center gap-2 text-base font-normal cursor-pointer mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <path
                          d="M15 6.08036C10.1317 6.08036 6.17411 10.0379 6.16741 14.9062C6.16741 16.5737 6.63616 18.2009 7.52009 19.6004L7.72768 19.9353L6.83705 23.1897L10.1786 22.3125L10.5 22.5067C11.8527 23.3103 13.4062 23.7388 14.9933 23.7388H15C19.8616 23.7388 23.9263 19.7812 23.9263 14.9129C23.9263 12.5558 22.9085 10.3393 21.2411 8.67188C19.567 6.99777 17.3571 6.08036 15 6.08036ZM20.1897 18.6964C19.9688 19.3192 18.9107 19.8817 18.4018 19.9554C17.558 20.0826 16.9018 20.0156 15.221 19.2924C12.5625 18.1406 10.8214 15.4621 10.6875 15.2879C10.5536 15.1138 9.60268 13.8482 9.60268 12.5424C9.60268 11.2366 10.2857 10.5937 10.5335 10.3259C10.7746 10.058 11.0625 9.99107 11.2433 9.99107C11.4174 9.99107 11.5982 9.99107 11.7522 9.99777C11.9129 10.0045 12.1339 9.9375 12.3482 10.4531C12.5692 10.9821 13.0982 12.2879 13.1652 12.4219C13.2321 12.5558 13.279 12.7098 13.1853 12.8839C12.6763 13.9018 12.1339 13.8616 12.4085 14.3304C13.433 16.0915 14.4576 16.7009 16.0179 17.4844C16.2857 17.6183 16.4397 17.5982 16.5938 17.4174C16.7478 17.2433 17.2567 16.6406 17.4308 16.3795C17.6049 16.1116 17.7857 16.1585 18.0268 16.2455C18.2679 16.3326 19.5737 16.9754 19.8415 17.1094C20.1094 17.2433 20.2835 17.3103 20.3504 17.4174C20.4107 17.5446 20.4107 18.0804 20.1897 18.6964ZM26.7857 0H3.21429C1.43973 0 0 1.43973 0 3.21429V26.7857C0 28.5603 1.43973 30 3.21429 30H26.7857C28.5603 30 30 28.5603 30 26.7857V3.21429C30 1.43973 28.5603 0 26.7857 0ZM14.9933 25.5268C13.2121 25.5268 11.4643 25.0781 9.91741 24.2344L4.28571 25.7143L5.79241 20.2098C4.86161 18.6027 4.37277 16.7746 4.37277 14.8996C4.37946 9.04688 9.14062 4.28571 14.9933 4.28571C17.8326 4.28571 20.4978 5.39062 22.5067 7.39955C24.5089 9.40848 25.7143 12.0737 25.7143 14.9129C25.7143 20.7656 20.846 25.5268 14.9933 25.5268Z"
                          fill="#F8F8F8"
                        />
                      </svg>
                      Clique para marcar seu jogo
                    </span>
                    <span className="flex flex-row items-center gap-2 text-base font-normal cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                      >
                        <g clip-path="url(#clip0_118_491)">
                          <path
                            d="M15 30C15 30 4.5 16.305 4.5 10.5C4.5 9.12112 4.77159 7.75574 5.29927 6.48182C5.82694 5.20791 6.60036 4.05039 7.57538 3.07538C8.55039 2.10036 9.70791 1.32694 10.9818 0.799265C12.2557 0.271591 13.6211 0 15 0C16.3789 0 17.7443 0.271591 19.0182 0.799265C20.2921 1.32694 21.4496 2.10036 22.4246 3.07538C23.3996 4.05039 24.1731 5.20791 24.7007 6.48182C25.2284 7.75574 25.5 9.12112 25.5 10.5C25.5 16.305 15 30 15 30ZM15 13.5C15.7956 13.5 16.5587 13.1839 17.1213 12.6213C17.6839 12.0587 18 11.2956 18 10.5C18 9.70435 17.6839 8.94129 17.1213 8.37868C16.5587 7.81607 15.7956 7.5 15 7.5C14.2044 7.5 13.4413 7.81607 12.8787 8.37868C12.3161 8.94129 12 9.70435 12 10.5C12 11.2956 12.3161 12.0587 12.8787 12.6213C13.4413 13.1839 14.2044 13.5 15 13.5Z"
                            fill="#F8F8F8"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_118_491">
                            <rect width="30" height="30" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      R. Barão de Santa Tecla, 193 A
                    </span>
                  </div>
                </div>
              </div>
            </Dialog.Description>

            <div className="mt-4 text-right">
              <button
                onClick={onClose}
                className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              >
                Finalizar
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
