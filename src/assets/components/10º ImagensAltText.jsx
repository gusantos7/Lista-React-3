function Imagens() {

    const imagens = [
        { url: "https://images2.alphacoders.com/829/thumb-1920-829845.jpg",
            altText: "Vista panorâmica de uma montanha majestosa refletindo em um lago sereno, cercada por árvores e um céu azul com nuvens." },
        { url: "https://static.vecteezy.com/ti/fotos-gratis/p2/20217887-belas-paisagens-naturais-lago-com-ponte-de-madeira-papel-de-parede-da-natureza-fundo-da-paisagem-gratis-foto.jpg",
            altText: "Lago tranquilo cercado por árvores, com uma ponte de madeira ao centro, criando um cenário natural sereno." },
        { url: "https://thumbs.dreamstime.com/b/tropischer-paradies-strand-auf-den-malediven-paradiesstrand-ohne-leute-wei%C3%9Fer-sand-und-kokospalmen-161672548.jpg",
            altText: "Praia deserta nas Maldivas, com areia branca e palmeiras ao fundo, sob um céu azul." }
    ]

    return (
        <>
            <h3>Galeria</h3>
            <div className="galeria">
                {imagens.map((x, index) =>
                    <img
                        key={index}
                        src={x.url}
                        alt={x.altText} />
                )}
            </div>
        </>
    )

}


function ImagensComTexto() {
    return (
        <div className="exercicio">
            <h3>10º exercício</h3>
            <Imagens />
        </div>
    )
}

export default ImagensComTexto;