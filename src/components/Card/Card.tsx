import Card from 'react-bootstrap/Card';
import { IStatus } from '../../Types/status';
import { getTime } from '../../utils/general';

import './styles.css';

interface IProps {
  data: IStatus;
}

const CardComponent: React.FC<IProps> = ({ data }) => {
  const date = getTime(data.time);
  const health = data.success ? 'Healthy' : 'Error';
  const healthClass = data.success ? 'success' : 'danger';
  const message = data.success ? data.hostname : data.message;
  return (
    <Card className="card-width">
      <Card.Body>
        <Card.Title className="text-center">{data.apiName.toLocaleUpperCase()}</Card.Title>
        <Card.Subtitle className={`text-center text-light p-2 mt-2 mb-2 bg-${healthClass}`}>{health}</Card.Subtitle>
        {!data.success && <Card.Text className="text-center mb-0">{data.errorCode}</Card.Text>}
        <Card.Text className="text-center mb-0">{message}</Card.Text>
        <Card.Text className="text-center mb-0">{date}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
