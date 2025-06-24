
const btnAdd = document.querySelector("#addbotao"); 

btnAdd.addEventListener("click", function () {
  
  const inputValue = document.querySelector("#myInput").value;
  if (inputValue === "") {
    alert("Você deve digitar algum texto para adicionar!");
  } else {
    
    document.querySelector("#mensagem-ok").insertAdjacentHTML(
        "afterend",
        `
      <div class="card-teste">
              <span>LOGIN EFETUADO COM SUCESSO</span>
      </div>
      `
     
      );  
      
      const mensagem = document.querySelector('.card-teste');

      
      setTimeout(() => {
        mensagem.style.display = "none";
      }, 3000);
  }
  document.querySelector("#myInput").value = ""; 
  });

