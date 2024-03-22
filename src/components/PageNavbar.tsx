import { PageNavItems } from './PageNavItems.tsx';
import { Title } from './Title.tsx';
export function PageNavbar() {
  return (
    <div
      id="PageNavbar"
      className={`
        w-full mx-auto shadow-sm  
        flex items-center justify-center
        bg-md-sys-light-surface-container-lowest
      `}
    >
      <div
        className={`
          w-full px-2 
          max-w-3xl md:max-w-4xl lg:max-w-6xl 
          relative flex h-10 items-center justify-between
        `}
      >
        <Title />
        <PageNavItems />
      </div>
    </div>
  );
}
