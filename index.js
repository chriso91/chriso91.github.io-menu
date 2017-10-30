$(document).ready(function(){


	document.getElementById('calctext').style.display = 'none';
	document.getElementById('weathertext').style.display='none';
	document.getElementById('pomodorotext').style.display='none';
	document.getElementById('wikitext').style.display='none';
	document.getElementById('quotetext').style.display='none';
	document.getElementById('tictext').style.display='none';

	$('#calcdiv').hover(function(){
		$('#calctext').show();
		$('#calc').width('270px');
		$('#calc').fadeTo(300, 0.1);
	},function(){
		$('#calctext').hide();
		$('#calc').width('250px');
		$('#calc').fadeTo(300, 1);
	});

	$('#weatherdiv').hover(function(){
		$('#weathertext').show();
		$('#weather').width('270px');
		$("#weather").fadeTo(300, 0.1);
	},function(){
		$('#weathertext').hide();
		$('#weather').width('250px');
		$("#weather").fadeTo(300, 1);
	});

	$('#pomodorodiv').hover(function(){
		$('#pomodorotext').show();
		$('#pomodoro').width('270px');
		$("#pomodoro").fadeTo(300, 0.1);
	},function(){
		$('#pomodorotext').hide();
		$('#pomodoro').width('250px');
		$("#pomodoro").fadeTo(300, 1);
	});

	$('#wikidiv').hover(function(){
		$('#wikitext').show();
		$('#wiki').width('270px');
		$("#wiki").fadeTo(300, 0.1);
	},function(){
		$('#wikitext').hide();
		$('#wiki').width('250px');
		$("#wiki").fadeTo(300, 1);
	});

	$('#quotediv').hover(function(){
		$('#quotetext').show();
		$('#quote').width('270px');
		$("#quote").fadeTo(300, 0.1);
	},function(){
		$('#quotetext').hide();
		$('#quote').width('250px');
		$("#quote").fadeTo(300, 1);
	});

	$('#ticdiv').hover(function(){
		$('#tictext').show();
		$('#tic').width('270px');
		$("#tic").fadeTo(300, 0.1);
	},function(){
		$('#tictext').hide();
		$('#tic').width('250px');
		$("#tic").fadeTo(300, 1);
	});
})