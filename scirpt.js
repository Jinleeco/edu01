// 검색창 여닫기
_headerWrap.find('.viewSearchBtn').on('click', function(e){
    var _this = _(this);
    e.preventDefault();
    if(_this.hasClass('on') === true){
        _this.removeClass('on');
        _headerWrap.find('.searchArea_layer').removeClass('on');			
    } else {
        _this.addClass('on');
        _headerWrap.find('.searchArea_layer').addClass('on');
        jQuery( '.search_top .search_this' ).appendTo( '.search_scroll' );
    }
});

jQuery('.sch_close').on('click', function(e){
    jQuery('.searchArea_layer, .searchArea_layer .searchArea').removeClass('on');		
});

/* 검색어 기본값 처리
var initInputOpts = {
    val : '검색어를 입력하세요. ex) 로퍼, 스니커즈',
    target : _headerWrap.find('.searchArea .MS_search_word'),
    valPosition : 'placeholder'
};
if(window.customClassList){// ie 하위 버전을 위한 값.	
    initInputOpts.valPosition = 'value';
}
PHPS.initInputValue(initInputOpts);
*/


jQuery( '.MS_search_word' ).attr( 'placeholder', '검색어를 입력하세요. ex) 로퍼, 플랫, 펌프스' ); //MS_search_word 클래스명을 넣는다.