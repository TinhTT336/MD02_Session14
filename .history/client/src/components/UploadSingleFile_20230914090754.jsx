import React, { useState } from 'react'
import { storage } from "../firebase/configFirebase";
import { getDownloadURL, uploadBytes } from 'firebase/storage';

export default function UploadSingleFile() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);

    // ham upload file len Firebase
    const uploadFiles = (files) => {
        //xu ly duoc tac vu them nhieu file=> bat dong bo=> su dung Promise
        Promise.all(files.map(file => {
            //tao 1 tham chieu <=>tao 1 folder tren firebase
            const imageRef = ref(storage, `images/${file.name}`);
            return uploadBytes(imageRef, file).then(snapshot => {
                return getDownloadURL(snapshot.ref);
            }).then(urls => {
                //tra ve danh sach cac URL
                setImageUrls((prev => [...prev, urls]))
            })
        }))
    }

    const handleSelectFiles = (e) => {
        //lay tat ca cac gia tri trong o input co type="file"
        const files = Array.from(e.target.files);
        // console.log(files);
        setImageUpload(files);
    }

    const handleUpload = (e) => {
        // console.log(e.target.files[0]);
        uploadFiles(imageUpload)
    }
    return (
        <>
            <input type="file" onChange={handleSelectFiles} />
            <button onClick={handleUpload}>Upload</button>
        </>
    )
}
