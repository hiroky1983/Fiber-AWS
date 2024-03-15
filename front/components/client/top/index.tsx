"use client";

import { atom, useAtom, useAtomValue } from "jotai";
import { atomWithCache } from "jotai-cache";
import { Suspense } from "react";

export type Message = {
  code: number;
  message: string;
};

// const messageAtom = atom<Message>({
//   code: 0,
//   message: "",
// });
const setMessage = atomWithCache(async (get): Promise<Message> => {
  const res = await fetch("http://localhost:8080/api/hello");
  return res.json();
});

const Message = () => {
  const [{ message }] = useAtom(setMessage);

  return <p>{message}</p>;
};

export const TopClient = () => {
  // const [message, setMessage] = useAtom(messageAtom);

  // const getHello = async () => {
  //   const res = await fetch("http://localhost:8080/api/hello");
  //   setMessage(await res.json());
  // };
  // useEffect(() => {
  //   getHello();
  // }, []);

  return (
    <>
      <div>Client</div>
      <Suspense fallback={<div>Loading...</div>}>
        <Message />
      </Suspense>
    </>
  );
};
