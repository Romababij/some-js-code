function shipsPositions(param1,param2,param3,param4) {	
	var ri = 20;
	
	/*---трех-палубный--*/
	if ($(".selected_ship").hasClass('p01')){
		param1.push([param2 + 1]);
		param1.push([param2 - 1]);
		
		param4.push([param2 + 2]);
		param3.push([param2 - 2]);
	}
	if ($(".selected_ship").hasClass('p01_s2')){
		param1.push([param2 + 1*ri]);
		param1.push([param2 - 1*ri]);
	}
	
	if ($(".selected_ship").hasClass('p01_s3')){
		param1.push([param2 + 1]);
		param1.push([param2 - 1]);
		
		param4.push([param2 + 2]);
		param3.push([param2 - 2]);
	}
	if ($(".selected_ship").hasClass('p01_s4')){
		param1.push([param2 + 1*ri]);
		param1.push([param2 - 1*ri]);
	}
	
	/*---двух-палубный--*/
	if ($(".selected_ship").hasClass('p02')){
		param1.push([param2 + 1]);
		
		param4.push([param2 + 2]);
		param3.push([param2 - 1]);
	}
	if ($(".selected_ship").hasClass('p02_s2')){
		param1.push([param2 + 1*ri]);
	}
	if ($(".selected_ship").hasClass('p02_s3')){
		param1.push([param2 + 1]);
		
		param4.push([param2 + 2]);
		param3.push([param2 - 1]);
	}
	if ($(".selected_ship").hasClass('p02_s4')){
		param1.push([param2 + 1*ri]);
	}
	
	
	/*---Z зигзаг--*/
	if ($(".selected_ship").hasClass('p04')){
		param1.push([param2 - 1]);
		param1.push([param2 + 1*ri]);
		param1.push([param2 + 1*ri + 1]);
		
		param3.push([param2 - 2]);
		param4.push([param2 + 1*ri + 2]);
	}
	
	if ($(".selected_ship").hasClass('p04_s2')){
		param1.push([param2 - 1*ri + 1]);
		param1.push([param2 + 1]);
		param1.push([param2 + 1*ri]);
		
		param3.push([param2 - 1]);
		param4.push([param2 + 2]);
	}
	
	if ($(".selected_ship").hasClass('p04_s3')){
		param1.push([param2 - 1]);
		param1.push([param2 + 1*ri]);
		param1.push([param2 + 1*ri + 1]);
		
		param3.push([param2 - 2]);
		param4.push([param2 + 1*ri + 2]);
	}
	
	if ($(".selected_ship").hasClass('p04_s4')){
		param1.push([param2 - 1*ri + 1]);
		param1.push([param2 + 1]);
		param1.push([param2 + 1*ri]);
		
		param3.push([param2 - 1]);
		param4.push([param2 + 2]);
	}
	
	
	/*---4-х палубный--*/
	
	if ($(".selected_ship").hasClass('p05')){
		param1.push([param2 - 1]);
		param1.push([param2 + 1]);
		param1.push([param2 + 2]);
		
		param3.push([param2 - 2]);
		param4.push([param2 + 3]);
	}
	
	if ($(".selected_ship").hasClass('p05_s2')){
		param1.push([param2 - 1*ri]);
		param1.push([param2 - 2*ri]);
		param1.push([param2 + 1*ri]);
	}
	
	if ($(".selected_ship").hasClass('p05_s3')){
		param1.push([param2 - 1]);
		param1.push([param2 + 1]);
		param1.push([param2 + 2]);
		
		param3.push([param2 - 2]);
		param4.push([param2 + 3]);
	}
	
	if ($(".selected_ship").hasClass('p05_s4')){
		param1.push([param2 - 1*ri]);
		param1.push([param2 - 2*ri]);
		param1.push([param2 + 1*ri]);
	}
	
	
	
	/*---4-х палубный точка вниз--*/
	
	if ($(".selected_ship").hasClass('p06')){
		param1.push([param2 - 1]);
		param1.push([param2 + 1]);
		param1.push([param2 + 2]);
		param1.push([param2 + 1*ri + 2]);
		
		param3.push([param2 - 2]);
		param4.push([param2 + 3]);
	}	
	
	if ($(".selected_ship").hasClass('p06_s2')){
		param1.push([param2 - 1*ri]);
		param1.push([param2 + 1*ri]);
		param1.push([param2 + 2*ri]);
		param1.push([param2 + 2*ri - 1]);
		
		param3.push([param2 + 2*ri - 2]);
		param4.push([param2 + 2*ri + 1]);
	}
	
	if ($(".selected_ship").hasClass('p06_s3')){
		param1.push([param2 - 1]);
		param1.push([param2 + 1]);
		param1.push([param2 + 2]);
		param1.push([param2 - 1*ri - 1]);
		
		param3.push([param2 - 2]);
		param4.push([param2 + 3]);
	}
	
	if ($(".selected_ship").hasClass('p06_s4')){
		param1.push([param2 - 1*ri]);
		param1.push([param2 + 1*ri]);
		param1.push([param2 + 2*ri]);
		param1.push([param2 - 1*ri + 1]);
		
		param3.push([param2 + 2*ri - 1]);
		param4.push([param2 - 1*ri + 2]);
	}	
	
	
	
	/*---5-ти палубный--*/
	
	if ($(".selected_ship").hasClass('p07')){
		param1.push([param2 - 1]);
		param1.push([param2 + 1]);
		param1.push([param2 + 2]);
		param1.push([param2 + 3]);
		
		param3.push([param2 - 2]);
		param4.push([param2 + 4]);
	}
	
	if ($(".selected_ship").hasClass('p07_s2')){
		param1.push([param2 - 1*ri]);
		param1.push([param2 - 2*ri]);
		param1.push([param2 + 1*ri]);
		param1.push([param2 + 2*ri]);
	}
	
	if ($(".selected_ship").hasClass('p07_s3')){
		param1.push([param2 - 1]);
		param1.push([param2 + 1]);
		param1.push([param2 + 2]);
		param1.push([param2 + 3]);
		
		param3.push([param2 - 2]);
		param4.push([param2 + 4]);
	}
	
	if ($(".selected_ship").hasClass('p07_s4')){
		param1.push([param2 - 1*ri]);
		param1.push([param2 - 2*ri]);
		param1.push([param2 + 1*ri]);
		param1.push([param2 + 2*ri]);
	}
	
	
	/*---4-х палубный точка вверх--*/
	
	if ($(".selected_ship").hasClass('p08')){
		param1.push([param2 - 1]);
		param1.push([param2 + 1]);
		param1.push([param2 + 2]);
		param1.push([param2 - 1*ri + 2]);
		
		param3.push([param2 - 2]);
		param4.push([param2 + 3]);
	}	
	
	if ($(".selected_ship").hasClass('p08_s2')){
		param1.push([param2 - 1*ri]);
		param1.push([param2 + 1*ri]);
		param1.push([param2 + 2*ri]);
		param1.push([param2 + 2*ri + 1]);
		
		param3.push([param2 + 2*ri - 1]);
		param4.push([param2 + 2*ri + 2]);
	}
	
	if ($(".selected_ship").hasClass('p08_s3')){
		param1.push([param2 - 1]);
		param1.push([param2 + 1]);
		param1.push([param2 + 2]);
		param1.push([param2 + 1*ri - 1]);
		
		param3.push([param2 - 2]);
		param4.push([param2 + 3]);
	}
	
	if ($(".selected_ship").hasClass('p08_s4')){
		param1.push([param2 - 1*ri]);
		param1.push([param2 + 1*ri]);
		param1.push([param2 + 2*ri]);
		param1.push([param2 - 1*ri - 1]);
		
		param3.push([param2 - 1*ri - 2]);
		param4.push([param2 - 1*ri + 1]);
	}	
	
	
	/*---Z зигзаг тип2--*/
	if ($(".selected_ship").hasClass('p09')){
		param1.push([param2 + 1]);
		param1.push([param2 + 1*ri]);
		param1.push([param2 + 1*ri - 1]);
		
		param3.push([param2 + 1*ri - 2]);
		param4.push([param2 + 2]);
	}
	
	if ($(".selected_ship").hasClass('p09_s2')){
		param1.push([param2 - 1*ri]);
		param1.push([param2 + 1]);
		param1.push([param2 + 1*ri + 1]);
		
		param3.push([param2 - 1]);
		param4.push([param2 + 2]);
	}
	
	if ($(".selected_ship").hasClass('p09_s3')){
		param1.push([param2 + 1]);
		param1.push([param2 + 1*ri]);
		param1.push([param2 + 1*ri - 1]);
		
		param3.push([param2 + 1*ri - 2]);
		param4.push([param2 + 2]);
	}
	
	if ($(".selected_ship").hasClass('p09_s4')){
		param1.push([param2 - 1*ri]);
		param1.push([param2 + 1]);
		param1.push([param2 + 1*ri + 1]);
		
		param3.push([param2 - 1]);
		param4.push([param2 + 2]);
	}
	
	/*---3-х палубный , точка вниз--*/
	
	if ($(".selected_ship").hasClass('p10')){
		param1.push([param2 - 1]);
		param1.push([param2 - 2]);
		param1.push([param2 + 1*ri ]);
		
		param3.push([param2 - 3]);
		param4.push([param2 + 1]);
	}
	
	if ($(".selected_ship").hasClass('p10_s2')){
		param1.push([param2 - 1*ri]);
		param1.push([param2 - 2*ri]);
		param1.push([param2 - 1]);
		
		param3.push([param2 - 2]);
		param4.push([param2 + 1]);
	}
	
	if ($(".selected_ship").hasClass('p10_s3')){
		param1.push([param2 + 1]);
		param1.push([param2 - 1]);
		param1.push([param2 - 1*ri - 1]);
		
		param3.push([param2 - 2]);
		param4.push([param2 + 2]);
	}
	
	if ($(".selected_ship").hasClass('p10_s4')){
		param1.push([param2 - 1*ri]);
		param1.push([param2 + 1*ri]);
		param1.push([param2 - 1*ri + 1]);
		
		param3.push([param2 - 1]);
		param4.push([param2 - 1*ri + 2]);
	}
	
	/*---3-х палубный , точка вверх--*/
	
	if ($(".selected_ship").hasClass('p11')){
		param1.push([param2 - 1]);
		param1.push([param2 - 2]);
		param1.push([param2 - 1*ri ]);
		
		param3.push([param2 - 3]);
		param4.push([param2 + 1]);
	}
	
	if ($(".selected_ship").hasClass('p11_s2')){
		param1.push([param2 - 1*ri]);
		param1.push([param2 - 2*ri]);
		param1.push([param2 + 1]);
		
		param3.push([param2 - 1]);
		param4.push([param2 + 2]);
	}
	
	if ($(".selected_ship").hasClass('p11_s3')){
		param1.push([param2 + 1]);
		param1.push([param2 - 1]);
		param1.push([param2 + 1*ri - 1]);
		
		param3.push([param2 - 2]);
		param4.push([param2 + 2]);
	}
	
	if ($(".selected_ship").hasClass('p11_s4')){
		param1.push([param2 - 1*ri]);
		param1.push([param2 + 1*ri]);
		param1.push([param2 - 1*ri - 1]);
		
		param3.push([param2 - 1*ri - 2]);
		param4.push([param2 + 1]);
	}
	
	
	/*---2 лево и 2 право--*/
	
	if ($(".selected_ship").hasClass('p12')){
		param1.push([param2 + 1*ri]);
		param1.push([param2 + 2*ri]);
		param1.push([param2 - 1]);
		param1.push([param2 - 2]);
		
		param3.push([param2 - 3]);
		param4.push([param2 + 1]);
	}
	
	if ($(".selected_ship").hasClass('p12_s2')){
		param1.push([param2 - 1*ri]);
		param1.push([param2 - 2*ri]);
		param1.push([param2 - 1]);
		param1.push([param2 - 2]);
		
		param3.push([param2 - 3]);
		param4.push([param2 + 1]);
	}
	
	if ($(".selected_ship").hasClass('p12_s3')){
		param1.push([param2 - 1*ri]);
		param1.push([param2 - 2*ri]);
		param1.push([param2 + 1]);
		param1.push([param2 + 2]);
		
		param3.push([param2 - 1]);
		param4.push([param2 + 3]);
	}
	
	if ($(".selected_ship").hasClass('p12_s4')){
		param1.push([param2 + 1*ri]);
		param1.push([param2 + 2*ri]);
		param1.push([param2 + 1]);
		param1.push([param2 + 2]);
		
		param3.push([param2 - 1]);
		param4.push([param2 + 3]);
	}
	
	/*---3-х и одна сверху--*/
	
	if ($(".selected_ship").hasClass('p13')){
		param1.push([param2 - 1*ri]);
		param1.push([param2 - 1]);
		param1.push([param2 + 1]);
		
		param3.push([param2 - 2]);
		param4.push([param2 + 2]);
	}
	
	if ($(".selected_ship").hasClass('p13_s2')){
		param1.push([param2 - 1*ri]);
		param1.push([param2 + 1*ri]);
		param1.push([param2 + 1]);
		
		param3.push([param2 - 1]);
		param4.push([param2 + 2]);
	}
	
	if ($(".selected_ship").hasClass('p13_s3')){
		param1.push([param2 + 1*ri]);
		param1.push([param2 - 1]);
		param1.push([param2 + 1]);
		
		param3.push([param2 - 2]);
		param4.push([param2 + 2]);
	}
	
	if ($(".selected_ship").hasClass('p13_s4')){
		param1.push([param2 - 1*ri]);
		param1.push([param2 + 1*ri]);
		param1.push([param2 - 1]);
		
		param3.push([param2 - 2]);
		param4.push([param2 + 1]);
	}
	
	/*---квадрат--*/
	
	if ($(".selected_ship").hasClass('p14')){
		param1.push([param2 - 1]);
		param1.push([param2 + 1*ri]);
		param1.push([param2 + 1*ri - 1]);
		
		param3.push([param2 - 2]);
		param4.push([param2 + 1]);
	}
	
	if ($(".selected_ship").hasClass('p14_s2')){
		param1.push([param2 - 1]);
		param1.push([param2 + 1*ri]);
		param1.push([param2 + 1*ri - 1]);
		
		param3.push([param2 - 2]);
		param4.push([param2 + 1]);
	}
	
	if ($(".selected_ship").hasClass('p14_s3')){
		param1.push([param2 - 1]);
		param1.push([param2 + 1*ri]);
		param1.push([param2 + 1*ri - 1]);
		
		param3.push([param2 - 2]);
		param4.push([param2 + 1]);
	}
	
	if ($(".selected_ship").hasClass('p14_s4')){
		param1.push([param2 - 1]);
		param1.push([param2 + 1*ri]);
		param1.push([param2 + 1*ri - 1]);
		
		param3.push([param2 - 2]);
		param4.push([param2 + 1]);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*if ($(".selected_ship").hasClass('p03')){
		param1.push([param2 + 1*ri]);
		param1.push([param2 - 1]);
	}*/

	
}