import { useSignal } from "@preact/signals";
import { Head } from "$fresh/runtime.ts";

const SELECTED_BUTTON = {
    background: "white",
    color: "#7F00FF"
}

const NewPost = () => {
    const view = useSignal<string>("code");
    const lines = useSignal<string[]>([]);

    return (<div className="NewPost__container">
        <Head>
            <link href="/stylesheets/NewPost.css" rel="stylesheet" />
        </Head>

        <h1>spill the tea</h1>

        <div className="NewPost">
            <div className="NewPost__options">
                <button>
                    Insert Image <img className="NewPost__button-image" alt="Camera Icon" src="/images/camera.png" />
                </button>

                <button>
                    Add Link <img className="NewPost__button-image" alt="Camera Icon" src="/images/link.png" />
                </button>
            </div>

            <div className="NewPost__switch-container">
                <div className="NewPost__switch">
                    <button onClick={() => view.value = "code"} style={view.value === "code" ? SELECTED_BUTTON : {}}>
                        Code
                    </button>

                    <button onClick={() => view.value = "preview"} style={view.value === "preview" ? SELECTED_BUTTON : {}}>
                        Preview
                    </button>
                </div>

            </div>

            {
                view.value === "preview" && <div className="NewPost__preview">
                    <div style={{display: "flex", gap: 10, marginBottom: 5}}>
                        <div style={{border: "2px solid white", borderRadius: "50%", width: 35, height: 35}} />
                        <span style={{alignSelf: "center"}}>itsjoetree</span>
                    </div>


                    {
                        lines.value.map((l) => <div>{l}</div>)
                    }
                </div>
            }

            
            {
                view.value === "code" && <div className="NewPost__textarea-container">
                    <textarea className="NewPost__textarea" value={lines.value.map(l => l)} onChange={(e) => lines.value = e.currentTarget.value?.split("\n")} rows={19} />
                </div>
            }

            <button className="NewPost__button">Post it!</button>
        </div>
    </div>)
}

export default NewPost;