import { css } from '@emotion/react';
import { useAtomValue } from 'jotai';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Footer } from 'src/components/Footer.tsx';
import { PageNavbar } from 'src/containers/PageNavbar/PageNavbar';
import { themeAtom } from 'src/state/color-atoms';
import { nl } from 'src/utils/native-lodash';

export function Layout({}) {
  const theme = useAtomValue(themeAtom);
  const [customFrom, setCustomFrom] = useState('#ffffff');
  const [customTo, setCustomTo] = useState('#ffffff');

  const customGradientCss = css`
    --tw-gradient-from: ${customFrom};
    --tw-gradient-to: ${customTo};
  `;

  useEffect(() => {
    if (theme) {
      setCustomFrom(nl.get(theme, 'colors.md.ref.pal.primary200'));
      setCustomTo(nl.get(theme, 'colors.md.ref.pal.tertiary600'));
    }
  }, [theme]);

  return (
    <div
      css={customGradientCss}
      className={`
        flex min-h-screen w-full flex-col 
        bg-[radial-gradient(ellipse_90%_50%_at_50%_10%,_var(--tw-gradient-stops))] 
        bg-gradient-to-br
        from-md-sys-light-surface-container-lowest to-md-sys-light-surface-container
        bg-contain bg-no-repeat bg-top bg-cover
      `}
    >
      <PageNavbar />
      <main className="w-full flex flex-col flex-1 items-center justify-start">
        <Outlet />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" />
    </div>
  );
}
