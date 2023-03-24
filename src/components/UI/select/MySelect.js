import classes from './mySelect.module.css'

const MySelect = ({ defaultValue, options, onChange, value }) => {
    return (
        <select 
            className={classes.mySelect}
            onChange={(e) => {
                onChange(e.target.value);
                e.target.blur();
            }}
            value={value}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option 
                    value={option.value} 
                    key={option.value}
                >
                    {option.name}
                </option>
                )}
        </select>
    )
}

export default MySelect;