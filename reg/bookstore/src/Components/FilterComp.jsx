import { useEffect, useState } from "react";
import { useParams, useSearchParams } from 'react-router-dom';

const FilterComp= ()=>{
    const [searchParams, setSearchParams] = useSearchParams();
    const initialCategory = searchParams.getAll('category');
    const initialSort = searchParams.get('sort');
    const [category, setCategory] = useState(initialCategory || []);
    const [sort, setSort] = useState(initialSort || '');

    const handleFilter = (e)=>{
        // console.log(e)
        const newCategory = [...category]

        if(newCategory.includes(e.target.value)){
            newCategory.splice(newCategory.indexOf(e.target.value));
        }
        else newCategory.push(e.target.value);

        setCategory(newCategory)
    }
    
    const handleSort = (e)=>{
        setSort(e.target.value);
        // console.log(sort)
    }

    useEffect(()=>{
        if(category || sort){
            let params={};
            category && (params.category = category)
            sort && (params.sort = sort)
            setSearchParams(params)
        }
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
            <div onChange={handleSort}>
                <h3>Sort Books</h3>
                <div>
                    <input  type="radio" value={'asc'}  name='sortBy' defaultChecked={sort==='asc'}/>
                    <label>Ascending</label>
                </div>
                <div>
                    <input type="radio" value={'desc'} name='sortBy' defaultChecked={sort==='desc'}/>
                    <label>Descending</label>
                </div>
            </div>
        </div>
    )
}

export default FilterComp