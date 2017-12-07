$(function() {
	var gameInfo = {
		teamName : "New Team Name",
		teamId: "",
		gameName : "New Game Name",
		gameId:"",
		gameTimeMin : "225",
		gameTimeSec : "0",
		totalBomb : "-",
		gameSessionId:"", 
		secAbomb:"100",
		secBbomb:"32",
		secCbomb:"46",
		secDbomb:"54",
		sunkAll:"",
		shipClasses : [
			{
				id : '1',
				class : ["p10_s2","selected_ship"]	
			},
			{
				id : '5',
				class : ["p05_s2","selected_ship"]	
			},
			{
				id : '11',
				class : ["p11_s2","selected_ship"]	
			},
			{
				id : '1',
				class : ["p01_s2","selected_ship"]	
			},
			{
				id : '3',
				class : ["p03_s3","selected_ship"]	
			}
		],
		playersInfo : [
			{
				playerId : "1",
				playerName : "Player 1 Name",
				bombCan : "25",
				sector:"a",
				active : true
			},
			{
				playerId : "2",
				playerName : "Player 2 Name",
				bombCan : "12",
				sector:"b",
				active : true
			},
			{
				playerId : "3",
				playerName : "Player 3 Name",
				bombCan : "40",
				sector:"c",
				active : true
			},
			{
				playerId : "4",
				playerName : "Player 4 Name",
				bombCan : "5",
				sector:"d",
				active : true
			},
		],
		bestTeam : [
			{
				btName : "Best Team ever",
				btMiss : "20",
				btHits : "50",
				btTimeMin : "2",
				btTimeSec : "33",
				btSunk : "15",
				efficiency : "-"
			}
		]
	};
	
	
		
	
	var gameShotBackInfo = {
		pause : false,
		gameTimeMinP : '',
		totalBomb : 230,	
		playersShootInfo : [
			{
				playerId : "1",
				playerName : "Player 1 Name",
				hitCoord : [44,86], // array with HITTED coordinates
				missCoord : [121,147,43,24,23], // array with MISSED coordinates
				sunkShipsCoord : [],
				shipCoordClear : [],
				shootLeft : 4
			},
			{
				playerId : "2",
				playerName : "Player 2 Name",
				hitCoord : [19,93,77,78], // array with HITTED coordinates
				missCoord : [53,132,113], // array with MISSED coordinates	
				sunkShipsCoord : [],
				shipCoordClear : []
			},
			{
				playerId : "3",
				playerName : "Player 3 Name",
				hitCoord : [244,243,245,209,229,344,321], // array with HITTED coordinates
				missCoord : [224,225,264], // array with MISSED coordinates
				sunkShipsCoord : [243,244,245,209,229], // array with SUNK ships coordinates
				shipCoordClear : [222,223,224,225,226,242,262,263,264,265,266,246,208,228,248,188,189,190,210,230,250,249] //coordinates clear area for ships
			},
			{
				playerId : "4",
				playerName : "Player 4 Name",
				hitCoord : [], // array with HITTED coordinates
				missCoord : [232,258,358], // array with MISSED coordinates
				sunkShipsCoord : [],
				shipCoordClear : []
			},
		],
		teamSunkShips : 2,	//team sunk ships
		shipsChecker : [
			{
				id : '1',
				class : ["p10_s2","selected_ship"],
				sunkChecker : false	
			},
			{
				id : '5',
				class : ["p05_s2","selected_ship"],	
				sunkChecker : false
			},
			{
				id : '11',
				class : ["p11_s2","selected_ship"],	
				sunkChecker : true
			},
			{
				id : '1',
				class : ["p01_s2","selected_ship"],	
				sunkChecker : false
			},
			{
				id : '3',
				class : ["p03_s3","selected_ship"],
				sunkChecker : false	
			}
		]
	}
	
	
	var stage = 1;
	var possible = false;
	var iclick = 1;
	var index_array = [];
	var class_array = ['','_s2','_s3','_s4',' '];
	var ri = 20; // rotate_index
		
	var i = 0;
    while (i != 20) {
        var j = 0;
        while (j != 20) {
            $(".game_field").append('<div></div>');
            j++;
        }
        i++;
    }
	
	var cell = $(".game_field div");
	var cell2 = $(".player_infos tbody tr");
	var cell3 = $(".player_steps");
	var cell4 = $(".symbols div");
	var cell5 = $(".numbs div");
		
	getGameInfo();

	cell.hover(function() {
		if ($(this).hasClass('active_area') && $(this).find('span').length == 0 && $('.player_steps.active .b_bl').html() != '-') {
			
			cell.css({'cursor':'pointer'});
			$(this).addClass('hover_active');
			$(this).append('<span class="ico_shoot"></span>');
				
			var index = $(this).index();		
			var symbol = get_symbol(index);
			var num = get_num(index);
	
			$("#log").html(index + " " + symbol + num);
			
			if ($(".selected_ship").length && stage == 1) {
				$(this).addClass('hover');
			}	
		} else {
			cell.css({'cursor':'crosshair'});
			
		}			
	},
	function () {
		cell.removeClass('hover_active');
		$(this).find('span.ico_shoot').remove();
	});
	
	
	
musicPlay();	
function musicPlay() {
	var audioPlayer = document.getElementById('audio'); 
	audioPlayer.play();
	setTimeout(function() { audioPlayer.pause(); }, 2000);
} 
	
	
var seconds;
  var temp;
 
  function countdown() {
    seconds = document.getElementById('countdown').innerHTML;
    seconds = parseInt(seconds, 10);
 
    if (seconds == 1) {
      temp = document.getElementById('countdown');
      temp.innerHTML = "all done, bye bye";
      return;
    }
 
    seconds--;
    temp = document.getElementById('countdown');
    temp.innerHTML = seconds;
    timeoutMyOswego = setTimeout(countdown, 1000);
  } 
 
  countdown();
	
	
	
	
	
	var comingShipsInfo = {
		allships : [
			{
				shipID : "1",
				shipCurrentCoord : [44,45], //current coordinates of ship 
				shipClearCoordiantes : [23,43,63,64,65,24,25,26,46,66], //clear arrea of current ship
				palubs : 2,
				hitСounter : 0
			},
			{
				shipID : "2",
				shipCurrentCoord : [186,187,188,189], //current coordinates of ship 
				shipClearCoordiantes : [165,185,205,166,167,168,169,170,190,210,206,207,208,209], //clear arrea of current ship
				palubs : 4,
				hitСounter : 0
			}
		]
	}

	
	var gameShot = {};
	cell.on('click', function () {
		if ($(this).hasClass('active_area') && $(this).find('span.ico_hitted').length != 1 && $(this).find('span.ico_missedshoot').length != 1) {
			var index = $(this).index();
			var shootMin = $('.timer .minutes').html();
			var shootSec = $('.timer .seconds').html();
			
			gameShot.gameSessionId = '';
			gameShot.shotField = index;
			gameShot.playerId = '';
			gameShot.timeMin = shootMin;
			gameShot.timeSec = shootSec;

			shootLocal(index);
			//console.log(gameShot.shotField);
			console.log($(this).find('span').length);
		}
	});
/*--Functions--*/	


var shootLocal = function (curShoot) {
	//console.log(curShoot);
		
	var getComingShipsInfo = [];
	
	for (var k = 0;k<comingShipsInfo.allships.length;k++) {
		getComingShipsInfo =  $.merge(getComingShipsInfo, comingShipsInfo.allships[k].shipCurrentCoord);
	}
	
	if (getComingShipsInfo.indexOf(curShoot) != -1) {
		if($(cell[curShoot]).find('span.ico_hitted').length == 0) {
			$(cell[curShoot]).append('<span class="ico_hitted"></span>');
		}
	} else {
		if($(cell[curShoot]).find('span.ico_missedshoot').length == 0) {
			$(cell[curShoot]).append('<span class="ico_missedshoot"></span>');	
		}	
	}

	for (var k = 0;k<comingShipsInfo.allships.length;k++) {

		for (var l = 0;l<comingShipsInfo.allships[k].shipCurrentCoord.length;l++) {	
			if (curShoot == comingShipsInfo.allships[k].shipCurrentCoord[l]) {
				comingShipsInfo.allships[k].hitСounter = comingShipsInfo.allships[k].hitСounter + 1;

				if (comingShipsInfo.allships[k].hitСounter == comingShipsInfo.allships[k].palubs) {
					
					for (var j = 0;j<comingShipsInfo.allships[k].shipClearCoordiantes.length;j++) {
						if($(cell[comingShipsInfo.allships[k].shipClearCoordiantes[j]]).find('span.ico_missedshoot').length == 0) {
							$(cell[comingShipsInfo.allships[k].shipClearCoordiantes[j]]).append('<span class="ico_missedshoot"></span>');	
						}
					}
					
					for (var j = 0;j<comingShipsInfo.allships[k].shipCurrentCoord.length;j++) {
						if($(cell[comingShipsInfo.allships[k].shipCurrentCoord[j]]).find('span.ico_sunkshoot').length == 0) {
							$(cell[comingShipsInfo.allships[k].shipCurrentCoord[j]]).addClass('shunkship');
							$(cell[comingShipsInfo.allships[k].shipCurrentCoord[j]]).append('<span class="ico_sunkshoot"></span>');	
						}
					}
					
				}
				
			}
				
		}
		
	}
	
	
	

};




	
$('.timer').startTimer({
    onComplete: function(element){

    	element.addClass('is-complete');

		$('body').addClass('closed');
		$('body').prepend('<div class="closed_game"><div class="head_close"><a href="#" class="logo"><img src="img/logo.png" alt="Logo" /></a></div><div class="text_closed">		<h1>Game over</h1></div></div>');
		
		setTimeout(function(){
				window.location.href="../index.html"
		},2000);
    },
   	allowPause: true
});


function getCookieVal (offset) {
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1) endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}

function GetCookie (name) {
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) {
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg)
			return getCookieVal (j);
		i = document.cookie.indexOf(" ", i) + 1; if (i == 0) break;
	}
	return null;
}

