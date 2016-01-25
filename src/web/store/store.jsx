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
            /*左侧数据 start*/
            var selectedStores=[
                {'id':"1","name":"鸭脑壳"},
                {'id':"2","name":"兔脑壳"},
                {'id':"3","name":"溜肥肠"},
                {'id':"4","name":"凌汤圆"},
                {'id':"5","name":"夫妻肺片"}
            ];
            /*左侧数据 end*/
            var selectedItems=selectedStores.map(function (store) {
                return (
                    //<li>{store.name}<a className="close" data-store={store.id} onClick={this.removeSelectedStore}>x</a></li>
                    //报错...?
                    <SelectedItem
                        store={store}
                        onRemove={this.removeSelectedStore}
                    />
                )
            },this);

            //右侧数据
            /*测试数据 begin*/
            var storeData = [
                {"id": "1", "spell": "weiwei", "provinceId": "1", "cityId": "1", "areaId": "1", "name": "伟伟鸭脑壳"},
                {"id": "2", "spell": "shuang", "provinceId": "1", "cityId": "1", "areaId": "2", "name": "双流鸭头"},
                {"id": "3", "spell": "fu", "provinceId": "1", "cityId": "2", "areaId": "3", "name": "涪城烤鸡"},
                {"id": "4", "spell": "de", "provinceId": "1", "cityId": "3", "areaId": "4", "name": "德阳肥肠粉"},
                {"id": "5", "spell": "xiang", "provinceId": "2", "cityId": "4", "areaId": "5", "name": "乡坝头火锅"},
                {"id": "6", "spell": "diao", "provinceId": "2", "cityId": "5", "areaId": "6", "name": "雕爷牛腩"},
                {"id": "1", "spell": "da", "provinceId": "1", "cityId": "1", "areaId": "1", "name": "大伟伟鸭脑壳2"},
                {"id": "2", "spell": "shuang", "provinceId": "1", "cityId": "1", "areaId": "2", "name": "双流鸭头"},
                {"id": "3", "spell": "fu", "provinceId": "1", "cityId": "2", "areaId": "3", "name": "涪城烤鸡"},
                {"id": "4", "spell": "de", "provinceId": "1", "cityId": "3", "areaId": "4", "name": "德阳肥肠粉"},
                {"id": "5", "spell": "xiang", "provinceId": "2", "cityId": "4", "areaId": "5", "name": "乡坝头火锅"},
                {"id": "6", "spell": "diao", "provinceId": "2", "cityId": "5", "areaId": "6", "name": "雕爷牛腩"},
                {"id": "7", "spell": "yu", "provinceId": "3", "cityId": "6", "areaId": "7", "name": "渝中销魂掌2"}
            ];
            //注意城市的层级关系;
            var provinces = [
                {"id": "1", "name": "四川"},
                {"id": "2", "name": "山西"},
                {"id": "3", "name": "重庆"}
            ];
            var citys = [
                {"id": "1", "provinceId": "1", "name": "成都市"},
                {"id": "2", "provinceId": "1", "name": "绵阳市"},
                {"id": "3", "provinceId": "1", "name": "德阳市"},
                {"id": "4", "provinceId": "2", "name": "太原市"},
                {"id": "5", "provinceId": "2", "name": "晋城市"},
                {"id": "6", "provinceId": "3", "name": "重庆市"}
            ];
            var areas = [
                {"id": "1", "provinceId": "1", "cityId": "1", "name": "高新区"},
                {"id": "2", "provinceId": "1", "cityId": "1", "name": "武侯区"},
                {"id": "3", "provinceId": "1", "cityId": "2", "name": "涪城区"},
                {"id": "4", "provinceId": "1", "cityId": "3", "name": "旌阳区"},
                {"id": "5", "provinceId": "2", "cityId": "4", "name": "尖草坪区"},
                {"id": "6", "provinceId": "2", "cityId": "5", "name": "金匠区"},
                {"id": "7", "provinceId": "3", "cityId": "6", "name": "渝中区"}
            ];
            /*测试数据 end*/

            return (
                <div>
                    <button className="btn btn-primary btn-select-store" onClick={this.handleClick}>
                        点击选择门店
                        <span className="glyphicon glyphicon-menu-down glyphicon-menu-up"></span>
                    </button>
                    <div className="selected-store-list">
                        <ul class="list-inline">
                            {selectedItems}
                        </ul>
                    </div>
                    <div ref="storeBox" className="container-box">
                        <StoreContent
                            storeData={storeData}
                            provinces={provinces}
                            citys={citys}
                            areas={areas}
                        />
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


