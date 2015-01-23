var React = require('react');

var Dictator = React.createClass({

    render: function() {
        return (
            <div>
                <h2>{this.props.dictator.identity.displayName}</h2>

                <img src={this.getImageSrc()} />

                <div dangerouslySetInnerHTML={{__html: this.props.dictator.synopsis}} />

            </div>
        );
    },

    getImageSrc: function() {
        return this.props.dictator.imageUrl.replace('{{version}}', 'card::x:100');
    }

});

module.exports = Dictator;