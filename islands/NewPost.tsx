import { useSignal, effect } from "@preact/signals";
import { useRef } from "preact/hooks";

const SELECTED_BUTTON = {
    background: "white",
    color: "#7F00FF"
}

const NewPost = () => {
    const view = useSignal<string>("code");
    const lines = useSignal<string[]>([]);

    return (<div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
        <h1 style={{fontFamily: "headingFont"}}>spill the tea</h1>

        <div className="NewPost">
            <div className="NewPost__options">
                <button>
                    Insert Image <img alt="Camera Icon" src="/images/camera.png" style={{alignSelf: "center", width: 15, height: 15}} />
                </button>

                <button>
                    Add Link <img alt="Camera Icon" src="/images/link.png" style={{alignSelf: "center", width: 15, height: 15}} />
                </button>
            </div>

            <div style={{width: "100%", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column"}}>
                <div className="NewPost__switch">
                    <button onClick={() => view.value = "code"} style={view.value === "code" ? SELECTED_BUTTON : {}}>
                        Code
                    </button>

                    <button onClick={() => view.value = "preview"} style={view.value === "preview" ? SELECTED_BUTTON : {}}>
                        Preview
                    </button>
                </div>

                <textarea onChange={(e) => lines.value = e.currentTarget.value?.split("\n")} rows={20} className="NewPost__textarea" />
            </div>

            <button className="NewPost__button">Post it!</button>
        </div>
    </div>)
}

export default NewPost;