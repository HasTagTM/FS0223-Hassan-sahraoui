const crudazon_url = "https://striveschool-api.herokuapp.com/api/product/";

let addressBarContent = new URLSearchParams(window.location.search)
let productId = addressBarContent.get('productId')




  

if(productId){
  document.getElementsByTagName('h2')[0].innerText = 'Back Office Page - Modifica Prodotto'

  document.querySelector('#save-product').innerText = 'MODIFICA PRODOTTO'

  let deleteBtn = document.querySelector('#delete-product')
  deleteBtn.classList.remove('d-none')
  deleteBtn.addEventListener('click', ()  => {
    fetch(crudazon_url + productId, {
      method : 'DELETE',
      headers: {
        
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVmNDg3NGQwMTc5MzAwMTQyNjIwMmEiLCJpYXQiOjE2ODM5NjYwNjksImV4cCI6MTY4NTE3NTY2OX0.NlLxRg7U35il2yuERuljBIxbxZw6c2HCoHmAoAYB9L8",
      },
    })
    .then((res) =>{
      if(res.ok){
      alert('prodotto eliminato con successo')
      location.assign('./home-page.html')
      }else{
        throw new Error('qualcosa è andato storto')
      }
    })
    .catch((err) =>{
      console.log(err);
    })
  })
  

  fetch(crudazon_url + productId , {
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVmNDg3NGQwMTc5MzAwMTQyNjIwMmEiLCJpYXQiOjE2ODM5NjYwNjksImV4cCI6MTY4NTE3NTY2OX0.NlLxRg7U35il2yuERuljBIxbxZw6c2HCoHmAoAYB9L8",
    },
  })
  .then((res) =>{
    if(res.ok){
      return res.json()
      location.assign('./home-page.html')
    }else{
      throw new Error("impossibile modificare l'elemento")
      alert('attenzione! verificare parametri inseriti')
    }
  })
  .then((resProduct) =>{
    console.log(resProduct);

    document.querySelector('#name').value = resProduct.name
    document.querySelector('#description').value = resProduct.description
    document.querySelector('#brand').value = resProduct.brand
    document.querySelector('#url').value = resProduct.imageUrl
    document.querySelector('#price').value = resProduct.price
  })
  .catch((err) =>{
    alert('qualcosa è andato storto')
  })
}else{

}


  const formArticle = document.querySelector("#form-article");
  formArticle.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputName = document.querySelector("#name");
    const inputDescription = document.querySelector("#description");
    const inputBrand = document.querySelector("#brand");
    const inputUrl = document.querySelector("#url");
    const inputPrice = document.querySelector("#price");

    const NewObjectProduct = {
      name: inputName.value,
      description: inputDescription.value,
      brand: inputBrand.value,
      imageUrl: inputUrl.value,
      price: inputPrice.value,
    };

    fetch(productId ? crudazon_url + productId : crudazon_url, {
      method: productId ? "PUT" : "POST",

      body: JSON.stringify(NewObjectProduct),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVmNDg3NGQwMTc5MzAwMTQyNjIwMmEiLCJpYXQiOjE2ODM5NjYwNjksImV4cCI6MTY4NTE3NTY2OX0.NlLxRg7U35il2yuERuljBIxbxZw6c2HCoHmAoAYB9L8",
      },
    })
      .then((res) => {
        console.log(res);
        if (res.ok) {
          alert( productId ? "articolo modificato con successo" : "articolo salvato con successo!");
        } else {
          alert("errore nel savataggio dell'articolo!");
          throw new Error("errore nel salvataggio dell'articolo!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  });
