import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

const Loading: React.FC = () => {
  return (
    <Container>
      <Alert className="m-4 text-center" variant="success">
        Loading...
      </Alert>
    </Container>
  );
};

export default Loading;
