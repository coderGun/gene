var app=app||{};

(function () {
    'use strict';

    app.SelectedItem=React.createClass({
        render: function () {
            return (
                <ul>
                    <li>
                        {this.props.store.name}
                        <a className="close" data-store={this.props.store.id} onClick={this.props.removeSelectedStore}>x</a>
                    </li>
                </ul>
            );
        }
    });
})();