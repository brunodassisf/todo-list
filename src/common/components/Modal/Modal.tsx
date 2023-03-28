import { createPortal } from "react-dom";

import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

interface IModal {
  open: boolean;
  title?: string;
  children: React.ReactNode;
  onClose: () => void;
}

const elementModal = document.getElementById("__modal");

export default function Modal({ open, title, onClose, children }: IModal) {
  if (elementModal) {
    return createPortal(
      <AnimatePresence>
        {open && (
          <>
            <style>
              {`
                html, body {
                    overflow: hidden;
                }
              `}
            </style>
            <motion.div
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: 100, opacity: 1, transition: { duration: 0.7 } }}
              exit={{ y: 0, opacity: 0, transition: { duration: 0.5 } }}
              id="staticModal"
              data-modal-backdrop="static"
              aria-hidden="true"
              className="fixed z-50 top-0 left-0 w-full h-full"
            >
              <div className="relative w-full h-full max-w-2xl mx-auto px-4 md:px-0">
                <div className="relative bg-white rounded-lg shadow ">
                  <div className="flex items-start justify-between p-4  rounded-t">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {title && ""}
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="staticModal"
                      onClick={onClose}
                    >
                      <FaTimes size={24} />
                    </button>
                  </div>

                  <div className="md:p-6 space-y-6">{children}</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed bg-black/70 w-full h-full top-0 left-0"
            ></motion.div>
          </>
        )}
      </AnimatePresence>,
      elementModal
    );
  }
  return null;
}
