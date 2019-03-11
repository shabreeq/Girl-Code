import React from 'react';

const Navbar = props => {
  <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Girl Code</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#supplies">Supplies</Nav.Link>
      <Nav.Link href="#planner">Planning</Nav.Link>
      <Nav.Link href="#articles">Articles</Nav.Link>
      <Nav.Link href="#decor">Decor</Nav.Link>
    <Navbar.Text id="justify-content-end">
      Signed in as: <a href="#login">Mark Otto</a>
    </Navbar.Text>
      
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>;
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

