import EmailList from '@/components/dashoboard/\bemail-list';
import { Button } from '@/ui/button';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

interface Email {
  id: string;
  snippet: string;
}

export default function Dashboard({ emails }: { emails: Email[] }) {
  const { data: session } = useSession();
  const router = useRouter();

  // console.log(emails);

  const handleLogout = async () => {
    const data = await signOut({ redirect: false, callbackUrl: '/' });
    router.push(data.url);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header
        className="bg-white shadow-sm sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16
        className="bg-white shadow-sm sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 h-24
      "
      >
        <div
          className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex 
        items-center justify-between w-full
        gap-4
        "
        >
          <h1 className="text-3xl font-bold text-gray-900">G-Check</h1>
          <Button
            className="
                    bg-blue-500
                    hover:bg-blue-400
                    text-white
                    font-bold
                    py-3
                    px-4
                    rounded-lg
                    shadow-lg
                    transition
                    duration-300
                    ease-in-out
                    flex
                    items-center
                  "
            onClick={handleLogout}
          >
            Sign out
          </Button>
        </div>
      </header>

      <section>
        <EmailList />
      </section>
    </div>
  );
}
