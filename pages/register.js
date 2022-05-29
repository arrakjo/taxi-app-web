import Head from "next/head";
import Register from "../components/LoginScreen/Register";

function RegisterScreen() {
  return (
    <div>
      <Head>
        <title>Register | Ridi</title>
        <meta name="description" content="Fast rides at the right price" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Register />
    </div>
  );
}

export default RegisterScreen;
