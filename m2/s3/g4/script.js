
const getCard = function (photos){
    let row = document.querySelector('.album .container .row')
    row.innerHTML = ''
    photos.forEach(photo => {
        let template = `   
      <div class="col-md-4">
        <div class="card mb-4 shadow-sm">
            <img class="w-100" src=${photos.src.small}}/>
          <div class="card-body">
            <h5 class="card-title">Lorem Ipsum</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  View
                </button>
                <button type="button" class="btn btn-sm btn-outline-secondary">
                  Edit
                </button>
              </div>
              <small class="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
        `
        row.innerHTML += template
    })
}



const Pexel_url = 'https://api.pexels.com/v1/search?query='




const getImages = function(query){
    fetch(Pexel_url  + query, {
        headers: {
            authorization: 'XbExLniGDrRxH6au4hgQfXtAxBd33WD33q9SYNVfjsLWoLTiuHL9hslD'
        }
    })
    .then((res)=>{
        if(res.ok){
            return res.json()
        }else{
            throw new Error('errore nel caricamento')
        }
    })
    .then((data) => {
        console.log(data)
        getCard(data.photos)
    })
    .catch((err) => {
        console.log(err);
    })
}

window.onload = function(){
    let btn1 = document.querySelector('.btn-primary')
    btn1.addEventListener('click', ()=>{
        getImages('mountains')
    })

    let btn2 = document.querySelector('.btn-secondary')
    btn2.addEventListener('click' ,()=> {
        getImages('cats')
    })


}