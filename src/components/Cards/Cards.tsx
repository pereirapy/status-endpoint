import { IStatus } from '../../Types/status';

import Card from '../Card';

import './styles.css';

interface IProps {
  loading: boolean;
  statusData: IStatus[];
}

const Cards: React.FC<IProps> = ({ loading, statusData }) => {
  return (
    <div className="columns mt-4">
      {!loading && statusData.map(status => <Card key={status.apiName} data={status} />)}
    </div>
  );
};

export default Cards;