function SetCookie (name, value) {
	var argv = SetCookie.arguments;
	var argc = SetCookie.arguments.length;
	var expires = (argc > 2) ? argv[2] : null;
//    var path = (argc > 3) ? argv[3] : null;
	var path = "/";
	var domain = (argc > 4) ? argv[4] : null;
	var secure = (argc > 5) ? argv[5] : false;
	document.cookie = name + "=" + escape (value) + ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) + ((path == null) ? "" : ("; path=" + path)) + ((domain == null) ? "" : ("; domain=" + domain)) + ((secure == true) ? "; secure" : "");
}


var cell8 = $(".minutes").html();
var cell9 = $(".seconds").html();

var count=null;
if (isNaN(count = GetCookie('count'))){
	var timerCookie = +cell8.match( /\d+/g )*60 + parseFloat(cell9);
	count=timerCookie; 
}

var counter=setInterval(timer, 1000);
if(GetCookie('count')) {
	$('.timer').remove();
	
	$('.time_left .value').append('<div class="timer"></div>');
	$('.timer').data("seconds-left", GetCookie('count'));
	
	$('.timer').startTimer({
		onComplete: function(element){
			element.addClass('is-complete');
			gameLosed();
		}
	});	
}

function timer(){
	count = count-1;
	SetCookie ('count', count);

	if (count <= 0){
		SetCookie ('count', null);
		return;
	}

	var min = (count/60);
	var sec = (count%60);

	min = min - (min%1);

}











	function getGameInfo() {
		//console.log(gameInfo.playersInfo);
		//$(cell[takedDots[d]]).addClass('r_hovership');
		var getTimeInSec = parseFloat(gameInfo.gameTimeMin)*60 + parseFloat(gameInfo.gameTimeSec);
		$('.timer').data("seconds-left", getTimeInSec);
		
		$('.bomb_left .value').html(gameInfo.totalBomb);
		$('.my_team .team_name').html(gameInfo.teamName);
		$('.best_team .team_name').html(gameInfo.bestTeam[0].btName);
		$('.best_team .miss_bl').html(gameInfo.bestTeam[0].btMiss);
		$('.best_team .hit_bl').html(gameInfo.bestTeam[0].btHits);
		$('.best_team .ship_sunk').html(gameInfo.bestTeam[0].btSunk);
		$('.best_team .efficiency_count').html(gameInfo.bestTeam[0].efficiency);
		$('.best_team .time_done').html(gameInfo.bestTeam[0].btTimeMin +':'+ gameInfo.bestTeam[0].btTimeSec);
		
		$.each(cell2,function(index,value){
			indexTr = index + 1;
			var classTr = 'playerID_'+indexTr.toString();
			$(value).addClass(classTr);			
		});	
		
		$.each(cell3,function(index,value){
			indexTr = index + 1;
			var classTr = 'playerID_'+indexTr.toString();
			$(value).addClass(classTr);
			
			if(gameInfo.playersInfo[index].active == true) {
				$(value).addClass('active');	
			}
		});
		
		$('.sector_names .playerID_1 .b_bl').html(gameInfo.secAbomb);
		$('.sector_names .playerID_2 .b_bl').html(gameInfo.secBbomb);
		$('.sector_names .playerID_3 .b_bl').html(gameInfo.secCbomb);
		$('.sector_names .playerID_4 .b_bl').html(gameInfo.secDbomb);
		

		for (var i = 0;i<gameInfo.playersInfo.length;i++) {
			var getPlayerID = 'playerID_'+gameInfo.playersInfo[i].playerId;
			
			if (cell2.hasClass(getPlayerID)) {
				$(cell2).parent().find('.'+getPlayerID + ' td:eq(0)').html(gameInfo.playersInfo[i].playerName);
			}
			
			if (cell2.hasClass(getPlayerID)) {
				$(cell2).parent().find('.'+getPlayerID + ' td:eq(1)').html(gameInfo.playersInfo[i].bombCan);
			}
			
			$('.sector_names .'+getPlayerID+' .gplayer_name').html(gameInfo.playersInfo[i].playerName);

			if (gameInfo.playersInfo[i].active == true) {
				$('#page').addClass('playerID_'+gameInfo.playersInfo[i].playerId);	
			}
			
		}

		for (var i = 0;i<cell.length;i++) {
			var divIndex = $(cell[i]).index();
			if(divIndex%20 < 10 && divIndex<=189 && $('#page').hasClass('playerID_1')) {
				$(cell[i]).css({'background':'#fff'});
				$(cell[i]).addClass('active_area');
				
				if ($('.b_bl:eq(0)').html()=='-') {
					$(cell[i]).css({'background':'#f0f0f0'});
					$(cell[i]).removeClass('active_area');	
				}
				
			} else if (divIndex%20 < 10 && divIndex>189 && $('#page').hasClass('playerID_3')) {
				$(cell[i]).css({'background':'#fff'});
				$(cell[i]).addClass('active_area');	
				
				if ($('.b_bl:eq(1)').html()=='-') {
					$(cell[i]).css({'background':'#f0f0f0'});
					$(cell[i]).removeClass('active_area');	
				}
				
			} else if (divIndex%20 >= 10 && divIndex<=199 && $('#page').hasClass('playerID_2')) {
				$(cell[i]).css({'background':'#fff'});
				$(cell[i]).addClass('active_area');
				
				if ($('.b_bl:eq(2)').html()=='-') {
					$(cell[i]).css({'background':'#f0f0f0'});
					$(cell[i]).removeClass('active_area');	
				}
				
			} else if (divIndex%20 >= 10 && divIndex>199 && $('#page').hasClass('playerID_4')) {
				$(cell[i]).css({'background':'#fff'});
				$(cell[i]).addClass('active_area');	
				
				if ($('.b_bl:eq(3)').html()=='-') {
					$(cell[i]).css({'background':'#f0f0f0'});
					$(cell[i]).removeClass('active_area');	
				}
			}	
		}
		
		
		for (var i = 0;i<cell4.length;i++) {
			var divIndex2 = $(cell4[i]).index();
			if(divIndex2%20 < 10 && $('#page').hasClass('playerID_1')) {
				$(cell4[i]).addClass('active_symbol');
			} else if (divIndex2%20 < 10 && $('#page').hasClass('playerID_3')) {
				$(cell4[i]).addClass('active_symbol');	
			} else if (divIndex2%20 >= 10 && $('#page').hasClass('playerID_2')) {
				$(cell4[i]).addClass('active_symbol');
			} else if (divIndex2%20 >= 10 && $('#page').hasClass('playerID_4')) {
				$(cell4[i]).addClass('active_symbol');	
			}		
		}
		
		for (var i = 0;i<cell5.length;i++) {
			var divIndex3 = $(cell5[i]).index();
			
			if(divIndex3%20 < 10 && $('#page').hasClass('playerID_1')) {
				$(cell5[i]).addClass('active_number');
			} else if (divIndex3%20 >= 10 && $('#page').hasClass('playerID_3')) {
				$(cell5[i]).addClass('active_number');	
			} else if (divIndex3%20 < 10 && $('#page').hasClass('playerID_2')) {
				$(cell5[i]).addClass('active_number');
			} else if (divIndex3%20 >= 10 && $('#page').hasClass('playerID_4')) {
				$(cell5[i]).addClass('active_number');	
			}		
		}

		var getAllHitCoordinates = [];
		var getAllMissedCoordinates = [];
		var getAllSunkCoordinates = [];
		var getAllClearCoordinates = [];
		
		for (var k = 0;k<gameShotBackInfo.playersShootInfo.length;k++) {
			getAllHitCoordinates =  $.merge(getAllHitCoordinates, gameShotBackInfo.playersShootInfo[k].hitCoord);
			getAllMissedCoordinates =  $.merge(getAllMissedCoordinates, gameShotBackInfo.playersShootInfo[k].missCoord);
			getAllSunkCoordinates =  $.merge(getAllSunkCoordinates, gameShotBackInfo.playersShootInfo[k].sunkShipsCoord);	
			getAllClearCoordinates =  $.merge(getAllClearCoordinates, gameShotBackInfo.playersShootInfo[k].shipCoordClear);
		}
		
		
		for (var j = 0;j<getAllHitCoordinates.length;j++) {
			if(!$(cell[getAllHitCoordinates[j]]).find('span.ico_hitted')) {
				$(cell[getAllHitCoordinates[j]]).append('<span class="ico_hitted"></span>');
			}
		}
				
		for (var j = 0;j<getAllMissedCoordinates.length;j++) {
			if(!$(cell[getAllMissedCoordinates[j]]).find('span.ico_missedshoot')) {
				$(cell[getAllMissedCoordinates[j]]).append('<span class="ico_missedshoot"></span>');
			}
		}
		for (var j = 0;j<getAllSunkCoordinates.length;j++) {
			if(!$(cell[getAllSunkCoordinates[j]]).find('span.ico_sunkshoot')) {
				$(cell[getAllSunkCoordinates[j]]).addClass('shunkship');
				$(cell[getAllSunkCoordinates[j]]).append('<span class="ico_sunkshoot"></span>');
			}
		}
		for (var j = 0;j<getAllClearCoordinates.length;j++) {
			if(!$(cell[getAllClearCoordinates[j]]).find('span.ico_missedshoot')) {
				$(cell[getAllClearCoordinates[j]]).append('<span class="ico_missedshoot"></span>');	
			}
		}
		
		
		$.each(cell,function(index,value){
			if($(this).find('span').length > 1) {
				$(this).find('span.ico_hitted').remove();
			}			
		});
		
		for (var k = 0;k<gameInfo.shipClasses.length;k++) {
			$('.ship_selector').append(
				'<div class="'+gameInfo.shipClasses[k].class[0]+'"><img src="img/ships/p'+gameInfo.shipClasses[k].id+'.png" alt="ship" /></div>'
			);
		}
		
		for (var k = 0;k<gameShotBackInfo.shipsChecker.length;k++) {
			//$('.ship_selector div').remove(); - нужно при аякс запросе очистить этот блок, когда будет приходить промежуточный json
			if(gameShotBackInfo.shipsChecker[k].sunkChecker == false) {
				$('.ship_selector').append(
					'<div class="'+gameInfo.shipClasses[k].class[0]+'"><img src="img/ships/p'+gameInfo.shipClasses[k].id+'.png" alt="ship" /></div>'
				);
			} else {
				$('.ship_selector').append(
					'<div class="shunk_ship '+gameInfo.shipClasses[k].class[0]+'"><img src="img/ships/p'+gameInfo.shipClasses[k].id+'.png" alt="ship" /></div>'
				);	
			}
		}
		
		if ($('.b_bl:eq(0)').html()=='0' && $('.b_bl:eq(1)').html()=='0' && $('.b_bl:eq(2)').html()=='0' && $('.b_bl:eq(3)').html()=='0') {
			alert(1);
		}	
		
		
				
		
		
		
		if (gameShotBackInfo.pause == true) {
			$('body').addClass('pause');
			var minP = $('.minutes').html();
			var secP = $('seconds').html();

			var getTimeInSecP = parseFloat(minP)*60 + parseFloat(secP);
			
			gameShotBackInfo.gameTimeMinP = getTimeInSecP;
			
			if(!$('.pause_game').length){
				$('body').prepend('<div class="pause_game"><div class="text_closed"><h2>Pause</h2></div></div>');
			}
		} else {
			$('body').removeClass('pause');
			$('.pause_game').remove();
			if(gameShotBackInfo.gameTimeMinP !== 'undefined' && gameShotBackInfo.gameTimeMinP !== '') {
				$('.timer').data("seconds-left", gameShotBackInfo.gameTimeMinP);
			}
		}
		
		
	}
	
	





	function get_symbol(index) {
		index = index % 20;
		if (index == 0) {index = 'A';}
		if (index == 1) {index = 'B';}
		if (index == 2) {index = 'C';}
		if (index == 3) {index = 'D';}
		if (index == 4) {index = 'E';}
		if (index == 5) {index = 'F';}
		if (index == 6) {index = 'G';}
		if (index == 7) {index = 'H';}
		if (index == 8) {index = 'I';}
		if (index == 9) {index = 'J';}
		if (index == 10) {index = 'K';}
		if (index == 11) {index = 'L';}
		if (index == 12) {index = 'M';}
		if (index == 13) {index = 'N';}
		if (index == 14) {index = 'O';}
		if (index == 15) {index = 'P';}
		if (index == 16) {index = 'Q';}
		if (index == 17) {index = 'R';}
		if (index == 18) {index = 'S';}
		if (index == 19) {index = 'T';}
		return(index);
	}
	
	function get_num(index) {
		return (((index) / 20) | 0)+1;
	}
	
	
	
});
