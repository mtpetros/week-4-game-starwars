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


//Character Selection
$("#luke").click(function() {
  fighter = luke;

  $("#obi").css("background-color", "red").attr("id", "obi-challenger");  
  obiDet = $("#obi-challenger").detach();    
  $("#challenger-box").append(obiDet);

  $("#darth").css("background-color", "red").attr("id", "darth-challenger");
  darthDet = $("#darth-challenger").detach();
  $("#challenger-box").append(darthDet);

  $("#jarjar").css("background-color", "red").attr("id", "jarjar-challenger");
  jarjarDet = $("#jarjar-challenger").detach();
  $("#challenger-box").append(jarjarDet);

});

$("#obi").click(function() {
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

$("#darth").click(function() {
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

$("#jarjar").click(function() {
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
$("#luke-challenger").click(function() {
  enemy = luke;
  $(this).attr("id", "enemy");
  enemyDet = $("#enemy").detach();    
  $("#fighter-box").append(enemyDet);
  console.log("fight!");
});

$("#obi-challenger").click(function() {
  enemy = obi;
  enemyDet = $(this).attr("id", "fighter").detach();    
  $("#fighter-box").append(enemyDet);
});

$("#darth-challenger").click(function() {
  enemy = darth;
 enemyDet = $(this).attr("id", "fighter").detach();    
  $("#fighter-box").append(enemyDet);
});

$("#jarjar-challenger").click(function() {
  enemy = jarjar;
 enemyDet = $(this).attr("id", "fighter").detach();    
  $("#fighter-box").append(enemyDet);
});

//The fight








$("#attack-button").click(function() {
  enemy.hp-=fighter.atkPwr;
  fighter.hp-=enemy.cAtkPwr;
  fighter.atkPwr+=fighter.atkPwr;

  $("#fighter").effect( "bounce", "slow" );

});
