import React, { useEffect, useState } from 'react'
import { storage } from "../firebase/configFirebase";
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage';
import ReactPlayer from 'react-player'
import React, { useState } from 'react';
import "./register.css";

export default function UploadSingleFile() {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);

    //tao 1 tham chieu den thu muc chua kho anh tren firebase
    const imageListRef = ref(storage, 'images/')

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
    //khi click vao nut upload thi tien hanh upload len firebase
    const handleUpload = (e) => {
        if (!imageUpload) {
            return;
        } else {
            uploadFiles(imageUpload)
        }
    }

    // lay url tren firebase
    useEffect(() => {
        listAll(imageListRef).then(response => {
            //response tra ve la 1 mang danh sach cac URL
            response.items.forEach(item => {
                getDownloadURL(item).then(url => {
                    //danh sach url
                    setImageUrls((prev) => [...prev, url]);
                })
            })
        })
    }, []);

    return (
        <>
            <h1>Danh sách hình ảnh</h1>
            <div style={{ display: "flex", gap: 10, }}>
                {imageUrls.map(url => (
                    // <img src={url} alt="anh" key={url} height={200} width={200} style={{ objectFit: "cover" }} />
                    <ReactPlayer url={url} controls={true} />
                ))}
            </div >
            <input type="file" onChange={handleSelectFiles} multiple />
            <button onClick={handleUpload}>Upload</button>
        </>
    )
}
