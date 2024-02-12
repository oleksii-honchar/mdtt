import type { Placement } from "@floating-ui/react";
import {
  FloatingArrow,
  FloatingPortal,
  arrow,
  autoPlacement,
  autoUpdate,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useMergeRefs,
  useRole,
  useTransitionStyles,
} from "@floating-ui/react";
import * as React from "react";
import { useRef } from "react";

interface TooltipOptions {
  initialOpen?: boolean;
  placement?: Placement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function useTooltip({
  initialOpen = false,
  placement = "top",
  open: controlledOpen,
  onOpenChange: setControlledOpen,
}: TooltipOptions = {}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

  const ARROW_HEIGHT = 7;
  const GAP = 2;
  const arrowRef = useRef(null);

  // https://floating-ui.com/docs/react
  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      arrow({
        element: arrowRef.current,
      }),
      offset(ARROW_HEIGHT + GAP),
      autoPlacement({
        crossAxis: true,
        allowedPlacements: ["bottom", "bottom-start", "bottom-end"],
      }),
      shift({ padding: 5 }),
    ],
  });

  const context = data.context;

  const hover = useHover(context, {
    move: false,
    enabled: controlledOpen == null,
  });
  const focus = useFocus(context, {
    enabled: controlledOpen == null,
  });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const interactions = useInteractions([hover, focus, dismiss, role]);

  const { isMounted, styles } = useTransitionStyles(context, {
    initial: {
      opacity: 0,
    },
    open: {
      opacity: 1,
    },
    close: {
      opacity: 0,
    },
    duration: {
      open: 300,
      close: 150,
    },
  });

  return React.useMemo(
    () => ({
      open,
      setOpen,
      arrowRef,
      ...interactions,
      ...data,
      transition: {
        isMounted,
        style: styles,
      },
    }),
    [open, setOpen, interactions, data, arrowRef, styles, isMounted],
  );
}

type ContextType = ReturnType<typeof useTooltip> | null;

const TooltipContext = React.createContext<ContextType>(null);

export const useTooltipContext = () => {
  const context = React.useContext(TooltipContext);

  if (context == null) {
    throw new Error("Tooltip components must be wrapped in <Tooltip />");
  }

  return context;
};

export function Tooltip({ children, ...options }: { children: React.ReactNode } & TooltipOptions) {
  // This can accept any props as options, e.g. `placement`,
  // or other positioning options.
  const tooltip = useTooltip(options);
  return <TooltipContext.Provider value={tooltip}>{children}</TooltipContext.Provider>;
}

export const TooltipTrigger = React.forwardRef<HTMLElement, React.HTMLProps<HTMLElement> & { asChild?: boolean }>(
  function TooltipTrigger({ children, asChild = false, ...props }, propRef) {
    const context = useTooltipContext();
    const childrenRef = (children as any).ref;
    const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

    // `asChild` allows the user to pass any element as the anchor
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(
        children,
        context.getReferenceProps({
          ref,
          ...props,
          ...children.props,
          "data-state": context.open ? "open" : "closed",
        }),
      );
    }

    return (
      <button
        ref={ref}
        // The user can style the trigger based on the state
        data-state={context.open ? "open" : "closed"}
        {...context.getReferenceProps(props)}
      >
        {children}
      </button>
    );
  },
);

export const TooltipContent = React.forwardRef<HTMLDivElement, React.HTMLProps<HTMLDivElement>>(function TooltipContent(
  { style, children, ...props },
  propRef,
) {
  const context = useTooltipContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  if (!context.transition.isMounted) return null;

  //console.log(JSON.stringify(context.transition));

  return (
    <FloatingPortal>
      {context.transition.isMounted && (
        <div
          ref={ref}
          style={{
            ...style,
            ...context.floatingStyles,
            ...context.transition.style,
          }}
          {...context.getFloatingProps(props)}
        >
          <FloatingArrow
            ref={context.arrowRef}
            context={context}
            tipRadius={2}
            fill="#C1C7CE"
            className="tooltip-arrow"
          />
          {children}
        </div>
      )}
    </FloatingPortal>
  );
});
