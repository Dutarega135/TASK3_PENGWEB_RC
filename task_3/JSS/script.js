document.getElementById("button").addEventListener('click', ()=>{
    if(document.getElementById("desk3").innerText === ""){
    const listbaru1=document.createElement("li")
    const listbaru2=document.createElement("li")
    const listbaru3=document.createElement("li")
    const listbaru4=document.createElement("li")
    const listbaru5=document.createElement("li")
    const listbaru6=document.createElement("li")
    const listbaru7=document.createElement("li")
    
    const isilist1=document.createTextNode("Kondisi: Baru")
    const isilist2=document.createTextNode("Berat Satuan: 500 g")
    const isilist3=document.createTextNode("Waktu Preorder: 7 Hari")
    const isilist4=document.createTextNode("Kategori: Android OS")
    const isilist5=document.createTextNode("Etalase: Hp 2 jutaan")
    const isilist6=document.createTextNode("Katalog: Samsung Galaxy A13")
    const isilist7=document.createTextNode("Samsung Galaxy A13 6/128GB 4/128GB Garansi Resmi SEIN")

    listbaru1.appendChild(isilist1)
    listbaru2.appendChild(isilist2)
    listbaru3.appendChild(isilist3)
    listbaru4.appendChild(isilist4)
    listbaru5.appendChild(isilist5)
    listbaru6.appendChild(isilist6)
    listbaru7.appendChild(isilist7)

    document.getElementById("desk3").append(listbaru1,listbaru2,listbaru3,listbaru4,listbaru5,listbaru6,listbaru7)
    }else{
        document.getElementById("desk3").innerHTML=""
    }

})


