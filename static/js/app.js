const sectionPlayers = document.getElementById("players");
//Ciblage d'élements du DOM
const selectTeam = document.getElementById("selectTeam");
const resultNumber = document.getElementById("resultNumber");
const checkActive = document.getElementById("checkActive");

//Source de données
let players = [
  {
    firstName:"Blaise",
    lastName:"Matuidi",
    num:16,
    team:"Juve",
    portrait:'https://images.performgroup.com/di/library/GOAL/b4/e3/blaise-matuidi-juventus-genoa-22012018_h23vzhkdvkig18ye4n4yu4wer.jpg?t=1688604161&quality=90&w=1280',
    active:true
  },
  {
    firstName:"Cristiano",
    lastName:"Ronaldo",
    num:7,
    team:"Juve",
    portrait:'https://resize-parismatch.ladmedia.fr/r/625,417,center-middle,ffffff/img/var/news/storage/images/paris-match/actu/sport/accusation-de-viol-quand-la-juventus-defend-cristiano-ronaldo-d-une-etrange-facon-1578766/25608836-1-fre-FR/Accusation-de-viol-quand-la-Juventus-defend-Cristiano-Ronaldo-d-une-etrange-facon.jpg',
    active:true
  },
  {
    firstName:"Paolo",
    lastName:"Dybala",
    num:10,
    team:"Juve",
    portrait:'http://www.footmercato.net/images/a/paulo-dybala-livre-ses-verites_238172.jpg',
    active:false
  },
  {
    firstName:"Kylian",
    lastName:"Mbampé",
    num:7,
    team:"PSG",
    portrait:'https://i.eurosport.com/2018/10/07/2436354-50625859-640-360.jpg',
    active:true
  },
  {
    firstName:"edisson",
    lastName:"Cavani",
    num:9,
    team:"PSG",
    portrait:'',
    active:false
  }
];

//Déclaration d'écouteur d'événements
selectTeam.addEventListener('change', e =>{
  // console.log(e.target.value);
  buildTable(e.target.value,false);
});

checkActive.addEventListener('click', e =>{
  buildTable(null,e.target.checked);
});

//Fonctions
function buildTable(selectedTeam,isActivePlayers){
  let nbVisiblePlayers = players.length;
  let list = '<table class="table table-bordered table-striped">';
  list += '<thead><tr><th></th><th>Nom</th><th>Prénom</th><th>Équipe</th><th>Numéro</th></tr>';
  list += '<tbody>';

  //Notation ES6
  players.forEach(player => {
    if(selectedTeam != null && selectedTeam != '0'){
      if(player.team != selectedTeam){
        list += '<tr class="content content-none">';
        nbVisiblePlayers--;
      }
      else{
        list += '<tr>';
      }
    }
    else{
      if(player.active != isActivePlayers && isActivePlayers){
        list += '<tr class="content content-none">';
        nbVisiblePlayers--;
      }
      else{
        list += '<tr>';
      }
    }

    if( player.portrait.length == 0 || player.portrait.length == '')
      list += '<td>' + '<img class="content content-img" src="static/img/default.png"/>' +'</td>';
    else
      list += '<td>' + '<img class="content content-img" src="' + player.portrait + '"/>' +'</td>';

    list += '<td>' + player.lastName +'</td>';
    list += '<td>' + player.firstName + '</td>';
    list += '<td>' + player.team + '</td>';
    list += '<td class="bcg-content-color">' + player.num + '</td>';
    list += '</tr>';
    sectionPlayers.innerHTML = list;
  });
  list +="</tbody></table>";
  resultNumber.innerText = nbVisiblePlayers + " joueur(s) trouvé(s)";
}

/**
*Initialisation au démarrage de l'application
*initialisation des sources des données, déclarations des variables
*/
function init(){
  buildTable(null,false);
}

//Initialisation
init();
