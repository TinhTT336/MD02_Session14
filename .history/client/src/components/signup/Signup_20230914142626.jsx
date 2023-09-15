import React, { useState } from 'react';
import { CloseCircleOutlined, UploadOutlined } from "@ant-design/icons";
import { Input, Radio, Button, message, Upload } from 'antd';

export default function Signup() {
    const [gender, setGender] = useState(1);
    const handleCheck = (e) => {
        setGender(e.target.value);
    };
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
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
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
                        <Input placeholder="Email" className='mt-2 ms-2' name='email' id='email' type='text' />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="avatar">Ảnh đại diện</label>
                        <Upload {...props}>
                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                        </Upload>
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="password">Mật khẩu</label>
                        <Input placeholder="Mật khẩu" className='mt-2' name='password' id='password' type='password' />
                    </div>
                </form>
            </div>

        </>
    )
}
