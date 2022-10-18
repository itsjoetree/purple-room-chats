import IndexBlock from "../islands/IndexBlock.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Home() {

  return (
      <>
        <Head>
          <link href="/stylesheets/pages/index.css" rel="stylesheet" />
        </Head>

        <IndexBlock />
      </>
  );
}