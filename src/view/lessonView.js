import {elements} from './base';

const renderLesson=(lesson)=>
{
	const markup=`<div class="lessons__list" data-url="${lesson.lesson}"">
					<h1 class="lessons__title">${lesson.lessonname}</h1>
			</div>`;
	elements.lessonBox.insertAdjacentHTML('beforeend',markup);		
}
export const listLessons=async(course_title,lessons)=>
{
	console.log(course_title,lessons);
	elements.lessonTitle.insertAdjacentHTML('beforeend',`<h1 class="lessons__Course_title">${course_title}</h1>`);
	for(const lesson of lessons)
	{
		renderLesson(lesson);
	}
}
export const loadVideo=(url)=>
{
	console.log(url);
	elements.lessonPlayer.innerHTML="";
	elements.lessonPlayer.insertAdjacentHTML('beforeend',`<source src = "${url}" >`);
	elements.lessonPlayer.load();
}