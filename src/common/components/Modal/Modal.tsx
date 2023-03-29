import { createPortal } from "react-dom";

import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import { IModal } from "./Modal.interface";
import { modal_variant, opacity_variant } from "./Modal.constant";
import "./Modal.style.css";

const elementModal = document.getElementById("__modal");

export default function Modal({ open, onClose, children }: IModal) {
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
              variants={modal_variant}
              initial="initial"
              animate="animate"
              exit="exit"
              id="staticModal"
              data-modal-backdrop="static"
              aria-hidden="true"
              className="container_modal"
            >
              <div className="modal">
                <div className="modal_content">
                  <button
                    type="button"
                    className="modal_close"
                    data-modal-hide="staticModal"
                    onClick={onClose}
                  >
                    <FaTimes size={24} />
                  </button>
                  <div className="md:p-6 space-y-6">{children}</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={opacity_variant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="screen_opacity"
            ></motion.div>
          </>
        )}
      </AnimatePresence>,
      elementModal
    );
  }
  return null;
}
