function cads(){
    areaLogin.style.display="none";
    areaCadastro.style.display="block";
}
function acessar(){
    areaLogin.style.display="block";
    areaCadastro.style.display="none";
}
function idiomaEscolha(){
    if(idioma.value == "br"  ){
       campo1.src= "https://www.vagalume.com.br/henrique-e-juliano/discografia/menos-e-mais.jpg";
       campo2.src="https://upload.wikimedia.org/wikipedia/pt/c/c8/Mar%C3%ADlia_Mendon%C3%A7a_-_2017_-_Realidade.jpg"
    }
}