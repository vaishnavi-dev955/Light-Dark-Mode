// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isLightMode: false}

  onLightMode = () => {
    this.setState(prevState => ({isLightMode: !prevState.isLightMode}))
  }

  render() {
    const {isLightMode} = this.state
    const backgroundClass = isLightMode
      ? 'background-container1'
      : 'background-container'
    const headingClass = isLightMode ? 'heading1' : 'heading'
    const ButtonClass = isLightMode ? 'button1' : 'button'
    const ButtonText = isLightMode ? 'Dark Mode' : 'Light Mode'

    return (
      <div className={backgroundClass}>
        <h1 className={headingClass}>Click to Change Mode</h1>
        <button
          className={ButtonClass}
          type="button"
          onClick={this.onLightMode}
        >
          {ButtonText}
        </button>
      </div>
    )
  }
}
export default LightDarkMode
