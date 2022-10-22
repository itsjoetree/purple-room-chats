import { useSignal } from "@preact/signals";

interface ITextarea {
    text: string
}

const Textarea = ({ text } : ITextarea) => {
    const taLength = useSignal(text.length);

    return (
        <div style={{position: "relative"}} className="NewPost__textarea-container">
            <textarea maxLength={150} onKeyDown={(e) => taLength.value = e.currentTarget.value.length} className="NewPost__textarea" value="yooo what's good?" style={{height: 90}} />
            <span style={{position: "absolute", color: "#7F00FF", bottom: 0, right: 5, fontSize: 12}}>{taLength}/150</span>
        </div>
    );
}

export default Textarea;