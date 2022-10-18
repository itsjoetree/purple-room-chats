import NewPost from "../../islands/NewPost.tsx";
import { Head } from "$fresh/runtime.ts";
import Input from "../../components/Input.tsx";

const Register = () => {
    
    return (
        <>
            <Head>
                <title>purple room chats - Register</title>
                <link href="/stylesheets/pages/post.css" rel="stylesheet" />
            </Head>

            <div style={{textAlign: "center"}}>
                <h1 style={{marginBottom: 15}}>Register</h1>
            </div>
            
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", marginRight: 10, marginLeft: 10}}>
                <form style={{display: "flex", flexDirection: "column", gap: 15, width: "20em"}}>
                    <Input label="Username" />
                    <Input type="password" label="Password" />
                    <Input type="password" label="Confirm Password" />
                    <Input label="Secret Code" />

                    <button className="button-styles" style={{width: "15em", alignSelf: "center"}}>Submit</button>
                </form>
            </div>
        </>
    );
}

export default Register;