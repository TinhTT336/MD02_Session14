import React, { useState } from 'react'
import { storage } from "../firebase/configFirebase";
export default function UploadSingleFile() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);
    const handleSelectFiles = (e) => {
        //lay tat ca cac gia tri trong o input co type="file"
        const files = Array.from(e.target.files);
        // console.log(files);
        setImageUpload(files);
    }
    console.log(imageUpload);

    const handleUpload = (e) => {
        console.log(e.target.files[0]);

    }
    return (
        <>
            <input type="file" onChange={handleSelectFiles} />
            <button onClick={handleUpload}>Upload</button>
        </>
    )
}
