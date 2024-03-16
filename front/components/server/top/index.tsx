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
  const res = await fetcher({ url: "http://localhost:8080/api/hello" });
  return (
    <div>
      <div>Server</div>
      <p>{res.message}</p>
    </div>
  );
};
