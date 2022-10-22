import { useSignal, effect } from "@preact/signals";
import { Head } from "$fresh/runtime.ts";
import { VNode } from "https://esm.sh/v95/preact@10.11.0/src/index.d.ts";

const SELECTED_BUTTON = {
    background: "white",
    color: "#7F00FF"
}

const getPostMarkup = (data: string) : VNode[] => {
    const elements: string[] = [];

    let index = 0;
    const max = data.split('')?.length - 1;

    if (max <= 0) return [];

    let divText = '';

    data.split('').forEach(char => {
        if (char === "\n" || index === max) {
            if (char !== "\n") divText += char;            
            elements.push(divText);

            if (index === max) return;
            divText = '';
        }
        else {
            divText += char;
        }

        index++;
    });

    return elements.map((e, i) => {
        const trimmed = e.trim();

        if (trimmed.substring(0, 6) === "image(" && trimmed.trim().split('')[trimmed.split('').length - 1] === ")") {
            const [url, width, height] = e.replace('image(', '').replace(')', '').split(', ');

            let numWidth = null;
            let numHeight = null;

            try {
                numWidth = parseInt(width);
            }
            catch {
                // continue
            }

            try {
                numHeight = parseInt(height);
            }
            catch {
                // continue
            }

            return (<img style={{maxWidth: "100%", url: url, width: numWidth ?? width, height: numHeight ?? height}} alt="Post Image" src={url} />);
        }  
        else return (<div key={`${e}index:${i}`}>{e}</div>);
    });
}

interface NewPostProps {
    isPreview?: boolean;
    previewValue?: string;
}

const NewPost = ({ isPreview, previewValue } : NewPostProps) => {
    const view = useSignal<string>("code");
    const lines = useSignal<string>(previewValue ?? '');

    return (<div className="NewPost__container">
        <Head>
            <link href="/stylesheets/NewPost.css" rel="stylesheet" />
        </Head>

        <div className="NewPost">
            <div className="NewPost__options">
                <div>
                    <label className="NewPost__options-button" title="Upload" htmlFor="file-input">
                        Insert Image <img style={{marginLeft: 2}} className="NewPost__button-image" alt="Camera Icon" src="/images/camera.png" />
                    </label>

                    <input onChange={(e) => {
                        if (e.currentTarget.files) {
                            const fileUrl = URL.createObjectURL(e.currentTarget.files[0]);
                            if (lines.value) lines.value += `\n`;
                            lines.value += `image(${fileUrl})`;
                        }

                    }} style={{visibility: "hidden", width: 0, height: 0, position: "absolute"}} id="file-input" type="file" accept="image/png, image/jpeg" />
                </div>

                {!isPreview && <span className="NewPost__options-button">
                    Add Link <img className="NewPost__button-image" alt="Camera Icon" src="/images/link.png" />
                </span>}
            </div>

            <div className="NewPost__switch-container">
                <div className="NewPost__switch">
                    <span className="NewPost__switch-button" onClick={() => view.value = "code"} style={view.value === "code" ? SELECTED_BUTTON : {}}>
                        Code
                    </span>

                    <span className="NewPost__switch-button" onClick={() => view.value = "preview"} style={view.value === "preview" ? SELECTED_BUTTON : {}}>
                        Preview
                    </span>
                </div>
            </div>

            {
                view.value === "preview" && <div className="NewPost__preview">
                    <div style={{display: "flex", paddingBottom: 5}}>
                        <div className="flex-center" style={{marginRight: 10, borderRadius: "50%", width: 35, height: 35}}>
                            <img style={{maxHeight: "100%", maxWidth: "100%", borderRadius: "50%"}} src="/images/baddie.webp" />
                        </div>
                        <span style={{alignSelf: "center"}}>baddiefromtheblock</span>
                    </div>

                    {
                        getPostMarkup(lines.value).map((m) => m)
                    }
                </div>
            }
            
            {
                view.value === "code" && <div className="NewPost__textarea-container">
                    <textarea className="NewPost__textarea" value={lines.value} onChange={(e) => {
                         lines.value = e.currentTarget.value;
                    }} />
                </div>
            }

            {!isPreview && <button className="NewPost__button">Post it!</button>}
        </div>
    </div>)
}

export default NewPost;