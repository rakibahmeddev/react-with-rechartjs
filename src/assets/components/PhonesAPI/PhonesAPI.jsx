import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const PhonesAPI = () => {
    const [phones, setPhones] = useState({})

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data => {
            const phonesData = data.data.data;
            const phonesWithFakeData = phonesData.map(phone => {
                const obj ={
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj;
            })
            setPhones(phonesWithFakeData);
        })
    }, [])
    return (
        <div>
            <h2 className='text-3xl'> Phones API with Axios</h2>
            <div className='bg-white rounded-3xl px-10 py-16 mt-6'>
                <ResponsiveContainer width="100%" height={400}>
                <BarChart data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                </BarChart>
            </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PhonesAPI;