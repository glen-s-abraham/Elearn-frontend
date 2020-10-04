import {elements} from './view/base';

import * as courseView from './view/courseView' ;
import * as lessonView from './view/lessonView' ;

import Course from './model/Course';
import Lesson from './model/Lesson';
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

//Lessons controller

const lessonsController=async (url)=>{
	 const title=url.split('#')[1];		
	 const cid=url.split('#')[2];

	if(cid)
    {
		
		state.lesson=new Lesson(cid);
		await state.lesson.getLessons();
		lessonView.listLessons(title,state.lesson.lessons);
	}

	
}

//search button clicked



//lessons page onload

window.onload=()=>{
	const url=window.location.href;
	if(url.includes('lesson.html'))
	{
		lessonsController(url);
		elements.lessonBox.addEventListener('click',e=>{
			const target=e.target.closest('.lessons__list');
			if(target)
			{
				
				lessonView.loadVideo(target.getAttribute('data-url'));

			}
		});
	}
	else
	{
		elements.searchButton.addEventListener('click',courseController);
	}
};

