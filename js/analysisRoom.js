$(document).ready(function () { 
  startAnalysisRoom = function() {
    currentScene = "analysisRoomScene";
    $("#stationDoor")[0].play();
    $(".policeStationInteriorScene, #player").hide();
    $(".analysisRoomScene, .inventoryIcon, .menuArea, .stopMusic, .playMusic, #player").fadeIn(1500);
    $("#policeStationSceneMusic")[0].pause();
    $("#analysisRoomMusic")[0].play()
    var startX = ($(".analysisExit").position().left) - 50;
    var startY = ($(".analysisExit").position().top) + 200;
    $("#player").stop().css({ top: startY, left: startX}).html('<img class="playerSprite" src="assets/images/TheDetectiveLeft.png">');
    $(".playerSprite").removeClass("walkRightAnim walkLeftAnim walkUpAnim walkDownAnim");
  }

  // All the things in the analysis room
  $(".analysisExit").click(function () {
    if (action === "Walk to") {
      $("#stationDoor")[0].play();
      $(".analysisRoomScene").toggle();
      currentScene = "policeStationInteriorScene";
      $("#policeStationSceneMusic")[0].play();
      $("#analysisRoomMusic")[0].pause()
      $(".policeStationInteriorScene").fadeIn(1500);
      var startX = ($(".evidence").position().left) + 50;
      var startY = ($(".evidence").position().top) + 150;
      $("#player").stop().css({ top: startY, left: startX}).html('<img class="playerSprite" src="assets/images/TheDetective.png">');
      $(".playerSprite").removeClass("walkRightAnim walkLeftAnim walkUpAnim walkDownAnim");
      $("#player").fadeIn(700);
    }
  });
  $(".volatileSubstanceMachine").click(function() {
    if (action === "Look at") {
      playerSpeach("This is where Jenkins handles any dangerous substances. It's empty right now")
    } else if (action === "Use cup of pee on") {
      playerSpeach("I should leave the proper sciency stuff to Jenkins")
    } else if (action === "Use gun on") {
      playerSpeach("I shouldn't make any holes")
    } else {
      playerSpeach("I'm not sure what you want me to do here")
    }
  });
  $(".labCabinets").click(function() {
    if (action === "Look at") {
      playerSpeach("Various bottles of chemicals and equipment for Jenkins' work")
    } else if (action === "Pick up") {
      playerSpeach("I probably shouldn't touch ay of this stuff")
    } else if (action === "Use cup of pee on") {
      playerSpeach("I should give this directly to Jenkins")
    } else if (action === "Use gun on") {
      playerSpeach("Have you got any idea how many expolosive chemicals are in here?")
      setTimeout(function(){
        playerSpeach("I don't, but I don't want to find out!")
      }, 3000)
    } else {
      playerSpeach("I'm not sure what you want me to do here")
    }
  });
  $(".gurney").click(function() {
    if (action === "Look at") {
      playerSpeach("The victim's body... and head")
    } else if (action === "Pick up") {
      playerSpeach("I don't think I can fit this in my pocket")
    } else if (action === "Use gun on") {
      playerSpeach("Shall I kill him some more?")
    } else if (action === "Use paper on") {
      playerSpeach("There's nothing to compare here")
    } else {
      playerSpeach("I'm not sure what you want me to here")
    }
  });










});

















