import TestPage from "./index";

export default TestPage;

export async function getStaticProps(context) {
    const {speakingUrl} = context.params;
    return {
        props: {
            active: "[...speakingUrl].js",
            dynamicComp: speakingUrl[speakingUrl.length - 1],
        },
    };
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: "blocking",
    };
}

