"use client";

const api = "http://124.156.223.99:8080/api/v2/login-service/musicInfo";

export default function Home() {
  async function handleOnClick() {
    const res = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        url: "https://open.spotify.com/track/3kVfeiisXlSSn3GNDCH5Yg?si=95fc9566e74841e9",
      }),
    }).then((data) => data.json());

    console.log(res);
  }

  return (
    <main className="flex min-h-screen items-center justify-center">
      <button onClick={handleOnClick}>fetch</button>
    </main>
  );
}
