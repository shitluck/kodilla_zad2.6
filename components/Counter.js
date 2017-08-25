var Counter = React.createClass({
    getDefaultProps: function() {
        console.log('receiving props');
    },
    getInitialState: function() {
        return {
            counter: 0
        };
    },
    componentWillMount() {
        console.log('componentWillMount - before render');
    },
    componentDidMount() {
        console.log('componentDidMount - after render');
    },
    componentWillReceiveProps() {
        console.log('componentWillReceiveProps - props receiving and update');
    },
    shouldComponentUpdate() {
        console.log('shouldComponentUpdate - true or false');
        return true;
    },
    componentWillUpdate() {
        console.log('componentWillUpdate - shouldComponentUpdate get true');
    },
    componentDidUpdate() {
        console.log('componentDidUpdate - DOM changes');
    },
    componentWillUnmount() {
        console.log('componentWillUnmount - quiting Counters');
    },
    
    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('span', {}, 'Counter ' + this.state.counter),
            React.createElement('button', {type: 'submit', onClick: this.increment}, 'Add'),
            React.createElement('button', {type: 'submit', onClick: this.decrement}, 'Substract'),
        );
    }
});