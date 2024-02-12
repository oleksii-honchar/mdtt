import PaletteContainer from "src/containers/PaletteContainer/PaletteContainer.tsx";

export default function ExplorerPage() {
  return (
    <article
      className={`
        flex flex-col items-center w-full
      `}
    >
      <PaletteContainer />
    </article>
  );
}
