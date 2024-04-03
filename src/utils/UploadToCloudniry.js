import { CLOUD_NAME, UPLOAD_PRESET } from "../cred";

const cloud_name=CLOUD_NAME
const upload_preset=UPLOAD_PRESET

export const uploadToCloudinary = async(pics,fileType)=>{
    if(pics && fileType) {
        const data=new FormData();
        data.append("file",pics);
        data.append("upload_preset",upload_preset);
        data.append("cloud_name",cloud_name);

        const res=await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/${fileType}/upload`,
        {method:"post",body:data}
        )
        console.log("res from cloudnary",res)
        const fileData = await res.json();
        console.log("file data url",fileData.url)
        return fileData.url
        
    }
    else {
        console.log("error........... from uploadToCloudnary function")
    }
}