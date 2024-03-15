"use client";

import { atom, useAtom, useAtomValue } from "jotai";
import { Suspense, useEffect } from "react";

export type Message = {
  code: number;
  message: string;
};

const messageAtom = atom<Message>({
  code: 0,
  message: "",
});

export const TopClient = () => {
  const [message, setMessage] = useAtom(messageAtom);

  const getHello = async () => {
    const res = await fetch("http://localhost:8080/api/hello");
    setMessage(await res.json());
  };
  useEffect(() => {
    getHello();
  }, []);

  return (
    <>
      <div>index</div>
      <Suspense fallback={<div>Loading...</div>}>
        <p>{message.message}</p>
      </Suspense>
    </>
  );
};
