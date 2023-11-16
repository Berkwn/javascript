function generateRandomId () {

    return Math.floor(Math.random() * 100000000)
}

// API isteği yapıldı ve bir dizi userler geldi
const users = [
    
    { id: generateRandomId(), name: "Hasan", lastname: "Çolak" },
    { id: generateRandomId(), name: "Kenan", lastname: "Işık" },
    { id: generateRandomId(), name: "Ceren", lastname: "Sungur" }
]


console.log(users)


const tbody = document.getElementById('personel-table')


function createHTMLElement(etiketAdi, etiketDeger) {

    // html etiketi tr, th td veya button olabilir
    const html_etiketi = document.createElement(etiketAdi)

    if (etiketDeger) {

        if (etiketAdi === "input") {

            html_etiketi.value = etiketDeger
            html_etiketi.disabled = true;

        } else {

            html_etiketi.innerText = etiketDeger
        }

    }

    return html_etiketi
}



function handleInputChange(duzenleme_butonu) {
   

    if (duzenleme_butonu.innerText === "Düzenle") {

        duzenleme_butonu.innerText = "Onayla"
        duzenleme_butonu.className = "btn btn-success me-3"
}

}

// sayfa tamamen yüklendiği zaman;
window.onload = function() {

    // high order functions
    users.forEach(function(user) {

        const tr = createHTMLElement("tr")
        const th = createHTMLElement('th', user.id)

        const ad = createHTMLElement('td')
        const adInput = createHTMLElement('input', user.name)
        
        ad.append(adInput)


        const soyad = createHTMLElement('td')
        const soyadInput = createHTMLElement('input', user.lastname)

        soyad.append(soyadInput)

        const mod_arac_gerec = createHTMLElement('td')

        const duzenleBtn = createHTMLElement('button', 'Düzenle')
        // düzenle butonuna tıklandığında
        duzenleBtn.onclick = function() {

                if (adInput.disabled == false && soyadInput.disabled == false) {
                    // güncelleme işlemi
                     adInput.disabled = true;
                     soyadInput.disabled = true;

                     // butonun şeklini değiştir
                     duzenleBtn.className = "btn btn-warning me-3"
                     duzenleBtn.innerText = "Düzenle"

                     user.name = adInput.value
                     user.lastname = soyadInput.value;

                     console.log("Updated user:", user, "Array:", users)
                     alert("Başarılı bir şekilde güncellendi.")

                } else {


                    // inputların disabledlerini kaldır
                    adInput.disabled = false;
                    adInput.focus()

                    soyadInput.disabled = false;
                }
             
  
        }


        // inputların davranış şekli
        adInput.oninput = function() {

                handleInputChange(duzenleBtn)
        }



        soyad.oninput = function() {

            handleInputChange(duzenleBtn)
        }


        const silBtn = createHTMLElement('button', 'Sil')

        silBtn.onclick=function(){

            const sil_onay=confirm("bu satırı silmek istediğinizden emin misiniz?")
            if(sil_onay){

                
                tr.innerText=" "
               

            
            }else{

                return;
            }




        }

        const tumunusil=document.getElementById("tumunu_sil")

        tumunusil.onclick=function(){


            const tumunu_sil_onayla=confirm("sayfadaki tüm satırları silmek istediğinizden emin misiniz?")
            if(tumunu_sil_onayla){

                tbody.innerText=" "

            }else {

                return;
            }


        }



        // duzenle btn ve silt btn
        duzenleBtn.className = "btn btn-warning me-3"
        silBtn.className = "btn btn-danger"

        // tüm elemanları tr'e at
        tr.append(th)
        tr.append(ad)
        tr.append(soyad)
        
        mod_arac_gerec.append(duzenleBtn)
        mod_arac_gerec.append(silBtn)

        tr.append(mod_arac_gerec)

        tbody.append(tr)
    })

}

 
