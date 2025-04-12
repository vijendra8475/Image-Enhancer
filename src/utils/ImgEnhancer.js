import axios from 'axios';
const API_Key = 'wx44fswil2htzobsm';
let API = `https://techhk.aoscdn.com`;

export const imgEnhancer = async(file) => {

    try {
        
        let taskId = await uploadImg(file);
        console.log("taskId", taskId);

        let enhancedImg = await fetchEnhancedImg(taskId);
        console.log("enhancedImg", enhancedImg);

        // return enhancedImg;

    } catch (error) {
        console.error("Error in imgEnhancer: ", error);
        
    }

}

const uploadImg = async (file) => {
     // code to enhance Image

    let formData = new FormData();
    formData.append('image_file', file);

    const data = await axios.post(`${API}/api/tasks/visual/scale/`, formData, {
        headers : {
            contentType: 'multipart/form-data',
            'X-API-KEY': API_Key
        }
    })

    
    // console.log(data.data.data.task_id);
    let taskId = data.data.data.task_id;
    
    return taskId;
}


const fetchEnhancedImg = (taskId) => {
    // getting enhanced picture 
    // /api/tasks/visual/scale/
    let result = axios.get(`${API}/api/tasks/visual/scale/${taskId}/`, {
        headers: {
            'X-API-KEY': API_Key
        },
        json: true
    })

    console.log(result);

    if(result.status !== 200) {
        throw new Error("Error in fetching enhanced image");
    }
    else if(result.status === 200) {
        console.log("Image fetched successfully");
        return result.data.data.image;
    }

    // return result;
    
}