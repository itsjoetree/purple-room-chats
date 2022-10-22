import { useEffect } from "preact/hooks";

const BodyBlock = () => {
    useEffect(() => {
        document?.body?.classList.add("blue-theme");
        document?.getElementsByTagName("nav")[0].classList.add("blue-theme");
    }, [])

    return (<span></span>)
}

export default BodyBlock;