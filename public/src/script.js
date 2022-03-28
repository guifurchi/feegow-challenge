function getEspecialidade(){

    //url do API e token para acesso
    let url = 'https://api.feegow.com/v1/api/specialties/list/?x-access-token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmZWVnb3ciLCJhdWQiOiJwdWJsaWNhcGkiLCJpYXQiOjE2NDQyNDAzODQsImxpY2Vuc2VJRCI6IjEwNSJ9._v3HJr5GUYAc14WW6HDxM5BlxAl-1KJeaqq2OfG67sM'
    
    //instanciamento da função XMLHttpRequest()
    let xmlHttp = new XMLHttpRequest();

    //abrir o acesso aos dados obtidos no url do API
    xmlHttp.open('GET', url)

    //observar os estados obtidos durante a requisição para execução da função,
    // executar somente quando a requisição retornar 4 (ultimo estado da requisição)
    // executar quando status apresentar o resultado de sucesso na requisição (=200)
    xmlHttp.onreadystatechange = () => {
        if(xmlHttp.readyState == 4  && xmlHttp.status == 200){
            

            //declarar variáveis de url responseText
            let dadosJSONText = xmlHttp.responseText
            //construindo um objeto JSON
            let dadosJSONObj = JSON.parse(dadosJSONText)
            console.log(dadosJSONObj)
            // listar dados do JSON carregado
            let espec = ''
                for( let i in dadosJSONObj.content ){
                    let espec_id = dadosJSONObj.content[i].especialidade_id
                    espec += '<option value="'+espec_id+'">'+ dadosJSONObj.content[i].nome + '</option>'
                }

                
            //listar no select da página os dados encontrados e listados do API no JSON
            let select = document.getElementById('specialty_id')
                select.innerHTML = espec

        
        }

    }

    xmlHttp.send()
}

