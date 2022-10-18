import { IPost } from "../interfaces.d.ts";

const Post = ({ _id, author, content} : IPost) => {

    return (
        <div style={{marginTop: "1em", gap: "1em", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div style={{overflowY: "scroll", display: "flex", gap: 5, flexDirection: "column", width: 500, marginRight: 10, marginLeft: 10, borderRadius: 10, border: "1px solid white", padding: 10, paddingBottom: 2}}>
                <div style={{display: "flex", gap: 10}}>
                    <div style={{border: "2px solid white", borderRadius: "50%", width: 35, height: 35}} />
                    <span style={{alignSelf: "center"}}>{author}</span>
                </div>

                <span style={{wordBreak: "break-all"}}>{content}</span>

                <div style={{alignSelf: "end"}}>
                    <img style={{height: 25, width: 25}} src="/images/heart-empty.png" />
                </div>
            </div>
        </div>
    )
}

export default Post;