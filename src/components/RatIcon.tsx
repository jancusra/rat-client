
function RatIcon(props) {
    return <span className={props.class ? `material-icons ${props.class}` : "material-icons"}>
        {props.name}
    </span>
}

export default RatIcon;
