import { checkedEmails } from '@/lib/Emails';
import { Email } from '@/lib/definition';
import { useState } from 'react';

export const EmailItem = ({ email }: { email: Email }) => {
  const [checked, setChecked] = useState(email.isChecked || false);

  const handleCheck = async () => {
    try {
      const newCheckedState = !checked;
      await checkedEmails(email.id, newCheckedState);
      setChecked(newCheckedState);
    } catch (error) {
      console.error('Failed to check email:', error);
    }
  };
  return (
    <article
      className={`flex items-center justify-between p-4 border-b border-gray-200 ${
        checked ? 'bg-blue-100' : ''
      }`}
    >
      <label className="flex items-center space-x-4 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheck}
          className="mr-4 h-4 w-4 text-indigo-600"
        />
        <span
          className={`flex-1 text-left ${
            checked ? 'line-through text-gray-500' : ''
          }`}
        >
          {email.subject}
        </span>
      </label>
      <span className={`text-right ${checked ? 'text-gray-500' : ''}`}>
        {email.receivedAt}
      </span>
    </article>
  );
};
