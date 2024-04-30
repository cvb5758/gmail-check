import { Email } from '@/lib/definition';
import { useState } from 'react';
import { EmailItem } from './email-item';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/router';
import Pagenation from '../pagenation/pagenation';
import Tag from '../tag/tag';

export default function ListDetail({ email }: { email: Email[] }) {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [emailsPerPage] = useState(20);

  const indexOfLastEmail = currentPage * emailsPerPage;
  const indexOfFirstEmail = indexOfLastEmail - emailsPerPage;
  const currentEmails = email.slice(indexOfFirstEmail, indexOfLastEmail);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <main className="w-2/3 bg-white p-4 shadow-lg rounded-xl text-center flex flex-col items-center justify-center mx-auto mb-8 border">
      <header className="w-full flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <Tag />
        <div className="flex items-center justify-end sm:px-6 lg:px-8">
          <CheckCircleIcon
            onClick={() => router.reload()}
            className="h-8 w-8 text-green-500 cursor-pointer"
          />
        </div>
      </header>

      <ul className="w-full">
        {currentEmails.map((email) => (
          <EmailItem key={email.id} email={email} />
        ))}
      </ul>
      <Pagenation
        email={email}
        emailsPerPage={emailsPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
    </main>
  );
}
