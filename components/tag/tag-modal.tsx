import { AddTag } from '@/lib/Tag';
import { useState } from 'react';

interface TagModalProps {
  onClose: () => void;
  onAddTag: (tag: string) => void;
}

export default function TagModal({ onClose, onAddTag }: TagModalProps) {
  const [tag, setTag] = useState('');

  const handleAddTag = async () => {
    try {
      const response = await AddTag(tag);
      if (response) {
        onAddTag(tag);
        onClose();
      }
    } catch (error) {
      console.error('Failed to add tag:', error);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-lg">
        <input
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder="Add a tag"
          className="border p-2 rounded"
        />
        <button
          onClick={handleAddTag}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
        >
          Add
        </button>
        <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}
