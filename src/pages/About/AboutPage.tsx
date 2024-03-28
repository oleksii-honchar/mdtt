export default function AboutPage() {
  return (
    <article
      className={`
        flex flex-col items-center w-full h-full grow
      `}
    >
      <div
        className={`
          w-full max-w-3xl md:max-w-4xl lg:max-w-6xl
          rounded-lg  my-4 p-4 grow
          bg-md-sys-light-surface-container-lowest
        `}
      >
        <h1 className="text-3xl font-medium mt-4 mb-4">Material Design Tailwind Tokens</h1>
        <div className="w-full flex flex-col items-start space-y-2">
          <p>
            One cannot bypass making decisions about colors and palettes when developing UI/UX. What should the color of
            the buttons be? What colors should the panels, sidebar, and essentially everything be? The 'Material 3'
            design system approach provides systematic answers to all these questions (
            <a href="https://m3.material.io/">read more</a>
            ).
          </p>
          <p>
            Once grasped, it can be effortlessly applied to any application, offering significant relief when a UI
            designer is not available to figure out those colors.
          </p>
          <p>
            The subsequent step involves styling with CSS, which can prove to be quite intricate to write, maintain, and
            expand. This is where TailwindCSS becomes beneficial with its utility-first approach for every needed
            feature. By leveraging TailwindCSS, one can avoid the cumbersome task of writing and maintaining an entire
            layer of CSS files and associated logic (e.g., responses to application state). It might seem daunting to
            learn and remember at first, but after some practice, it becomes indispensable (
            <a href="https://tailwindcss.com/">read more</a>).
          </p>
          <p>
            Okay, with the theme colors and roles defined by the Material3 design system, we no longer need to write raw
            CSS, thanks to how TailwindCSS organizes it for us. However, we still need to specify the style and state
            color for every component. This is where the power of design tokens truly begins to stand out. We can start
            by using 'reference' or 'system' tokens and then move on to defining 'component' tokens, crafting our own
            style based on the Material3 palette (
            <a href="https://m3.material.io/foundations/design-tokens/overview">read more</a>).
          </p>
          <p>
            Any changes made to the theme JSON at a later time will be automatically reflected across all component
            styles.
          </p>
          <p>
            Thus, MDTT merges the beauty of Material3 with the efficiency of TailwindCSS by generating a theme and
            exporting the theme JSON. This is then ready to be incorporated into your Tailwind config file.
          </p>
        </div>
      </div>
    </article>
  );
}
