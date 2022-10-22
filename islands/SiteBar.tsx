import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { Head } from "$fresh/runtime.ts";

interface ISiteBar {
    isPwa: boolean
}

const SiteBar = ({ isPwa } : ISiteBar) => {
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

    return (<nav style={{display: "flex", gap: "1em", justifyContent: "center", alignItems: "center"}} className={`siteBar ${isPwa ? "siteBar__bottom" : "siteBar__top"}`}>
        <Head>
            <link href="/stylesheets/SiteBar.css" rel="stylesheet" />
        </Head>
        
        <div className="siteBar__linkContainer">
            <a className="siteBar__link" href={`/${isPwa ? "?mode=standalone" : ''}`}>Home</a>
            {currentPage.value === "home" && <img alt="Selected Navbar Item" style={{height: 10, width: 10}} src="/images/chevron-up.png" />}
        </div>

        <div className="siteBar__linkContainer">
            <a className="siteBar__link" href={`/docs${isPwa ? "?mode=standalone" : ''}`}>Docs</a>
            {currentPage.value === "docs" && <img alt="Selected Navbar Item" style={{height: 10, width: 10}} src="/images/chevron-up.png" />}
        </div>

    </nav>)
}

export default SiteBar;