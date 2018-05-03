import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
    {
        id: "1",
        name: "Blue Mountains Day Tour",
        description: "No journey to Australia could be complete without exploring the tranquil beauty of the Blue Mountains. Our Blue Mountains Day Tour offers breathtaking views from the mountain tops, spectacular wildlife, historic rock formations and sandstone cliffs.",
        adImageUrl: "https://bluemountainstoursydney.com.au/wp-content/uploads/2017/12/Blue-Mountains-Tours-Three-Sisters.jpg",
        rate: "$300",
        category: "Tour",
        contact: "Andrew",
        count: 2,
        enabled: true,
        url: "https://bluemountainstoursydney.com.au/"
    },
    {
        id: "2",
        name: "Manly Surf Schools",
        description: "Experience the Australian Beach!. Manly Surf School runs classes every day. Our classes cater to all levels of ability, fitness and age",
        adImageUrl: "http://manlysurfschool.com/global-surf-industries/",
        rate: "$400",
        category: "Class",
        contact: "Marvin",
        count: 2,
        enabled: false,
        url: "https://manlysurfschool.com/"
    },
    {
        id: "3",
        name: "SEA LIFE Sydney Aquarium",
        description: "One of Sydney’s premier attractions, SEA LIFE Aquarium at Darling Harbour is home to more than 13,000 aquatic animals and is one of the world’s largest aquariums. ",
        adImageUrl: "https://www.darlingharbour.com//media/2783/sea_life_penguins_thumbnail.jpg",
        rate: "$40",
        category: "Ticket",
        contact: "Mike",
        count: 2,
        enabled: true,
        url: "https://www.sydneyaquarium.com.au/"
    },
    {
        id: "4",
        name: "Sydney Harbour Bridge Climb",
        description: "Climbing the Sydney Harbour Bridge is exhilarating – and an unforgettable experience, too. The panorama from the top of the largest steel arch bridge in the world is stunning. A BridgeClimb Sydney tour to the summit is open to anyone who is in good health and aged eight and older.",
        adImageUrl: "https://www.bridgeclimb.com/wp-content/uploads/2014/04/The-Experience-featured-image-1-800x741.jpg",
        rate: "$300",
        category: "Tour",
        contact: "Tony",
        count: 2,
        enabled: true,
        url: "https://www.bridgeclimb.com/"
    },
    {
        id: "5",
        name: "Rocks Walking Tour",
        description: "90-minute walking tour of The Rocks, in Sydney. Enjoy amazing views of icons such as the Sydney Opera House and Sydney Harbour Bridge. Stroll past colonial-era buildings that were built by convict laborers",
        adImageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/0d/f5/6d/9b/the-rocks-walking-tour.jpg",
        rate: "$100",
        category: "Tour",
        contact: "John",
        count: 2,
        enabled: false,
        url: "http://www.rockswalkingtours.com.au/"
    },
];

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
    return replaceAll(course.name, ' ', '-');
};

class CourseApi {
    static getAllCourses() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(Object.assign([], courses));
            }, delay);
        });
    }

    static saveCourse(course) {
        console.log(course)
        course = Object.assign({}, course); // to avoid manipulating object passed in.
        return new Promise((resolve, reject) => {
            setTimeout(() => {

                if (course.id) {
                    const existingCourseIndex = courses.findIndex(a => a.id === course.id);
                    courses.splice(existingCourseIndex, 1, course);
                } else {
                    //Just simulating creation here.
                    //The server would generate ids and watchHref's for new courses in a real app.
                    //Cloning so copy returned is passed by value rather than by reference.
                    course.id = generateId(course);
                    courses.push(course);
                }

                resolve(course);
            }, delay);
        });
    }

    static deleteCourse(courseId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const indexOfCourseToDelete = courses.findIndex(course => course.id === courseId);
                courses.splice(indexOfCourseToDelete, 1);
                resolve();
            }, delay);
        });
    }

    static tweakEnabledCourse(courseId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const existingCourseIndex = courses.findIndex(course => course.id === courseId);
                
                if(existingCourseIndex >= 0) {
                    courses[existingCourseIndex].enabled = !courses[existingCourseIndex].enabled;
                }

                resolve();
            }, delay);
        });
    }

    static getCourse(courseId) {
        return new Promise((resolve) => {
            setTimeout(() => {
                const existingCourseIndex = courses.findIndex(course => course.id === courseId);
                
                const courseFound = Object.assign({}, courses[existingCourseIndex]);

                resolve(courseFound);

            }, delay);
        });
    }

}

export default CourseApi;
