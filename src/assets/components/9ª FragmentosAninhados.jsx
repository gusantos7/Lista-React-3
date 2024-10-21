function Conteudo() {
    return (
        <div className="exercicio">
            <h3>9º exercício</h3>
            <Aninhados />
        </div>
    )
}

function Aninhados() {
    const esportes = [
        "Basquete",
        "Futebol",
        "Vôlei",
        "Tenis de Mesa",
    ]

    return (
        <>
            <h1>Lista de esportes</h1>
            <ul>
                {esportes.map((x, index) =>
                    <li key={index}>{x}</li>
                )}
            </ul>
            <p>Os melhor que tá tendo</p>
        </>
    )
}

export default Conteudo;
