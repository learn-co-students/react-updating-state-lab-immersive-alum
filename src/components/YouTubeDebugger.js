import React, {Component} from 'react'

class YouTubeDebugger extends Component {

    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
              bitrate: 8,
              video: {
                resolution: '1080p'
              }
            }
          }
    }

    handleRes = () => {
        this.setState({settings: {...this.state.settings, 
            video: {...this.state.settings.video, resolution: '720p'}}})
    }

    handleBit = () => {
        this.setState({settings: 
            {...this.state.settings,
            bitrate: 12}})
    }


    render(){
        return (
        <div>
            <button className="bitrate" onClick={this.handleBit}>{this.state.settings.bitrate}</button>
            <button className="resolution" onClick={this.handleRes}>{this.state.settings.video.resolution}</button>
        </div>
        )
    }
}

export default YouTubeDebugger

// Create a button with the class 'bitrate'. Clicking this button 
// changes the settings.bitrate state property to 12.

// Create a button with the class 'resolution'. Clicking this button 
// changes the settings.video.resolution state property to '720p'.