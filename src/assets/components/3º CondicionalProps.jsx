function Visivel(props) {
    const isVisibel = props.visivel
    const texto = "Está visivel"

    if (isVisibel) {
        return (
            <div className="exercicio">
                <h3>3º exercício</h3>
                <p id="visivel">{texto}</p>
            </div>
        )
    }

    return (
        <div className="exercicio">
            <h3>3º exercício</h3>
        </div>
    )
}

export default Visivel;