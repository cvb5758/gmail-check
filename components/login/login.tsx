import { Button } from '@/ui/button';
import Logo from '@/ui/logo';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  const handleLogin = async () => {
    const data = await signIn('google', { callbackUrl: '/dashboard' });
  };

  return (
    <main className="flex items-center justify-center min-h-screen p-4">
      <div
        className="w-full max-w-sm space-y-8 bg-white p-8 shadow-lg rounded-xl text-center flex 
      flex-col items-center justify-center gap-4"
      >
        <Logo />
        <div className="w-full flex flex-col items-center justify-center gap-4">
          <h1 className="text-xl font-bold">G-Check []</h1>
          <Button
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out flex items-center "
            onClick={handleLogin}
          >
            Log in <ArrowRightIcon className="ml-1 h-5 w-5 text-gray-50" />
          </Button>
        </div>
      </div>
    </main>
  );
}
