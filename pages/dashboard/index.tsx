import EmailList from '@/components/dashoboard/email-list';
import { Email } from '@/lib/definition';
import { fetchEmails, getEmails, getFilteredEmails } from '@/lib/Emails';
import Header from '@/ui/header';
import { signOut, useSession } from 'next-auth/react';

export default function Dashboard({ emails }: { emails: Email[] }) {
  const { data: session } = useSession();

  return (
    <section className="flex flex-col bg-gray-100 min-h-screen">
      <Header />
      <EmailList emails={emails} />
    </section>
  );
}

export async function getServerSideProps() {
  const emails = await getEmails();
  return {
    props: {
      emails,
    },
  };
}
