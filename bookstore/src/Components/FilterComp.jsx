import { useEffect, useState } from "react";
import { useParams, useSearchParams } from 'react-router-dom';

const FilterComp= ()=>{
    const [searchParams, setSearchParams] = useSearchParams();
    const initialCategory = searchParams.getAll('category');
    const [category, setCategory] = useState(initialCategory || []);
    

    const handleFilter = (e)=>{
        const newCategory = [...category]

        if(newCategory.includes(e.target.value)){
            newCategory.splice(newCategory.indexOf(e.target.value),1);
        }
        else newCategory.push(e.target.value);

        setCategory(newCategory)
    }
    
    useEffect(()=>{
        let params = {};
        params.category= category;
        setSearchParams(params)
    },[category, setSearchParams]);

    return(
        <div>
            <h2>Filter Books</h2>
            <div>
                <h4>Filter by Category</h4>
                <div>
                    <input type={'checkbox'} value='Novel' onChange={handleFilter} checked={category.includes('Novel')}/>
                    <label>Novel</label>
                </div>
                <div>
                    <input type={'checkbox'} value='Science_Fiction' onChange={handleFilter} checked={category.includes('Science_Fiction')}/>
                    <label>Science Fiction</label>
                </div>
                <div>
                    <input type={'checkbox'} value='Thriller' onChange={handleFilter} checked={category.includes('Thriller')}/>
                    <label>Thriller</label>
                </div>
                <div>
                    <input type={'checkbox'} value='Motivational' onChange={handleFilter} checked={category.includes('Motivational')}/>
                    <label>Motivational</label>
                </div>
            </div>
        </div>
    )
}

export default FilterComp