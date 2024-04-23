import EmailList from '@/components/dashoboard/email-list';
import { Email } from '@/lib/definition';
import { fetchEmails, getEmails, getFilteredEmails } from '@/lib/Emails';

import { Button } from '@/ui/button';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Dashboard({ emails }: { emails: Email[] }) {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    const data = await signOut({ redirect: false, callbackUrl: '/' });
    router.push(data.url);
  };

  return (
    <section className="flex flex-col bg-gray-100 min-h-screen">
      <Header />
      <EmailList emails={emails} />
    </section>
  );
}

export async function getServerSideProps() {
  const emails = await getFilteredEmails();
  // const emails = await getEmails();

  // console.log(
  //   'emails',
  //   emails.map((email) => email)
  // );
  return {
    props: {
      emails,
    },
  };
}
