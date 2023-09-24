
export const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0608242e19mshdbcc810d833834ep1d10eajsn036e476fed9b',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};
export const FoodOptions ={
	method: 'GET',
    headers: { 'X-Api-Key': "CoDiibP/i4sy7xQazhBRyg==BpmZGSltR4h1levE"}
}






export const fetchExercises = async (url, opt) => {
    const response = await fetch(url, opt)
    const data= await response.json()

    return data
}
export const fetchFood = async (url, opt) => {
    const response = await fetch(url, opt)
    const data= await response.json()

    return data
}