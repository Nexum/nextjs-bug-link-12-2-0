import {useRouter} from "next/router";

export default function FrontendApp({
                                        Component,
                                        pageProps,
                                    }) {
    const router = useRouter();

    return <Component {...pageProps}/>;
}

export function reportWebVitals(metric) {
    // console.log(metric);
}