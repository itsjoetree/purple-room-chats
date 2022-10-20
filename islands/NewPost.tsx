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
            divText += char;            
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
        if (e.substring(0, 6) === "image(" && e.split('')[e.split('').length - 1] === ")") {
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

            return (<img style={{url: url, width: numWidth ?? width, height: numHeight ?? height}} alt="Post Image" src={url} />);
        }  
        else return (<div key={`${e}index:${i}`}>{e}</div>);
    });
}

interface NewPostProps {
    isPreview?: boolean;
}

const NewPost = ({ isPreview } : NewPostProps) => {
    const view = useSignal<string>("code");
    const lines = useSignal<string>('');

    return (<div className="NewPost__container">
        <Head>
            <link href="/stylesheets/NewPost.css" rel="stylesheet" />
        </Head>

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
                        getPostMarkup(lines.value).map((m) => m)
                    }
                </div>
            }
            
            {
                view.value === "code" && <div className="NewPost__textarea-container">
                    <textarea className="NewPost__textarea" value={lines.value} onChange={(e) => {
                         lines.value = e.currentTarget.value;
                    }} rows={19} />
                </div>
            }

            {!isPreview && <button className="NewPost__button">Post it!</button>}
        </div>
    </div>)
}

export default NewPost;