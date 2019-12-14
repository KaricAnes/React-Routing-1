import React, { Component } from 'react';
import Course from '../Course/Course';
import {Link, Route} from 'react-router-dom';
import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide', link: "https://angular.io/", name: 'Angular', pop: "5" },
            { id: 2, title: 'Vue - The Complete Guide', link: 'https://vuejs.org/', name: 'Vue', pop: "2" },
            { id: 3, title: 'PWA - The Complete Guide', link: 'https://developers.google.com/web/progressive-web-apps', name: 'PWA', pop: "9" }
        ],
        selectedCourseID:false
    }


    



    postSelectedHandler = (id) => {

        this.setState({selectedCourseID: id});
                       
        }


       





    render () {
        //console.log(this.props);

const idAccepted = this.state.selectedCourseID;
let  kursevi;



if(idAccepted === false){

    kursevi = this.state.courses.map(course =>{
        return (
        
    <Link to = 
    {{pathname:'/' + course.id,
     title:course.title, 
     link:course.link,
     pop: course.pop

    }}
      key={course.id}
    >
        
       <h1 onClick = {()=> this.postSelectedHandler(course.id)}>{course.title}</h1>
        
              
       </Link>
            )
 
     })



}

/*else{

     kursevi = this.state.courses.map(course =>{
        return (
        <Link to = {'/' + course.id} key={course.id}>
                <Course
                key={course.id}
                 title = {course.title}
                  //id = {course.id}
                  //id = {this.props.match.params.id}
                    link = {course.link}
                      name = {course.name}
                   />
                    </Link>
            )
 
     })

}*/


         


        return (
           <div>
            
            <section>
           {kursevi}
           </section>

           <Route path = {this.props.match + "/:id"} exact component = {Course}/>


            
            </div>
        );
    }
}

export default Courses;