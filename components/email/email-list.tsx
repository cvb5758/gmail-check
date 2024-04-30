import { Email } from '@/lib/definition';
import { fetchEmails } from '@/lib/Emails';
import { Button } from '@/ui/button';
import { useState } from 'react';
import { EnvelopeOpenIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/router';
import ListDetail from './list-detail';

export default function EmailList({ emails }: { emails: Email[] }) {
  const [email, setEmail] = useState<Email[]>(emails);

  const router = useRouter();

  const handleFetchEmails = async () => {
    try {
      const res = await fetchEmails();
      setEmail(res);
      router.reload();
    } catch (error) {
      console.error('Error fetching emails:', error);
      alert('Error fetching emails');
    }
  };

  return (
    <main>
      <header className="flex items-center justify-center my-2 px-4 sm:px-6 lg:px-8 h-32">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex my-2 items-center justify-center w-full gap-4">
          <Button
            onClick={handleFetchEmails}
            className="bg-white hover:bg-blue-200 font-bold py-3 px-4 rounded-lg shadow-lg border border-blue-200 hover:border-blue-400 "
          >
            <EnvelopeOpenIcon className="h-8 w-8 text-blue-500" />
          </Button>
        </div>
      </header>
      <ListDetail email={email} />
    </main>
  );
}
