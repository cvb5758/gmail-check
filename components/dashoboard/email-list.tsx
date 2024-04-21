import { Email } from '@/lib/definition';
import { useState } from 'react';
import EmailItem from './email-item';
import { fetchEmails } from '@/lib/Emails';
import { Button } from '@/ui/button';

export default function EmailList({ emails }: { emails: Email[] }) {
  const [email, setEmail] = useState(emails);

  const handlefetchEmails = async () => {
    const data = await fetchEmails();
    setEmail(data);
  };

  return (
    <section
      className="w-4/5
      bg-white
      p-4
      shadow-lg
      rounded-xl
      text-center
      flex flex-col items-center justify-center
      mx-auto
      my-8
    "
    >
      <header
        className="
        w-full
        flex
        items-center
        justify-between
        gap-4
        p-4
      "
      >
        <h2 className="text-2xl font-bold text-gray-900">나한테 온 메일</h2>
        <Button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-3 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out flex items-center"
          onClick={fetchEmails}
        >
          메일 가져오기
        </Button>
      </header>
      <article className="w-full">
        {email.map((email) => (
          <EmailItem key={email.id} items={email} />
        ))}
      </article>
    </section>
  );
}
