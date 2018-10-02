import React from 'react';

class Open extends React.Component {
    state = {
        status: this.props.startOpen ? 'open' : 'closed'
    }

    close = () => {
        this.setState({ status: 'closed' })
    }
    open = () => {
        this.setState({ status: 'open' })
    }
    toggle = () => {
        this.setState(prevState => ({
            status: prevState.status === 'closed' ? 'open' : 'closed'
        }))
    }

    render() {
        const { status } = this.state
        const renderProps = {
            isClosed: status === 'closed',
            isOpen: status !== 'closed',
            status
        }

        const { children } = this.props

        return typeof children === 'function'
            ? children(renderProps)
            : children
    }
}

export default Open