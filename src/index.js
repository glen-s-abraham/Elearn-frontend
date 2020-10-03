import {elements} from './view/base';

import * as courseView from './view/courseView' ;
import Course from './model/Course';
const state=[];

//courseController
const courseController=async()=>{
	const stream=elements.streamField.value;
	const sem=elements.semField.value;
	state.courses=new Course(stream,sem);
	await state.courses.getCourses();
	elements.courseContainer.innerHTML="";
	courseView.listCourses(state.courses.courses);
}

//search button clicked

elements.searchButton.addEventListener('click',courseController)