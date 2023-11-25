const createHTML = function(urun, tur) {
    
    let adet;

    const button = `
    <div class='button-container'>
            <button onclick="addToSepet(${urun.id})">Sepete Ekle</button>
    </div>`


    // short if/else
    // const urunAdet = urun.amount ? adet = urun.amount : adet = 0;

    if (urun.amount) {

        adet = urun.amount
    }

    const sidebarButton = `
        <div class='sidebar-container'>
            <button onclick="birEksilt(${urun.id})">-</button>
            <p id='sayac'>${adet}</p>
            <button onclick="addToSepet(${urun.id})">+</button>
           
            <p class="price" id="price-${urun.id}">${urun.amount * urun.price} TL</p>

             
              
        </div>
    `


    let li = `
        <li>
            <h3 class='title'>${urun.name}</h3>    

            <div>
                <img src='${urun.banner}' alt='foto-${urun.id}'>    
            </div>

           <p id='price' style="margin-top:10px">Liste Fiyatı :${urun.price}TL</p>

           
       
    `


    if (tur === "homepage") {

        li += button

    } else if (tur === "sidebar") {

        li += sidebarButton

    }



    li += "</li>"
    // li'i döndür
    return li
}