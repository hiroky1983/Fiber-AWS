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

type User = {
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  address: string;
  email: string;
  phone: string;
};

export const TopServer = async () => {
  const message = await fetcher({ url: "http://localhost:8080/api/hello" });
  const user = await fetcher({ url: "http://localhost:8080/api/user" });
  return (
    <div>
      <div>Server</div>
      <p>{message.message}</p>
      <div>
        <h1>{`${user.firstName} ${user.lastName}`}</h1>
        <p>email:{user.email}</p>
        <p>age:{user.age}</p>
        <p>adress:{user.address}</p>
        <p>phone:{user.phone}</p>
      </div>
    </div>
  );
};
