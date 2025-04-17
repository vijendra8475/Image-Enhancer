import axios from 'axios';
const API_Key = 'wxreqo080pfn911ta';
let API = `https://techhk.aoscdn.com`;


export const imgEnhancer = async(file) => {
    try {
        // code to upload image to enhance1
        let taskId = await uploadImage(file);
        // let taskId = `"3660b9aa-a44d-48fe-b4f6-bcd0ca0e622c"`
        console.log('TaskId : ', taskId );
        


        // code to enhance image using API

        let enhancedImageData = await poolforEnhancer(taskId);
        console.log('Enhanced Image : ', enhancedImageData);
        
        return enhancedImageData;
    } catch (error) {
        console.log('something went wronge : ',error);
    }
}


const uploadImage = async(file) => {
        console.log('hello');
        

        try {
            // upload the file

            let formData = new FormData();
            formData.append('image_file', file);
            let {data} = await axios.post(`${API}/api/tasks/visual/scale`, formData, 
                {
                    headers : {
                        'Content-Type' : 'multipart/form-data',
                        'X-API-KEY' : API_Key
                    }
                }
            )

            console.log(data);
            

            if(!data?.data?.task_id) {
                throw new error ('Image upload failed : taskId not found');
            }

            return data.data.task_id;
        } catch (error) {
            console.log('something went wronge : ',);
            
        }
        // return the taskId
}

let imageEnhancer = async (taskId) => {
    try {
        // get the enhanced image

        let {data} = await axios.get(`${API}/api/tasks/visual/scale/${taskId}`, 
            {
                headers : {
                    'X-API-KEY' : API_Key
                }
            }
        )
        // console.log(data.data.task_id);
        // console.log(data.data);
        
        

        if(!data?.data?.task_id) {
            throw new Error('Image upload failed : taskId not found');
        }

        return data.data.image;
    } catch (error) {
        console.log('something went wronge : ', error);
        
    }
}


const poolforEnhancer = async (taskId, retries = 0) => {
    let result = await imageEnhancer(taskId).then(data => ({ success: true, data })).catch(error => ({ success: false, error }));
    console.log(result);
    
    

    if(!result.data) {
        console.log('Processing...');
    }
    else{
        return result.data;
    }

    if(retries >= 20) {
        throw new error('Maximum retries exceed');
    }

    await new Promise((resolve) => setTimeout(resolve, 5000));

    return poolforEnhancer(taskId, retries+1);
}