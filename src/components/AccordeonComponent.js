import React, { Component } from 'react'

class AccordeonComponent extends Component {
    state = {
        openItemId: null
    }

    render() {
        super.render();
    }

    toggleItem = (openItemId) => {
        if (this.memoized.get(openItemId)) return this.memoized.get(openItemId)
        const func = (ev) => {
            this.setState({
                openItemId: this.state.openItemId === openItemId ? null : openItemId
            })
        }

        this.memoized.set(openItemId, func)

        return func
    }

    memoized = new Map()
}

export default AccordeonComponent