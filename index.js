const latitude = document.getElementById('latitude')
const longitude = document.getElementById('longitude')
const bloqueado = document.getElementById('erro')
const bloqueadoP = document.getElementById('Perro')
const botao = document.getElementById('botao')

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