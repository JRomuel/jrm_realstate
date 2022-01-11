import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'


export const fetchApi = async (url) => {
    const { data }  = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapia.com',
            'x-rapidapi-key': '81834b4846msh63edc329e9374fcp1c5735jsnf0ba8722fbbf'
        }

    });

    return data;
}