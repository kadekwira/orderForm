const items = document.querySelectorAll("#item");
const main = document.querySelector(".main")
const details = document.querySelectorAll(".detail");
const imgs = document.querySelectorAll(".img");

const popup = document.createElement("div");
popup.setAttribute("id", "popup")
const backIcon= document.createElement("img");
backIcon.setAttribute("src","assets/images/back.png");
backIcon.setAttribute("class","back");

const imgPopUp= document.createElement("img")
imgPopUp.setAttribute("src","");
imgPopUp.setAttribute("class","popup-img");

const titlePopUp= document.createElement("p");
titlePopUp.setAttribute("class","title-popup");

const likePopUp= document.createElement("p");
likePopUp.setAttribute("class","like-popup");

const hargaPlus = document.createElement("div");
hargaPlus.setAttribute("class","harga-plus");
const hargaPopUp = document.createElement("p")
hargaPopUp.setAttribute("class","harga");
hargaPopUp.innerHTML="Rp "
const span = document.createElement("span")
hargaPopUp.appendChild(span);
hargaPlus.appendChild(hargaPopUp);


popup.appendChild(backIcon)
popup.appendChild(imgPopUp)
popup.appendChild(titlePopUp)
popup.appendChild(likePopUp)
popup.appendChild(hargaPlus)

let total=0;

let jum2=0;
let jum3=0;
let jum4=0;
const adds = document.querySelectorAll(".add-img");
const pluss = document.querySelectorAll(".add")
let harga=0;
let hastot=0;
let hasilTotal=document.querySelector("#costTot")
const hilang = document.getElementById("total")


function popUp(e){
    let pilih = e.target;
    if(pilih.className=="img"){
        main.insertBefore(popup,items[0]);
        imgPopUp.src=pilih.src
        const text = pilih.parentElement.nextElementSibling.firstElementChild.innerHTML;
        titlePopUp.innerHTML=text;
        const text1 = pilih.parentElement.nextElementSibling.firstElementChild.nextElementSibling.innerHTML;
        likePopUp.innerHTML=text1
        const harga =pilih.parentElement.nextElementSibling.lastElementChild.firstElementChild.innerHTML;
        span.innerHTML=harga;
    }

    else if(pilih.id=="item"){
        main.insertBefore(popup,items[0]);
        imgPopUp.src=pilih.firstElementChild.firstElementChild.firstElementChild.src
        const text = pilih.firstElementChild.lastElementChild.firstElementChild.innerHTML;
        titlePopUp.innerHTML=text;
        const text1 = pilih.firstElementChild.lastElementChild.firstElementChild.nextElementSibling.innerHTML;
        likePopUp.innerHTML=text1
        const harga =pilih.firstElementChild.lastElementChild.lastElementChild.innerHTML;
        span.innerHTML=harga;
    }
    else if(pilih.className=="desk"){
        main.insertBefore(popup,items[0]);
        imgPopUp.src=pilih.previousElementSibling.firstElementChild.src;
        const text = pilih.firstElementChild.innerHTML;
        titlePopUp.innerHTML=text;
        const text1 = pilih.firstElementChild.nextElementSibling.innerHTML;
        likePopUp.innerHTML=text1
        const harga =pilih.lastElementChild.innerHTML;
        span.innerHTML=harga;
    }
}



//addPopUp
main.addEventListener("click",(e) =>{
    popUp(e);
})
// close popUp
backIcon.addEventListener("click", function (e){
    popup.remove();
})

// perhitungan
items.forEach((item,x)=>{
    let jum =0
    let jumHarga=[] 
    jumHarga[x]=0;
    item.addEventListener("click",(e)=>{
        let pilih = e.target;
        if(pilih.className=="add-img"){
            pilih.parentElement.style.display="none";
            pilih.parentElement.nextElementSibling.style.display="flex"
            e.target.parentElement.parentElement.parentElement.querySelector("#total").style.display="flex"
            h6=pilih.parentElement.nextElementSibling.querySelector("#jum1")
            harga = pilih.parentElement.previousElementSibling.querySelector(".harga > #cost")
            jum+= 1
            h6.innerHTML=jum
            jumHarga[x]=1*parseFloat(harga.innerHTML)
            hastot += jumHarga[x]

        }
        else if(e.target.className=="add-img2"){
            h6=pilih.parentElement.querySelector("#jum1")
            harga = pilih.parentElement.previousElementSibling.previousElementSibling.querySelector(".harga > #cost")
            jum+= 1
            h6.innerHTML=jum
            jumHarga[x]=1*parseFloat(harga.innerHTML)
            hastot += jumHarga[x]
        }


        else if(pilih.className=="min-img"){
            
            h6=pilih.parentElement.querySelector("#jum1")
            harga = pilih.parentElement.previousElementSibling.previousElementSibling.querySelector(".harga > #cost")
            jum-= 1
            h6.innerHTML=jum
            hastot-= (1*parseFloat(harga.innerHTML))
                if(jum==0){
                    e.target.parentElement.style.display="none";
                    e.target.parentElement.previousElementSibling.style.display="flex"
                }
         }
    
        hasilTotal.innerHTML = hastot
         if(hasilTotal.innerHTML==0){
            hilang.style.display="none"
         }
    })
})
