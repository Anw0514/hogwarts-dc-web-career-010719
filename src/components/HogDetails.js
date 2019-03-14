import React from 'react'

class HogDetails extends React.Component {
    render() {
        let img_url = this.props.data.name.toLowerCase().split(' ').join('_')
        return (
            <div className="ui raised segment">
                <h2>{this.props.data.name}</h2>
                <div className='ui grid container'>
                    <div className='ui eight wide column'>
                        <img src={require(`../hog-imgs/${img_url}.jpg`)} />
                    </div>
                    <div className='ui eight wide column'>
                        <h4>Specialty: {this.props.data.specialty}</h4>
                        <h4>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.data['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</h4>
                        <h4>Highest Medal Achieved: {this.props.data['highest medal achieved']}</h4>
                        {
                            this.props.data.greased ? <h4>Slippery Boi</h4> : <h4>Dry Boi</h4>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default HogDetails