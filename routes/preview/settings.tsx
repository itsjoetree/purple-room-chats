import { Head } from "https://deno.land/x/fresh@1.1.2/runtime.ts";
import Textarea from "../../islands/Textarea.tsx";

const Settings = () => {

    return (
        <>
            <Head>
                <link href="/stylesheets/NewPost.css" rel="stylesheet" />
            </Head>

            <div style={{paddingTop: "4em", gap: "1em", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div style={{display: "flex", gap: 5, flexDirection: "column", width: 500, marginRight: 10, marginLeft: 10, borderRadius: 10, border: "1px solid white", padding: 10}}>
                    <div style={{display: "flex", justifyContent: "space-between", maxHeight: 90, gap: 2}}>                 
                        <div style={{border: "2px solid white", borderRadius: "50%", width: 75, height: 75}}>
                            <img style={{borderRadius: "50%", width: 75, height: 75}} src="/images/baddie.webp" />
                        </div>
                    </div>

                    <div>
                        <div style={{display: "flex", fontSize: "1.5em"}}>
                            <span>baddiefromtheblock</span>
                            <img className="yin" style={{marginLeft: 5, alignSelf: "center", cursor: "pointer", height: 20, width: 20}} src="/images/yin.png" />
                        </div>

                        <Textarea text="yooo what's good?" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings;