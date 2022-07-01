import dynamic from "next/dynamic";

const Test1 = dynamic(() => import("./test/test1"));
const Test2 = dynamic(() => import("./test/test2"));
const Test3 = dynamic(() => import("./test/test3"));

export const dynamicLoader = (comp) => {
    switch(comp) {
        case "test1":
            return Test1;
        case "test2":
            return Test2;
        case "test3":
            return Test3;
        default:
            return null;
    }
}