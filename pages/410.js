import TestPage from "./index";

export default TestPage;

export async function getServerSideProps(context) {
    context.res.statusCode = 410;

    return {props: {active: "410.js"}};
}