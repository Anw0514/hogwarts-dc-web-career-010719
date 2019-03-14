import React from 'react'

class Hog extends React.Component {
    render() {
        let img_url = this.props.data.name.toLowerCase().split(' ').join('_')
        return (
            <div className='ui four wide column'>
            <div className="ui card" onClick={() => {this.props.onHogClick(this.props.data)}}>
                <h2>{this.props.data.name}</h2>
                <img src={require(`../hog-imgs/${img_url}.jpg`)} />
            </div>
            </div>
        )
    }
}

export default Hog