import { signIn } from 'next-auth/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <button
      onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
      className="flex items-center justify-between px-4 py-2
       bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md transition-colors duration-200 ease-in-out"
    >
      {children}
    </button>
  );
}
