import { Dialog, Transition } from "@headlessui/react";
import quadra from "../../public/img/quadra.png";
import { Fragment } from "react";
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
              <div>
                <div className="flex flex-row">
                  <select name="" id="">
                    <option value="">30/09</option>
                  </select>

                  <h3>Horários para agendamento</h3>
                </div>

                <div className="bg-red-500">
                  <div className="bg-white text-black">15:00 - 16:00</div>
                </div>
              </div>
            </Dialog.Description>

            <div className="mt-4 text-right">
              <button
                onClick={onClose}
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
