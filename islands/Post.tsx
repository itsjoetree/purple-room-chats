import { IPost } from "../interfaces.d.ts";


const getDate = (date: Date) : string => {
    const currentDate: Date = new Date(2022, 10, 21, 19, 58);

    const currentDays = currentDate.getTime() / 86_400_000;
    const dbDays = date.getTime() / 86_400_000;

    const dateDiff = Math.abs(currentDays - dbDays);

    const dateDiffMinutes = Math.floor(dateDiff * 1440);
    const dateDiffHours = Math.floor(dateDiff * 24);
    
    if (dateDiffMinutes <= 59) {
        return `${dateDiffMinutes}m`;
    }
    else if (dateDiffHours <= 23) {
        return `${dateDiffHours}h`;
    }
    else if (dateDiff < 7) {
        return `${Math.floor(dateDiff)}d`;
    }
    else {
        return `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;
    }
}

const MIN_REMOVED = 30;
const GLOBAL_DATE = new Date(2022, 10, 21, 19, 58);
GLOBAL_DATE.setMinutes(GLOBAL_DATE.getMinutes() - MIN_REMOVED);

const Post = ({ _id, author, content, isLiked} : IPost) => {

    return (
        <div style={{marginTop: "1em", gap: "1em", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div style={{display: "flex", flexDirection: "column", width: 500, marginRight: 10, marginLeft: 10, borderRadius: 10, border: "1px solid white", padding: 10, paddingBottom: 0}}>
                <div style={{display: "flex", marginBottom: 10}}>
                    <div className="flex-center" style={{border: "2px solid white", borderRadius: "50%", width: 35, height: 35}}>
                        <img style={{borderRadius: "50%", width: 35, height: 35}} src="/images/baddie.png" />
                    </div>
                    <span style={{alignSelf: "center", marginLeft: 5}}>{author}</span>
                    <span style={{alignSelf: "center", marginLeft: 5}}>&#x2022; {getDate(GLOBAL_DATE)}</span>
                </div>

                <span style={{wordBreak: "break-all", marginBottom: 0}}>{content}</span>

                <div style={{display: "flex", justifyContent: "flex-end"}}>
                    <div style={{alignSelf: "center"}}>
                        <img style={{cursor: "pointer", height: 25, width: 25, filter: isLiked ? "drop-shadow(0px 0px 10px white)" : '', transform: "translate3d(0, 0, 0)"}} src="/images/yin.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;