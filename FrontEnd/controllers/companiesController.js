//return company name -> ainda não funciona
window.onload = function () {
    //chama a função para atualizar a lista de pedidos
    companyName();
}

function companyName() {
    let companyName = document.getElementById("companyName");
    try {
        fetch(`https://api.moloni.pt/v1/companies/getAll/?access_token=c1585e9065097f6db57c4cecfb714f04b16085cc`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET'
        })
            .then(res => res.json())
            .then(function (data) {
                companyName.innerHTML = data;
            })
    } catch (err) {
        alert(err);
    }
}