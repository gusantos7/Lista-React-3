import './CSS/components.css'

function ListaMap() {
    const nomes = ["Gustavo", "Adevaldo", "Claudiana", "Jailson"]
    return (
        <div className='exercicio'>
            <h3>1º exercício</h3>
            <div className="listaNomes">
                <ul>
                    {nomes.map((nomes) => (
                        <li>{nomes}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default ListaMap;