import React from 'react';
import './Home.css';
import Header from './Header';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ''
        }
    }

    // Handler for setting this state to the entered value in searchbar
    onInputChange = (event) => {
        this.setState({ city: event.target.value });
    };

    // Method for handling the events on button click
    getCityHandler(e) {
        e.preventDefault();
        this.props.getWeatherData(this.state.city);
        this.props.hidePreviousData();
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="main-heading">
                    Let's know about today's Weather
                </div>
               {/* ===========Search Bar========== */}
                <div className="body-container">
                    <form onSubmit={this.getCityHandler.bind(this)}>
                        <input type="text"
                            onChange={this.onInputChange}
                            placeholder="Enter City Name...">
                        </input>
                        <button type="submit">Search</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Home;