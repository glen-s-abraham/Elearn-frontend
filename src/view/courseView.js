import {elements} from './base'

export const listCourses=(courses)=>{
	for(const course of courses)
	{
		
		renderCourse(course);
	}
}

const renderCourse=(course)=>
{
	const markup=`<a href="/lesson.html#${course.title}#${course.id}"><div class="course__card" data-id=${course.id}>
				<div class="course__card_image_box">
					<img src="${course.cover}" class="course__card_image">
				</div>
				<div class="course__card_title_box">
					<div class="course__card_title">
					${course.title}
					</div>
				</div>
			</div>	</a>`;
	elements.courseContainer.insertAdjacentHTML('beforeend',markup);		
}
