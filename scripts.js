var $ = jQuery.noConflict();

$(document).ready(function() {

	$('html').attr('id', 'js'); // Enabled Javascript Detection
	
	if($("a[rel=external]")){
	 $("a[rel=external]").click(function() {
	  window.open(this.href);  
	  return false;
	 });
	}


	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');
	
		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');
	
		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});
	
	
	
	$('.list_check input:checkbox').change(function(){
		if($(this).is(":checked")) {
			$(this).closest('label').addClass("checked_c");
		} else {
			$(this).closest('label').removeClass("checked_c");
		}
	});
	
	$(".list_bl").mCustomScrollbar({
    	axis:"y",
		//advanced:{autoExpandHorizontalScroll:true}
	});
	
	$('.sh_radio input[type="radio"]').click(function() {
		var id = $(this).data('id');
		$('.sh_radio .bl input').find('input').attr("disabled", true);
			
		$('.sh_radio .bl').removeClass('disable_inp').find('input').attr("disabled", true);
		$('#' + id).addClass('disable_inp').find('input').attr("disabled", false);

	});


	
	$('.teamcreate_bl .list_bl input:checkbox').change(function(){
		var currentName = $(this).closest('label').find('span').html();
		var currentData = $(this).closest('label').attr('data-id');
		var createdData= $('.players_newteam .pl_name').attr('data-currendid');	
				
		if($(this).is(":checked")) {
			$('.players_newteam').append("<div data-currendid="+currentData+" class='pl_name'>"+currentName+"</div>");
			$('.players_newteam').addClass('added');

			if($('.players_newteam').html() == '') {
				$('.players_newteam').removeClass('added');	
			}
		} else {
			$(".players_newteam .pl_name").each(function() {
				var thisName = $(this).attr('data-currendid');
				if (currentData == thisName) {
					$(this).remove();		
				}
			});
			
			if($('.players_newteam').html() == '') {
				$('.players_newteam').removeClass('added');	
			}
		}	
	});
	
	
	$('.tab_container').on('click','.players_newteam .pl_name',function() {
		var currentClickedName = $(this).attr('data-currendid');
		var checkChekbox = $('.teamcreate_bl .list_bl input:checkbox').attr('data-id');
		
		$(this).remove();
		
		if($('.players_newteam').html() == '') {
			$('.players_newteam').removeClass('added');	
		}
		
		$('.teamcreate_bl .list_bl input:checkbox').each(function() {
			var thisBox = $(this).closest('label').attr('data-id');			
			if (currentClickedName == thisBox) {
				$(this).prop('checked', false);	
				$(this).closest('label').removeClass('checked_c');	
			}
		});	
	});
	
	$('.btn_addteam').click(function() {
		var newTeamName = $('.newteam_name').val();
		
		if(newTeamName != '') {
			$('.current_teamlist .mCSB_container').prepend('<label><input type="checkbox" autocomplete="off">'+newTeamName+'</label>');	
		}
		return false;
	});


	var timerStarrLoad = setInterval(function () {
		loadingPage(3000,500)
		loadingPage(0,-200)
	}, 1000);
	
	
	function loadingPage(time,distance) {	
		$('.loading_line span').animate(
			{ left: distance },
			{ duration: time },
			{ easing:'linear'}
		);	
	}
	
	
	
	counerScreen(5);
	function counerScreen(time) {
		if($('.counter_start').length ) {
			var counterForScreen = time;
			$('.counter_start').html(counterForScreen);
			setInterval(function() {
				counterForScreen--;
				if (counterForScreen >= 0) {
					$('.counter_start').html(counterForScreen);
				}
				if (counterForScreen === 0) {
					alert('!!!!!!!!!!!!!!!!!TIMER ENDED!!!!!!!!!!!!!!!!!');
					clearInterval(counterForScreen);
				}
			
			}, 1000);
		}
	}





});