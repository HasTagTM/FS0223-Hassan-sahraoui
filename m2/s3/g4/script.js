
let apiKey = "XbExLniGDrRxH6au4hgQfXtAxBd33WD33q9SYNVfjsLWoLTiuHL9hslD";

fetch("https://api.pexels.com" , {               //mi continua a dare errore nelle fetch e non mi capacito del perchè
Headers : {
    contentType : 'application/jason',
    Authorization : '[apiKey]'
}
})
.then((res) => {
    console.log(res)
    if(res.ok){
        return res.json()
        console.log(res);
    }else{
        throw new error ('errore nel caricamento');
    }
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
})
