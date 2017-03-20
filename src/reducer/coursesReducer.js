import * as ActionType from '../action/ActionType';
import initialState from './initialState';
import _ from 'lodash';


export default function coursesReducer(state = initialState.coursesReducer, action) {
    switch(action.type) {
        case ActionType.GET_COURSES_RESPONSE: {
            // '...' spread operator clones the state
            // lodash Object assign simply clones action.courses into a new array.
            // The return object is a copy of state and overwrites the state.courses with a fresh clone of action.courses
            return {
                ...state, 
                courses: _.assign(action.courses)
            };
        }
        
        case ActionType.ADD_NEW_COURSE_RESPONSE: {
            //Get the existing coursesReducer.courses from state
            let clonedCourses = _.assign(state.courses);
            
            //add action.course into coursesReducer.courses
            clonedCourses.push(_.assign(action.course));
            
            return {
                ...state,
                courses: clonedCourses
            };
        }

        case ActionType.UPDATE_EXISTING_COURSE_RESPONSE: {
            //Get the existing coursesReducer.courses from state
            let clonedCourses = _.assign(state.courses);

            //find the course in the coursesReducer.courses to be updated.
            const foundIndex = clonedCourses.findIndex(course => course.id === action.course.id); 

            //Replace the existing course in coursesReducer.courses with the updated one from action.course
            clonedCourses[foundIndex] = _.assign(action.course);

            //replace coursesReducer.courses with clonedCourses.
            return {
                ...state,
                courses: clonedCourses
            };
        }



        default: { return state; }
    }
}