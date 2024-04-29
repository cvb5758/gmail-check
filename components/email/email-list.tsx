import { Email } from '@/lib/definition';
import { fetchEmails } from '@/lib/Emails';
import { Button } from '@/ui/button';
import { EmailItem } from './email-item';
import { useEffect, useState } from 'react';
import { DeleteTag, fetchTags } from '@/lib/Tag';
import {
  CheckCircleIcon,
  EnvelopeOpenIcon,
  PlusIcon,
} from '@heroicons/react/20/solid';
import { useRouter } from 'next/router';
import Tags from '../tag/tag';
import TagModal from '../tag/tag-modal';
import ListDetail from './list-detail';

export default function EmailList({ emails }: { emails: Email[] }) {
  const [email, setEmail] = useState<Email[]>(emails);
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<Set<string>>(new Set());

  // useEffect(() => {
  //   const loadTags = async () => {
  //     const fetchedTags = await fetchTags();
  //     setTags(fetchedTags.map((tag: { name: string }) => tag.name));
  //   };
  //   loadTags();
  // }, []);

  const handleFetchEmails = async () => {
    try {
      const res = await fetchEmails();
      setEmail(res);
    } catch (error) {
      console.error('Error fetching emails:', error);
      alert('Error fetching emails');
    }
  };

  // const handleDeleteTag = async (tag: string) => {
  //   try {
  //     const response = await DeleteTag(tag);
  //     if (response) {
  //       setTags(tags.filter((t) => t !== tag));
  //       router.reload();
  //     }
  //   } catch (error) {
  //     console.error('Failed to delete tag:', error);
  //   }
  // };

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };

  // const onAddTag = (tag: string) => {
  //   const updatedTags = [...tags, tag];
  //   setTags(updatedTags);
  // };

  const toggleTagSelection = (tag: string) => {
    const newSet = new Set(selectedTags);
    if (newSet.has(tag)) {
      newSet.delete(tag);
    } else {
      newSet.add(tag);
    }
    setSelectedTags(newSet);
  };

  // const filteredEmails = currentEmails.filter(
  //   (email) =>
  //     selectedTags.size === 0 ||
  //     Array.from(selectedTags).some((tag) => email.subject.includes(tag))
  // );

  // // 페이지 번호를 설정하는 함수
  // const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

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
      {/* <article className="w-2/3 bg-white p-4 shadow-lg rounded-xl text-center flex flex-col items-center justify-center mx-auto mb-8 border">
        <div className="w-full flex items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
          <div className="w-full flex items-center justify-start px-4 py-2 sm:px-6 lg:px-8">
            <Button
              onClick={handleOpenModal}
              className="bg-white hover:bg-blue-200 font-bold m-2 py-3 px-4 rounded-lg flex items-center border border-blue-200 "
            >
              <p className="text-gray-700 mr-1">태그 추가</p>
              <PlusIcon className="h-5 w-5 text-blue-500" />
            </Button>

            <Tags
              tags={tags}
              selectedTags={selectedTags}
              toggleTagSelection={toggleTagSelection}
              onDeleteTag={handleDeleteTag}
            />
          </div>
          <div className="flex items-center justify-end sm:px-6 lg:px-8">
            <CheckCircleIcon
              onClick={() => router.reload()}
              className="h-8 w-8 text-green-500 cursor-pointer"
            />
          </div>
        </div>

        <div className="w-full">
          {filteredEmails.map((email) => (
            <EmailItem key={email.id} email={email} />
          ))}
        </div>
        {isModalOpen && (
          <TagModal onClose={() => setIsModalOpen(false)} onAddTag={onAddTag} />
        )}
        <div className="flex items-center justify-center gap-2 w-full p-4 sm:px-6 lg:px-8">
          {Array.from(
            { length: Math.ceil(emails.length / emailsPerPage) },
            (_, i) => (
              <Button
                key={i + 1}
                onClick={() => {
                  paginate(i + 1);
                }}
                className={`${
                  currentPage === i + 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-white text-gray-800'
                } border border-blue-200 hover:bg-blue-200 hover:border-blue-400 font-bold px-2 rounded-lg shadow-lg `}
              >
                {i + 1}
              </Button>
            )
          )}
        </div>
      </article> */}
      <ListDetail email={email} />
    </main>
  );
}
