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


    var Search=function(){
        var search=function(){
            var name=$('#keyword').val();
            var disease=$('#disease').val();
            if(disease==0){
                disease='';
            }
            if(!name){
                blur();
            }
            var condition={
                name:name,
                disease:disease
            };

            //设置查询按钮
            $('#search').attr('href','/searchGene?name='+name);
            //$.post('/searchName',condition,function(data){

                var data={
                    result:{
                        status:'OK',
                        datas:[
                            'asbs','sdgfsd','sdfa','sdfgs'
                        ]
                    }
                }

                if(data.result &&data.result.status=='OK'){
                    var items=data.result.datas;
                    var length=items.length;
                    var lis=[];
                    if(length==0){
                        $('#suglist').html('<li>没有你要查找的基因</li>');
                        $('#suggestion').removeClass('hide');
                        return false;
                    }
                    for(var i=0;i<length;i++){
                        var item=items[i];
                        var li= '<li> <a href="/searchGene?name='+item+'">'+item+'</a></li>';
                        lis.push(li);
                    }
                    $('#suglist').html(lis.join(''));
                    $('#suggestion').removeClass('hide');
                }
            //});
        };

        var blur=function(){
            var keyword=$('#keyword').val();
            if(!keyword){
                $('#suggestion').addClass('hide');
            }
            return false;
        };

        //主函数初始化
        return {
            init:function(){
                $('#keyword').on('keyup',search);
                $('#keyword').on('blur',blur);
            }
        };

    }();
    Search.init();
    //跳转到list页面
    //$('#keyword').on('blur', function () {
    //    window.location.href='list.html?keyword'+$(this).val();
    //});
});

