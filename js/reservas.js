
$(document).ready(function () {
    $("form").submit(function (event) {

        event.preventDefault();

            var formValues = $(this).serialize();

            $.ajax({
                type: 'POST',
                url: 'http://localhost:3000/reservas',
                data: formValues
            })
                .done(function (data) {
                    alert("Formulário enviado com sucesso.");
                    console.log("Registro salvo!");
                })
                .fail(function (msg) {

                    alert("Falha na solicitação de reserva. Confira seus dados." + msg);
                });
    });
});


$.get("http://localhost:3000/reservas", function (data, status) {
    for (i = 0; i < data.length; i++) {
        /*CONVERTER A DATA RECEBIDA PARA O PADRÃO BR*/
        const dataConvert1 = new Date(data[i].dataEntrada);
        const dataConvert2 = new Date(data[i].dataSaida);
        const dataE = dataConvert1.toLocaleDateString('pt-BR', { timeZone: 'UTC', });
        const dataS = dataConvert2.toLocaleDateString('pt-BR', { timeZone: 'UTC', });

        $('#body-tabela').append("<tr>" +
            "<td>" + data[i].id + "</td>" +
            "<td>" + data[i].nome + "</td>" +
            "<td>" + data[i].email + "</td>" +
            "<td>" + dataE + "</td>" +
            "<td>" + dataS + "</td>" +
            "<td>" + data[i].adultos + "</td>" +
            "<td>" + data[i].criancas + "</td>" +
            "<td>" + data[i].observacoes + "</td>" +
            "</tr>");
    }
});