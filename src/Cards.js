import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ListGroup, ListGroupItem} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// import {  Navbar, Nav} from 'react-bootstrap';


export default function Cards() {
    const navigate = useNavigate();
  return (
      <>
      
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          XYZ Organization
        </Typography>
        {/* <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography> */}
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
         India
        </Typography>
        <Typography variant="body2">
          Learning is the
          <br />
          {'"KEY to SUCCESS"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">CONTACT US</Button>
      </CardActions>
    </Card>
    <br/>
   

    <ListGroup variant="flush">
    <ListGroupItem>
        <button onClick={()=>navigate("/admin")}type="button" class="btn btn-primary">ADMIN LOGIN</button>&nbsp;&nbsp;&nbsp;
     <button onClick={()=>navigate("/student")}type="button" className="btn btn-primary">STUDENT LOGIN</button></ListGroupItem>
     </ListGroup>


     
     </>
  );
}



  
//    <ListGroup variant="flush">
//  <ListGroupItem><button type="button" class="btn btn-primary">ADMIN LOGIN</button>&nbsp;&nbsp;&nbsp;
//   <button type="button" class="btn btn-primary">STUDENT LOGIN</button></ListGroupItem>
//   </ListGroup>


 