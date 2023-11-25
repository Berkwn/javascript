function openSepet() {

    const siteContainer = document.querySelector('.site-container')
    const sidebar = document.querySelector('.sidebar')

    // bu elemeane active classi ver
    sidebar.classList.toggle('active')
    siteContainer.classList.toggle('active')
}

// sepeti güncelle
function sepetGuncelle() {
    const sidebarUL = document.getElementById('sepet-products')
    sidebarUL.innerHTML = "";
    // sepet açıldığında sepetteki ürünleri gönder
    userSepet.forEach(urun => {

        sidebarUL.innerHTML += createHTML(urun, "sidebar")

        

    })
}

// sepete yeni ürün ekle ve sayacı arttır
async function addToSepet(urunId) {

    // sepet ekle butonuna tıklandıgında
    const response = await make_api_request()
    console.log("butona tıklandığında veriler:", response, "parametreden gelen urin id:", urunId)

    const urun = response.find((product) => {
        
        if (product.id === urunId) {

            return product
        }
    })

    
     // obje
    // bu ürün userin sepetinde var mı?
    const sepette = userSepet.find(sepetUrun => {
    

        if (sepetUrun.id === urunId) {

            return sepetUrun
        }
    })

    console.log("SEPETİM:", urun)
        //  const btnhesap=document.getElementById('btnHesapla')
    
     Hesapla=()=>{
       
        userSepet.forEach((urun)=>{

            if(urun.id==sepette.id){

                
                let total=urun.price*urun.amount

                document.getElementById('price-${urun.id}').innerText="Toplam Fiyat:  "+total+"TL"

            }

        })

        

      
        

        

        
    }

     
    // urun user'in sepetinde ilgili ürün varsa adeti 1 arttır 
    if (sepette) {
        
       
       
        sepette.amount += 1;
        

       
       

    // yoksa api den gelen objeye amount diye 1 değer ekle ve değerini 1 yap
    
    } else {

        urun.amount = 1
        // user spete gönder
        userSepet.push(urun)

        // bildirim mesajı ver

        alert(`${urun.name} adlı ürün sepetinize eklenmiştir.`)
    }

    console.log("USER SPET:", userSepet)
    // sepeti güncelle
    sepetGuncelle()
    
    Hesapla()
}




// sayacı düşür
function birEksilt(urunId) {

    let globalIndex = "";
    const sepette = userSepet.find((sepetUrun, index) => {

        if (sepetUrun.id === urunId) {
            
            globalIndex = index

            return sepetUrun
        }
    })


   // 0 dan küçükse elementi çıkart
   if (sepette.amount <= 1) {

        // sepetten çıkar
        userSepet.splice(globalIndex, 1)

   } else {
      // amount 1 düşür.
      sepette.amount -= 1;
   }
   // sepeti güncelle
   sepetGuncelle()
   console.log("GELEN VERİG:", sepette)

   
}function anonsNone(){
   window.alert=function(){

    
   }
}