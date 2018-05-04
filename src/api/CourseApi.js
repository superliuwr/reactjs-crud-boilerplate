import delay from './delay';
import axios from 'axios';

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
    return replaceAll(course.name, ' ', '-');
};

class CourseApi {
    static getAllCourses() {
        return axios.get('http://localhost:3001/activities').then(function (response) {
            return response.data;
          })
    }

    static saveCourse(course) {
        course = Object.assign({}, course); // to avoid manipulating object passed in.
        if(course.id) {
            return axios.put("http://localhost:3001/activities/"+course.id, course);
        }
        return axios.post("http://localhost:3001/activities", course);
    }

    static deleteCourse(courseId) {
        return axios.delete("http://localhost:3001/activities/"+courseId);
    }

    static tweakEnabledCourse(courseId) {
        return axios.get("http://localhost:3001/activities/"+courseId+"/switch");
    }

    static getCourse(courseId) {
        return axios.get("http://localhost:3001/activities/"+courseId).then(function (response) {
            return response.data;
        });
    }

}

export default CourseApi;
