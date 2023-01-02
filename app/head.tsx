import Script from "next/script";
export default function Head() {
  return (
    <>
      <title>My Next.js App</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <Script src="https://cdn.tailwindcss.com" />
    </>
  );
}
