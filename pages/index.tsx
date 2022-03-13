import Link from "next/link";
import { DarkLayout } from "../Components/layouts/DarkLayout";
import { MainLayout } from "../Components/layouts/MainLayout";

export default function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <h1 className={'title'}>
        {/*Ir a <a href="/about">About</a>*/}
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{" "}
        <code className={'code'}>pages/index.jsx</code>
      </p>
    </>

  );
}

HomePage.getLayout = function getLayout(page: JSX.Element) {
  return (

    <MainLayout>
    
        {page}
 
    </MainLayout>
  )
}