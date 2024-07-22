import { signIn } from 'auth';
import { Button } from './button';

export function LogIn({ provider, ...props }: { provider?: string }) {
  return (
    <form
      action={async () => {
        'use server';
        await signIn(provider);
      }}
    >
      <Button {...props}>Log In</Button>
    </form>
  );
}
