import { Email } from '@/lib/definition';
import { useEffect, useState } from 'react';

export default function EmailList() {
  const [emails, setEmails] = useState<Email[]>([]);

  useEffect(() => {
    fetch('/api/emails')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setEmails(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

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
      <h1 className="text-xl font-bold">Check List</h1>
    </section>
  );
}
