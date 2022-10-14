import { useEffect } from "preact/hooks"
import { useSignal } from "@preact/signals"

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

    return (<nav className="siteBar">
        <div className="siteBar__linkContainer">
            <a className="siteBar__link" href="/">Home</a>
            {currentPage.value === "home" && <img alt="Selected Navbar Item" style={{height: 10, width: 10}} src="/images/chevron-up.png" />}
        </div>

        <div className="siteBar__linkContainer">
            <a className="siteBar__link" href="/music">Podcast</a>
            {currentPage.value === "podcast" && <img alt="Selected Navbar Item" style={{height: 10, width: 10}} src="/images/chevron-up.png" />}
        </div>

        <div className="siteBar__linkContainer">
            <a className="siteBar__link" href="/games">Chats</a>
            {currentPage.value === "chats" && <img alt="Selected Navbar Item" style={{height: 10, width: 10}} src="/images/chevron-up.png" />}
        </div>
    </nav>)
}

export default SiteBar;