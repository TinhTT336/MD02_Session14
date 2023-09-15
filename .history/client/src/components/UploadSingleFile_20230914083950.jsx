import React, { useState } from 'react'
import { storage } from "../firebase/configFirebase";
export default function UploadSingleFile() {
    const [imageUpload, setImageUpload] = useState(null);

    const handleUpload = () => {

    }
    return (
        <>
            <input type="file" onChange={handleUpload} />

        </>
    )
}
