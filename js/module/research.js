/**
 * Created by reny on 16/3/6.
 */
/*螺旋效果 start*/
(function (window, document) {
    var w = window.innerWidth;
    var cnt = Math.ceil(w / 12 * 2);
    var c = document.getElementById('helix');
    var divs = document.createDocumentFragment();
    var i = 0;
    var div;
    var delay;
    var animDelay = ('animationDelay' in document.documentElement.style) ? 'animationDelay' : 'webkitAnimationDelay';

    for (i; i < cnt; ++i) {
        div = document.createElement('div');
        delay = (i - cnt) * 0.1;
        div.style[animDelay] = delay + 's,' + delay / 2 + 's';
        divs.appendChild(div);
    }

    c.appendChild(divs);

})(window, document);
/*螺旋效果 end*/

// 页面初始化
$(function () {
    var $cancer=$('#cancer');
    var $tumour=$('#tumour');

    var cancer=0;
    var cancerTime=setInterval(function () {
        if(cancer<39){
            cancer++;
            $cancer.html(cancer);
        }else{
            clearInterval(cancerTime);
        }
    },50);

    var tumour=0;
    var tumourTime=setInterval(function () {
        if(tumour<18000){
            tumour=tumour+1000;
            $tumour.html(tumour);
        }else{
            clearInterval(tumourTime);
        }
    },100);

    //跳转到list页面
    $('#keyword').on('blur', function () {
        window.location.href='list.html?keyword'+$(this).val();
    });



});
