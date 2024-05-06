//início do js
function limpa_formulário_cep() {
        //Limpa valores do formulário de cep.

        document.getElementById('rua').value=("");
        document.getElementById('bairro').value=("");
        document.getElementById('cidade').value=("");
        document.getElementById('uf').value=("");
        document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
if (!("erro" in conteudo))// caso de erro
{
    //Atualiza os campos com os valores.
    document.getElementById('rua').value=(conteudo.logradouro);//informar a rua
    document.getElementById('bairro').value=(conteudo.bairro);// informar o bairro
    document.getElementById('cidade').value=(conteudo.localidade);// informar a  cidade
    document.getElementById('uf').value=(conteudo.uf);// informar o Estado
    document.getElementById('ibge').value=(conteudo.ibge);//quantidade de moradores
} //end if.
else { //caso não encontre o CEP
    //CEP não Encontrado.
    limpa_formulário_cep();
    alert("CEP não encontrado.");// isso é mostrado ao usuário
}
}

function pesquisacep(valor) {

//Nova variável "cep" somente com dígitos.
var cep = valor.replace(/\D/g, '');

//Verifica se campo cep possui valor informado.
if (cep != "") {

    //Expressão regular para validar o CEP.
    var validacep = /^[0-9]{8}$/;

    //Valida o formato do CEP.
    if(validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        document.getElementById('rua').value="...";
        document.getElementById('bairro').value="...";
        document.getElementById('cidade').value="...";
        document.getElementById('uf').value="...";
        document.getElementById('ibge').value="...";

        //Cria um elemento javascript.
        var script = document.createElement('script');

        //Sincroniza com o callback.
        script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

        //Insere script no documento e carrega o conteúdo.
        document.body.appendChild(script);

    } //end if.
    else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
    }
} //end if.
    //cep sem valor, limpa formulário.
    limpa_formulário_cep();
}
;
