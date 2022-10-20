import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { Head } from "$fresh/runtime.ts";

const SiteBar = () => {
    const currentPage = useSignal('');

    useEffect(() => {
        const split = location.href.split("/");
        const page = split[split.length - 1];

        if (page === '') {
            currentPage.value = 'home';
        }
        else
        {
            currentPage.value = page;
        }
    }, [])

    return (<nav style={{display: "flex", gap: "1em", justifyContent: "center", alignItems: "center"}} className={`siteBar ${window?.matchMedia ? (window?.matchMedia('(display-mode: standalone)').matches ? "siteBar__bottom" : "siteBar__top") : 'hidden'}`}>
        <Head>
            <link href="/stylesheets/SiteBar.css" rel="stylesheet" />
        </Head>
        
        <div className="siteBar__linkContainer">
            <a className="siteBar__link" href="/">Home</a>
            {currentPage.value === "home" && <img alt="Selected Navbar Item" style={{height: 10, width: 10}} src="/images/chevron-up.png" />}
        </div>

        <div className="siteBar__linkContainer">
            <a className="siteBar__link" href="/docs">Docs</a>
            {currentPage.value === "docs" && <img alt="Selected Navbar Item" style={{height: 10, width: 10}} src="/images/chevron-up.png" />}
        </div>

    </nav>)
}

export default SiteBar;