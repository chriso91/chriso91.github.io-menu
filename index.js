$(document).ready(function(){


	document.getElementById('calctext').style.display = 'none';
	document.getElementById('weathertext').style.display='none';
	document.getElementById('pomodorotext').style.display='none';
	document.getElementById('wikitext').style.display='none';
	document.getElementById('quotetext').style.display='none';
	document.getElementById('tictext').style.display='none';

	$('#calcdiv').hover(function(){
		$('#calctext').show();
		$('#calc').width('21vw');
		$('#calc').fadeTo(300, 0.1);
	},function(){
		$('#calctext').hide();
		$('#calc').width('20vw');
		$('#calc').fadeTo(300, 1);
	});

	$('#weatherdiv').hover(function(){
		$('#weathertext').show();
		$('#weather').width('21vw');
		$("#weather").fadeTo(300, 0.1);
	},function(){
		$('#weathertext').hide();
		$('#weather').width('20vw');
		$("#weather").fadeTo(300, 1);
	});

	$('#pomodorodiv').hover(function(){
		$('#pomodorotext').show();
		$('#pomodoro').width('21vw');
		$("#pomodoro").fadeTo(300, 0.1);
	},function(){
		$('#pomodorotext').hide();
		$('#pomodoro').width('20vw');
		$("#pomodoro").fadeTo(300, 1);
	});

	$('#wikidiv').hover(function(){
		$('#wikitext').show();
		$('#wiki').width('21vw');
		$("#wiki").fadeTo(300, 0.1);
	},function(){
		$('#wikitext').hide();
		$('#wiki').width('20vw');
		$("#wiki").fadeTo(300, 1);
	});

	$('#quotediv').hover(function(){
		$('#quotetext').show();
		$('#quote').width('21vw');
		$("#quote").fadeTo(300, 0.1);
	},function(){
		$('#quotetext').hide();
		$('#quote').width('20vw');
		$("#quote").fadeTo(300, 1);
	});

	$('#ticdiv').hover(function(){
		$('#tictext').show();
		$('#tic').width('21vw');
		$("#tic").fadeTo(300, 0.1);
	},function(){
		$('#tictext').hide();
		$('#tic').width('20vw');
		$("#tic").fadeTo(300, 1);
	});
})