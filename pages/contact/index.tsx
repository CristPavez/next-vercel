 
import Link from "next/link";
 
 
import { MainLayout } from "../../Components/layouts/MainLayout";

export default function contact() {
    return (
        <MainLayout>
            <h1>Contact Page</h1>
            <h1 className={'title'}>
                {/*Ir a <a href="/about">About</a>*/}
                Ir a <Link href="/">Home</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{" "}
                <code className={'code'}>pages/Contact.jsx</code>
            </p>

        </MainLayout>

    )
}
