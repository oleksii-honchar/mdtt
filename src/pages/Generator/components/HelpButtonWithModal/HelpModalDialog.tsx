// @ts-nocheck
import { Dialog, Transition } from '@headlessui/react';
import PropTypes, { InferProps } from 'prop-types';
import { Fragment } from 'react';

import { HelpContent } from './HelpContent';

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
                bg-md-sys-light-surface-container-lowest text-left shadow-xl transition-all
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
                <HelpContent />
                <div
                  className={`
                    flex flex-grow items-center justify-center
                  `}
                >
                  <button
                    type="button"
                    className={`
                      inline-flex justify-center rounded-md py-2 
                      w-40
                      text-sm font-semibold 
                      border border-md-sys-light-outline-variant
                      
                      text-md-sys-light-primary
                      hover:text-md-sys-light-on-primary
                    
                      bg-md-ref-pal-primary10
                      hover:bg-md-sys-light-primary
                      active:bg-md-ref-pal-primary200
            
                      shadow-sm
                      transition-colors duration-200 ease-in-out
                      focus:outline-none
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
