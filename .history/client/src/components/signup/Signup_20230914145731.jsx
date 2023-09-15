import React, { useState } from 'react';
import { CloseCircleOutlined, UploadOutlined } from "@ant-design/icons";
import { Input, Radio, Button, message, Upload, Space } from 'antd';
// import { async } from '@firebase/util';
import { getDownloadURL, ref, uploadBytes } from '@firebase/storage';
import { storage } from '../../firebase/configFirebase';

export default function Signup() {
    const [gender, setGender] = useState(1);
    const [imageUrl, setImageUrl] = useState(null);
    const handleCheck = (e) => {
        setGender(e.target.value);
    };

    //tao 1 tham chieu den thu muc chua kho anh tren firebase
    const imageListRef = ref(storage, 'images/')

    //Props cuar Upload
    const props = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                //lay duong dan cua anh sau khi hoan tat qua trinh tai
                const downloadURL = info.file.response.url;
                //luu duong dan vao 1 state
                setImageUrl(downloadURL);
                message.success("Tải lên hình ảnh thành công");
            } else if (info.file.status === 'error') {
                message.error("Tải lên hình ảnh thất bại");
            }
        },
        customRequest: async ({ file, onSuccess, onError }) => {
            try {
                //tao 1 tham chieu den thu muc chua kho anh tren firebase
                const imageRef = ref(imageListRef, 'images/')

                // tai anh len firebase
                await uploadBytes(imageRef, file)

                //lay url tu firebase ve
                const downloadURL = await getDownloadURL(imageRef)

                //goi ham onSuccess de thong bao upload anh thanh cong
                onSuccess({ url: downloadURL });

            } catch (error) {
                onError({ error })
            }
        }
    };
    return (
        <>
            <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-rgba-black'>
                <form className='bg-white p-6 rounded-md w-2/6'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-2xl'>Sign up</h3>
                        <CloseCircleOutlined className='cursor-pointer hover:bg-slate-300 rounded-full' />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="name">Họ và tên</label>
                        <Input placeholder="Họ và tên" className='mt-3' name='name' id='name' />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="dateOfBirth">Ngày sinh</label>
                        <Input placeholder="Ngày sinh" className='mt-2' name='dateOfBirth' id='dateOfBirth' type='date' />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="dateOfBirth">Giới tính</label>
                        <div>
                            <Radio.Group onChange={handleCheck} value={gender}>
                                <Radio value={1}>Nam</Radio>
                                <Radio value={2}>Nữ</Radio>
                                <Radio value={3}>Khác</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="email">Email</label>
                        <Input placeholder="Email" className='mt-2' name='email' id='email' type='text' />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="avatar">Ảnh đại diện</label>
                        <div className='text-center mt-2'>
                            <Upload {...props}>
                                <Button icon={<UploadOutlined />}> Chọn ảnh đại diện</Button>
                            </Upload>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="password">Mật khẩu</label>
                        <Input placeholder="Mật khẩu" className='mt-2' name='password' id='password' type='password' />
                    </div>
                    <div>
                        <Button type='primary' block className='w-full btn-primary mt-4'>Đăng ký</Button>
                    </div>
                    <div className='mt-2 flex items-center justify-center'>
                        <span className='text-sm '>Bạn đã có tài khoản? <a href="">   Đăng nhập</a></span>
                    </div>
                </form>
            </div>

        </>
    )
}
