/* Begin of configuration variables */
/* The result list of StarGazers */
var StarGazers = [];
var ajsponse;
/* How many hours to substract for the raffle */
var fromHours = 2;
/* The API resource to query*/
var apiURL = 'https://api.github.com/repos/pystol/pystol/stargazers?page=1';
/* End of configuration variables */
function getWinner(list) {
  return list[Math.floor((Math.random()*list.length))];
}
function getLastStargazers(list) {
  var current_date = new Date();
  current_date.setHours(current_date.getHours() - fromHours)
  return list.filter(x => Date.parse(x.starred_at) > Date.parse(current_date));
}
function parseHeader(linkHeader){
  let re = /<([^\?]+\?[a-z]+=([\d]+))>;[\s]*rel="([a-z]+)"/g;
  let arrRes = [];
  let obj = {};
  while ((arrRes = re.exec(linkHeader)) !== null) {
    obj[arrRes[3]] = {
      url: arrRes[1],
      page: arrRes[2]
    };
  }
  return obj;
}
function getWinnerOutput(githubURL) {
  ajsponse = $.ajax({
    url: githubURL,
    type: "GET",
    headers: {Accept: 'application/vnd.github.v3.star+json'},
    complete: function (response) {
      $.merge(StarGazers, JSON.parse(response.responseText));
      var link = ajsponse.getResponseHeader("Link");
      var next_url = parseHeader(link);
      if (JSON.stringify(next_url).includes("next")){
        getWinnerOutput(next_url.next.url);
      }else{
        var stargazeres = getLastStargazers(StarGazers);
        var winner = getWinner(stargazeres);
        if (winner) {
          document.getElementById("winner_img").src = winner.user.avatar_url;
          document.getElementById("winner_id").innerHTML = winner.user.login;
          document.getElementById("winner_starred_at").innerHTML = winner.starred_at;
          document.getElementById("winner_total").innerHTML = stargazeres.length;
          $('#myModal').modal('show');
        }else{
          alert("There is no winner! :P LOL");
        }
      }
    },
    error: function (response) {
      alert('Bummer: there was an error! :P Ussualy is because of the max-request number');
    },
  });
  return false;
}
function runRaffle(){
  StarGazers = [];
  getWinnerOutput(apiURL);
}
