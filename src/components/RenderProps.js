import React from 'react';
import { Switch } from './Switch';

class Toggle extends React.Component {
    state = { on: false };
    toggle = () => {
        this.setState(
            ({on}) => ({on: !on}),
            () => this.props.onToggle(this.state.on)
        )
    }
    getStateAndHelpers() {
        return {
            on: this.state.on,
            toggle: this.toggle
        }
    }
    render() {
        return this.props.children(this.getStateAndHelpers())
    }
}


function Usage({
    onToggle = (...args) => console.log('onToggle', ...args),
}) {
    return (
        <Toggle onToggle={onToggle}>
            {({on, toggle}) => (
                <div>
                    {on ? 'The button is on' : 'The button in off'}
                    <Switch on={on} onClick={toggle} />
                    <hr/>
                    <button aria-label="custom-button" onClick={toggle}>
                        {on ? 'on' : 'off'}
                    </button>
                </div>
            )}
        </Toggle>
    )
}

export default Usage;