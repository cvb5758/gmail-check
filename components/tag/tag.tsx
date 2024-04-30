import { Button } from '@/ui/button';
import { useState } from 'react';
import { PlusIcon } from '@heroicons/react/20/solid';
import TagModal from './tag-modal';
import { useQuery } from 'react-query';
import { fetchTags } from '@/lib/Tag';
import TagList from './tag-list';
import { useTagActions } from '../hooks/useTagActions';

export default function Tag() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: tags, error, isLoading } = useQuery('tags', fetchTags);
  const { addTag, deleteTag, toggleTagSelection } = useTagActions();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.toString()}</p>;

  const handleOpenModal = () => setIsModalOpen(true);
  const onClose = () => setIsModalOpen(false);

  return (
    <div className="w-full flex items-center justify-start px-4 py-2 sm:px-6 lg:px-8">
      <Button
        onClick={handleOpenModal}
        className="bg-white hover:bg-blue-200 font-bold m-2 py-3 px-4 rounded-lg flex items-center border border-blue-200 "
      >
        <p className="text-gray-700 mr-1">태그 추가</p>
        <PlusIcon className="h-5 w-5 text-blue-500" />
      </Button>
      <TagList
        tags={tags}
        toggleTagSelection={toggleTagSelection.mutate}
        deleteTag={deleteTag.mutate}
      />
      {isModalOpen && <TagModal onClose={onClose} addTag={addTag.mutate} />}
    </div>
  );
}
