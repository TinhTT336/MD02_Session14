import React, { useState } from 'react';
import { CloseCircleOutlined } from "@ant-design/icons";
import { Input, Radio } from 'antd';

export default function Signup() {
    const [value, setValue] = useState(1);
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
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
                        <Input placeholder="Basic usage" className='mt-3' name='name' id='name' />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="dateOfBirth">Ngày sinh</label>
                        <Input placeholder="Basic usage" className='mt-2' name='dateOfBirth' id='dateOfBirth' type='date' />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="dateOfBirth">Giới tính</label>
                        <div>
                            <Radio.Group onChange={onChange} value={value}>
                                <Radio value={1}>A</Radio>
                                <Radio value={2}>B</Radio>
                                <Radio value={3}>C</Radio>
                            </Radio.Group>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="email">Email</label>
                        <Input placeholder="Basic usage" className='mt-2' name='email' id='email' type='date' />
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="name">Ngày sinh</label>
                        <Input placeholder="Basic usage" className='mt-2' name='name' id='name' type='date' />
                    </div>
                </form>
            </div>

        </>
    )
}
