let clicked = (scarta =>{
    
})

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
            <a href="#" class="btn btn-primary">ADD CART</a>
            <button class= "btn btn-danger myButton"> SCARTA</button>
            </div>
            </div>`;
            cols.appendChild(creaCols)

            let Bottone = creaCols.querySelectorAll(".myButton");
            Bottone.forEach((button)=>{
                button.addEventListener("click", function(){
                    let card = button.closest(".card")
                    card.innerHTML = ""
                })
            })    
            
            let cartShopping = document.querySelectorAll(".add-cart");
            cartShopping.forEach((button) => {
                button.addEventListener("click" , () =>{
                    let lista = document.querySelectorAll('ul')
                    let listem = document.createElement('li')
                })
                

            })
    });
  });

  

//   const cart = document.querySelector(".cart");
//   const addBut = bookItem.querySelectorAll(".addToCart");
//   addBut.forEach((button) => {
//     button.addEventListener("click", function () {
//       const card = this.closest(".card");
//       const listItem = document.createElement("li");
//       listItem.classList.add("d-flex", "flex-column");
//       listItem.innerHTML = 
//       <p>${book.title}</p>
//       <p>${book.price}</p>
//       ;
//       cart.appendChild(listItem);
//     });
//   });