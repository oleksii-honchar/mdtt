import PaletteContainer from 'src/containers/PaletteContainer/PaletteContainer.tsx';
import ToolbeltContainer from './components/ToolbeltContainer';

export default function GeneratorPage() {
  return (
    <article
      className={`
        flex flex-col items-center w-full
      `}
    >
      <div className="rounded-lg my-4">
        <ToolbeltContainer />
        <PaletteContainer />
      </div>
    </article>
  );
}
