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
        let page = split[split.length - 1];

        if (page.indexOf("?mode=standalone") !== -1) {
            page = page.split("?")[0];
        }

        if (page === '') {
            currentPage.value = 'home';
        }
        else
        {
            currentPage.value = page;
        }
    }, [])

    return (<nav style={{display: "flex", justifyContent: "center", alignItems: "center"}} className={`siteBar ${isPwa ? "siteBar__bottom" : "siteBar__top"}`}>
        <Head>
            <link href="/stylesheets/SiteBar.css" rel="stylesheet" />
        </Head>
        
        <div style={{marginRight: "1em"}} className="siteBar__linkContainer">
            <a className={`siteBar__link ${currentPage.value === "home" ? "glow" : ''}`} href={`/${isPwa ? "?mode=standalone" : ''}`}>Home</a>
        </div>

        <div style={{marginRight: "1em"}} className="siteBar__linkContainer">
            <a className={`siteBar__link ${currentPage.value === "docs" ? "glow" : ''}`} href={`/docs${isPwa ? "?mode=standalone" : ''}`}>Docs</a>
        </div>

    </nav>)
}

export default SiteBar;