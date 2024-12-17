const latitude = document.getElementById('latitude')
const longitude = document.getElementById('longitude')
const bloqueado = document.getElementById('erro')
const bloqueadoP = document.getElementById('Perro')
const botao = document.getElementById('botao')
const btnRemover = document.querySelector('.btn-remover')
const btnPhone = document.querySelector('.btn-phone')
const ulPhone = document.querySelector('.ul_phone')




botao.addEventListener('click', ()=>{
if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(localizar,erro)
} else{
    erro()
}
})



function localizar(cordenadas){
latitude.value = cordenadas.coords.latitude
longitude.value = cordenadas.coords.longitude
bloqueado.innerHTML = ''
bloqueadoP.innerHTML =''
} 


function erro(){
    latitude.value = ''
    longitude.value = ''
    bloqueado.innerHTML = "Acesso à sua localização foi bloqueado. <br> Por favor, permita o acesso à sua localização nas configurações do navegador."
    bloqueadoP.innerHTML = `PARA DESBLOQUEAR O ACESSO À SUA LOCALIZAÇÃO, SIGA OS PASSOS : <br>
    1. Clique no ícone de cadeado na barra de endereço do navegador. <br>
    2. Selecione a opção 'Permitir' para o acesso à localização. <br>
    3. Atualize a página para que a alteração tenha efeito. <br>
    Caso esteja utilizando um dispositivo móvel, acesse as configurações de privacidade e permita o acesso à localização para este site.`;
    }



    // Adicionando o evento de clique para o efeito toggle

    btnPhone.addEventListener('click', ()=> {
        ulPhone.classList.add('active')
        btnRemover.classList.add('active2')
        btnPhone.style.display = 'none';


    })


// Adiciona o evento para fechar a lista
btnRemover.addEventListener('click', () => {
    ulPhone.classList.remove('active'); // Remove a classe 'active'
    btnRemover.classList.remove('active2')
    btnPhone.style.display = 'flex';

});


