import { Email } from '@/lib/definition';
import { Button } from '@/ui/button';

interface PagenationProps {
  email: Email[];
  emailsPerPage: number;
  paginate: any;
  currentPage: number;
}

export default function Pagenation({
  email,
  emailsPerPage,
  paginate,
  currentPage,
}: PagenationProps) {
  return (
    <div className="flex items-center justify-center gap-2 w-full p-4 sm:px-6 lg:px-8">
      {Array.from(
        { length: Math.ceil(email.length / emailsPerPage) },
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
  );
}
