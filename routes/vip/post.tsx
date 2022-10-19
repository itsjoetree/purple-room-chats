import NewPost from "../../islands/NewPost.tsx";
import { Head } from "$fresh/runtime.ts";

const Post = () => {
    
    return (
        <div className="Post">
            <Head>
                <title>purple room chats - Post</title>
                <link href="/stylesheets/pages/post.css" rel="stylesheet" />
            </Head>
            
            <h1>spill the tea</h1>

            <NewPost />
        </div>
    );
}

export default Post;