function getProfissionais(){
    
    //dados para reset das informações antes da consulta de profissionais feitos pelo SELECT
    document.getElementById('rowCard').innerHTML = ''
    document.getElementById('count').innerHTML = ''

    //informação coletada do Select para filtro da consulta
    let filtro = document.getElementById('specialty_id').value

    //url do API e token para acesso
    let url = 'https://api.feegow.com/v1/api/professional/list/?x-access-token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmZWVnb3ciLCJhdWQiOiJwdWJsaWNhcGkiLCJpYXQiOjE2NDQyNDAzODQsImxpY2Vuc2VJRCI6IjEwNSJ9._v3HJr5GUYAc14WW6HDxM5BlxAl-1KJeaqq2OfG67sM'
    
    //instanciamento da função XMLHttpRequest()
    let xmlHttp = new XMLHttpRequest();

    //abrir o acesso aos dados obtidos no url do API
    xmlHttp.open('GET', url)

    //observar os estados obtidos durante a requisição para execução da função,
    // executar somente quando a requisição retornar 4 (ultimo estado da requisição)
    // executar quando status apresentar o resultado de sucesso na requisição (=200)
    xmlHttp.onreadystatechange = () => {
        
        if(xmlHttp.readyState == 4  && xmlHttp.status == 200){
            //declarar variáveis de url responseText
            let dadosJSONText = xmlHttp.responseText
            //construindo um objeto JSON
            let dadosJSONObj = JSON.parse(dadosJSONText)
            // listar dados do JSON carregado
            let espec = ''
                for( let i in dadosJSONObj.content ){
                    espec += dadosJSONObj.content[i].nome

                    //filtrar somente dados que contenham dados de nome diferentes de 'null'
                    if(dadosJSONObj.content[i].nome != null){

                        let espec_id = dadosJSONObj.content[i].especialidades[0].especialidade_id

                        //Filtrar dados conforme value informado no select
                        if(espec_id == filtro){

                        //criar os elementos da pagina HTML para renderização conforme o filtro
                            //declarar a variável para a renderização no HTML
                            let rowCard = document.getElementById('rowCard')

                            let divCol = document.createElement('div')
                            divCol.className = 'col-4'

                            let divCard = document.createElement('div')
                            divCard.className= 'col card mb-2'

                            let divCardBody = document.createElement('div')
                            divCardBody.className = 'card-body'
                            divCol.id = 'card-body'

                            let p1 = document.createElement('p')
                            p1.innerHTML = '<h5><strong>'+ dadosJSONObj.content[i].nome + '</strong><h5>'

                            let p2 = document.createElement('p')
                            p2.innerHTML = 'Especialidade: '+ dadosJSONObj.content[i].especialidades[0].nome_especialidade
                            
                            //mostrar o número do conselho se o valor for diferente de 'null' ou se o valor existir
                            let p3 = document.createElement('p')
                            if(dadosJSONObj.content[i].conselho != null  ){
                                if(dadosJSONObj.content[i].documento_conselho != null || dadosJSONObj.content[i].documento_conselho != ''){
                                    p3.innerHTML = dadosJSONObj.content[i].conselho +": "+ dadosJSONObj.content[i].documento_conselho
                                }
                            }else{
                                //mostrar usuário caso o conselho não for informado
                                p3.innerHTML = '<small style="color: red;">(Conselho não informado)<small>'
                            }
                            
                            //criar o link para acessar os dados do profissional escolhido
                            let a = document.createElement('a')
                            a.className = 'btn btn-primary'
                            a.id = 'agendar'
                            a.value = dadosJSONObj.content[i].profissional_id
                            a.href = '/agenda?profissional_id=' + dadosJSONObj.content[i].profissional_id
                            a.innerHTML = 'Agendar'

                            let imagem = document.createElement('img')
                            imagem.class = 'card-img-top'

                            if(dadosJSONObj.content[i].foto != null){
                                imagem.src = dadosJSONObj.content[i].foto
                            }else{
                                imagem.src = 'img/default.png'
                            }

                            //definindo a ordem de dependencia para formar as tags
                            rowCard.appendChild(divCol)
                            divCol.appendChild(divCard)
                            divCard.appendChild(imagem)
                            divCard.appendChild(divCardBody)
                            divCardBody.appendChild(p1)
                            divCardBody.appendChild(p2)
                            divCardBody.appendChild(p3)
                            divCardBody.appendChild(a)
                            
                            //contar auqnatidade de profissionais encontrados no filtro
                            let count = rowCard.getElementsByClassName('card')
                            count = count.length
                            document.getElementById('count').innerHTML = count + " " + dadosJSONObj.content[i].especialidades[0].nome_especialidade + "(s) encontrado(s)"

                        }
                    }
                }
        }

    }

    xmlHttp.send()
}

function getSources(){
    //url do API e token para acesso
    let url = 'https://api.feegow.com/v1/api/patient/list-sources/?x-access-token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmZWVnb3ciLCJhdWQiOiJwdWJsaWNhcGkiLCJpYXQiOjE2NDQyNDAzODQsImxpY2Vuc2VJRCI6IjEwNSJ9._v3HJr5GUYAc14WW6HDxM5BlxAl-1KJeaqq2OfG67sM'
    
    //instanciamento da função XMLHttpRequest()
    let xmlHttp = new XMLHttpRequest();

    //abrir o acesso aos dados obtidos no url do API
    xmlHttp.open('GET', url)

    //observar os estados obtidos durante a requisição para execução da função,
    // executar somente quando a requisição retornar 4 (ultimo estado da requisição)
    // executar quando status apresentar o resultado de sucesso na requisição (=200)
    xmlHttp.onreadystatechange = () => {
        if(xmlHttp.readyState == 4  && xmlHttp.status == 200){

            //declarar variáveis de url responseText
            let dadosJSONText = xmlHttp.responseText
            //construindo um objeto JSON
            let dadosJSONObj = JSON.parse(dadosJSONText)
            // listar dados do JSON carregado
            let source= ''
                for( let i in dadosJSONObj.content ){
                    let source_id = dadosJSONObj.content[i].origem_id
                    source += '<option value="'+source_id+'">'+ dadosJSONObj.content[i].nome_origem + '</option>'
                }
            //listar no select da página os dados encontrados e listados do API no JSON
            let select = document.getElementById('source_id')
            select.innerHTML = source
        }

    }

    xmlHttp.send()
}

