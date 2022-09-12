//////// API

function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()
    return request.responseText
}


function criaLinha(displayName) {
    
}

// function main() {
//     data = fazGet(`https://valorant-api.com/v1/weapons/skins/`)
//     displayName = JSON.parse(data)
//     console.log(displayName[0])
// }

function main() {
    data = fazGet(`https://valorant-api.com/v1/sprays`)
    fullIcon = JSON.parse(data)
    console.log(fullIcon.data[3].fullIcon)
}
main()


addEventListener('click', function() {
    let sprayAleatorio = Math.floor(Math.random() * 339)
    let sprays = document.querySelector('#spray')
    
    sprays.setAttribute('src', `${fullIcon.data[sprayAleatorio].fullIcon}`); 
})
