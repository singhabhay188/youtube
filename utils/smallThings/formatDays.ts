export default function formatDays(date: string): string {
    const pd = new Date(date);
    const cd = new Date();

    const dms = cd.getTime() - pd.getTime(); // Get time in milliseconds
    const ds = Math.floor(dms / 1000); // Convert to seconds
    if (ds < 60) return 'A minute ago';

    const dm = Math.floor(ds / 60); // Convert to minutes
    if (dm < 60) return `${dm} minute${dm === 1 ? '' : 's'} ago`;

    const dh = Math.floor(dm / 60); // Convert to hours
    if (dh < 24) return `${dh} hour${dh === 1 ? '' : 's'} ago`;

    const dd = Math.floor(dh / 24); // Convert to days
    if (dd < 7) return `${dd} day${dd === 1 ? '' : 's'} ago`;

    const dw = Math.floor(dd / 7); // Convert to weeks
    if (dw < 4) return `${dw} week${dw === 1 ? '' : 's'} ago`;

    const dmo = Math.floor(dd / 30); // Convert to months
    if (dmo < 12) return `${dmo} month${dmo === 1 ? '' : 's'} ago`;

    const dy = Math.floor(dmo / 12); // Convert to years
    return `${dy} year${dy === 1 ? '' : 's'} ago`;
}