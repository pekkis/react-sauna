var React = require('react');
var Dictators = require('./Dictators');
var DictatorFilter = require('./DictatorFilter');
var Immutable = require('immutable');
var $ = require('jquery');

var DictatorRanking = React.createClass({

    getInitialState: function() {
        return {
            'dictators': Immutable.List([])
        };
    },

    componentDidMount: function() {
        
        var self = this;

        $.get('http://diktaattoriporssi.com/api/dictator').then(function(dictators) {

            self.setState({
                'dictators': Immutable.List(dictators)
            })
        });

    },

    render: function() {
        return (
            <div>
                <DictatorFilter onChange={this.onChange} />
                <Dictators dictators={this.state.dictators} />
            </div>
        );
    },

    onChange: function(evt) {
        console.log(evt);

    }

});

module.exports = DictatorRanking;