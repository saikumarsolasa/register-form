import React from 'react'
import Input from './input';
import Select from './select';

const FormController = (props) => {
    const {control, ...rest} = props;
    
    switch (control) {
        case "input":
            return <Input {...rest}/>
        case "select":
            return <Select {...rest}/>
        default:
            break;
    }
}

export default FormController;