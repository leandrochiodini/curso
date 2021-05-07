var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {
    //cancelando o evento do formulario para nao submeter
    event.preventDefault();

    // criando um novo elemento tr para a tabela.
    var tr = document.createElement('tr');

    campos.forEach(function (campo) {
        
        //criando um novo elemento (td) para inserir na tr
        var td = document.createElement('td');
        //informando um texto para o td criado.
        td.textContent = campo.value;
        //inserindo o td na tr criada fora do laço.
        tr.appendChild(td);
    });

    var tdVolume = document.createElement('td');
    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

    tbody.appendChild(tr);


});

