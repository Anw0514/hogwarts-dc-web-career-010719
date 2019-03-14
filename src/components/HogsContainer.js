import React from 'react'
import Hog from './Hog'

class HogsContainer extends React.Component {
    render() {
        return (
            <div className="ui grid conatiner">
            {
                this.props.hogs.map(hog => {
                    return <Hog data={hog} onHogClick={this.props.onHogClick}/>
                })
            }
            </div>
        )
    }
}

export default HogsContainer