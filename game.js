$(function() {
		
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
	
	$(".delete_ship").on('click', function () {	
		var index = $(this).index();
		cell.closest('.game_field').toggleClass('remove');

		if ($(this).html() === "DELETE THE SHIP") {
			$(this).html("ADD THE SHIP");
		} else {
			$(this).html("DELETE THE SHIP");
		}
		
		$(".game_field").find('.clear_zone').each(function() {
			$(this).remove();
		});	
		
		
		if (!$('.game_field').hasClass('remove')) {
			
			$(".accept_info input[type='button']").attr("disabled", false);
			$(".accept_info input[type='button']").css({"opacity": "1"});
			$(".accept_info").css({"padding-bottom": "0"});
			$(".accept_info span.error_swich").remove();
			
			$(".maindot").each(function() {
				var takedDots = $(this).attr('data-cleardots').split(',');
				for (var i = 0; i < takedDots.length; i++) {
					$(cell[takedDots[i]]).append('<span class="clear_zone"></span>');		
				}	
			});	
		} else {
			$(".accept_info input[type='button']").attr("disabled", true);
			$(".accept_info input[type='button']").css({"opacity": "0.2"});
			$(".accept_info").css({"padding-bottom": "30px"});
			$(".accept_info").append('<span class="error_swich">Please return to "Add The Ship" mode</span>');
		}		
	});
	
	
	
	cell.hover(function() {
		if (!$('.game_field').hasClass('remove')) {
			var index = $(this).index();		
			var symbol = get_symbol(index);
			var num = get_num(index);
	
			$("#log").html(index + " " + symbol + num);
			cell.removeClass('hover');
			if ($(".selected_ship").length && stage == 1) {
				$(this).addClass('hover');
				cursor_pointer();
			}
		} else {
			var index = $(this).index();
			cell.css({'background':'#f0f0f0'});
			cell.removeClass('current_hover');
			cell.removeClass('current_hoverright');
			cell.removeClass('current_hoverleft');			

			if ($(cell[index]).hasClass('maindot')) {
				var takedDots = $(cell[index]).attr('data-dots').split(',');
				for (var d = 0; d < takedDots.length; d++) {
					$(cell[takedDots[d]]).addClass('r_hovership');	
				}
			} 
		}				
	},
	function () {
		cell.removeClass('r_hovership');
	});
	
	// Plave ships
	cell.on('click', function () {
		if ($(".selected_ship").length && possible == true && !$('.game_field').hasClass('remove')) {
			var arrayDots = [];
			
			for (var element in index_array ) {
				var dataDots = index_array[element].toString();
				
				$(cell[index_array[element]]).addClass('putted_ship');
				$(cell[index_array[element]]).append('<span class="ship_part ship_part_display"></span>');
				arrayDots.push(dataDots);			
			}
			
			$(".ship_selector").find('div').each(function() {
				if ($(this).hasClass('selected_ship')) {
					var currentSelecteClassNumber = $(this).attr('class').substring(1, 3);
					var currentSelecteClass = $(this).attr('class').split(" ");

					$(cell[arrayDots[0]]).attr('data-ID',currentSelecteClassNumber);
					$(cell[arrayDots[0]]).attr('data-class-style',currentSelecteClass);
				}
			});
			
			$(cell[arrayDots[0]]).addClass('maindot');
			$(cell[arrayDots[0]]).attr('data-dots',arrayDots);

			clear_zone();
			cursor_pointer();
		} else {
			var index = $(this).index();
					
			if ($(cell[index]).hasClass('maindot')) {
				
				var takedDots = $(cell[index]).attr('data-dots').split(',');

				for (var d = 0; d < takedDots.length; d++) {					
					checkNear(takedDots[d], false);
				}	
			}	
		}
	});
	
	
	
	$(".ship_selector div").click(function() {
		if (!$('.game_field').hasClass('remove')) {
            $(".ship_selector div").removeClass('selected_ship');
            $(this).addClass('selected_ship');
			iclick = 1;
		}
    });
	
	$(".rotate").click(function() {
		if (!$('.game_field').hasClass('remove')) {		
			var currentDiv = $(this).closest('.list_ships').find('.ship_selector div.selected_ship');
			var currentClass = currentDiv.attr('class');
			var currentNumberInclass = currentClass.substring(1, 3);		
			currentDiv.removeClass();
			
			if (iclick != 4) {
				currentDiv.addClass('p'+currentNumberInclass+class_array[iclick]+' selected_ship');
			} else {
				iclick = 0;	
				currentDiv.addClass('p'+currentNumberInclass+class_array[iclick]+' selected_ship');	
			}
			iclick++;
		}
    });
	
	
	
	
	
	/*---------Submit ships coordinates----------*/
	$(".accept_info input[type='button']").click(function(e) {
		
		var shipsInfo = [];
		var sizeShips = $(".game_field").find('.maindot').length;
		//console.log(sizeShips);

		$(".game_field").find('.maindot').each(function() {
			var objectShip = {};
			var shipCoordArray = [];
			
			var coordDotsShips = $(this).attr('data-dots').split(',');
			var coordDotsClears = $(this).attr('data-cleardots').split(',');
			var shipIDattr = parseFloat($(this).attr('data-ID').split(','));
			var shipClassName = $(this).attr('data-class-style').split(',');
			
			for (var i = 0;i < coordDotsShips.length; i++) {
				shipCoordArray.push({coordinate :parseFloat(coordDotsShips[i]),hitmiss : true});
			}
						
			objectShip.shipCoord = shipCoordArray;
			objectShip.shipID = shipIDattr;
			objectShip.shipCoordClear = coordDotsClears;
			objectShip.shipClass = shipClassName;

			shipsInfo.push(objectShip);
		});	
		
		console.log(JSON.stringify(shipsInfo));

		$('.json_coord').val(JSON.stringify(shipsInfo));
				
		localStorage.setItem('testObject', JSON.stringify(shipsInfo));
		//console.log(JSON.stringify(shipsInfo));
		
		//e.preventDefault();
	});
	
	
	function getShips(json) {
		var retrievedObject = JSON.parse(json);	
		var getAllObj = [];
		var getDots = [];
	
		
		for (var t = 0; t < retrievedObject.length; t++) {
			getDots = [];
			
			//var test = retrievedObject[t].shipCoordClear;
			//console.log(test);
			
			$.each(retrievedObject[t].shipCoord,function(index,value){
				getDots.push(value.coordinate);
			});	
			
			$(cell[retrievedObject[t].shipCoord[0].coordinate]).addClass('maindot');
			$(cell[retrievedObject[t].shipCoord[0].coordinate]).attr('data-dots',getDots);
			$(cell[retrievedObject[t].shipCoord[0].coordinate]).attr('data-cleardots',retrievedObject[t].shipCoordClear);
			$(cell[retrievedObject[t].shipCoord[0].coordinate]).attr('data-ID',retrievedObject[t].shipID);
			$(cell[retrievedObject[t].shipCoord[0].coordinate]).attr('data-class-style',retrievedObject[t].shipClass);
			
			getAllObj =  $.merge(getAllObj, retrievedObject[t].shipCoord);	
		}
		
		
		
		$(".maindot").each(function() {
			var takedDots = $(this).attr('data-cleardots').split(',');
			for (var i = 0; i < takedDots.length; i++) {
				$(cell[takedDots[i]]).append('<span class="clear_zone"></span>');		
			}	
		});	
		
		for (var t = 0; t < getAllObj.length; t++) {
			$(cell[getAllObj[t].coordinate]).addClass('putted_ship');
			$(cell[getAllObj[t].coordinate]).append('<span class="ship_part ship_part_display"></span>');
		}
		
	}
	getShips(localStorage.getItem('testObject'));
	
	getAllPlayerCoordinate();
	function getAllPlayerCoordinate() {
		
		var playersCoordinates = [];
		var objectCoord = {};
		var arrayPlayer1 = [];
		var arrayPlayer2 = [];
		var arrayPlayer3 = [];
		var arrayPlayer4 = [];
		
		for (var i = 0;i<cell.length;i++) {
			
			var divIndex = $(cell[i]).index();
	
			if(divIndex%20 < 10 && divIndex<=189) {
				arrayPlayer1.push(divIndex);
				objectCoord.player1trueCoordinate = arrayPlayer1;
			} else if (divIndex%20 < 10 && divIndex>189) {
				arrayPlayer3.push(divIndex);
				objectCoord.player3trueCoordinate = arrayPlayer3;
			} else if (divIndex%20 >= 10 && divIndex<=199) {
				arrayPlayer2.push(divIndex);
				objectCoord.player2trueCoordinate = arrayPlayer2;
			} else if (divIndex%20 >= 10 && divIndex>199) {
				arrayPlayer4.push(divIndex);
				objectCoord.player4trueCoordinate = arrayPlayer4;
			}
		}
		playersCoordinates.push(objectCoord);		
		//console.log(JSON.stringify(playersCoordinates));
	}
	

/*--Functions--*/	
	function uniq(a) {
		var seen = {};
		return a.filter(function(item) {
			return seen.hasOwnProperty(item) ? false : (seen[item] = true);
		});
	}
	
	function clear_zone() {
        var clear_index_array = [];
		var bigArray = [];

		for (var element in index_array ) {
			var clickedDots = index_array[element].toString();
			clear_index_array.push(clickedDots);
		}

		for (var i = 0; i < clear_index_array.length; i++) { 
			bigArray =  uniq($.merge(bigArray, checkNear(clear_index_array[i], true)));			
		}

		for (var d = 0; d < clear_index_array.length; d++) {
			if ($(cell[clear_index_array[d]]).hasClass('maindot')) {
				$(cell[clear_index_array[d]]).attr('data-cleardots',bigArray);		
			}
		}	

    }
	
	
	function checkNear(currentIndex,add) {
		currentIndex = parseFloat(currentIndex);
		
		var leftD = currentIndex - 1;
		var leftTopD = currentIndex - 1*ri - 1;
		var leftBotD = currentIndex + 1*ri - 1;
		var topD = currentIndex - 1*ri;
		var botD = currentIndex + 1*ri;
		var rightD = currentIndex + 1;
		var rightTopD = currentIndex - 1*ri + 1;
		var rightBotD = currentIndex + 1*ri + 1;
		
		var dot = {
		  currentDot: currentIndex,
		  aroundDots: [leftD,leftTopD,leftBotD,topD,botD,rightD,rightTopD,rightBotD]
		};	

		if (add == true) {
			
			var clearDotsArra = [];
			
			for (var i = 0; i < dot.aroundDots.length; i++) { 
				if (!$(cell[dot.aroundDots[i]]).find('span.ship_part').length) {					
					if (dot.aroundDots[0]%20 != 19 && dot.aroundDots[5]%20 != 0) {
						$(cell[dot.aroundDots[i]]).append('<span class="clear_zone"></span>');
						clearDotsArra.push(dot.aroundDots[i]);
					}									
				}						
			}
						
			return clearDotsArra;
								
		} else {

			$(cell[dot.currentDot]).removeAttr("data-dots");
			$(cell[dot.currentDot]).find('span').remove();
			$(cell[dot.currentDot]).removeClass();
			$(cell[dot.currentDot]).removeAttr("data-cleardots");
						
		}
		
	}


	function cursor_pointer() {
        cell.css({'background':'#f0f0f0'});
		cell.removeClass('current_hover');
		cell.removeClass('current_hoverright');
		cell.removeClass('current_hoverleft');
		
        var cur_index = $(".hover").index();
		
        index_array = [cur_index];
				
		r_biggestIndex = [];
		l_biggestIndex = [];		
		
        shipsPositions(index_array,cur_index,l_biggestIndex,r_biggestIndex);

        // Check if we can place ships
        possible = true;
	

		if ((r_biggestIndex[0]%20) < cur_index%20 && (r_biggestIndex[0]%20) != 0) {
			possible = false;	
		}
		
		if (l_biggestIndex[0]%20 > cur_index%20 && (l_biggestIndex[0]%20) != 19) {
			possible = false;	
		}
		
        for (var element in index_array ) {					
            if (!$(cell[index_array[element]]).length) possible = false;
            if ($(cell[index_array[element]]).children().length) possible = false;
        }

        for (var element in index_array ) {
            if (possible == true) {
                $(cell[index_array[element]]).addClass('current_hover');
				$(cell[r_biggestIndex[0]]).addClass('current_hoverright');
				$(cell[l_biggestIndex[0]]).addClass('current_hoverleft');
            }
            if (possible == false) {
				$(cell[index_array[element]]).removeClass('current_hover');
                $(cell[index_array[element]]).css('background', 'green');
            }
        }
    }
	

	function getMaxOfArray(numArray) {
	  return Math.max.apply(null, numArray);
	}
	function getMinOfArray(numArray) {
	  return Math.min.apply(null, numArray);
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
