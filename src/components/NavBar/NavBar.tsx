import Navbar from 'react-bootstrap/Navbar';

const NavBarComponent: React.FC = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Navbar.Brand className="p-4" href="#home">
        Status Dashboard
      </Navbar.Brand>
    </Navbar>
  );
};

export default NavBarComponent;
