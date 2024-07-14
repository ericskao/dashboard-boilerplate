'use client';

import {
  ArrowLeftEndOnRectangleIcon,
  PowerIcon,
} from '@heroicons/react/16/solid';
import { signIn, signOut, useSession } from 'next-auth/react';

const SignInActions = () => {
  const { data: session, status } = useSession();
  console.log('session', session, 'status', status);
  if (status === 'loading')
    return (
      <div className="flex h-[48px] w-full grow items-center justify-center gap-2 bg-gray-50 p-3 md:flex-none md:justify-start md:p-2 md:px-3 animate-pulse" />
    );
  return session ? (
    <form
      action={async () => {
        await signOut();
      }}
    >
      <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
        <PowerIcon className="w-6" />
        <div className="hidden md:block">Sign Out</div>
      </button>
    </form>
  ) : (
    <form
      action={async () => {
        await signIn('google');
      }}
    >
      <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
        <ArrowLeftEndOnRectangleIcon className="w-6" />
        <div className="hidden md:block">Sign In</div>
      </button>
    </form>
  );
};

export default SignInActions;
