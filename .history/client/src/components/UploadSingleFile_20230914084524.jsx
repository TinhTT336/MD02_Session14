import React, { useState } from 'react'
import { storage } from "../firebase/configFirebase";
export default function UploadSingleFile() {
    const [imageUpload, setImageUpload] = useState(null);

    const handleSelectFiles = (e) => {
        console.log(e.target.files[0]);
    }

    const handleUpload = () => {

    }
    return (
        <>
            <input type="file" onChange={handleSelectFiles} />
            <button onClick={handleUpload}>Upload</button>
        </>
    )
}
