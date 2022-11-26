import { useEffect, useState } from "react";
import { useParams, useSearchParams } from 'react-router-dom';

const FilterComp= ()=>{
    const [searchParams, setSearchParams] = useSearchParams();
    const initialCategory = searchParams.getAll('category');
    const [category, setCategory] = useState(initialCategory || []);
    const initialSort = searchParams.getAll('sort');
    const [sort, setSort] = useState(initialSort[0] || '');

    const handleFilter = (e)=>{
        const newCategory = [...category]

        if(newCategory.includes(e.target.value)){
            newCategory.splice(newCategory.indexOf(e.target.value),1);
        }
        else newCategory.push(e.target.value);

        setCategory(newCategory)
    }
    
    const handleSort = (e)=>{
        setSort(e.target.value)
    }

    useEffect(()=>{
        let params = {};
        params.category= category;
        sort && (params.sort=sort);
        setSearchParams(params)
    },[category, setSearchParams, sort]);

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
            <hr />
            <div>
                <h3>Sort Books</h3>
                <div onChange={handleSort}>
                    <input type="radio" value={'asc'}  name='sortBy' defaultChecked={sort==='asc'}/>
                    <label>Ascending</label>
                </div>
                <div onChange={handleSort}>
                    <input type="radio" value={'desc'} name='sortBy' defaultChecked={sort==='desc'}/>
                    <label>Descending</label>
                </div>
            </div>
        </div>
    )
}

export default FilterComp