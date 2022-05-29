import Head from "next/head";
import Login from "../components/LoginScreen/Login";

function LoginScreen() {
  return (
    <div>
      <Head>
        <title>Log in | Ridi</title>
        <meta name="description" content="Fast rides at the right price" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Login />
    </div>
  );
}

export default LoginScreen;
