export default function formatNumber(num: string) {
    let viewsNumber = parseInt(num);
    if (viewsNumber < 1000) {
        return num;
    } else if (viewsNumber < 1000000) {
        return `${(viewsNumber / 1000).toFixed(1)}K`;
    } else if (viewsNumber < 1000000000) {
        return `${(viewsNumber / 1000000).toFixed(1)}M`;
    } else {
        return `${(viewsNumber / 1000000000).toFixed(1)}B`;
    }
}