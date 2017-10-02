// Code YouTubeDebugger Component Here

import React from 'react'

export default class YouTubeDebugger extends React.Component {
  constructor(){
    super()

    this.state = {
      errors: [],
      user: null,
      settings:
        { bitrate: 8,
          video:
            { resolution: '1080p' }
        }
    }

    this.increaseBitrate = this.increaseBitrate.bind(this)
    this.updateResolution = this.updateResolution.bind(this)
  }

  increaseBitrate(){
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    })
  }

  updateResolution(){
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render(){
    return (
      <div>
        <button className='bitrate' onClick={this.increaseBitrate}></button>
        <button className='resolution' onClick={this.updateResolution}></button>
      </div>
    )
  }
}

module.exports = YouTubeDebugger
