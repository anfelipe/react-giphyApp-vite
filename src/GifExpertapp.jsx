import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';
import './styles.css';

export const GifExpertapp = () => {
    const [categories, setCategories] = useState(["Dragon Ball"]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory setCategories={setCategories} />

            
            {
                categories.map(c => (
                    <GifGrid key={c} category={c} />
                ))
            }
            
        </>
    )
}
