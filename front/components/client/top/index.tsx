"use client";

import { atom, useAtom } from "jotai";
import { atomWithCache } from "jotai-cache";
import { Suspense } from "react";

export type Message = {
  code: number;
  message: string;
};

const setMessage = atomWithCache(async (get): Promise<Message> => {
  const res = await fetch("http://localhost:8080/api/hello");
  return res.json();
});

const count = atom(0);

const Message = () => {
  const [{ message }] = useAtom(setMessage);

  return <p>{message}</p>;
};

export const TopClient = () => {
  const [num, setNum] = useAtom(count);
  const hadleClickAddCount = () => {
    setNum(() => num + 1);
  };
  const hundleClickResetCount = () => {
    setNum(() => 0);
  };

  return (
    <div>
      <Suspense fallback={<div>⌛️Loading...</div>}>
        <div>Client</div>
        <Message />
        <div>{num}</div>
        <button onClick={hadleClickAddCount}>incriment</button>
        <button onClick={hundleClickResetCount}>reset</button>
      </Suspense>
    </div>
  );
};
