import axios from 'axios';

// const postApi = axios.create({
//     baseURL: `https://pixabay.com/api/`,
//     params: {
//         KEY: '30126777-7141a0a2f9c9ca9842b8ba9c9',
//         IMAGE_TYPE: 'photo',
//         ORIENTATION:'horizintal',
//         PAGE: 1,
//         PER_PAGE: 12,

//     }
// })

// export const addImages = async params => {
//     const { data } = await postApi.get('/images', { params })
//     console.log(data)
// };

const postApi = axios.create({
    baseURL: `https://pixabay.com/api`,
    params: {
        key: '30126777-7141a0a2f9c9ca9842b8ba9c9',
    }
})

export const getImages = async query => {
    const {data} = await postApi.get('/', {params: {q: query, image_type: 'photo',
        orientation:'horizintal',
        page: 1,
        per_page: 12,
    }
    });
    console.log(data)
    return data.hits;
}


