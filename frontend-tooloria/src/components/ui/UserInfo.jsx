"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { Button } from "./Button";
import { Loader } from "./Loader";

export default function UserInfo() {
  const { data: session, status } = useSession();

  if (status === "loading") return <Loader size="sm" />;

  if (!session)
    return (
      <Button onClick={() => signIn("google")} size="sm">
        Sign in with Google
      </Button>
    );

  const { name, image } = session.user;

  return (
    <div className="flex items-center gap-3 flex-col">
      {image && (
        <Image
          src={image}
          alt="User avatar"
          width={30}
          height={30}
          className="rounded-full"
        />
      )}
      <p className="text-sm">{name}</p>
      <Button
        onClick={() => signOut()}
        size="sm"
      >
        Sign out
      </Button>
    </div>
  );
}
