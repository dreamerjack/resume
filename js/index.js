// JavaScript Document

$(function(){
	
	
	var index=0;
	
	
$('.list-group-bg2').click(function(){
	
	index=$(this).index()
	
	
$(this).addClass('list-group-item-click').siblings().removeClass('list-group-item-click')

$('.second-one').eq(index).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut()	
	
	
	})	
	
	
	
	
$('.play-left-one').click(function(){
	
index--;
if(index<0)index=4;
$('.list-group-bg2').eq(index).addClass('list-group-item-click').siblings().removeClass('list-group-item-click')
$('.second-one').eq(index).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut()	
	
	})	
	
	
	
	
	$('.play-right').click(function(){
	
index++;
index%=5;

$('.list-group-bg2').eq(index).addClass('list-group-item-click').siblings().removeClass('list-group-item-click')
$('.second-one').eq(index).stop(true,true).fadeIn().siblings().stop(true,true).fadeOut()	
	
	})	
	
	
	
	//点击图片放大开始
	
	
	$('.second-7').click(function(){
		index=$(this).index()
		
	$('.bigimg3').eq(index).show().siblings().hide()	
	$('.second').addClass('second-click')	
		
		})
		
	
	
	
	
	$('.second-5').click(function(){
		index=$(this).index()
		
	$('.bigimg1').eq(index).show().siblings().hide()	
	$('.second').addClass('second-click')	
		
		})
		
		
		
		$('.second-6').click(function(){
		index=$(this).index()
		
	$('.bigimg2').eq(index).show().siblings().hide()	
	$('.second').addClass('second-click')	
		
		})
		
		
		
	
	$('.bg').click(function(){
		
	$(this).parent('.bigimg1,.bigimg3').hide()
	$('.second').removeClass('second-click')	
	})
	
	
	$('.second-4,.second-top-last,.c').click(function(){
	$('.bigimg3').hide()
	$('.bigimg1').hide()
	$('.second').removeClass('second-click')
		
		})
	
	
	
	
		
	
	
	
	
	
	//点击图片放大结束
	
	
	
	
	
	
	
	
	})