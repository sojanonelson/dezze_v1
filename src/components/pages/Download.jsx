import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import "./Style.css"
const About = () => {
  return (
    <div className='thecard'>
    <div className='down'>
    <MDBCard className='card '>
      <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp'  alt='...' />
      <MDBCardBody>
        <MDBCardTitle> Product 1</MDBCardTitle>
        <MDBCardText>
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </MDBCardText>
        <MDBBtn href='#'>Button</MDBBtn>
      </MDBCardBody>
    </MDBCard>

<MDBCard className='card'>
<MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp'  alt='...' />
<MDBCardBody>
  <MDBCardTitle>Product 2</MDBCardTitle>
  <MDBCardText>
    Some quick example text to build on the card title and make up the bulk of the card's content.
  </MDBCardText>
  <MDBBtn href='#'>Button</MDBBtn>
</MDBCardBody>
</MDBCard>

<MDBCard className='card'>
<MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp'  alt='...' />
<MDBCardBody>
  <MDBCardTitle>Product 3</MDBCardTitle>
  <MDBCardText>
    Some quick example text to build on the card title and make up the bulk of the card's content.
  </MDBCardText>
  <MDBBtn href='#'>Button</MDBBtn>
</MDBCardBody>
</MDBCard>

<MDBCard className='card'>
<MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp'  alt='...' />
<MDBCardBody>
  <MDBCardTitle>Product 4</MDBCardTitle>
  <MDBCardText>
    Some quick example text to build on the card title and make up the bulk of the card's content.
  </MDBCardText>
  <MDBBtn href='#'>Button</MDBBtn>
</MDBCardBody>
</MDBCard>
</div>
</div>
  );
}

export default About