import React from 'react'
import CustomizedAccordions from './CustomizedAccordions';

const optionsL = [
    {
        id: 1,
        name: "about"
    },
    {
        id: 2,
        name: "courses"
    },
    {
        id: 3,
        name: "services"
    },
    {
        id: 4,
        name: "contato"
    },
]

const OptionList = () => {
    return (
        <div>
            <CustomizedAccordions options={optionsL} />
        </div>
    );
}

export default OptionList;