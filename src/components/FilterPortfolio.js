//Libraries
import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// MUI Components
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function FilterPortfolio({title, filters, updateSelectedValues, selectedValues}) {

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
        <Accordion className="Component-Container">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}
                >
               <h3 className="filter-title">{title}</h3>
            </AccordionSummary>
            <AccordionDetails>
                <FormGroup >
                {
                    filters.map(d => {
                        return <FormControlLabel key={d} control={<Checkbox onClick={() => handleChange(d)} size="small" />} label={d} />
                    })
                }
            </FormGroup>
            </AccordionDetails>
        </Accordion>
    );
}
