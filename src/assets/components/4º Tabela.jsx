function Tabela() {
    const titulosTabela = [
        [
            "ID",
            "Nome",
            "Idade"
        ],
        [
            "123",
            "Gustavo",
            "18"
        ],
        [
            "321",
            "Claudiana",
            "49"
        ],
        [
            "456",
            "Adevaldo",
            "50"
        ],
    ];
    // const mapTitulo = titulosTabela.map(x => <th>{x}</th>)

    // const primeiraLinha = [
    //     "123",
    //     "Gustavo",
    //     "18"
    // ]
    // // const mapPrimeira = primeiraLinha.map(x => <td>{x}</td>)


    // const segundaLinha = [
    //     "321",
    //     "Claudiana",
    //     "49"
    // ]
    // // const mapSegunda = segundaLinha.map(x => <td>{x}</td>)


    // const terceiraLinha = [
    //     "456",
    //     "Adevaldo",
    //     "50"
    // ]
    // const mapTerceira = terceiraLinha.map(x => <td>{x}</td>)


    return (
        <div className="exercicio">
            <h3>4º exercício</h3>
            <table>
                <tr>
                    {titulosTabela[0].map(x => <th>{x}</th>)}
                </tr>
                <tr>
                    {titulosTabela[1].map(x => <td>{x}</td>)}
                </tr>
                <tr>
                    {titulosTabela[2].map(x => <td>{x}</td>)}
                </tr>
                <tr>
                    {titulosTabela[3].map(x => <td>{x}</td>)}
                </tr>
            </table>
        </div>
    )
}

export default Tabela;
