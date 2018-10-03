import React from 'react'

class Measure extends React.Component {
    state = {
        height: window.innerHeight,
        width: window.innerWidth
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    render() {
        const renderProps = {
            height: this.state.height,
            width: this.state.width
        }
        
        const { children } = this.props

        return typeof children === 'function'
            ? children(renderProps)
            : children
    }
}

export default Measure