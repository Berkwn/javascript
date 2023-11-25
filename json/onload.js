const userSepet = [];


// arrow functinos
const make_api_request = async () => {

    const request = await fetch("./product.json")
    const response = await request.json()

    return response
}

window.onload = async () => {
    const ul = document.getElementById('products')
    // aği isteği yap

    const apiData = await make_api_request()

    console.log("sayfa load olduğunda veriler:", apiData)

    apiData.forEach(urun => {

        ul.innerHTML += createHTML(urun, "homepage")
        
    });
}
