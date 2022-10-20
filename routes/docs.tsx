import NewPost from "../islands/NewPost.tsx";

const Docs = () => {

    return (<div style={{marginLeft: 10, marginRight: 10}}>
        <div className="flex-center">
            <h1 style={{marginTop: ".5em", marginBottom: 0}}>Post Docs</h1>
        </div>

        <div style={{textAlign: "center"}}>
            Hey, so you wanna <span style={{paddingBottom: 5, paddingRight: 2, paddingLeft: 2, fontFamily: "headingFont"}}>spill the tea?</span> Well things
            work a little differently around here in <span style={{paddingBottom: 5, paddingRight: 2, paddingLeft: 2, fontFamily: "headingFont"}}>PRC</span>. 
        </div>

        <div className="flex-center">
            <h1 style={{marginTop: ".5em", marginBottom: 0}}>The Interface</h1>
        </div>

        <div style={{marginBottom: ".3em", textAlign: "center"}}>
            Here she is, simple enough but with some features under the hood that will
            allow you to create posts exactly how you would envision them to.
        </div>

        <div className="flex-center">
            <h2 style={{marginTop: 0, alignSelf: "center", marginBottom: 0}}>Images</h2>
        </div>

        <div style={{marginBottom: "1em", textAlign: "center"}}>
            Simply type <span style={{padding: "2px 5px 2px 5px", borderRadius: 12, background: "white", color: "#7F00FF"}}>image()</span> to specify
            where you would like a image to be placed in relation to the other content.
        </div>

        <div style={{marginBottom: "1em", textAlign: "center"}}>
            <span style={{padding: "2px 5px 2px 5px", borderRadius: 12, background: "white", color: "#7F00FF"}}>image()</span> can take
            up to three parameters, such as:
        </div>

        <div style={{marginBottom: "1em", textAlign: "center"}}>
            <span style={{padding: "2px 5px 2px 5px", borderRadius: 12, background: "white", color: "#7F00FF"}}>image(url, width, height)</span>
        </div>

        <div style={{marginBottom: "1em"}} className="flex-center">
            <div style={{width: 500, textAlign: "center"}}>
                The url can be an image from another site where you can "Copy Image Url", or a Url that is generated after uploading from
                your camera roll by clicking:
            </div>
        </div>

        <div style={{marginBottom: "1em"}} className="flex-center">
            <div style={{display: "flex", border: "1px solid white", fontSize: 14, padding: "1px 4px 1px 4px", gap: 3, borderRadius: 12}}>
                Insert Image <img style={{alignSelf: "center"}} className="NewPost__button-image" alt="Camera Icon" src="/images/camera.png" />
            </div>
        </div>

        <div style={{marginBottom: "1em"}} className="flex-center">
            <div style={{width: 500, textAlign: "center"}}>
                Width and height can both be numeric such as the examples below, but can also use CSS units of measure. If you wish
                to skip over "width" you can place the value "null" which means nothing instead of a measurement such as: 
            </div>
        </div>

        <div className="flex-center">
            <div style={{width: 500, marginBottom: "1em", textAlign: "center", wordBreak: "break-word", padding: "2px 5px 2px 5px", borderRadius: 12, background: "white", color: "#7F00FF"}}>
                image(https://joesalinas.dev/images/nature/10-8-ivy.webp?__frsh_c=6gaz88w64c2g, <span style={{paddingLeft: 3, paddingRight: 3, color: "white", background: "#7F00FF"}}>null</span>, 200)
            </div>
        </div>

        <div style={{marginBottom: "1em", textAlign: "center"}}>
            Try it out! Examine what's in the text box below and click <span style={{padding: "2px 5px 2px 5px", borderRadius: 12, border: "1px solid white", borderBottom: "none"}}>Preview</span> to
            see the different results. Feel free to erase the text box and provide your own image!
        </div>

        <div className="flex-center">
            <NewPost isPreview previewValue={`image(https://joesalinas.dev/images/nature/10-8-ivy.webp?__frsh_c=6gaz88w64c2g)\n\nimage(https://joesalinas.dev/images/nature/10-8-ivy.webp?__frsh_c=6gaz88w64c2g, 250, 280)\n\nimage(https://joesalinas.dev/images/nature/10-8-ivy.webp?__frsh_c=6gaz88w64c2g, null, 200)\n\nimage(https://joesalinas.dev/images/nature/10-8-ivy.webp?__frsh_c=6gaz88w64c2g, 200, null)`} />
        </div>
    </div>)
}

export default Docs;