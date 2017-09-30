import React, { Component as ReactComponent } from 'react'

export default (OriginalComponent) => class DecoratedComponent extends ReactComponent {
    state = {
        openItemId: null
    }

    toggleItem = (openItemId) => {
        if (this.memoized.get(openItemId)) return this.memoized.get(openItemId)
        const func = (ev) => {
            this.setState({
                openItemId: this.state.openItemId === openItemId ? null : openItemId
            }, console.log(this.state.openItemId))
        }
        this.memoized.set(openItemId, func)

        return func
    }

    memoized = new Map()

    render() {
        return <OriginalComponent {...this.props } openItemId={this.state.openItemId} toggleItem={this.toggleItem} />
    }
}