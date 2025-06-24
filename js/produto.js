//script para favoritar o produto
let coracao = document.querySelector(".bi-heart-fill");
coracao.addEventListener('click', function(event){
       if(event.target.nodeName === "I"){
        event.target.classList.toggle("red");
    }
});

