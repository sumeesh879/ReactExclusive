import React from 'react';
import PropTypes from 'prop-types';

let styles = {
    content: {
        textAlign: 'center',
        fontSize: '35px'
    }
}

class Loading extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.text
        }
    }

    componentDidMount() {
        let stopper = this.props.text + '...'
        this.interval = window.setInterval(() => {
            if(this.state.text === stopper) {
                this.setState({
                    text: this.props.text
                })
            } else {
                this.setState((prevState) => ({
                    text: prevState.text + '.'
                }))
            }
        }, 300)
    }

    componentWillUnmount() {
        this.interval && window.clearInterval(this.interval);
        this.interval = false;
    }

    render() {
        return (
            <p style={styles.content}>
                {this.state.text}
            </p>
        )
    }
}

Loading.defaultProps = {
    text: 'Loading'
}

Loading.propTypes = {
    text: PropTypes.string.isRequired
}

module.exports = Loading;