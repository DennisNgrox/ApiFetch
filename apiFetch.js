const resultado = document.getElementById('resultado');
const valor = document.getElementById('valor');
const enviar = document.getElementById('enviar');

enviar.addEventListener('click', () => {
        const valor2 = valor.value;
        if(valor.value === '' ) {
            resultado.innerHTML = 'Indefinido';
        } else {
        fetch('https://api.macvendors.com/' + valor.value).then(resposta => {
            return resposta.text();
        }).then(data => {
            console.log(data);
            resultado.innerHTML = data;
        })
    }
});

