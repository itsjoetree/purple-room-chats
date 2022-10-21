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
            To upload an image copy a url into image(url_goes_here) or from your camera roll by clicking:
        </div>

        <div style={{marginBottom: "1em"}} className="flex-center">
            <div style={{display: "flex", border: "1px solid white", fontSize: 14, padding: "3px 6px 3px 6px", gap: 3, borderRadius: 12}}>
                Insert Image <img style={{alignSelf: "center"}} className="NewPost__button-image" alt="Camera Icon" src="/images/camera.png" />
            </div>
        </div>

        <div style={{marginBottom: "1em", textAlign: "center"}}>
            You can also enter a custom height and width for your image in pixels, such as:
        </div>

        <div className="flex-center">
            <div style={{width: 500, marginBottom: "1em", textAlign: "center", wordBreak: "break-word", padding: "2px 5px 2px 5px", borderRadius: 12, background: "white", color: "#7F00FF"}}>
                image(url, height, width)
            </div>
        </div>

        <div className="flex-center">
            <div style={{width: 500, marginBottom: "1em", textAlign: "center", wordBreak: "break-word", padding: "2px 5px 2px 5px", borderRadius: 12, background: "white", color: "#7F00FF"}}>
                image(https://joesalinas.dev/images/nature/10-8-ivy.webp?__frsh_c=6gaz88w64c2g, 200, 200)
            </div>
        </div>

        <div style={{marginBottom: "1em", textAlign: "center"}}>
            Try it out! Examine what's in the text box below and click <span style={{padding: "2px 5px 2px 5px", borderRadius: 12, border: "1px solid white", borderBottom: "none"}}>Preview</span> to
            see the different results. Feel free to erase the text box and provide your own image!
        </div>

        <div className="flex-center">
            <NewPost isPreview previewValue={`image(https://joesalinas.dev/images/nature/10-8-ivy.webp?__frsh_c=6gaz88w64c2g)\n\nimage(https://joesalinas.dev/images/nature/10-8-ivy.webp?__frsh_c=6gaz88w64c2g, 250, 280)\n\nimage(https://joesalinas.dev/images/nature/10-8-ivy.webp?__frsh_c=6gaz88w64c2g, null, 200)`} />
        </div>
    </div>)
}

export default Docs;