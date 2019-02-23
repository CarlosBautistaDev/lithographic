var items = $('.sub-menu .menu-item');
$.each(items, function(){
	var self   = $(this);
	var m      = self.data('menu');
	var menu   = $('.menu .menu-item[data-menu="'+m+'"]');
	var p      = menu.offset().top;
	var offset = self.offset().top;
	offset     = offset - p - 20;
	self.attr('data-position',offset);
});
$('.menu .menu-item').hover(function(){
	
	var m = $(this).data('menu');
	var item = $('.sub-menu .menu-item[data-menu="'+m+'"]');
	var offset = item.data('position');
	TweenMax.to('.sub-menu',0.3,{
		scrollTop: offset,
		ease: Power2.easeOut
	})

},function(){
	// Not hovering anymore :(
});

$('.profile').click(function(event){
	
})