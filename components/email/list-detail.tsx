import { fetchTags } from '@/lib/Tag';
import { Email } from '@/lib/definition';
import { useEffect, useState } from 'react';
import { EmailItem } from './email-item';
import TagModal from '../tag/tag-modal';
import { Button } from '@/ui/button';
import { CheckCircleIcon } from '@heroicons/react/20/solid';
import { useRouter } from 'next/router';
import Pagenation from '../page/pagenation';

export default function ListDetail({ email }: { email: Email[] }) {
  const router = useRouter();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [emailsPerPage] = useState(20);

  const indexOfLastEmail = currentPage * emailsPerPage;
  const indexOfFirstEmail = indexOfLastEmail - emailsPerPage;
  const currentEmails = email.slice(indexOfFirstEmail, indexOfLastEmail);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  // useEffect(() => {
  //   const loadTags = async () => {
  //     const fetchedTags = await fetchTags();
  //     setTags(fetchedTags.map((tag: { name: string }) => tag.name));
  //   };
  //   loadTags();
  // }, []);

  // const onAddTag = async (tag: string) => {};

  // const filteredEmails = currentEmails.filter(async (email) => {
  //   const tags = await loadTags();
  //   return (
  //     tags.length === 0 ||
  //     tags.some((tag: string) => email.subject.includes(tag))
  //   );
  // });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  return (
    <main className="w-2/3 bg-white p-4 shadow-lg rounded-xl text-center flex flex-col items-center justify-center mx-auto mb-8 border">
      <header className="w-full flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="w-full flex items-center justify-start px-4 py-2 sm:px-6 lg:px-8">
          <button
            onClick={handleOpenModal}
            className="bg-white hover:bg-blue-200 font-bold m-2 py-3 px-4 rounded-lg flex items-center border border-blue-200 "
          >
            <p className="text-gray-700 mr-1">태그 추가</p>
            {/* <PlusIcon className="h-5 w-5 text-blue-500" /> */}
          </button>

          {/* <Tags
            tags={tags}
            selectedTags={selectedTags}
            toggleTagSelection={toggleTagSelection}
            onDeleteTag={handleDeleteTag}
          /> */}
        </div>
        <div className="flex items-center justify-end sm:px-6 lg:px-8">
          <CheckCircleIcon
            onClick={() => router.reload()}
            className="h-8 w-8 text-green-500 cursor-pointer"
          />
        </div>
      </header>

      <ul className="w-full">
        {email.map((email) => (
          <EmailItem key={email.id} email={email} />
        ))}
      </ul>
      {isModalOpen && <TagModal isModal={isModalOpen} />}
      <Pagenation
        email={email}
        emailsPerPage={emailsPerPage}
        paginate={paginate}
        currentPage={currentPage}
      />
    </main>
  );
}
