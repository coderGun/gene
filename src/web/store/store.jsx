//store
var app=app||{};

(function(){
    'use strict';
    //每个子组件都是写到app下面的.
    var StoreContent=app.StoreContent;
    var SelectedItem=app.SelectedItem;

    var StoreApp=React.createClass({
        getInitialState: function () {
          return{

          }
        },
        //显示,隐藏门店选择模块
        handleClick: function () {

        },
        removeSelectedStore: function (event) {
            var $this=event.target;
            //var storeId=$this.getAttribute('data-store');//取不到值...?
            //console.log(storeId);
            var parent=$this.parentElement.parentElement;
            parent.removeChild($this.parentElement);
            //同时设置弹出框对应选中项

        },
        render: function () {
            //生成选中的下拉列表  测试数据
            var stores=[
                {'id':"1","name":"鸭脑壳"},
                {'id':"2","name":"兔脑壳"},
                {'id':"3","name":"溜肥肠"},
                {'id':"4","name":"凌汤圆"},
                {'id':"5","name":"夫妻肺片"}
            ];
            var selectedItems=stores.map(function (store) {
                return (
                    <li>{store.name}<a className="close" data-store={store.id} onClick={this.removeSelectedStore}>x</a></li>
                    //报错...?
                    //<SelectedItem
                    //    store={store}
                    //    onClick={this.removeSelectedStore.bind(this,store)}
                    ///>
                )
            },this);



            return (
                <div>
                    <button className="btn btn-primary btn-select-store" onClick={this.handleClick}>
                        点击选择门店
                        <span className="glyphicon glyphicon-menu-down glyphicon-menu-up"></span>
                    </button>
                    <div className="selected-store-list">
                        <ul>
                            {selectedItems}
                        </ul>
                    </div>
                    <div ref="storeBox" className="container-box">

                    </div>
                </div>
            );
        }
    });

    //加载组件到页面
    function render(){
        React.render(
            <StoreApp></StoreApp>,document.getElementsByClassName('selectStore')[0]
        );
    };

    render();
})();


