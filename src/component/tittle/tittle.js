import "./tittle.css"

export default function Tittle(props) {
    const {row} = props
    return (
        <>
            <div className="title">
                <h2>{row.type}</h2>
            </div>
        </>
    )
}