import axios from "axios";

const baseUrl = "https://youtube138.p.rapidapi.com"

const options = {
    params:{hl:"en",gl:"IN"},
	headers: {
		// 'X-RapidAPI-Key': "428eec76f9mshfc1cff6a730b991p1a4e2cjsn4c92d5d5d8d6",
		'X-RapidAPI-Key': process.env.REACT_APP_UTUBE_API_KEY,
		'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
	}
};

export const fetchData = async(url)=>{
    const data = axios.get(`${baseUrl}/${url}`,options)
    return data
}

