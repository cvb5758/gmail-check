import { Button } from '@/ui/button';
import Logo from '@/ui/logo';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div
        className="w-full max-w-sm space-y-8 bg-white p-8 shadow-lg rounded-xl text-center flex 
      flex-col items-center justify-center
       "
      >
        <Logo />
        <h1 className="text-xl font-bold">G-Check</h1>
        <Button>
          Log in <ArrowRightIcon className="ml-1 h-5 w-5 text-gray-50" />
        </Button>
      </div>
    </main>
  );
}
