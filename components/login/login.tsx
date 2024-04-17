import { Button } from '@/ui/button';
import Logo from '@/ui/logo';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md space-y-8 bg-white p-8 shadow-lg rounded-xl text-center">
        <Logo />
        <h1 className="text-xl font-bold">G-Check</h1>
        <p className="text-gray-600">
          구글 이메일로 시작하려면 아래 버튼을 클릭하세요.
        </p>
        <Button>Sign in with Google</Button>
      </div>
    </main>
  );
}
