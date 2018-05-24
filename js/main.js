async function listaRepositorios(){
    
    try{
        const response = await axios.get('https://api.github.com/users/marcoasoliveira/repos')
        // let repos = response.data.map( (repo) => {
        //     return repo.name
        // })
        // return repos
        return exibeRepositorio(response.data)
    }
    catch (erro){
        console.log(erro)
    }
}

//console.log(listaRepositorios())

function exibeRepositorio(lista){

    let listaRepo = document.querySelector('.listaRepositorios')
    
    lista.map( (repo) => {

        let card = document.createElement('div')
        card.classList.add('card')
        card.classList.add('col-sm-12')
        card.classList.add('col-md-3')

        card.setAttribute('id', 'card-works')

        let imgCard = document.createElement('img')
        imgCard.classList.add('card-img-top')
        imgCard.setAttribute('src','img/giticon.png')

        let cardBody = document.createElement('div')
        cardBody.classList.add('card-body')
        cardBody.classList.add('d-inline-block')
        cardBody.classList.add('text-truncate')

        let nomeRepositorio = document.createElement('h5')
        nomeRepositorio.classList.add('card-title')
        let nomeNode = document.createTextNode(`${repo.name}`)
        nomeRepositorio.appendChild(nomeNode);

        let descricaoRepositorio = document.createElement('span')
        descricaoRepositorio.classList.add('card-text')
        let descricaoNode = document.createTextNode(`${repo.description}`)
        descricaoRepositorio.appendChild(descricaoNode)

        let botao = document.createElement('a')
        botao.setAttribute('href', `https://github.com/${repo.full_name}`)
        botao.classList.add('btn')
        botao.classList.add('btn-primary')
        let botaoNode = document.createTextNode('Acesse')
        botao.appendChild(botaoNode)

        cardBody.appendChild(nomeRepositorio)
        cardBody.appendChild(descricaoRepositorio)

        card.appendChild(imgCard)
        card.appendChild(cardBody)
        card.appendChild(botao)

        listaRepo.appendChild(card)

        // let divItem = document.createElement('div')
        // divItem.classList.add('item-repositorio')

        // let divIcon = document.createElement('div')
        // let iconTag = document.createElement('img')
        // iconTag.setAttribute('src','img/giticon.png')
        // divIcon.classList.add('iconTag')
        // divIcon.appendChild(iconTag)


        // let divTitulo = document.createElement('div')
        // divTitulo.classList.add('item-header')
        // let linkTitulo = document.createElement('a')
        // let linkTexto = document.createTextNode(`${repo.name}`)
        // linkTitulo.appendChild(linkTexto);
        // linkTitulo.setAttribute('href', `https://github.com/${repo.full_name}`)
        // linkTitulo.setAttribute('target', '_blank')
        // divTitulo.appendChild(linkTitulo)

        // let divDescricao = document.createElement('div')
        // divDescricao.classList.add('repo-descricao')
        // let descricao = document.createElement('p')
        // let descricaoTexto = document.createTextNode(`${repo.description}`)
        // descricao.appendChild(descricaoTexto)
        // divDescricao.appendChild(descricao)

        // divItem.appendChild(divIcon)
        // divItem.appendChild(divTitulo)
        // divItem.appendChild(divDescricao)

        // listaRepo.appendChild(divItem)

    })

}

listaRepositorios()