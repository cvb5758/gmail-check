import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    const data = await signOut({ redirect: false, callbackUrl: '/' });
    router.push(data.url);
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {session && (
        <div>
          <p className="mb-2">
            <span className="font-medium">
              {session.user && <p>{session.user.email}</p>}
            </span>
          </p>
          <button
            onClick={handleLogout}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Log out
          </button>
        </div>
      )}
    </div>
  );
}
