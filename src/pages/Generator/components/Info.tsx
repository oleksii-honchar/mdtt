export default function Info() {
  return (
    <div
      id="Info"
      className={`
          w-full max-w-3xl md:max-w-4xl lg:max-w-6xl
          px-2 py-4 flex flex-col flex-grow justify-center items-center
          text-md-sys-light-shadow
        `}
    >
      <h1 className="text-3xl font-medium mt-4 mb-4">Material Design TailwindCSS Toolkit</h1>
      <div className="w-full flex flex-col items-center space-y-1">
        <p>
          One cannot bypass making decisions about colors and palettes when developing UI/UX. What should the color of
          the buttons be? What colors should the panels, sidebar, and essentially everything be? The 'Material 3' design
          system approach provides systematic answers to all these questions ([read more](https://m3.material.io/)).
        </p>
        <p>
          Once grasped, it can be effortlessly applied to any application, offering significant relief when a UI
          designer is not available to figure out those colors. The subsequent step involves styling with CSS, which can
          prove to be quite intricate to write, maintain, and expand. This is where TailwindCSS becomes beneficial with
          its utility-first approach for every needed feature. By leveraging TailwindCSS, one can avoid the cumbersome
          task of writing and maintaining an entire layer of CSS files and associated logic (e.g., responses to
          application state). It might seem daunting to learn and remember at first, but after some practice, it becomes
          indispensable ([read more](https://tailwindcss.com/)).
        </p>
        <p>
          Thus, MDTT merges the beauty of Material3 with the efficiency of TailwindCSS by generating a theme and
          exporting the theme JSON. This is then ready to be incorporated into your Tailwind config file.
        </p>
      </div>
    </div>
  );
}
