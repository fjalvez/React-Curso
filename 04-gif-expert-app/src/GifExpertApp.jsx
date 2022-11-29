import { useState } from 'react';
import { AddCategory, GifGrid } from './components'

const apiKey = 'OCGC2aMhyJ13oJLEt3cIWdVXnrCGNzI4';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {


        if (categories.includes(newCategory)) {
            return;
        }
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                //setCategories={setCategories}
                //onNewCategory={ event => onAddCategory(event)} 
                onNewCategory={onAddCategory}
            />


            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }

        </>
    )
}