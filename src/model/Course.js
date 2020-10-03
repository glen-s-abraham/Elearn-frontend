import {proxy,server} from '../config';
import axios from 'axios'
export default class Course
{
	constructor(stream,sem)
	{

		this.query=server+"courses/?stream="+stream+"&sem="+sem;
		

	}
	async getCourses()
	{
		try{
			const res=	await axios(this.query);
			this.courses=res.data;

		}
		catch(err)
		{
			alert(err);
		}
		
	}

}