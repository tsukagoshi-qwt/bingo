$(function(){
	var aleadyNumArr = Array();

	function makeRandomNum(){
		return Math.round(Math.random()*100 % 75);
	}

	var cnt = 0;
	var maxCnt = 50;
	var audio = new Audio();
	audio.src = "audio/loading_2.mp3";
	audio.loop = true;

	var displaySound = new Audio();
	displaySound.src = "audio/pappakapaaaan.mp3";

	var slotCnt = 0;

	//loadの処理
	function loadingAnimation(){

		var tmpNum = makeRandomNum();
		$('#js-number-display').html(tmpNum);
		cnt++;
		if (cnt >= maxCnt){
			audio.pause();
			audio.currentTime = 0;
			displayNum();
		} else {
			setTimeout( function() {
				loadingAnimation();
			}, 100 );
		}
	}

	//数宇を決定し表示
	function displayNum()
	{
		do {
			var num = makeRandomNum();
		} while (aleadyNumArr.indexOf(num) !== -1);
		$('#js-number-display').css('opacity', 0);
		$('#js-number-display').html(num);
		//displaySound.src = getSoundEffect();
		displaySound.play();
		$('#js-number-display').fadeTo(2000, 1, displayAlreadyNum(num));
	}

/*
	//効果音をランダムに変える処理
	function getSoundEffect()
	{
		if(slotCnt <= 5){
			return 'audio/pappakapaaaan.mp3';
		}

		var number = makeRandomNum();
		if(number < 20) {
			return 'audio/pappakapaaaan.mp3'
		} else if (number < 40) {
			return 'audio/boyon1.mp3';
		} else if (number < 60) {
			return 'audio/scream-woman1.mp3';
		} else if (number < 80) {
			return 'audio/scream1.mp3';
		} else {
			return 'audio/chin.mp3';
		}
	}
*/

	//既出の数字を表示させておく
	function displayAlreadyNum(num){
		aleadyNumArr.push(num);
		$('#js-already-num-block').after("<div class='already_num'>"+num+"</div>");
	}

	$('#js-roulette-btn').on('click', function(){
		cnt = 0;
		audio.play();
		loadingAnimation();
		slotCnt++;
	});

	$('.js-maxCnt-change').on('click', function(){
		if (maxCnt == 50){
			maxCnt = 100;
		} else {
			maxCnt = 50;
		}
	});
});