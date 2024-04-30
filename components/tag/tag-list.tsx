import { DeleteTag } from '@/lib/Tag';
import { Tag } from '@/lib/definition';
import { Button } from '@/ui/button';
import { XMarkIcon } from '@heroicons/react/20/solid';

interface TagListProps {
  tags: { _id: string; name: string; selected: boolean }[];
  toggleTagSelection: (id: string) => void;
  deleteTag: (name: string) => void;
}

export default function TagList({
  tags,
  toggleTagSelection,
  deleteTag,
}: TagListProps) {
  return (
    <div className="flex flex-wrap gap-2 overflow-auto max-h-24">
      {tags.map((tag) => (
        <Button
          key={tag._id}
          onClick={() => toggleTagSelection(tag._id)}
          className={`ml-4 py-2 px-4 rounded-lg  text-gray-700 border border-blue-200
           ${tag.selected ? 'bg-blue-400 text-white border-none ' : ' '}`}
        >
          <div className="flex items-center justify-between">
            {tag.name}
            {tag.selected && (
              <XMarkIcon
                className="h-4 w-4 ml-1"
                onClick={(e) => {
                  e.stopPropagation();
                  deleteTag(tag.name);
                }}
              />
            )}
          </div>
        </Button>
      ))}
    </div>
  );
}
