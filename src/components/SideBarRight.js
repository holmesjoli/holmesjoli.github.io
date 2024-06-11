import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';

function ProjectAttribute({d, title}) {

    return (
        <div className="Project-Attr">
            <h3>{title}</h3>
            <ul>{d.map((datum, i) => { return <li className="Attr" key={i}>{datum}</li>})}</ul>
        </div>
    )
}

export default function SideBarRight({d}) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} onClick={toggleDrawer(false)}>
        {
            d.client ?
            <div className="Project-Attr">
                <h3>client</h3>
                <ul><li className="Attr" key={d.client.name}><a target="_blank"  rel="noreferrer" href={d.client.link}>{d.client.name}</a></li></ul>
            </div>: <></>
        }
        {
            d.links ?
            <div className="Project-Attr">
                <h3>project link</h3>
                <ul>{d.links.map((datum, i) => { return <li className="Attr" key={i}><a target="_blank"  rel="noreferrer" href={datum.url}>{datum.text}</a></li>})}
                </ul>
            </div>: <></>
        }
        {d.role ? <ProjectAttribute d={d.role} title="my roles" />: <></>}
        {d.design ? <ProjectAttribute d={d.design} title="design practice area" />: <></>}
        {d.tools ? <ProjectAttribute d={d.tools} title="tools" />: <></>}
        {d.medium ? <ProjectAttribute d={d.medium} title="medium" />: <></>}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><InfoIcon/></Button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
        {DrawerList}
      </Drawer>
    </div>
  );
}