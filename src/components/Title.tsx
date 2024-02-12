export function Title() {
  return (
    <div className="w-full space-x-4 flex flex-col justify-center items-center">
      <p
        className={`
          text-md-sys-on-background
          font-bold
          text-xl 
        `}
      >
        MDTEX
      </p>
      <p
        className={`
          text-md-sys-on-background
          text-xs 
        `}
      >
        Material design tokens explorer
      </p>
    </div>
  );
}
