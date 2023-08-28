import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function FilterPortfolio({data, updateData}) {


    const filterSelection = (e) => {

        console.log(e);
        
        // const dataNew = data.filter(d => d.tags.includes(e));

        // updateData(dataNew);
    }

    const filters = ["#adobe-illustrator", "#ceramics", "#collection", "#d3-js", "#data-art", "#data-journalism",
    "#data-physicalization", "#data-visualization", "#design-process", "#drawing", "#figma", "#information-design",
    "#interaction-design", "#graphic-design", "#map", "#pixi-js", "#public-policy", "#python", "#r", "#react",
    "#system-design", "#service-design", "#user-experience", "#user-interaction" ]

    return (
        <div className="Button-Container">
             <h3 className="filter-title">Filter items</h3>
            <FormGroup >
                {
                    filters.map(d => {
                        return <FormControlLabel key={d} control={<Checkbox defaultChecked size="small" />} label={d} />
                    })
                }
            </FormGroup>
        </div>
    );
}
