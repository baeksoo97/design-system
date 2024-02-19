export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <button type="button" className="bg-gray-200 text-primary" {...other}>
      {children}
      <h1>header1</h1>
      <h2>header2</h2>
      <h3>header3</h3>
    </button>
  );
}

Button.displayName = "Button";
