//选择门店主体
var app = app || {};

(function () {
    'use strict';
    app.StoreContent = React.createClass({





        render: function () {
            return (
                <div class="container-box">
                    <div class="select-box">
                        <div class="select-store-province">
                            <div class="form-group">
                                <input id="storeProvince" name="province" class="form-control" placeholder="省" readonly/>
                                <span class="glyphicon glyphicon-menu-down"></span>
                            </div>
                            <ul id="storeProvinceList"></ul>
                        </div>
                        <div class="select-store-city">
                            <div class="form-group">
                                <input id="storeCity" name="city" class="form-control" placeholder="市" readonly/>
                                <span class="glyphicon glyphicon-menu-down"></span>
                            </div>
                            <ul id="storeCityList"></ul>
                        </div>
                        <div class="select-store-area">
                            <div class="form-group">
                                <input id="storeArea" name="area" class="form-control" placeholder="区/县" readonly/>
                                <span class="glyphicon glyphicon-menu-down"></span>
                            </div>
                            <ul id="storeAreaList"></ul>
                        </div>
                        <a class="close" href="javascript:void(0);">x</a>
                        <input class="form-control search-keyword" type="search" placeholder="请输入关键字"/>
                    </div>
                    <div class="select-content ">
                        <ul class="list-inline "></ul>
                    </div>
                    <div class="select-operation">
                        <label class="checkbox checkbox-all"> <span></span> <input type="checkbox"/>全选</label>
                        <button class="btn pull-right btn-sure-select-store">确定</button>
                    </div>
                </div>
            )
        }

    });
})();