import React from "react"

function Card({children}) {
    return (
        <div className="exercicio">
        <h3>8º exercício</h3>
        <div className="card">
            {children}
        </div>
        </div>
    )
}

function ConteudoCard(){
    return (
        <Card>
            <h4>Gustavo Santos Silva</h4>
            <p>Desenvolvedor Back-End</p>
            <br />
            <p>Contatos:</p>
            <a>gu.santoss09@outlook.com</a> 
            <br />
            <a href="https://github.com/gusantos7">GitHub</a>
            <br />
            <a href="https://www.linkedin.com/in/gustavosantossilva09/">LinkedIn</a>
        </Card>
    )
}

export default ConteudoCard