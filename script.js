button = document.querySelector('button');

button.addEventListener('click', () => {
    const html = document.documentElement
    html.classList.toggle('light')

    const img = document.querySelector('img')

    if ( html.classList.contains('light') ) {
        img.setAttribute("src", "imgs/zoro.jpg")
        img.setAttribute("alt", "imagem perfil zoro")
    } else {
        img.setAttribute("src", "https://yt3.ggpht.com/yti/AHXOFjXMwd8TWoeii9GpPKk71qEwexbaoyLH4ESRhn2aQw=s108-c-k-c0x00ffffff-no-rj") 
        img.setAttribute("alt", "imagem perfil minato")
    }
}
)