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
    <div className="flex flex-wrap gap-2 overflow-auto max-h-24">
      {tags.map((tag) => (
        <Button
          key={tag}
          onClick={() => toggleTagSelection(tag)}
          className={`ml-4 py-2 px-4 rounded-lg ${
            selectedTags.has(tag)
              ? 'bg-blue-300 text-white'
              : 'bg-gray-200 text-gray-800'
          }`}
        >
          <div className="flex items-center justify-between">
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
          </div>
        </Button>
      ))}
    </div>
  );
}
