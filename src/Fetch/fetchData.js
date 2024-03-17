export  const exerciseOptions ={
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/',
    headers: {
        'X-RapidAPI-Key': 'cec48a5f2dmsh0f7bcb2b444520cp1a4072jsn1e9ebc6dd367',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };



export const fetchData = async (url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}