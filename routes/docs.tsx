import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.2/server.ts";
import NewPost from "../islands/NewPost.tsx";
import SiteBar from "../islands/SiteBar.tsx";

export const handler: Handlers<boolean> = {
    GET(req, ctx) {
        const url = new URL(req.url);
        const result = url.searchParams.get("mode");
  
        return ctx.render(result != null);
    }
};

const Docs = ({ data } : PageProps) => {

    return (<div>
        <SiteBar isPwa={data} />

        <div className="flex-center">
            <h1 style={{marginTop: `${!data ? ".5em" : 0}`, marginBottom: 0}}>Post Docs</h1>
        </div>

        <div style={{textAlign: "center"}}>
            Hey, so you wanna <span style={{paddingBottom: 5, paddingRight: 2, paddingLeft: 2, fontFamily: "headingFont"}}>spill the tea?</span> Well things
            work a little differently around here in <span style={{paddingBottom: 5, paddingRight: 2, paddingLeft: 2, fontFamily: "headingFont"}}>PRC</span>. 
        </div>

        <div className="flex-center">
            <h2 style={{marginTop: 0, alignSelf: "center", marginBottom: 0}}>Images</h2>
        </div>

        <div style={{marginBottom: "1em", textAlign: "center"}}>
            To upload an image, copy a photo url from the web into the text box like: image(url_goes_here) or insert an image directly from your camera roll by clicking:
        </div>

        <div style={{marginBottom: "1em"}} className="flex-center">
            <div style={{display: "flex", border: "1px solid white", fontSize: 14, padding: "3px 6px 3px 6px", borderRadius: 12}}>
                Insert Image <img style={{marginLeft: 2, alignSelf: "center"}} className="NewPost__button-image" alt="Camera Icon" src="/images/camera.png" />
            </div>
        </div>

        <div style={{marginBottom: "1em", textAlign: "center"}}>
            You can also enter a custom height and width for your image in pixels, such as:
        </div>

        <div className="flex-center">
            <div style={{width: 500, marginBottom: "1em", textAlign: "center", wordBreak: "break-word", padding: "2px 5px 2px 5px", borderRadius: 12, background: "white", color: "#7F00FF"}}>
                image(url, width, height)
            </div>
        </div>

        <div className="flex-center">
            <div style={{width: 500, marginBottom: "1em", textAlign: "center", wordBreak: "break-word", padding: "2px 5px 2px 5px", borderRadius: 12, background: "white", color: "#7F00FF"}}>
                image(https://joesalinas.dev/images/nature/10-8-ivy.webp?__frsh_c=6gaz88w64c2g, 200, 200)
            </div>
        </div>

        <div style={{marginBottom: "1em", textAlign: "center"}}>
            Try it out! Examine what's in the text box below and click <span style={{padding: "2px 5px 2px 5px", borderRadius: 12, border: "1px solid white", borderBottom: "none", borderBottomRightRadius: 0, borderBottomLeftRadius: 0}}>Preview</span> to
            see the different results. Feel free to erase the text box and provide your own image!
        </div>

        <div className="flex-center">
            <NewPost isPreview previewValue={`image(https://thumbs.dreamstime.com/b/wooden-small-house-tropical-forest-thailand-34533526.jpg)\n\nimage(https://thumbs.dreamstime.com/b/wooden-small-house-tropical-forest-thailand-34533526.jpg, 250, 280)\n\nimage(https://thumbs.dreamstime.com/b/wooden-small-house-tropical-forest-thailand-34533526.jpg, null, 200)`} />
        </div>
    </div>)
}

export default Docs;