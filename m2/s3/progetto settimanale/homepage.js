

const crudazon_url = "https://striveschool-api.herokuapp.com/api/product";

const fetchProduct = () => {
  fetch(crudazon_url, {
    headers: {
      Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVmNDg3NGQwMTc5MzAwMTQyNjIwMmEiLCJpYXQiOjE2ODM5NjYwNjksImV4cCI6MTY4NTE3NTY2OX0.NlLxRg7U35il2yuERuljBIxbxZw6c2HCoHmAoAYB9L8",
    },
  })
    .then((res) => {
      console.log(res);
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("errone nel recupero dati");
      }
    })
    .then((products) => {
      console.log(products);
      products.forEach((product) => {
        let template = `
        <div class="col-12 col-md-6 col-md-4 p-2">
            <div class="card text-center">
                <img src=${product.imageUrl} class="card-img-top w-100" alt="">
                <div class="card-body">
                  <h5 class="card-title">${product.name}</h5>
                  <p class="card-text">${product.description}</p>
                  <a href="./back-office.html?productId=${product._id}" class="btn btn-primary">MODIFICA</a>
                  <a href="./product-page.html?productDetails=${product._id}" class="btn btn-primary">DETTAGLI</a>
                </div>
              </div>
        </div>`


        const container = document.querySelector('#containerImage')
        container.innerHTML += template
      })
      document.querySelector('#spinRound').style.display = 'none'
    })
    .catch((err) => {
      console.log(err);
    });
};

window.onload = () => {
  fetchProduct();
};



