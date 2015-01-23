var React = require('react');
var Dictators = require('./Dictators');
var DictatorFilter = require('./DictatorFilter');
var Immutable = require('immutable');
var $ = require('jquery');

var DictatorRanking = React.createClass({

    getInitialState: function() {
        return {
            'dictators': Immutable.List([]),
            'filter': ''
        };
    },

    componentDidMount: function() {
        
        var self = this;

        $.get('http://diktaattoriporssi.com/api/dictator').then(function(dictators) {

            self.setState({
                'dictators': Immutable.List(dictators),
            })
        });

    },

    render: function() {
        return (
            <div>
                <DictatorFilter onChange={this.onChange} />
                <Dictators dictators={this.getTheDictators()} />
            </div>
        );
    },

    getTheDictators: function() {

        var self = this;
        return this.state.dictators.filter(function(dictator) {
            return dictator.identity.displayName.indexOf(self.state.filter) !== -1
        });

    },

    onChange: function(evt) {
        
        this.setState({
            'filter': evt.target.value
        });
    }

});

module.exports = DictatorRanking;