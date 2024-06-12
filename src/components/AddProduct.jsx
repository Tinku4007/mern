import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { productRegistration } from '../utils/validation/Validation';
import { AddProductApi } from '../utils/api';

const AddProduct = () => {
    const [file, setFile] = useState(null);
    const { register, handleSubmit, formState: { errors }, reset } = useForm({ resolver: yupResolver(productRegistration) });

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('productName', data.productName);
        formData.append('price', data.price);
        formData.append('replacement', data.replacement);
        formData.append('imageFieldName', file);

        try {
            const response = await AddProductApi(formData);
            if (response.status === 200) {
                reset();
                setFile(null);
                console.log(response.data.message);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='mt-5'>
            <div className="container">
                <form className='max-w-[650px]' onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="productname">Product Name</label><br />
                        <input type="text" className='border outline-none px-2 py-2 rounded-md w-full' id='productname' name='productName' placeholder='product name' {...register('productName')} />
                        <p className='text-[red]'>{errors?.productName?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="price">Price</label><br />
                        <input type="text" className='border outline-none px-2 py-2 rounded-md w-full' id='price' name='price' placeholder='Price' {...register('price')} />
                        <p className='text-[red]'>{errors?.price?.message}</p>
                    </div>
                    <div>
                        <label htmlFor="productImage">Image</label><br />
                        <input type="file" onChange={(e) => setFile(e.target.files[0])} className='border outline-none px-2 py-2 rounded-md w-full' id='productImage' name='imageFieldName' />
                    </div>
                    <div>
                        <label htmlFor="replacement">Replacement</label><br />
                        <input type="text" className='border outline-none px-2 py-2 rounded-md w-full' id='replacement' name='replacement' placeholder='Replacement' {...register('replacement')} />
                        <p className='text-[red]'>{errors?.replacement?.message}</p>
                    </div>
                    <div className='mt-5'>
                        <button type="submit" className='py-2 px-4 rounded-md bg-slate-500'>Add Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
