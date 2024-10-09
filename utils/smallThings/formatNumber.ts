export default function formatViews(views: string) {
    let viewsNumber = parseInt(views);
    if (viewsNumber < 1000) {
        return views;
    } else if (viewsNumber < 1000000) {
        return `${(viewsNumber / 1000).toFixed(1)}K views`;
    } else if (viewsNumber < 1000000000) {
        return `${(viewsNumber / 1000000).toFixed(1)}M views`;
    } else {
        return `${(viewsNumber / 1000000000).toFixed(1)}B views`;
    }
}