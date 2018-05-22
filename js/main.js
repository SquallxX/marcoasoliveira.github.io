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

        let divItem = document.createElement('div')
        divItem.classList.add('item-repositorio')


        let divTitulo = document.createElement('div')
        divTitulo.classList.add('item-header')
        let linkTitulo = document.createElement('a')
        let linkTexto = document.createTextNode(`${repo.name}`)
        linkTitulo.appendChild(linkTexto);
        linkTitulo.setAttribute('href', `https://github.com/${repo.full_name}`)
        divTitulo.appendChild(linkTitulo)

        let divDescricao = document.createElement('div')
        divDescricao.classList.add('repo-descricao')
        let descricao = document.createElement('p')
        let descricaoTexto = document.createTextNode(`${repo.description}`)
        descricao.appendChild(descricaoTexto)
        divDescricao.appendChild(descricao)

        divItem.appendChild(divTitulo)
        divItem.appendChild(divDescricao)

        listaRepo.appendChild(divItem)

    })

}

listaRepositorios()