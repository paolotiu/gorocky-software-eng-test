'use client';
import { GalleryVerticalEnd } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Field, FieldDescription, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { supabaseClient } from '../lib/supabase/client';
import { useState } from 'react';

export function LoginForm({ className, ...props }: React.ComponentProps<'div'>) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [disabled, setDisabled] = useState(false);

  async function signInWithEmail() {
    setDisabled(true);
    const { data, error } = await supabaseClient.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (error) {
      console.error('Error sending magic link:', error.message);
      setMessage('Error sending magic link. Please try again.');
    }

    if (data) {
      setMessage('Check your email for the magic link to sign in!');
    }
    setDisabled(false);
  }

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-2 text-center">
          <a href="#" className="flex flex-col items-center gap-2 font-medium">
            <div className="flex size-8 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-6" />
            </div>
            <span className="sr-only">BookBuddy</span>
          </a>
          <h1 className="text-xl font-bold">Welcome to BookBuddy</h1>
        </div>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Field>
        <Field>
          {message ? (
            <FieldDescription>{message}</FieldDescription>
          ) : (
            <Button
              disabled={email === '' || disabled}
              onClick={() => {
                signInWithEmail();
              }}
            >
              Login
            </Button>
          )}
        </Field>
      </FieldGroup>
    </div>
  );
}
