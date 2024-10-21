function Pai(props) {
    return (
        <>
        <p id="textoPai">{props.textoPai}</p>
        </>
    )
}

function Filho() {
    const texto = "Olá Filhote";
    return (
        <div className="exercicio">
        <h3>2º exercício</h3>
        <Pai textoPai = {texto} />
        </div>
    )
}

export default Filho