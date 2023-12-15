const uploadPreset = import.meta.env.UPLOAD_PRESET_NAME
const cloudName = import.meta.env.CLOUD_NAME
const uploadCloudanry = async (file) => {
    const uploadData = new FormData();
    uploadData.append('file', file);
    uploadData.append('uploadPreset', uploadPreset);
    uploadData.append('cloudName', cloudName);
    
}

export default uploadCloudanry