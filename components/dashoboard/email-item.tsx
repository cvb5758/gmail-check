import { Email } from '@/lib/definition';
import { useState } from 'react';

const EmailItem = ({ email }: { email: Email }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
          className="mr-4 h-4 w-4 text-indigo-600"
        />
        <p className="text-lg">{email.subject}</p>
      </div>
    </div>
  );
};

export default EmailItem;
