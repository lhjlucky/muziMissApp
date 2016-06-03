var indexTpl = require('../tpl/index.string');

SPA.defineView('index', {
  html: indexTpl,
  plugins: ['delegated'],
  bindActions: {
  	'switch.swiper':function(e){
//		console.log(0);
			$(e.el).addClass('active').siblings().removeClass('active');
			this.indexSwiper.slideTo($(e.el).index()+1);
  	},
    'exit': function () {
      this.hide();
    }
  },
  //初始化视图的属性和方法
  bindEvents:{
  	'beforeShow':function(){
  		 this.indexSwiper=new Swiper('#index-swiper',{
  			loop:true,
  			onSlideChangeStart:function(swiper){
  				$('#headerIndex span').eq(swiper.activeIndex-1).addClass('active').siblings().removeClass('active');
  			}
  		});
  	}
  }
});
