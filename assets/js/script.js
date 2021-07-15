const formulario = document.getElementById('cadastro')

cadastro.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let registro = {
        nome,
        email,
    };
    let convertData = JSON.stringify(registro);

    localStorage.setItem('lead', convertData);

    let cardContent = document.getElementById('content');

    let loader = '<img src= "./assets/gif/loader.gif" alt="icone carregando">'

    let registrado = `<p> ${nome} parabéns!  seu cadastro foi realizado com sucesso!
    Seu voucher chegará em seu e-mail em até 48h aguarde! </p>`

    cardContent.innerHTML = loader;

    setTimeout(() => {
        cardContent.innerHTML = registrado;
    }, 1000)

})