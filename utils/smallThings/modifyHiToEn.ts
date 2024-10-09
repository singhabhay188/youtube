export default function modifyHiToEn(publishedTimeText: string) { 
    // 2 दिन पहले

    const split = publishedTimeText.split(" ");

    if(split[1] === "दिन") {
        return split[0] + " days ago";
    } else if(split[1] === "घंटे") {
        return split[0] + " hours ago";
    }
    return publishedTimeText;
}