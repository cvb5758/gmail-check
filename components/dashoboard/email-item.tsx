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
          className="form-checkbox h-6 w-6 text-indigo-600"
          checked={checked}
          onChange={handleCheck}
        />
        <p className="text-lg">{email.subject}</p>
      </div>
    </div>
  );
};

export default EmailItem;
