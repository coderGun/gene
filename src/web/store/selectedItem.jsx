//被选中的门店
var app = app || {};

(function () {
    'use strict';

    app.SelectedItem = React.createClass({
        render: function () {
            return (
                <li>
                    {this.props.store.name}
                    <a className="close" onClick={this.props.onRemove}>x</a>
                </li>
            );
        }
    });
})();