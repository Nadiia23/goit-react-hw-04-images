import axios from "axios";

const pixabayAPI = axios.create({
    baseURL: 'https://pixabay.com/api/',
     params: {
        key: '30126777-7141a0a2f9c9ca9842b8ba9c9',
        image_type: 'photo',
         orientation: 'horizontal',
         per_page: 12,
    }
})

export const getImages = async (query, page) => {
    const {data} = await pixabayAPI.get('', {params: {q: query, page
    }
    });
      return data;
}

export default getImages;

