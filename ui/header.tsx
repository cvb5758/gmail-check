import { Button } from './button';
import { signOut } from 'next-auth/react';
import router from 'next/router';

export default function Header() {
  const handleLogout = async () => {
    const data = await signOut({ redirect: false, callbackUrl: '/' });
    router.push(data.url);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 h-24">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center justify-between w-full gap-4">
        <h1 className="text-3xl font-bold text-gray-600 p-2">G-Check</h1>
        <Button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-4 rounded-lg shadow-lg flex items-center"
          onClick={handleLogout}
        >
          Sign out
        </Button>
      </div>
    </header>
  );
}
