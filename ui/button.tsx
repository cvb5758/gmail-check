import { signIn } from 'next-auth/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: () => void;
}

export function Button({ children, className, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={className + 'ransition duration-300 ease-in-out'}
    >
      {children}
    </button>
  );
}
