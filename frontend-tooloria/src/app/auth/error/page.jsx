'use client';

import { useSearchParams } from 'next/navigation';

const errorMessages = {
  OAuthSignin: "There was an issue signing in.",
  OAuthCallback: "OAuth callback failed.",
  OAuthCreateAccount: "Could not create OAuth account.",
  EmailCreateAccount: "Could not create email account.",
  Callback: "Custom callback failed.",
  OAuthAccountNotLinked: "Account not linked. Try signing in with the same provider.",
  EmailSignin: "Email sign in failed.",
  CredentialsSignin: "Invalid credentials.",
  default: "Something went wrong.",
};

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const errorMessage = errorMessages[error] || errorMessages.default;

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md text-center">
        <h1 className="text-xl font-semibold mb-4 text-red-600">Authentication Error</h1>
        <p className="mb-4">{errorMessage}</p>
        <a
          href="/login"
          className="text-blue-500 hover:underline"
        >
          Go back to login
        </a>
      </div>
    </div>
  );
}
