import Link from "next/link";

export default function TestPage({active}) {

    return (
        <div>
            <Link href="/test/test1/">test/[comp].js 1</Link><br />
            <Link href="/test/test2/">test/[comp].js 2</Link><br />
            <Link href="/test/test3/">test/[comp].js 3</Link><br />
            <h1>{active}</h1>
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