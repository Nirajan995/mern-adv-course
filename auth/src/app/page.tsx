"use client";

import Link from "next/link";

export default function Home() {
  async function handleClick() {
    const resp = await fetch("/api/auth/signin");
  }
  return (
    <>
      {/* <button onClick={handleClick}>Signin</button>
       */}
      <Link href={"/api/auth/signin"}>Signin</Link>
    </>
  );
}
