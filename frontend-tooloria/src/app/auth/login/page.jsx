// app/(auth)/login/page.jsx
import SignInButton from './SignInButton';
import { getAuthSession } from '../../../../lib/authHelper';
import { redirect } from 'next/navigation';

export default async function LoginPage() {
  const session = await getAuthSession();
  if (session) {
    // This will send a 307 redirect on the server
    redirect('/');
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h1 className="text-2xl font-semibold mb-4">Login to Tooloria</h1>
        <SignInButton />
      </div>
    </div>
  );
}