function agendar(){

            //informação da url para filtro
            let filtro = window.location.search
            filtro = filtro.replace('?profissional_id=','' )
            //url do API e token para acesso
            let url = 'https://api.feegow.com/v1/api/professional/list/?x-access-token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmZWVnb3ciLCJhdWQiOiJwdWJsaWNhcGkiLCJpYXQiOjE2NDQyNDAzODQsImxpY2Vuc2VJRCI6IjEwNSJ9._v3HJr5GUYAc14WW6HDxM5BlxAl-1KJeaqq2OfG67sM'
            
            //instanciamento da função XMLHttpRequest()
            let xmlHttp = new XMLHttpRequest();
    
            //abrir o acesso aos dados obtidos no url do API
            xmlHttp.open('GET', url)
    
            //observar os estados obtidos durante a requisição para execução da função,
            // executar somente quando a requisição retornar 4 (ultimo estado da requisição)
            // executar quando status apresentar o resultado de sucesso na requisição (=200)
            xmlHttp.onreadystatechange = () => {
                if(xmlHttp.readyState == 4  && xmlHttp.status == 200){
    
                    //declarar variáveis de url responseText
                    let dadosJSONText = xmlHttp.responseText
                    //construindo um objeto JSON
                    let dadosJSONObj = JSON.parse(dadosJSONText)
                    for( let i in dadosJSONObj.content ){
                    //filtrar somente dados que contenham dados de nome diferentes de 'null'
                    let prof_id = dadosJSONObj.content[i].profissional_id

                        //Filtrar dados conforme value informado no select
                        if(prof_id == filtro){
                            
                            document.getElementById('name_prof').innerHTML = dadosJSONObj.content[i].nome
                            document.getElementById('specialty_name').innerHTML = dadosJSONObj.content[i].especialidades[0].nome_especialidade

                            //criar inputs para inserir
                            let i1 = document.createElement('input')
                            i1.name = 'specialty_id'
                            i1.value = dadosJSONObj.content[i].especialidades[0].especialidade_id
                            i1.setAttribute('hidden',true)

                            let i2 = document.createElement('input')
                            i2.name = 'profissional_id'
                            i2.value = dadosJSONObj.content[i].profissional_id
                            i2.setAttribute('hidden',false)

                            if(dadosJSONObj.content[i].foto != null){
                                imagem = dadosJSONObj.content[i].foto
                            }else{
                                imagem = 'img/default.png'
                            }

                            document.getElementById('prof_pic').src = imagem
                            document.getElementById('dados').appendChild(i1)
                            document.getElementById('dados').appendChild(i2)
                        }
                
                    } 
                }
    
            }
    
            xmlHttp.send()
        }
   
function enviarForm(id_form){
    //definir o nome da variável de forma dinâmica
    let frm = $('#'+ id_form);

    frm.submit(function (e){

        //impede a submissão tradicional
        //e.preventDefault()

        //submissão do formulário em ajax
        $.ajax({
            type: frm.attr('method'),
            url: '/solicitar_agenda', // nome da rota utilizada para inserir informações no MySQL
            data: frm.serialize(),// coletar as informações do Form
            //sucesso
            success: function(i){
                //usado no código PHP durante a requisição do DB
                console.log(frm.serialize())
            },
            //erro
            error: function(){
                //usado no código PHP durante a requisição do DB
            }
        });
    });

}