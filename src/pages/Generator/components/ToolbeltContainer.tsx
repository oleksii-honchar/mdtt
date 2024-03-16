import { ReactNode } from 'react';

type ToolbeltContainerProps = {
  children: ReactNode;
};

export default function ToolbeltContainer({ children }: ToolbeltContainerProps) {
  return (
    <div
      id="ToolbeltContainer"
      className={`
          w-full max-w-3xl md:max-w-4xl lg:max-w-6xl
          flex flex-col flex-grow justify-center items-center
          rounded-tl-lg rounded-tr-lg
          backdrop-blur-sm shadow-sm  
          bg-md-sys-light-surface-container-lowest
        `}
    >
      {children}
    </div>
  );
}
