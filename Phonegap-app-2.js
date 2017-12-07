/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
 
//console.log(JSON.stringify(localStorage).length);
function onSuccess(position) {
  currentLocation = position;
  if (!map) {
    loadMapScript();
  }
}

function onError(error) {
  alert('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
}

function onDeviceReady() {
  navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

document.addEventListener("deviceready", onDeviceReady, false);

$('.thumb_detimg').click(function () {

	$('#popupimage').popup('open');
});

/*-----------------Geo location for browser----------------*/
var glc = $('[name="geo_location"]').val();

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    glc = position.coords.latitude + ',' + position.coords.longitude; 
	$('[name="geo_location"]').val(glc);
}

/*-------------Splash page-----------------*/
$("#splash").click(function(){
	$("#splash").hide();
	$.mobile.changePage( "#startscreen", { transition: "none"} );
});

/*-------------------------------Radio buttons left-right-------------------------------------*/
$('.low_icon').click(function(){
	if ($(this).parent().find('input:radio').is(':checked')) {
		$(this).parent().find('input:checked').parent().prev().children('input').prop("checked", true);
		
	} else if (($(this).parent().find('input:radio').size() == 4) &&  (!$(this).parent().find('input:radio').is(':checked'))){
		$(this).parent().find('input:radio').eq(1).prop("checked", true);	
	}	
	
	else if (!$(this).parent().find('input:radio').is(':checked')){
		$(this).parent().find('input:radio').eq(2).prop("checked", true);
	}
});

$('.hight_icon').click(function(){
	if ($(this).parent().find('input:radio').is(':checked')) {
		$(this).parent().find('input:checked').parent().next().children('input').prop("checked", true);
		
	} else if (($(this).parent().find('input:radio').size() == 4) &&  (!$(this).parent().find('input:radio').is(':checked'))){
			$(this).parent().find('input:radio').eq(2).prop("checked", true);	
		}
	else if (!$(this).parent().find('input:radio').is(':checked')){
		$(this).parent().find('input:radio').eq(3).prop("checked", true);
		
	} 	
});


/*-------------------------------User information-------------------------------------*/
function saveDataUser(){
	var UserData = new Object();
	
	UserData.firstName = $('[name="fname"]').val();
	UserData.lastName = $('[name="lname"]').val();
	UserData.leoIdCode = $('[name="leoidcode"]').val();
	UserData.territory = $('[name="territory"]').val();
	UserData.country = $('[name="country"]').val();
	UserData.appUsername = $('[name="appusername"]').val();
	UserData.appPassword = $('[name="apppassword"]').val();
	
	//UserInfo = [firstName, lastName, leoIdCode, territory, country, appUsername, appPassword];
	localStorage.setItem('UserInfo', JSON.stringify(UserData));
}
	
$('.submit_user').click(function () {
	saveDataUser();
});	

$('#go_to_userinfoblock').click(function () {
	
	var UserInfoObj = JSON.parse(localStorage.getItem('UserInfo'));
	
	$('[name="fname"]').val(UserInfoObj.firstName);
	$('[name="lname"]').val(UserInfoObj.lastName);
	$('[name="leoidcode"]').val(UserInfoObj.leoIdCode);
	$('[name="territory"]').val(UserInfoObj.territory);
	$('[name="country"]').val(UserInfoObj.country);
	$('[name="appusername"]').val(UserInfoObj.appUsername);
	$('[name="apppassword"]').val(UserInfoObj.appPassword);
});	

$('.cancel_uinfobtn').click(function () {
	document.getElementById('registration_user').reset();
});
/*---------------------------------Pharmacy Logic Result-----------------------------------*/
function getResults (formName, step) {
		
	if (validate(step)) {
		if (step==2) {
			sum = summary_step2(formName);
			
			var first_q = checkRadio('herb_scores1');
			var second_q = checkRadio('herb_scores2');
			var third_q = checkRadio('herb_scores3');
			var four_q = checkRadio('herb_scores4');
			var five_q = checkRadio('herb_scores5');
			var six_q = checkRadio('herb_scores6');
			var seven_q = checkRadio('herb_scores7');
			
			$('[name="result_step2_q1"]').val(first_q);
			$('[name="result_step2_q2"]').val(second_q);
			$('[name="result_step2_q3"]').val(third_q);
			$('[name="result_step2_q4"]').val(four_q);
			$('[name="result_step2_q5"]').val(five_q);
			$('[name="result_step2_q6"]').val(six_q);
			$('[name="result_step2_q7"]').val(seven_q);

			$('[name="result_step2_name"]').val(sum[0]);
			$('[name="result_step2_name2"]').val(sum[1]);
			$.mobile.changePage( "#result_step2", { transition: "slide"} );
			calculateStep2();
		}	
		if (step==4) {
			var first_q4 = checkRadio('chill_scores1');
			var second_q4 = checkRadio('chill_scores2');
			var third_q4 = checkRadio('chill_scores3');
			var four_q4 = checkRadio('chill_scores4');
			var five_q4 = checkRadio('chill_scores5');
			
			$('[name="result_step4_q1"]').val(first_q4);
			$('[name="result_step4_q2"]').val(second_q4);
			$('[name="result_step4_q3"]').val(third_q4);
			$('[name="result_step4_q4"]').val(four_q4);
			$('[name="result_step4_q5"]').val(five_q4);	
			
			sum = summary_step4(formName);
			$('[name="result_step4form"]').val(sum);
			$.mobile.changePage( "#result_step4", { transition: "slide"} );
			calculateStep4();
			setAllItems();
			resetForm();
		}	
	}
}

function unique(arr) {
  var obj = {};
  for(var i=0; i<arr.length; i++) {
    var str = arr[i];
    obj[str] = true; 
  }
  return Object.keys(obj); 
}

function checkRadio(elementName) {
    var radios = document.getElementsByName(elementName);
    for (var i = 0; i < radios.length; i++) {       
        if (radios[i].checked) {
			return radios[i].value;
        }
    }
	return null;
}
/*------------------------Validation steps---------------------*/
function validate(step){
	errorsArray = new Array();
	validation = true;	

	if (step==2) {
		errors = "Please select a value for all questions: ";	
				
		if(!$('#step2_form input[name="herb_scores1"]').is(':checked') ){
			errorsArray.push('question1');
			validation = false;
		}
		if(!$('#step2_form input[name="herb_scores2"]').is(':checked') ){
			errorsArray.push('question2');
			validation = false;
		}
		if(!$('#step2_form input[name="herb_scores3"]').is(':checked') ){
			errorsArray.push('question3');
			validation = false;
		}
		if(!$('#step2_form input[name="herb_scores4"]').is(':checked') ){
			errorsArray.push('question4');
			validation = false;
		}
		if(!$('#step2_form input[name="herb_scores5"]').is(':checked') ){
			errorsArray.push('question5');
			validation = false;
		}
		if(!$('#step2_form input[name="herb_scores6"]').is(':checked') ){
			errorsArray.push('question6');
			validation = false;
		}
		if(!$('#step2_form input[name="herb_scores7"]').is(':checked') ){
			errorsArray.push('question7');
			validation = false;
		}
		
		if (validation) {
			return true;
		} else {
			$('#popupDialogVal').popup('open');
			errors = errors + errorsArray.join(', ') + '.';
			$('#validationerror').html(errors);
			return false;
		}	
		
	}
	if (step==4) {
		errors = "Please select a value for all questions: ";
		
		if(!$('#chill_form_step4 input[name="chill_scores1"]').is(':checked') ){
			errorsArray.push('question1');
			validation = false;
		}
		if(!$('#chill_form_step4 input[name="chill_scores2"]').is(':checked') ){
			errorsArray.push('question2');
			validation = false;
		}
		if(!$('#chill_form_step4 input[name="chill_scores3"]').is(':checked') ){
			errorsArray.push('question3');
			validation = false;
		}
		if(!$('#chill_form_step4 input[name="chill_scores4"]').is(':checked') ){
			errorsArray.push('question4');
			validation = false;
		}
		if(!$('#chill_form_step4 input[name="chill_scores5"]').is(':checked') ){
			errorsArray.push('question5');
			validation = false;
		}
		
		if (validation) {
			return true;
		} else {
			$('#popupDialogVal2').popup('open');
			errors = errors + errorsArray.join(', ') + '.';
			$('#validationerror2').html(errors);
			return false;
		}	
			
	}
}

function validateStep1() {
	errorsArray = new Array();
	validation = true;	
	errors = "Please fill in all fields : ";
	
	if( $('#reg_forma_pharma input[name="pharm_name"]').val() == '' ){
		errorsArray.push('Pharmacy Name');
		validation = false;
	}
	if( $('#reg_forma_pharma input[name="leo_cust_id"]').val() == '' ){
		errorsArray.push('LEO Customer ID');
		validation = false;
	}
	if( $('#reg_forma_pharma input[name="adress1"]').val() == '' ){
		errorsArray.push('Address 1');
		validation = false;
	}
	if( $('#reg_forma_pharma input[name="city"]').val() == '' ){
		errorsArray.push('City');
		validation = false;
	}
	if( $('#reg_forma_pharma input[name="post_zip"]').val() == '' ){
		errorsArray.push('Postal / Zip Code');
		validation = false;
	}
	if( $('#reg_forma_pharma input[name="country_pharm"]').val() == '' ){
		errorsArray.push('Country');
		validation = false;
	}
	if( $('#reg_forma_pharma input[name="geo_location"]').val() == '' ){
		errorsArray.push('GEO Location');
		validation = false;
	}
	if( $('#reg_forma_pharma input[name="pharm_telphonenumber"]').val() == '' ){
		errorsArray.push('Telephone');
		validation = false;
	}
	
	if (validation) {
		$.mobile.changePage( "#pharmacy_step2", { transition: "slide"} );
		return true;
	} else {
		$('#popupDialogVal8').popup('open');
		errors = errors + errorsArray.join(', ') + '.';
		$('#validationerror8').html(errors);
		return false;
	}		
}
/*-----------------------Result of step---------------------*/
function summary_step2(formName){
	var first_q = checkRadio('herb_scores1');
	var second_q = checkRadio('herb_scores2');
	var third_q = checkRadio('herb_scores3');
	var four_q = checkRadio('herb_scores4');
	var five_q = checkRadio('herb_scores5');
	var six_q = checkRadio('herb_scores6');
	var seven_q = checkRadio('herb_scores7');

	sum = new Array();	
	sum[0] = parseInt(first_q) + parseInt(second_q);
	sum[1] = parseInt(third_q) + parseInt(four_q) + parseInt(five_q) + parseInt(six_q) +  parseInt(seven_q);	
	return sum;	
}
	
function summary_step4(formName){
	var arrayRadio = $('#'+formName+' input[type="radio"]');
		 
	var radioName = new Array();
	 
	for (var i = 0; i < arrayRadio.length; i++) {       
		radioName[i] = $(arrayRadio[i]).attr('name');
	}
	
	radioName = unique(radioName);
	var sum = 0;
	for (var i = 0; i < radioName.length; i++) {       
		var allChecked = checkRadio(radioName[i]);
		sum += +allChecked;
	}
	return sum;
}
/*-----------------------Logic result------------------------*/	
function calculateStep2() {
	var resultFirst2 = $('[name="result_step2_name"]').val();
	var resultOther = $('[name="result_step2_name2"]').val();
	
	$('.spice_block_result').hide();
	if (resultFirst2 < 2 && resultOther >= 2) {
		$('.spice_block_result.ginger').show();
	} 
	else if (resultFirst2 >= 2 && resultOther < 2){
		$('.spice_block_result.vanilla').show();		
	}
	else if (resultFirst2 >= 2 && resultOther >= 2){
		$('.spice_block_result.safron').show();		
	}
	else if (resultFirst2 < 2 && resultOther < 2){
		$('.spice_block_result.mint').show();		
	}
	return false;	
}

function calculateStep4() {
	var resultSecondOp = $('[name="result_step4form"]').val();

	$('.chilli_block_result').hide();
	if (resultSecondOp >= 11 && resultSecondOp <= 15) {
		$('.chilli_block_result.chilli_3').show();
	} 
	else if (resultSecondOp >= 6 && resultSecondOp <= 10){
		$('.chilli_block_result.chilli_2').show();		
	}
	else if (resultSecondOp >= 0 && resultSecondOp <= 5){
		$('.chilli_block_result.chilli_1').show();		
	}
	return false;
}

/*-----------------------Save pharmacense into localstorage------------------------*/	
function checkCurrentKeyNumber(){
	if ($('[name="current_keyid"]').val() !== '') {
		var currentKeyNumber = $('[name="current_keyid"]').val();	
		}
	return currentKeyNumber;
	}

function getCurrentKey() {
	var newDate, itemId;
	newDate = new Date();
	itemId = newDate.getTime();
	$('[name="current_keyid"]').val(itemId);
}
function formatDate(d) {
  var day = d.getDate();
  if ( day < 10 ) {day = '0' + day}
  
  var month = d.getMonth()+1;
  if ( month < 10 ) {month = '0' + month}
  
  var year = d.getFullYear();
  return day + "/" + month + "/" + year;
}


function setAllItems(){
	var mydate=new Date();		
	newdate = formatDate(mydate);
	
	var hours = mydate.getHours();
	if ( hours < 10 ) {hours = '0' + hours}
	
	var minutes = mydate.getMinutes();
	if ( minutes < 10 ) {minutes = '0' + minutes}
	
	newtime = hours + ":" + minutes;
	
	var img_src = $('.list_image.reg img').attr('src');
	
	formSave = { 
		q1Step2 : $("input[name='result_step2_q1']").val(),
		q2Step2 : $("input[name='result_step2_q2']").val(),
		q3Step2 : $("input[name='result_step2_q3']").val(),
		q4Step2 : $("input[name='result_step2_q4']").val(),
		q5Step2 : $("input[name='result_step2_q5']").val(),
		q6Step2 : $("input[name='result_step2_q6']").val(),
		q7Step2 : $("input[name='result_step2_q7']").val(),
		
		
		q1Step4 : $("input[name='result_step4_q1']").val(),
		q2Step4 : $("input[name='result_step4_q2']").val(),
		q3Step4 : $("input[name='result_step4_q3']").val(),
		q4Step4 : $("input[name='result_step4_q4']").val(),
		q5Step4 : $("input[name='result_step4_q5']").val(),
		
	
		pharmacenseName : $("input[name='pharm_name']").val(),
		leoId : $("input[name='leo_cust_id']").val(),
		adressOne  :$("input[name='adress1']").val(),
		adressTwo : $("input[name='adress2']").val(),
		pharmacenseCity : $("input[name='city']").val(),
		postZip : $("input[name='post_zip']").val(),
		pharmacenseCountry : $("input[name='country_pharm']").val(),
		resultS2First : $('[name="result_step2_name"]').val(),
		resultS2Second : $('[name="result_step2_name2"]').val(),
		resultS4 : $('[name="result_step4form"]').val(),
		geoLocation : $('[name="geo_location"]').val(),
		telephoneNumber : $('[name="pharm_telphonenumber"]').val(),
		photoPharma : img_src,
		surveyDate : newdate,
		surveyTime : newtime
	};
	var ckey = $('[name="current_keyid"]').val();
	localStorage.setItem(ckey, JSON.stringify(formSave));
}


$('#create_key_btn').click(function () {
	$.mobile.changePage( "#pharmacy_step1", { transition: "slide"} );
	getCurrentKey();	
});	

$('.btn_tostep2').click(function () {
	validateStep1();	
});

$('#btn_tostep4').click(function () {
	$.mobile.changePage( "#pharmacy_step4", { transition: "slide"} );
});	

$('#save_pharm_object, #result_step4 .home_back_btn').click(function () {
	$.mobile.changePage( "#startscreen", { transition: "slide"} );
	resetForm();
});


function resetForm() {
	document.getElementById('reg_forma_pharma').reset();
	$('.list_image.reg img').remove();

	document.getElementById('step2_form').reset();
	document.getElementById('chill_form_step4').reset();
	document.getElementById('cur_key_id').value = '';
	localStorage.removeItem(checkCurrentKeyNumber());
}
	
$('.cancel_reset_btn1, #pharmacy_step1 .home_back_btn').click(function () {
	$('#popupDialogVal4').popup('open');
});

$('.cancel_reset_btn2, #pharmacy_step2 .home_back_btn').click(function () {
	$('#popupDialogVal5').popup('open');
});

$('#cancel_reset_btn3, #result_step2 .home_back_btn').click(function () {
	$('#popupDialogVal6').popup('open');
});

$('.cancel_reset_btn4, #pharmacy_step4 .home_back_btn').click(function () {
	$('#popupDialogVal7').popup('open');
});

	
$('#confirm_nosave1').click(function () {
	$.mobile.changePage( "#startscreen", { transition: "slide"} );
	resetForm();
});
$('#confirm_nosave2').click(function () {
	$.mobile.changePage( "#startscreen", { transition: "slide"} );
	resetForm();
});
$('#confirm_nosave3').click(function () {
	$.mobile.changePage( "#startscreen", { transition: "slide"} );
	resetForm();
});
$('#confirm_nosave4').click(function () {
	$.mobile.changePage( "#startscreen", { transition: "slide"} );
	resetForm();
});

/*----------------Search---------------*/
function searchAll() {
	var ss_pharm_name = $("input[name='s_pharm_name']").val();
	var ss_leo_id = $("input[name='s_leo_id']").val();
	var ss_pharm_city = $("input[name='s_pharm_city']").val();
	var ss_postal_zip = $("input[name='s_postal_zip']").val();
	
	var localStorageArray = new Array();
	for (var i = 0; i < localStorage.length; i++){
		localStorageArray[localStorage.key(i)] = JSON.parse(localStorage.getItem(localStorage.key(i)));
	}
	
	checkResult = false;
	checkShowall = false;
	keyResult = new Array();
	i = 0;

	for (var key in localStorageArray) {
		if ((key !== 'UserInfo')) {
			
			var searchObj = new Object();
			
			searchObj.keyN = key;
			searchObj.name = localStorageArray[key].pharmacenseName;
			searchObj.lid = localStorageArray[key].leoId;
			searchObj.pcity = localStorageArray[key].pharmacenseCity;
			searchObj.pzip = localStorageArray[key].postZip;
				
			
			//var searchList = JSON.stringify(searchObj);		
			//console.log(searchObj.pcity);

			if ((searchObj.name == ss_pharm_name) || 
				(searchObj.lid == ss_leo_id) || 
				(searchObj.pcity == ss_pharm_city) || 
				(searchObj.pzip == ss_postal_zip))
			{
				keyResult[i++] = key;
				checkResult = true;
			} 
			
			if (ss_pharm_name=="" && ss_leo_id=="" && ss_pharm_city=="" && ss_postal_zip=="")
			{
				keyResult[i++] = key;
				checkShowall = true;	
			}

			/*if ((searchList.indexOf(s_pharm_name) != -1) || 
				(searchList.indexOf(s_leo_id) != -1) || 
				(searchList.indexOf(s_leo_id) != -1) || 
				(searchList.indexOf(s_leo_id) != -1))
			{
				keyResult[i++] = key;
				checkResult = true;
			} 
			if (s_pharm_name=="" && s_leo_id=="" && s_pharm_ciy=="" && s_postal_zip=="")
			{
				keyResult[i++] = key;
				checkShowall = true;	
			} */		
		}
	}
	
	if (checkShowall) {
		resultPageconstructor(keyResult);		
	}else if(checkResult) {
		resultPageconstructor(keyResult);		
	} else {
		$('#popupDialogVal3').popup('open');
	}
	return false;
		
}




function resultPageconstructor(keyRes) {
	$.mobile.changePage( "#search_result", { transition: "slide"} );
		
	var html = [];
	var mainContainer = $("#result_page_search");
	

	var html_keys = new Array();
	for (var k = 0; k < keyRes.length; k++) {
		html_keys[k] = keyResult[k];	
	}
	$('[name="list_keys"]').val(html_keys.join(','));	
	
	for (var i = 0; i < keyRes.length; i++) {
		var getSearchResElements = JSON.parse(localStorage.getItem(keyResult[i]));
		
		
		var countResult = keyRes.length;
		var titleText = 'Pharmacy Search <span> - '+countResult+' results</span>';
		$('#pharmSearchTitle').html(titleText);			
		
		var resPharmaName = getSearchResElements.pharmacenseName;
		var resChillRes = getSearchResElements.resultS4;
		var resGillRes1 = getSearchResElements.resultS2First;
		var resGillRes2 = getSearchResElements.resultS2Second;
		var resDate = getSearchResElements.surveyDate;
		var resTime = getSearchResElements.surveyTime;
		var resCity = getSearchResElements.pharmacenseCity;
				

		var imgChilliRes;			
		if (resChillRes >= 11 && resChillRes <= 15) {
			imgChilliRes = '<img src="sprites/small_chilli3.png">';		
		} else if (resChillRes >= 6 && resChillRes <= 10){
			imgChilliRes = '<img src="sprites/small_chilli2.png">';
		} else if (resChillRes >= 0 && resChillRes <= 5){
			imgChilliRes = '<img src="sprites/small_chilli1.png">';
		} else {
			imgChilliRes = '<img src="sprites/small_chilli_noimg.png">';
		}
		
		var imgGuysRes;
		if (resGillRes1 < 2 && resGillRes2 >= 2) {
			$('.spice_block_result.ginger').show();
			imgGuysRes = '<img src="sprites/small_ginger.png">';
		} 
		else if (resGillRes1 >= 2 && resGillRes2 < 2){
			$('.spice_block_result.vanilla').show();
			imgGuysRes = '<img src="sprites/small_vanilla.png">';		
		}
		else if (resGillRes1 >= 2 && resGillRes2 >= 2){
			$('.spice_block_result.safron').show();	
			imgGuysRes = '<img src="sprites/small_safron.png">';	
		}
		else if (resGillRes1 < 2 && resGillRes2 < 2){
			$('.spice_block_result.mint').show();
			imgGuysRes = '<img src="sprites/small_mitt.png">';		
		}else {
			imgGuysRes = '<img src="sprites/small_spice_noimg.png">';
		}

		html = ['<tr>',
			'<td class="td_key block_forresult"><input class="key_input" type="text" value="'+keyResult[i]+'"></td>',
			'<td class="text_info"><h4>'+resPharmaName+'</h4><p>Survey Date: '+resDate+'</p><p>City: '+resCity+'</p></td>',
			'<td class="chilli_results" id="chilli_results_images">'+imgChilliRes+'</td>',
			'<td class="spice_results">'+imgGuysRes+'</td>',
			'<td class="edit_send_bl"><div class="bl_checkbox"><input data-role="none" name="checkbox-'+i+'" type="checkbox" id="checkbox-'+i+'" class="custom_checksend" /><label for="checkbox-'+i+'">I agree</label></div><a data-key="'+keyResult[i]+'" href="#" class="white_btn view_current_pharm">View</a></td>',
			'</tr>'
			];
		mainContainer.append(html.join());
		
	}	
}


function resetFormSearchResults() {
	var mainContainer = document.getElementById("result_page_search");
	mainContainer.innerHTML = "";
}

function resetFormSearch() {
	document.getElementById('search_form').reset();
}


$('#search_all').click(function () {
	$('#result_page_search').empty();
	searchAll();
});

$('.cancel.s_form').click(function () {
	$.mobile.changePage( "#startscreen", { transition: "slide"} );
	resetFormSearch();
});

$('.cancel_edit_btninfo').click(function () {
	var keys = new Array();
	
	if($('[name="list_keys"]').val() != '') {
		keys = $('[name="list_keys"]').val().split(',');
	} else {$.mobile.changePage( "#search_result", { transition: "slide"} );}
	
	resetFormSearchResults();
	resultPageconstructor(keys);	
});

$('.cancel_ressearch').click(function () {
	$.mobile.changePage( "#search_form_block", { transition: "slide"} );
	resetFormSearch();
	resetFormSearchResults();
});

$('#search_page_btn').click(function () {
	$.mobile.changePage( "#search_form_block", { transition: "slide"} );
	resetFormSearch();
});

/*---------------View page constructor--------------*/
function pageConstructorKey(curkey) {
	$('[name="currentkey_forchange"]').val(curkey);
	
	var getAllElements = JSON.parse(localStorage.getItem(curkey));
	
	var infName = getAllElements.pharmacenseName;
	var infAdressOne = getAllElements.adressOne;
	var infAdressTwo = getAllElements.adressTwo;
	var infCity = getAllElements.pharmacenseCity;
	var infPostZip = getAllElements.postZip;
	var infTelNumber = getAllElements.telephoneNumber;
	var infGeoLocation = getAllElements.geoLocation;
	var infResS1f = getAllElements.resultS2First;
	var infResS1t = getAllElements.resultS2Second;
	var infResS4 = getAllElements.resultS4;
	var infSurDate = getAllElements.surveyDate;
	var infSurTime = getAllElements.surveyTime;	
	var infPhoto = getAllElements.photoPharma;
	
	var imgChilliResInfo;			
	if (infResS4 >= 11 && infResS4 <= 15) {
		imgChilliResInfo = '<img src="sprites/small_chilli3.png">';		
	} else if (infResS4 >= 6 && infResS4 <= 10){
		imgChilliResInfo = '<img src="sprites/small_chilli2.png">';
	} else if (infResS4 >= 0 && infResS4 <= 5){
		imgChilliResInfo = '<img src="sprites/small_chilli1.png">';
	} else {
		imgChilliResInfo = '<img src="sprites/small_chilli_noimg.png">';
	}
	
	var imgGuysResinfo;
	if (infResS1f < 2 && infResS1t >= 2) {
		imgGuysResinfo = '<img src="sprites/small_ginger.png">';
	} 
	else if (infResS1f >= 2 && infResS1t < 2){
		imgGuysResinfo = '<img src="sprites/small_vanilla.png">';		
	}
	else if (infResS1f >= 2 && infResS1t >= 2){
		imgGuysResinfo = '<img src="sprites/small_safron.png">';	
	}
	else if (infResS1f < 2 && infResS1t < 2){
		imgGuysResinfo = '<img src="sprites/small_mitt.png">';		
	}else {
		imgGuysResinfo = '<img src="sprites/small_spice_noimg.png">';
	}
		
	$('.info_title').html(infName);	
	$('.info_surv_address1').html('Address 1: '+infAdressOne);	
	$('.info_surv_address2').html('Address 2: '+infAdressTwo);	
	$('.info_surv_pzip').html('Postal / Zip Code: '+infPostZip);	
	$('.info_phone').html('Telephone: '+infTelNumber);
	$('.info_surv_geoloc').html('GEO Code: '+infGeoLocation);
	$('.link_telephone').attr('href', 'tel:'+infTelNumber+'');	


	var geoLocationCoordinats = infGeoLocation;
	var tempCopordinatas = new Array();
	tempCopordinatas = geoLocationCoordinats.split(',');
	
	$('[name="coord_result"]').val(tempCopordinatas[0]);
	$('[name="coord_result2"]').val(tempCopordinatas[1]);
	
	
	$('.info_guys_img').html(imgGuysResinfo);	
	$('.info_chilli_img').html(imgChilliResInfo);	
	$('.info_surv_date').html('Survey Date: '+infSurDate);	
	$('.info_surv_time').html('Survey Time: '+infSurTime);
	$('.info_surv_city').html('City: '+infCity);
	$('.thumb_detimg').attr('src', infPhoto);
	$('.thumb_detimg_full').attr('src', infPhoto);		
}

$('.result_search_list').on('click','.view_current_pharm',function(){
	var pageCon = $(this).data('key');
	pageConstructorKey(pageCon);
	$.mobile.changePage( "#detail_page_pharma", {transition: "slide"} );
});	
/*---------------------Change Main Information ------------------------*/
function chancgeMainInformation(inputname) {	
	var PharmData = new Object();
	var PharmData = JSON.parse(localStorage.getItem(inputname));
		
	$('[name="change_pharm_name"]').val(PharmData.pharmacenseName);
	$('[name="change_leoid"]').val(PharmData.leoId);
	$('[name="change_adress1"]').val(PharmData.adressOne);
	$('[name="change_adress2"]').val(PharmData.adressTwo);
	$('[name="change_city"]').val(PharmData.pharmacenseCity);
	$('[name="change_postzip"]').val(PharmData.postZip);
	$('[name="change_country"]').val(PharmData.pharmacenseCountry);
	$('[name="change_telephone"]').val(PharmData.telephoneNumber);
	$('[name="change_geolocation"]').val(PharmData.geoLocation);
	
	$('[name="change_res1_1"]').val(PharmData.resultS2First);
	$('[name="change_res1_2"]').val(PharmData.resultS2Second);
	$('[name="change_res2"]').val(PharmData.resultS4);
	$('[name="change_data"]').val(PharmData.surveyDate);
	$('[name="change_time"]').val(PharmData.surveyTime);
	
	
	$('[name="c_result_step2_q1"]').val(PharmData.q1Step2);
	$('[name="c_result_step2_q2"]').val(PharmData.q2Step2);
	$('[name="c_result_step2_q3"]').val(PharmData.q3Step2);
	$('[name="c_result_step2_q4"]').val(PharmData.q4Step2);
	$('[name="c_result_step2_q5"]').val(PharmData.q5Step2);
	$('[name="c_result_step2_q6"]').val(PharmData.q6Step2);
	$('[name="c_result_step2_q7"]').val(PharmData.q7Step2);
	
	$('[name="c_result_step4_q1"]').val(PharmData.q1Step4);
	$('[name="c_result_step4_q2"]').val(PharmData.q2Step4);
	$('[name="c_result_step4_q3"]').val(PharmData.q3Step4);
	$('[name="c_result_step4_q4"]').val(PharmData.q4Step4);
	$('[name="c_result_step4_q5"]').val(PharmData.q5Step4);
	
	getRadioVal('step2_form_change', 'herb_scores1', PharmData.q1Step2);
	getRadioVal('step2_form_change', 'herb_scores2', PharmData.q2Step2);
	getRadioVal('step2_form_change', 'herb_scores3', PharmData.q3Step2);
	getRadioVal('step2_form_change', 'herb_scores4', PharmData.q4Step2);
	getRadioVal('step2_form_change', 'herb_scores5', PharmData.q5Step2);
	getRadioVal('step2_form_change', 'herb_scores6', PharmData.q6Step2);
	getRadioVal('step2_form_change', 'herb_scores7', PharmData.q7Step2);
	
	getRadioVal('chill_form_step4_change', 'chill_scores1', PharmData.q1Step4);
	getRadioVal('chill_form_step4_change', 'chill_scores2', PharmData.q2Step4);
	getRadioVal('chill_form_step4_change', 'chill_scores3', PharmData.q3Step4);
	getRadioVal('chill_form_step4_change', 'chill_scores4', PharmData.q4Step4);
	getRadioVal('chill_form_step4_change', 'chill_scores5', PharmData.q5Step4);
	
	$('.change_img img').attr('src', PharmData.photoPharma);
		
}
function getRadioVal(formId, currentName, cValue) {
	var radios = $('#'+formId+' input[name="'+currentName+'"]');
    for (var i = 0; i < radios.length; i++) { 	
		if (radios[i].value == cValue) {  
			return radios[i].setAttribute("checked", "checked");
		}
	}
}

$('.edit_btninfo').click(function () {
	$.mobile.changePage( "#aceess_editpage", { transition: "slide"} );
	var editKeyPage = $('[name="currentkey_forchange"]').val();	
	chancgeMainInformation(editKeyPage);
	$('[name="key_in_change"]').val(editKeyPage);
});


function saveChancgeMainInformation(savedkey) {
	var PharmData = JSON.parse(localStorage.getItem(savedkey));		
	
	PharmData.pharmacenseName = $('[name="change_pharm_name"]').val();
	PharmData.leoId = $('[name="change_leoid"]').val();
	PharmData.adressOne = $('[name="change_adress1"]').val();
	PharmData.adressTwo = $('[name="change_adress2"]').val();
	PharmData.pharmacenseCity = $('[name="change_city"]').val();
	PharmData.postZip = $('[name="change_postzip"]').val();
	PharmData.pharmacenseCountry = $('[name="change_country"]').val();
	PharmData.telephoneNumber = $('[name="change_telephone"]').val();
	PharmData.geoLocation = $('[name="change_geolocation"]').val();
	
	PharmData.resultS2First = $('[name="change_res1_1"]').val();
	PharmData.resultS2Second = $('[name="change_res1_2"]').val();
	PharmData.resultS4 = $('[name="change_res2"]').val();
	PharmData.surveyDate = $('[name="change_data"]').val();
	PharmData.surveyTime = $('[name="change_time"]').val();
	
	PharmData.q1Step2 = $('[name="c_result_step2_q1"]').val();
	PharmData.q2Step2 = $('[name="c_result_step2_q2"]').val();
	PharmData.q3Step2 = $('[name="c_result_step2_q3"]').val();
	PharmData.q4Step2 = $('[name="c_result_step2_q4"]').val();
	PharmData.q5Step2 = $('[name="c_result_step2_q5"]').val();
	PharmData.q6Step2 = $('[name="c_result_step2_q6"]').val();
	PharmData.q7Step2 = $('[name="c_result_step2_q7"]').val();
	
	PharmData.q1Step4 = $('[name="c_result_step4_q1"]').val();
	PharmData.q2Step4 = $('[name="c_result_step4_q2"]').val();
	PharmData.q3Step4 = $('[name="c_result_step4_q3"]').val();
	PharmData.q4Step4 = $('[name="c_result_step4_q4"]').val();
	PharmData.q5Step4 = $('[name="c_result_step4_q5"]').val();
	

	PharmData.photoPharma = $('.change_img img').attr('src');
	
	localStorage.setItem(savedkey, JSON.stringify(PharmData));
}

$('.change_main_infobtn').click(function () {
	var editKey = $('[name="key_in_change"]').val();	
	saveChancgeMainInformation(editKey);
	pageConstructorKey(editKey);
});

/*--------------------------------Change step 2-4 results-----------------------------------*/	
$('#change_image_spice').click(function () {
	resetFormSearchChange2();
	var editKeyPage = $('[name="currentkey_forchange"]').val();	
	chancgeMainInformation(editKeyPage);
	$('[name="key_in_change"]').val(editKeyPage);
});
$('.btn_tostep2_change').click(function () {
	var chKey2 = $('[name="currentkey_forchange"]').val();
	saveChancgeMainInformation(chKey2);
});
$('#result_step4_change .home_back_btn').click(function () {
	var chKey2 = $('[name="currentkey_forchange"]').val();
	saveChancgeMainInformation(chKey2);
	$.mobile.changePage( "#startscreen", {transition: "slide"} );
});


$('#change_image_chilli').click(function () {
	resetFormSearchChange4();
	var editKeyPage = $('[name="currentkey_forchange"]').val();	
	chancgeMainInformation(editKeyPage);
	$('[name="key_in_change"]').val(editKeyPage);
});
$('.btn_tostep4_change').click(function () {
	var chKey = $('[name="currentkey_forchange"]').val();
	saveChancgeMainInformation(chKey);
});

$('#result_step2_change .home_back_btn').click(function () {
	var chKey = $('[name="currentkey_forchange"]').val();
	saveChancgeMainInformation(chKey);
	$.mobile.changePage( "#startscreen", {transition: "slide"} );
});


function getResultsChange (formName, step) {
	if (step==2) {
		
		var first_q = checkRadio('herb_scores1');
		var second_q = checkRadio('herb_scores2');
		var third_q = checkRadio('herb_scores3');
		var four_q = checkRadio('herb_scores4');
		var five_q = checkRadio('herb_scores5');
		var six_q = checkRadio('herb_scores6');
		var seven_q = checkRadio('herb_scores7');
		
		$('[name="c_result_step2_q1"]').val(first_q);
		$('[name="c_result_step2_q2"]').val(second_q);
		$('[name="c_result_step2_q3"]').val(third_q);
		$('[name="c_result_step2_q4"]').val(four_q);
		$('[name="c_result_step2_q5"]').val(five_q);
		$('[name="c_result_step2_q6"]').val(six_q);
		$('[name="c_result_step2_q7"]').val(seven_q);
			
		validate_step2change();
		sum = summary_step2_change(formName);
		
		$('[name="change_res1_1"]').val(sum[0]);
		$('[name="change_res1_2"]').val(sum[1]);
		calculateStep2_change();
	}	
	
	if (step==4) {
		
		var first_q4 = checkRadio('chill_scores1');
		var second_q4 = checkRadio('chill_scores2');
		var third_q4 = checkRadio('chill_scores3');
		var four_q4 = checkRadio('chill_scores4');
		var five_q4 = checkRadio('chill_scores5');
		
		$('[name="c_result_step4_q1"]').val(first_q4);
		$('[name="c_result_step4_q2"]').val(second_q4);
		$('[name="c_result_step4_q3"]').val(third_q4);
		$('[name="c_result_step4_q4"]').val(four_q4);
		$('[name="c_result_step4_q5"]').val(five_q4);	
	
		
		validate_step4change();
		sum = summary_step4_change(formName);

		$('[name="change_res2"]').val(sum);
		calculateStep4_change();
	}	
}
function calculateStep2_change() {
	var resultFirst2 = $('[name="change_res1_1"]').val();
	var resultOther = $('[name="change_res1_2"]').val();
	
	$('.spice_block_result').hide();
	if (resultFirst2 < 2 && resultOther >= 2) {
		$('.spice_block_result.ginger').show();
	} 
	else if (resultFirst2 >= 2 && resultOther < 2){
		$('.spice_block_result.vanilla').show();		
	}
	else if (resultFirst2 >= 2 && resultOther >= 2){
		$('.spice_block_result.safron').show();		
	}
	else if (resultFirst2 < 2 && resultOther < 2){
		$('.spice_block_result.mint').show();		
	}
	return false;	
}

function summary_step2_change(formName){
	var first_q = checkRadio('herb_scores1');
	var second_q = checkRadio('herb_scores2');
	var third_q = checkRadio('herb_scores3');
	var four_q = checkRadio('herb_scores4');
	var five_q = checkRadio('herb_scores5');
	var six_q = checkRadio('herb_scores6');
	var seven_q = checkRadio('herb_scores7');
	
	sum = new Array();	
	sum[0] = parseInt(first_q) + parseInt(second_q);
	sum[1] = parseInt(third_q) + parseInt(four_q) + parseInt(five_q) + parseInt(six_q) +  parseInt(seven_q);	
	return sum;	
}
function resetFormSearchChange2() {
	document.getElementById('step2_form_change').reset();
}

$('.cancel_resetbtn2_change').click(function () {
	var editKey = $('[name="key_in_change"]').val();	
	pageConstructorKey(editKey);
});
/*--------------------------------Change step 2-4 results-----------------------------------*/

function calculateStep4_change() {
	var resultSecondOp = $('[name="change_res2"]').val();

	$('.chilli_block_result').hide();
	if (resultSecondOp >= 11 && resultSecondOp <= 15) {
		$('.chilli_block_result.chilli_3').show();
	} 
	else if (resultSecondOp >= 6 && resultSecondOp <= 10){
		$('.chilli_block_result.chilli_2').show();		
	}
	else if (resultSecondOp >= 0 && resultSecondOp <= 5){
		$('.chilli_block_result.chilli_1').show();		
	}
	return false;
}


function summary_step4_change(formName){
	var arrayRadio = $('#'+formName+' input[type="radio"]');
		 
	var radioName = new Array();
	 
	for (var i = 0; i < arrayRadio.length; i++) {       
		radioName[i] = $(arrayRadio[i]).attr('name');
	}
	
	radioName = unique(radioName);
	var sum = 0;
	for (var i = 0; i < radioName.length; i++) {       
		var allChecked = checkRadio(radioName[i]);
		sum += +allChecked;
	}
	return sum;
}

function resetFormSearchChange4() {
	document.getElementById('chill_form_step4_change').reset();
}

$('.cancel_resetbtn4_change').click(function () {
	var editKey = $('[name="key_in_change"]').val();	
	pageConstructorKey(editKey);
});

$('.btn_tostep4_change, .btn_tostep2_change').click(function () {
	var editKey = $('[name="key_in_change"]').val();	
	pageConstructorKey(editKey);
});


/*-----------Validation Changes step 2-4-----------------------------------*/

function validate_step2change(){
	errorsArray = new Array();
	validation = true;	

	errors = "Please select a value for all questions: ";
			
	if(!$('#step2_form_change input[name="herb_scores1"]').is(':checked') ){
		errorsArray.push('question1');
		validation = false;
	}
	if(!$('#step2_form_change input[name="herb_scores2"]').is(':checked') ){
		errorsArray.push('question2');
		validation = false;
	}
	if(!$('#step2_form_change input[name="herb_scores3"]').is(':checked') ){
		errorsArray.push('question3');
		validation = false;
	}
	if(!$('#step2_form_change input[name="herb_scores4"]').is(':checked') ){
		errorsArray.push('question4');
		validation = false;
	}
	if(!$('#step2_form_change input[name="herb_scores5"]').is(':checked') ){
		errorsArray.push('question5');
		validation = false;
	}
	if(!$('#step2_form_change input[name="herb_scores6"]').is(':checked') ){
		errorsArray.push('question6');
		validation = false;
	}
	if(!$('#step2_form_change input[name="herb_scores7"]').is(':checked') ){
		errorsArray.push('question7');
		validation = false;
	}
	
	if (validation) {
		$.mobile.changePage( "#result_step2_change", { transition: "slide"} );
		return true;
	} else {
		$('#popupDialogVal9').popup('open');
		errors = errors + errorsArray.join(', ') + '.';
		$('#validationerror9').html(errors);
		return false;
	}	

}


function validate_step4change(){
	errorsArray = new Array();
	validation = true;	

	errors = "Please select a value for all questions: ";
	if(!$('#chill_form_step4_change input[name="chill_scores1"]').is(':checked') ){
		errorsArray.push('question1');
		validation = false;
	}
	if(!$('#chill_form_step4_change input[name="chill_scores2"]').is(':checked') ){
		errorsArray.push('question2');
		validation = false;
	}
	if(!$('#chill_form_step4_change input[name="chill_scores3"]').is(':checked') ){
		errorsArray.push('question3');
		validation = false;
	}
	if(!$('#chill_form_step4_change input[name="chill_scores4"]').is(':checked') ){
		errorsArray.push('question4');
		validation = false;
	}
	if(!$('#chill_form_step4_change input[name="chill_scores5"]').is(':checked') ){
		errorsArray.push('question5');
		validation = false;
	}
	
	if (validation) {
		$.mobile.changePage( "#result_step4_change", { transition: "slide"} );
		return true;
	} else {
		$('#popupDialogVal10').popup('open');
		errors = errors + errorsArray.join(', ') + '.';
		$('#validationerror10').html(errors);
		return false;
	}	

}


/*-------------------------------------------------*/
document.getElementById('files').addEventListener('change', handleFileSelect, false);

function handleFileSelect(evt) {
	var files = evt.target.files;
	var f = files[0];
	var reader = new FileReader();
	 
	  reader.onload = (function(theFile) {
			return function(e) {
			  document.getElementsByClassName('list_image')[0].innerHTML = ['<img src="', e.target.result,'" title="', theFile.name, '" />'].join('');
			};
	  })(f);
	   
	  reader.readAsDataURL(f);
}

document.getElementById('files_c').addEventListener('change', handleFileSelect2, false);
function handleFileSelect2(evt) {
	var files = evt.target.files;
	var f = files[0];
	var reader = new FileReader();
	 
	  reader.onload = (function(theFile) {
			return function(e) {
			  document.getElementsByClassName('list_image')[1].innerHTML = ['<img src="', e.target.result,'" title="', theFile.name, '" />'].join('');
			};
	  })(f);
	   
	  reader.readAsDataURL(f);
}
/*-------------------------------------------------*/

function setMap(myLat, myLng){	

  var my_place = new google.maps.LatLng(myLat, myLng);
  var myOptions = {
  zoom:8,
  mapTypeId: google.maps.MapTypeId.ROADMAP,
  //mapTypeControl: false,
  center: my_place
  }
  var map = new google.maps.Map(document.getElementById("mer_map_canvas"), myOptions);
 
 google.maps.event.addListenerOnce(map, 'idle', function() {
	var center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
	map.setCenter(center); 
});
 
							  
}
	

$('.detail_info_block').on('click','.link_geomap',function(){
	var LatLng = $('[name="coord_result"]').val();
	var LatLng2 = $('[name="coord_result2"]').val();			
	setMap(LatLng, LatLng2);	
	$.mobile.changePage( "#map", { transition: "slide"} );
});	



/*-------------------------------------------------*/

$('#send_email').click(function(){

    var selectedmed = '';
	
	var arrMail = [];
	
    $('#send_form .bl_checkbox input:checkbox:checked').each(function(){
      arrMail.push($(this).parent().parent().parent().find('.td_key').find('input:text').val());
    });
	
	
	var mailBody = new Array();
	
	for (var i = 0; i < arrMail.length; i++) {
		var getResultOfkeys = JSON.parse(localStorage.getItem(arrMail[i]));
		
		var resPharmaName = getResultOfkeys.pharmacenseName;
		var resID = getResultOfkeys.leoId;
		var resAdd1 = getResultOfkeys.adressOne;
		var resAdd2 = getResultOfkeys.adressTwo;
		var resCity = getResultOfkeys.pharmacenseCity;
		var resZip = getResultOfkeys.postZip;
		var resCountry = getResultOfkeys.pharmacenseCountry;
		var resLoc = getResultOfkeys.geoLocation;
		var resTel = getResultOfkeys.telephoneNumber;
		var resDate = getResultOfkeys.surveyDate;
		var resTime = getResultOfkeys.surveyTime;
		
		
		var resFirst1 = getResultOfkeys.resultS2First;
		var resFirst2 = getResultOfkeys.resultS2Second;
		var finalStep2 = '';
		
		if (resFirst1 < 2 && resFirst2 >= 2) {
			finalStep2 = 'GINGER';
		} 
		else if (resFirst1 >= 2 && resFirst2 < 2){
			finalStep2= 'VANILLA';		
		}
		else if (resFirst1 >= 2 && resFirst2 >= 2){
			finalStep2 = 'SAFFRON';		
		}
		else if (resFirst1 < 2 && resFirst2 < 2){
			finalStep2 = 'MINT';		
		}

		
		var resChilli = getResultOfkeys.resultS4;
		var finalStep4 = '';
		
		if (resChilli >= 11 && resChilli <= 15) {
			finalStep4 = '3 CHILLIES';	
		} 
		else if (resChilli >= 6 && resChilli <= 10){
			finalStep4 = '2 CHILLIES';		
		}
		else if (resChilli >= 0 && resChilli <= 5){
			finalStep4 = '1 CHILLI';		
		}

		var resQ1step2 = getResultOfkeys.q1Step2;
		var resQ2step2 = getResultOfkeys.q2Step2;
		var resQ3step2 = getResultOfkeys.q3Step2;
		var resQ4step2 = getResultOfkeys.q4Step2;
		var resQ5step2 = getResultOfkeys.q5Step2;
		var resQ6step2 = getResultOfkeys.q6Step2;
		var resQ7step2 = getResultOfkeys.q7Step2;

		var resQ1step4 = getResultOfkeys.q1Step4;
		var resQ2step4 = getResultOfkeys.q2Step4;
		var resQ3step4 = getResultOfkeys.q3Step4;
		var resQ4step4 = getResultOfkeys.q4Step4;
		var resQ5step4 = getResultOfkeys.q5Step4;
		

		mailBody[i] = 'Pharmacy Name: '+resPharmaName+'%0ALEO Customer ID: '+resID+'%0AAddress 1: '+resAdd1+'%0AAddress 2: '+resAdd2+'%0ACity: '+resCity+'%0APostal / Zip Code: '+resZip+'%0A Country: '+resCountry+'%0AGEO Location: '+resLoc+'%0A Telephone: '+resTel+'%0ASurvey Date: '+resDate+'%0ASurvey Time: '+resTime+'%0AFinal spice score: '+finalStep2+'%0AFinal chilli score - '+finalStep4;					
	}

	bodyMail = mailBody.join('%0A%0A');
    window.location.href = 'mailto:?subject=Pharmascence&body='+bodyMail;
    return false;
});



/*

+'%0AThe pharmacy is located in an area of mostly what level of affluence?'+resQ1step2+'%0AWhat is the perceived value of the brands most prominently on display?'+resQ2step2+'%0AHow many added value services does the pharmacy invite customers to take advantage of? (e.g. loyalty schemes, free healthcare services)'+resQ3step2+'%0AHow well stocked are the shelves?'+resQ4step2+'%0AAre the premises well-organised or cluttered?'+resQ5step2+'%0AIs the pharmacy well staffed or poorly staffed (i.e. are there long queues)?'+resQ6step2+'%0AHow much time do staff spend talking to patients?'+resQ7step2+'%0AFinal chilli score: '+finalStep4+'%0AHow much space do healthcare brands (OTC drugs) occupy?'+resQ1step4+'%0AHow many activities are going on in the shop? (e.g. Pharmacy TV,large healthcare in-store displays, window displays)'+resQ2step4+'%0AWhich type of training is the pharmacy most interested in receiving from pharmaceutical companies:'+resQ3step4+'%0AHow often are the staff given commercial training (e.g. sales training, customer service)?'+resQ4step4+'%0AHow likely are the staff to challenge or persuade a customer to change their brand request?'+resQ5step4*/



/*----------------------add radio buttons for change-------------------------*/












