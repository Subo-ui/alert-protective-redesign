import React, { ReactNode } from "react";
import { cn } from "./cn";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
}

export const AuroraBackground = ({
  className,
  children,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "absolute inset-0 h-full min-h-screen w-full pointer-events-none",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          `
          [--aurora:repeating-linear-gradient(100deg,var(--blue-200)_10%,var(--indigo-100)_15%,var(--blue-100)_20%,var(--violet-100)_25%,var(--blue-300)_30%)]
          [background-image:var(--aurora)]
          [background-size:300%,_200%]
          [background-position:50%_50%]
          filter blur-[16px]
          animate-aurora
          absolute inset-0 h-full min-h-screen w-full opacity-25 will-change-transform`
        )}
      ></div>
      {children}
    </div>
  );
}; 