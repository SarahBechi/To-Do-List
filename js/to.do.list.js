
const list = document.getElementById('items_list');

function newElement() {
let buttncoml=document.createElement("span")

buttncoml.innerHTML="Complete"

buttncoml.classList.add("compeleteBtn")

let buttdel=document.createElement("span")

buttdel.classList.add("deleteBtn")
 
buttdel.innerHTML="Delete"

let text=document.createElement("span")
 
text.innerHTML= document.getElementById('enter-task').value

let elt=document.createElement("li")
elt.appendChild(buttncoml)
elt.appendChild(buttdel)
elt.appendChild(text)

list.appendChild(elt)
    }
 
//fonction delete
list.addEventListener('click', function Delet(e) {
    let x=e.target
    var parent =e.target.parentElement
    if(x.className==="deleteBtn")
 {   parent.remove() 


}
else

  
    if(x.className==="compeleteBtn" )
        
      {
          if(e.target.innerHTML==="Complete")
             {
                parent.lastElementChild.style.textDecoration="line-through"
                e.target.innerHTML="Undo"

            }
          else if (e.target.innerHTML==="Undo")
            {
                parent.lastElementChild.style.textDecoration="none"
                e.target.innerHTML="Complete"
            }
           
       
        
 
}
    
})


 