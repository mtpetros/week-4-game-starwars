//Global Variables
var luke = {
  hp: 45,
  atkPwr: 10,
  cAtkPwr:  15  
};

var obi = {
  hp: 40,
  atkPwr: 13,
  cAtkPwr:  14  
};

var darth = {
  hp: 48,
  atkPwr: 14,
  cAtkPwr:  20  
};

var jarJar = {
  hp: 38,
  atkPwr: 13.5,
  cAtkPwr:  12  
};


$(document).ready(function() {

//Character Selection
$("#luke").on("click.charSelect", function() {
  $(this).off("click.charSelect");
  $("#obi").off("click.charSelect");
  $("#darth").off("click.charSelect");
  $("#jarjar").off("click.charSelect");
  fighter = luke;

  $("#obi").css("background-color", "red").attr("id", "obi-challenger").addClass("alive");  
  obiDet = $("#obi-challenger").detach();    
  $("#challenger-box").append(obiDet);

  $("#darth").css("background-color", "red").attr("id", "darth-challenger").addClass("alive");
  darthDet = $("#darth-challenger").detach();
  $("#challenger-box").append(darthDet);

  $("#jarjar").css("background-color", "red").attr("id", "jarjar-challenger").addClass("alive");
  jarjarDet = $("#jarjar-challenger").detach();
  $("#challenger-box").append(jarjarDet);
 


});

$("#obi").on("click.charSelect", function() {
  $(this).off("click.charSelect");
  $("#luke").off("click.charSelect");
  $("#darth").off("click.charSelect");
  $("#jarjar").off("click.charSelect");
  fighter = obi;

  $("#luke").css("background-color", "red").attr("id", "luke-challenger");
  lukeDet = $("#luke-challenger").detach();
  $("#challenger-box").append(lukeDet);

  $("#darth").css("background-color", "red").attr("id", "darth-challenger");
  darthDet = $("#darth-challenger").detach();
  $("#challenger-box").append(darthDet);

  $("#jarjar").css("background-color", "red").attr("id", "jarjar-challenger");
  jarjarDet = $("#jarjar-challenger").detach();
  $("#challenger-box").append(jarjarDet);

});

$("#darth").on("click.charSelect", function() {
  $(this).off("click.charSelect");
  $("#obi").off("click.charSelect");
  $("#luke").off("click.charSelect");
  $("#jarjar").off("click.charSelect");
  fighter = darth;

  
  $("#luke").css("background-color", "red").attr("id", "luke-challenger");
  lukeDet = $("#luke-challenger").detach();
  $("#challenger-box").append(lukeDet);

  $("#obi").css("background-color", "red").attr("id", "obi-challenger");  
  obiDet = $("#obi-challenger").detach();    
  $("#challenger-box").append(obiDet);

  $("#jarjar").css("background-color", "red").attr("id", "jarjar-challenger");
  jarjarDet = $("#jarjar-challenger").detach();
  $("#challenger-box").append(jarjarDet);

});

$("#jarjar").on("click.charSelect", function() {
  $(this).off("click.charSelect");
  $("#obi").off("click.charSelect");
  $("#darth").off("click.charSelect");
  $("#luke").off("click.charSelect");
  fighter = jarJar;

  $("#luke").css("background-color", "red").attr("id", "luke-challenger");
  lukeDet = $("#luke-challenger").detach();
  $("#challenger-box").append(lukeDet);

  $("#obi").css("background-color", "red").attr("id", "obi-challenger");  
  obiDet = $("#obi-challenger").detach();    
  $("#challenger-box").append(obiDet);

  $("#darth").css("background-color", "red").attr("id", "darth-challenger");
  darthDet = $("#darth-challenger").detach();
  $("#challenger-box").append(darthDet);

});


//Challenger selection
$(document).on("click.challSelect", "#luke-challenger", function() {
  enemy = luke;
  enemyDet = $(this).addClass("enemy").detach();    
  $("#fighter-box").append(enemyDet);
 // $(document).off("click.challSelect");
});

$(document).on("click.challSelect", "#obi-challenger", function() {
  enemy = obi;
  enemyDet = $(this).addClass("enemy").detach();    
  $("#fighter-box").append(enemyDet);
 // $(document).off("click.challSelect");
});

$(document).on("click.challSelect", "#darth-challenger", function() {
  enemy = darth;
 enemyDet = $(this).addClass("enemy").detach();    
  $("#fighter-box").append(enemyDet);
  //$(document).off("click.challSelect");
});

$(document).on("click.challSelect", "#jarjar-challenger", function() {
  enemy = jarJar;
 enemyDet = $(this).addClass("enemy").detach();    
  $("#fighter-box").append(enemyDet);
 // $(document).off("click.challSelect");
});

//The fight

function resetOnWin() {
 // $(document).on("click.challSelect", ".alive");
  enemy = null;
}

$("#attack-button").on("click", function() {
  enemy.hp-=fighter.atkPwr;
  fighter.hp-=enemy.cAtkPwr;
  fighter.atkPwr+=fighter.atkPwr;
  $(".enemy").effect( "bounce", "slow" );
  if (enemy.hp <= 0) {
    $(".enemy").removeAttr("id").addClass("defeated");
    resetOnWin();
  }
  console.log("enemy.hp " + enemy.hp);
  console.log("fighter.hp " + fighter.hp);
  console.log("enemy.cAtkPwr " + enemy.cAtkPwr);
  console.log("fighter.atkPwr " + fighter.atkPwr);
});






if ((luke.hp <= 0) && (obi.hp <= 0) && (darth.hp <= 0) && (jarJar.hp <= 0)) {
  console.log("you win!");
}

});
