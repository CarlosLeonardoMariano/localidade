const latitude = document.getElementById('latitude')
const longitude = document.getElementById('longitude')
const bloqueado = document.getElementById('erro')
const bloqueadoP = document.getElementById('Perro')
const botao = document.getElementById('botao')
const btnRemover = document.querySelector('.btn-remover')
const btnPhone = document.querySelector('.btn-phone')
const ulPhone = document.querySelector('.ul_phone')
const localAtual = document.getElementById('atual')
const copy = document.getElementById('copy')
const localização = document.getElementById('share-location')
const botao2 = document.getElementById("botao2")





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
localAtual.value = `${latitude.value}, ${longitude.value}`;
    // Inicializa o mapa
    initMap(cordenadas.coords.latitude, cordenadas.coords.longitude);


bloqueado.innerHTML = ''
bloqueadoP.innerHTML =''
} 




botao2.addEventListener('click', ()=> {
if(localAtual.value === '') {
    alert('Sua localização está vazia')
} else{
    // Abre o Google Maps automaticamente
    const mapsUrl = `https://www.google.com/maps?q=${latitude.value},${longitude.value}`;
    window.open(mapsUrl, '_blank');
}
})


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

// Função para copiar o valor do input para a área de transferência
copy.addEventListener('click' , ()=> {
    const textoParaCopiar = localAtual.value;
    navigator.clipboard.writeText(textoParaCopiar)
    if(localAtual.value === ''){
        Toastify({
            text: "Localização atual vazia",
            duration: 3000, 
            gravity: "top", 
            position: "right", 
            offset: {
                x: 10, 
                y: 60 
              },
            backgroundColor: "red",
          }).showToast();
          console.log('Erro ao copiar:', error)


        }
        else{  
            Toastify({
                text: "Localização Copiado com sucesso",
                duration: 3000, 
                gravity: "top", 
                position: "right", 
                offset: {
                    x: 10, 
                    y: 60 
                  },
                backgroundColor: "green",
              }).showToast();
              console.log('Localização Copiado com sucesso:' , textoParaCopiar)

    }
});


    localização.addEventListener('click', () => {
        const latitude = document.getElementById('latitude').value;
        const longitude = document.getElementById('longitude').value;

        if (latitude && longitude) {
            const locationURL = `https://www.google.com/maps?q=${latitude},${longitude}`;
            const message = `Minha localização atual é: ${locationURL}`;
            const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;

            window.open(whatsappURL, '_blank');
        } else {
            alert('Localização não encontrada. Por favor, descubra sua localização antes de compartilhar.');
        }
    });






    // FAZENDO A PARTE DO CLIMA 
const form = document.getElementById('search');
const btn_Submit = document.getElementById('btn-submit')
const cityname = document.getElementById('cityname')
const alertar = document.getElementById('alert')
const title = document.getElementById('title')
const temp_value = document.getElementById('temp_value')
const temp_descrition = document.getElementById('temp_descrition')
const tempIcoon = document.getElementById('temp_img')
const tempMax = document.getElementById('temp_max')
const tempMin = document.getElementById('temp_min')
const vento = document.getElementById('vento')
const umidade = document.getElementById('humidade')
const weather = document.getElementById('weather')

form.addEventListener('submit', async (evento) => {
    evento.preventDefault(); // Evita o recarregamento da página
    const cityInput = cityname.value.trim()
    if(!cityInput){
        alert('Por favor, insira o nome da cidade.');
    };
        const keyAPI = '33cc940c5cc67ec7ccf1d0c90ae01427';
     const ApiURL = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(cityInput)}&appid=${keyAPI}&units=metric&lang=pt-br`

     const resultado = await fetch(ApiURL);
     const json = await resultado.json();
     
     console.log(ApiURL)
     console.log(json)
     

     if(json.cod === 200){
        InformaçõesJSON({
            city:json.name,
            pais:json.sys.country,
            temp:json.main.temp,
            tempmax : json.main.temp_max,
            tempmin : json.main.temp_min,
            descrição : json.weather[0].description,
            tempIcon : json.weather[0].icon,
            vento : json.wind.speed,
            umidade : json.main.humidity
        })

     } else{
        alert('Não foi possivel localizar...')
     }


});

        function InformaçõesJSON(json){
            weather.classList.add('show')

            title.innerHTML = `${json.city},${json.pais}`
            temp_value.innerHTML = `${json.temp.toFixed(1).toString().replace('.', ',')} <sup>C°</sup>`
            temp_descrition.innerHTML = `${json.descrição}`
            tempIcoon.setAttribute('src',`https://openweathermap.org/img/wn/${json.tempIcon}@2x.png`)
            tempMax.innerHTML = `${json. tempmax.toFixed(1).toString().replace('.',',')} <sup>C°</sup>`
            tempMin.innerHTML = `${json. tempmin.toFixed(1).toString().replace('.',',')} <sup>C°</sup>`
            vento.innerHTML = `${json.vento} km/h`
            umidade.innerHTML = `${json. umidade} %`
        }
      



function msgAlert(msg) {
            alertar.innerHTML = msg
alertar.style.display = 'block'
        }


