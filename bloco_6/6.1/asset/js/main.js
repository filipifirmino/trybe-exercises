document.ajax({
    type: 'GET',
    url: 'https://servicodados.ibge.gov.br/api/v1/localidades/distritos',
    sucess: function (data) {
        const estado = JSON.parse(data);
        console.log(estado.nome);
    }

});
