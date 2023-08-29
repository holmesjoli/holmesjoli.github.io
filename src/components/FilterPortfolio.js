//Libraries

import { useState } from 'react';

// MUI Components
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import { filters } from '../utils/global';

export default function FilterPortfolio({updateSelectedValues, selectedValues}) {

    let newSelectedTypes = [];
    const [filteredTypes, updateFilter] = useState([]);

    const handleChange = (d) => {

        if (selectedValues.includes(d)) {
            newSelectedTypes = selectedValues.filter((obj) => obj !== d);
            filteredTypes.push(d);
            updateFilter([...filteredTypes]);
          } else {
            selectedValues.push(d);
            updateFilter(filteredTypes.filter((obj) => obj !== d));
            newSelectedTypes = [...selectedValues];
          }
          updateSelectedValues(newSelectedTypes);
    }

    return (
        <div className="Button-Container">
             <h3 className="filter-title">Filter items</h3>
            <FormGroup >
                {
                    filters.map(d => {
                        return <FormControlLabel key={d} control={<Checkbox defaultChecked onClick={() => handleChange(d)} size="small" />} label={d} />
                    })
                }
            </FormGroup>
        </div>
    );
}
