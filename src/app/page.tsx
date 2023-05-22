"use client";
import { signOut } from "next-auth/react";
import Button from "../components/ui/Button";

export default async function Home() {
  return (
    <div className="text-red-500">
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
}
