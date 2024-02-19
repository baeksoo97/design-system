export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button type="button" className="bg-red-300" {...other}>
      {children}
    </button>
  );
}

Button.displayName = "Button";
