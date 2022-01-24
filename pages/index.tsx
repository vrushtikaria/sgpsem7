import Head from "next/head";
import Nav from "../components/Navs/Nav";
import Nav2 from "../components/Navs/Nav2";
export default function Home() {
  return (
    <>
      <Head>
        <title>MediCare2.0</title>
        <link rel="icon" href="/images/logo.jpg" />
      </Head>
      <body className="h-screen">
        <nav className="m-0">
          <Nav />
          <Nav2 />
        </nav>
        <div></div>
      </body>
    </>
  );
}
