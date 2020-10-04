import {proxy,server} from '../config';
import axios from 'axios'
export default class Lesson
{
	constructor(cid)
	{

		this.query=server+"lessons/?cid="+cid;
		

	}
	async getLessons()
	{
		try{
			const res=	await axios(this.query);
			this.lessons=res.data;


		}
		catch(err)
		{
			alert(err);
		}
		
	}

}