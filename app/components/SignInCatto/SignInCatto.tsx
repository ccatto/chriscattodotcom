'use client';

// import { Label } from "@client-extension/components/ui/label";
// import { Input } from "@client-extension/components/ui/input";
import { useState } from 'react';
import { signIn } from 'next-auth/react';

const SignIn: React.FC = () => {
  const [state, setState] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    signIn('email', {
      email: state,
      callbackUrl: `${window.location.origin}/me`,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-96 space-y-4">
      <div className="space-y-2">
        {/* <Label htmlFor="email">Email</Label> */}
        <div>Email</div>
        <div>input</div>
        {/* <Input
					id="email"
					name="email"
					placeholder="johndoe@example.com"
					required
					type="email"
					onChange={(e) => setState(e.target.value)}
				/> */}
      </div>
      <button
        disabled={loading}
        className="hover:bg-zinc/90 focus-visible:ring-ring inline-flex w-full items-center justify-center rounded-md bg-zinc-900 py-2 text-sm font-medium text-zinc-100 shadow transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50"
        type="submit"
      >
        Send me a magic link
      </button>
    </form>
  );
};

export default SignIn;
