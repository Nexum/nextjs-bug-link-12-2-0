import Link from "next/link";
import {dynamicLoader} from "../components/loader";

export default function TestPage({active, dynamicComp}) {

    const Component = dynamicLoader(dynamicComp);

    return (
        <div>
            <Link href="/error/pleasebreak/">Middleware</Link><br />
            <Link href="/">index.js</Link><br />
            <Link href="/article/test/nested/bla/test1/">[...speakingUrl].js 1</Link><br />
            <Link href="/article/test/nested/bla/test2/">[...speakingUrl].js 2</Link><br />
            <Link href="/article/test/nested/bla/test3/">[...speakingUrl].js 3</Link><br />
            <Link href="/test/test1/">test/[comp].js 1</Link><br />
            <Link href="/test/test2/">test/[comp].js 2</Link><br />
            <Link href="/test/test3/">test/[comp].js 3</Link><br />
            <h1>{active}</h1>

            {Component && <Component />}
        </div>
    );
}

export async function getStaticProps(context) {
    return {
        props: {
            active: "index.js",
        },
    };
}