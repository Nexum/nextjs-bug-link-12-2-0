import TestPage from "../index";

export default TestPage;

export async function getStaticProps(context) {
    const {comp} = context.params;
    return {
        props: {
            active: `test/${comp}`,
        },
    };
}

export async function getStaticPaths() {
    return {
        paths: [
            {params: {comp: "test1"}},
            {params: {comp: "test2"}},
            {params: {comp: "test3"}}
        ],
        fallback: "blocking",
    };
}

