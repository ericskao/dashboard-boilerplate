import { lusitana } from '@/app/ui/fonts';
import { signIn } from 'auth';
// import { useSession } from 'next-auth/react';
// import { useActionState } from 'react';
import { Button } from './button';

export function SignIn({ provider, ...props }: { provider?: string }) {
  return (
    <form
      action={async () => {
        'use server';
        await signIn(provider);
      }}
    >
      <Button {...props}>Sign In</Button>
    </form>
  );
}

export default function LoginForm() {
  // const [errorMessage, formAction, isPending] = useActionState(
  //   authenticate,
  //   undefined
  // );
  // const { data: session, status } = useSession();
  // console.log('session login', session);
  return (
    <div className="space-y-3">
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please log in to continue.
        </h1>
        <div className="w-full">
          <SignIn />
        </div>
        {/* <Button className="mt-4 w-full" aria-disabled={isPending}>
          Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button> */}
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {/* {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )} */}
        </div>
      </div>
    </div>
  );
}
