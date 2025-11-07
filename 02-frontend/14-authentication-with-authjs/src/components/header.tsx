import { auth } from "@/auth";
import { GoogleSignInButton } from "./google-sign-in-button";
import { SignOutButton } from "./sign-out-button";

export default async function Header() {
  const session = await auth();

  console.log(session);

  return (
    <header className="flex justify-between p-8 max-w-[1000px] mx-auto">
      <h1 className="uppercase text-xl font-bold">Auth.js Authentication</h1>
      {session ? <SignOutButton /> : <GoogleSignInButton />}
    </header>
  );
}
