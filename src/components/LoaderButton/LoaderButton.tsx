import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Button, ButtonProps } from "@/components/ui/button";

// Define the type for the props
interface LoaderButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children?: ReactNode;
  variant?: ButtonProps["variant"]; // Use the variant type from ButtonProps
}

// Define the LoaderButton component
const LoaderButton: React.FC<LoaderButtonProps> = ({
  loading = false,
  children,
  className,
  variant = "default", // Set default variant
  ...props
}) => {
  return (
    <Button
      {...props}
      className={`${className} ${loading ? "opacity-70" : ""}`}
      variant={variant} // Pass the variant prop to the Button component
      disabled={loading || props.disabled}
    >
      {loading && <div className="buttonLoader mr-2"></div>}
      {children}
    </Button>
  );
};

// Define buttonLoader styles
const styles = `
  .buttonLoader {
    display: inline-block;
    border: 3px solid rgba(255, 255, 255, 0.6);
    border-top-color: rgba(255, 255, 255, 1);
    border-radius: 50%;
    width: 18px;
    height: 18px;
    animation: blspin 1s linear infinite;
  }

  @keyframes blspin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

// Inject styles into the document
const injectStyles = () => {
  if (typeof document !== "undefined") {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
  }
};

injectStyles();

export default LoaderButton;
