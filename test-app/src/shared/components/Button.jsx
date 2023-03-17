export function Button (props) {
    return (
        <div>
            <button onClick={props.onClick}>{props.value}</button>
        </div>
    )
}