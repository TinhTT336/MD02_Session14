import React from 'react';
import { CloseCircleOutlined } from "@ant-design/icons";
import { Input } from 'antd';

export default function Signup() {
    return (
        <>
            <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-rgba-black'>
                <form className='bg-white p-6 rounded-md w-2/6'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-2xl'>Sign up</h3>
                        <CloseCircleOutlined className='cursor-pointer hover:bg-slate-300 rounded-full' />
                    </div>
                    <div className='mt-3'>
                        <label className='pb-3' htmlFor="name">Họ và tên</label>
                        <Input placeholder="Basic usage" />
                    </div>
                </form>
            </div>

        </>
    )
}
