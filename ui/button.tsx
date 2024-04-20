import { signIn } from 'next-auth/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <button
      onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
      className="mt-6 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline  "
    >
      {children}
    </button>
  );
}
