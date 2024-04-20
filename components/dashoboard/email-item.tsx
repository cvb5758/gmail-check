import { Email } from '@/lib/definition';
import { useState } from 'react';

interface CheckItemProps {
  item: Email;
}
export default function EmailItem({ item }: CheckItemProps) {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          className="form-checkbox h-6 w-6 text-indigo-600"
          checked={checked}
          onChange={handleCheck}
        />
        <p className="text-lg">{item.snippet}</p>
      </div>
      <div>
        <p className="text-sm text-gray-500">
          {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}
