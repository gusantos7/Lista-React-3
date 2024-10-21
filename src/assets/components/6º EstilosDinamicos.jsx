function Estilo(props) {
    // const estilo = props.isHighlighted

    return props.isHighlighted ?
        <div className="exercicio">
            <h3>6º exercício</h3>
            <p id="destacado">Este texto está destacado</p>
        </div>
        :
        <div className="exercicio">
            <h3>6º exercício</h3>
            <p>Este texto não está destacado</p>
        </div>
}

export default Estilo;