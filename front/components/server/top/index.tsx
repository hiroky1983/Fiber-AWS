import { User } from "@/gen/types";

const fetcher = ({
  url,
  headers,
  tag,
}: {
  url: string;
  headers?: HeadersInit;
  tag?: string;
}) =>
  fetch(url, {
    ...(headers ? headers : headers || {}),
    ...(tag ? { next: { tags: [tag] } } : {}),
  }).then((res) => res.json());

export const TopServer = async () => {
  const message = await fetcher({ url: "http://localhost:8080/api/hello" });
  const user: User = await fetcher({ url: "http://localhost:8080/api/user" });
  console.log(user);

  return (
    <div>
      <div>Server</div>
      <p>{message.message}</p>
      <div>
        <h1>{`${user.firstName} ${user.lastName}`}</h1>
        <p>email:{user.email}</p>
        <p>gender{user.gender === "man" ? "🚹" : "🚺"}</p>
        <p>age:{user.age}</p>
        <p>adress:{user.address}</p>
        <p>phone:{user.phone}</p>
      </div>
    </div>
  );
};
