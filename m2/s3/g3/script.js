

fetch("https://striveschool-api.herokuapp.com/books")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("i tuoi dati non sono stati trovati");
    }
  })

  .then((photos) => {
    console.log(photos);
    let cols = document.querySelector(".row");
    photos.forEach((photo) => {
      let creaCols = document.createElement("div");
      creaCols.classList.add("col-6", "col-lg-4");
      creaCols.innerHTML = `
            <div class="card" style="width: 18rem;">
            <img src= ${photo.img} class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${photo.title}</h5>
            <p class="card-text">${photo.price}</p>
            <a href="#" class="btn btn-primary">compra ora!!</a>
            <button class= "btn btn-danger myButton"> SCARTA</button>
            </div>
            </div>`;
            cols.appendChild(creaCols)

            let Bottone = creaCols.querySelectorAll(".myButton");
            Bottone.forEach((button)=>{
                button.addEventListener("click", ()=>{
                    let card = button.closest(".card")
                    card.innerHTML = card.remove()
                    //closest('card').remove
                })
            })    
            
            let cartShopping = document.querySelectorAll(".btn-primary");
            let i = []
            cartShopping.forEach((button) => {
                button.addEventListener("click" , () =>{
                    let lista = document.querySelectorAll('ul')
                    let listaLi = document.createElement('li')
                    i.push(cartShopping)
                    localStorage.setItem('movie' , i)
                    lista.appendChild(listaLi)
                })
                

            })
    });
 

})