import { Tag } from '@/lib/definition';
import { Button } from '@/ui/button';
import { ArchiveBoxXMarkIcon, XMarkIcon } from '@heroicons/react/20/solid';

export default function Tags({
  tags,
  selectedTags,
  toggleTagSelection,
  onDeleteTag,
}: Tag) {
  return (
    <div
      className="flex flex-wrap gap-2 mt-4 mb-4    
    "
    >
      {tags.map((tag) => (
        <Button
          key={tag}
          onClick={() => toggleTagSelection(tag)}
          className={`py-2 px-4 rounded-lg ${
            selectedTags.has(tag)
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          {tag}
          {selectedTags.has(tag) && (
            <XMarkIcon
              className="h-4 w-4 ml-1"
              onClick={(e) => {
                e.stopPropagation();
                onDeleteTag(tag);
              }}
            />
          )}
        </Button>
      ))}
    </div>
  );
}
