'use client';
import { useState } from 'react';
import { supabaseClient } from '../../utils/supabase/client';

export default function MagicLinkLogin() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabaseClient.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`, // redirect target
      },
    });

    if (error) {
      console.log(error);
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage('Check your email for a magic link!');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form onSubmit={handleLogin} className="p-4 w-full max-w-sm">
        <h1 className="text-2xl mb-4 font-semibold">Sign in with Magic Link</h1>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full rounded mb-2"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded p-2 hover:bg-blue-700"
        >
          Send Magic Link
        </button>
        {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}
      </form>
    </div>
  );
}
