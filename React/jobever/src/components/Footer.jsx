
const now = new Date();
export default function Footer () {
    return (
<span>@{now.toLocaleDateString()}</span>
    )
}