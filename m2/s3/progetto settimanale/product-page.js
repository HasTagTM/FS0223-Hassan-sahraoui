const crudazon_url = "https://striveschool-api.herokuapp.com/api/product/";



//non sono riuscito a generare la card nella pagina. ho fatto molte prove ma non va purtroppo. il resto invece è tutto ok. almeno spero...

const DetailsPage = function (details) {
  let template = `
        <div class="col-12 col-md-6 col-md-4 p-2">
            <div class="card text-center">
                <img src=${details.imageUrl} class="card-img-top w-100" alt="">
                <div class="card-body">
                  <h5 class="card-title">${details.name}</h5>
                  <p class="card-text">${details.description}</p>
                </div>
              </div>
        </div>`;

  const container = document.querySelector("#containerImage");
  container.innerHTML += template;
};

const getSingleProduct = function () {
  let productId = new URLSearchParams(window.location.search).get("productDetails");
  fetch(crudazon_url + productId, {
    headers: {

      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDVmNDg3NGQwMTc5MzAwMTQyNjIwMmEiLCJpYXQiOjE2ODM5NjYwNjksImV4cCI6MTY4NTE3NTY2OX0.NlLxRg7U35il2yuERuljBIxbxZw6c2HCoHmAoAYB9L8",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Error getting single image details");
      }
    })
    .then((singleProductDetails) => {
      DetailsPage(singleProductDetails);
    })
    .catch((err) => {
      console.log(err);
    });
};

window.onload = function () {
  getSingleProduct();
};
