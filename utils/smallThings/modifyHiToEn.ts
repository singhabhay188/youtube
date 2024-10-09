export default function modifyHiToEn(publishedTimeText: string) { 
    try{
        const split = publishedTimeText.split(" ");     // 2 दिन पहले
    
        if(split[1] === "दिन") {
            return split[0] + " days ago";
        } else if(split[1] === "घंटे") {
            return split[0] + " hours ago";
        }
    }
    catch(e){
        return publishedTimeText;
    }
}