// @ts-nocheck
import { Dialog, Transition } from "@headlessui/react";
import PropTypes, { InferProps } from "prop-types";
import { Fragment } from "react";

HelpModalDialog.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export function HelpModalDialog(props: InferProps<typeof HelpModalDialog.propTypes>) {
  return (
    // @ts-ignore
    <Transition.Root show={props.isOpen} as={Fragment}>
      <Dialog onClose={props.setIsOpen} className="relative z-50">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-md-sys-light-scrim bg-opacity-25 transition-opacity" />
        </Transition.Child>
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel
              className={`
                relative transform overflow-hidden rounded-lg 
                bg-md-sys-light-surface text-left shadow-xl transition-all
                text-md-sys-light-on-surface
                w-full max-w-2xl
              `}
            >
              <div className={`p-5`}>
                <Dialog.Title
                  as="h2"
                  className={`
                    font-semibold leading-6 text-md-sys-light-on-surface 
                    text-center
                  `}
                >
                  How to use
                </Dialog.Title>
                <div className="px-4 py-3 text-base">
                  <ul className="list-decimal">
                    <li>
                      Generate tokens file with &nbsp;
                      <a target="_blank" href="https://github.com/oleksii-honchar/mdpal" rel="noreferrer">
                        mdpal
                      </a>
                    </li>
                    <li>Add it to `src/stylesheets/mdpal-tokens.ts`</li>
                    <li> `npm run launch:loc`</li>
                  </ul>
                  <br />
                  <p>
                    Please visit MDTEX github page for more details (
                    <a target="_blank" href="https://github.com/oleksii-honchar/mdtex" rel="noreferrer">
                      link
                    </a>
                    )
                  </p>
                </div>
                <div
                  className={`
                      px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6
                      rounded-b-lg
                      bg-md-sys-light-surface-container-lowest 
                  `}
                >
                  <button
                    type="button"
                    className={`
                      inline-flex w-full justify-center rounded-md px-3 py-2 sm:ml-3 sm:w-auto
                      text-sm font-semibold text-md-sys-light-on-primary-container
                      bg-md-sys-light-primary-container
                      shadow-sm
                      transition-colors duration-200 ease-in-out
                      hover:bg-md-sys-light-primary/80
                      hover:text-md-sys-light-on-primary/80
                    `}
                    onClick={() => props.setIsOpen!(false)}
                  >
                    Ok
                  </button>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
