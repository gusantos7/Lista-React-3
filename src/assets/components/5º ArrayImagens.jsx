function Imagens() {
    const imagens = [
        "https://th.bing.com/th/id/OIP.D03RXEm3y8YuDmi4z1UD0wHaEK?rs=1&pid=ImgDetMain",
        "",
        "https://wallpapers.com/images/hd/toy-story-2-complete-characters-5g9qsr5dkblnw42j.jpg",
        "https://i.ytimg.com/vi/zfqkvaJkXAs/maxresdefault.jpg",
        ""
    ]
    return (
        <div className="exercicio">
        <h3>5º exercício</h3>

        {imagens.map((x) => {
            if (x != ""){
                return <img src={x} alt="Imagem bons filmes" />
            }
        })}
        </div>
    )
}

export default Imagens;
