export const excersiceOptions= {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '182da900e1mshd23e2dd5ebde7d4p17cd44jsnad17788cd053',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData = async (url, options) =>{
    const response = await fetch(url,options);
    const data = await response.json();


    return data;
}