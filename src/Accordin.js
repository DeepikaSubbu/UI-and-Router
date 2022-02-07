import * as React from 'react';
import './App.css';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {  Link} from 'react-router-dom';


export default function Accordin() {
  return (

    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>React JS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Node JS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Angular</Typography>
        </AccordionSummary>
      </Accordion>
      <br/>
      <br/>


      
    
    
    <footer className="py-5 mg-auto bg-primary container-fluid" style={{height:"100px"}}>
      {/* <Nav.Link href="#home">CONTACT US</Nav.Link> */}
      <Link to="/contactus" style={{color:'red'}}>CONTACT US</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      {/* <Nav.Link href="#features">ABOUT US</Nav.Link> */}
      <Link to="/aboutus" style={{color:'red'}}>ABOUT US</Link>&nbsp;&nbsp;&nbsp;&nbsp;
      {/* <Nav.Link href="#pricing">BRANCHES</Nav.Link> */}
      <Link to="/BRANCHES" style={{color:'red'}}>BRANCHES</Link>
    </footer>
    
  
    </div>
  );
}
