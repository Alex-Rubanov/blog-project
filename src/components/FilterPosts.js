import MySelect from './UI/select/MySelect';
import MyInput from './UI/input/MyInput';

const FilterPosts = ({ filter, setFilter }) => {
    return (
        <>
            <MyInput 
                type="text" 
                placeholder="Search..."
                value={filter.query}
                onChange={(e) => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                defaultValue="Sort"
                options={[
                {value: 'title', name: 'By name'},
                {value: 'body', name: 'By description'}
                ]}   
                value={filter.sort}
                onChange={(activeFilter) => setFilter({...filter, sort: activeFilter})}
            />
        </>
    )
}

export default FilterPosts;