var React = require('react');
var Dictator = require('./Dictator');
var Immutable = require('immutable');
var $ = require('jquery');

var Dictators = React.createClass({

    render: function() {

        return (
            <div>
                {this.props.dictators.map(function(dictator) {
                    return <Dictator dictator={dictator} />
                }).toArray()}
            </div>
        );
    }

});

module.exports = Dictators;