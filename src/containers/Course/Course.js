import React, { Component } from 'react';

class Course extends Component {

    state = {

        loadedCourse: null
    
    }




    render () {
        console.log(this.props);
        return (
            <div>

            <h1>{this.props.location.title}</h1>
                <h3>You selected the Course with ID: {this.props.match.params.id}</h3>
                <h5>Link kursa je: {this.props.location.link}</h5>
                <h5>Popularnost ovog kursa je: {this.props.location.pop}</h5>
                
                

            </div>
        );
    }
}

export default Course;