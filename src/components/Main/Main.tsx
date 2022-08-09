import { useEffect, useState } from 'react';

import { IStatus } from '../../Types/status';
import { apiNames, getStatusOneEndPoint } from '../../utils/general';

import Cards from '../Cards';
import Loading from '../Loading';
import Navbar from '../NavBar';

const secondsToRetrieveData = 15; //It is the time in seconds to wait to retrieve the data

const Main: React.FC = () => {
  const [statusData, setStatusData] = useState<IStatus[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getStatusAllEndPoint() {
      const tempStatus = await Promise.all(apiNames.map(async apiName => await getStatusOneEndPoint(apiName)));
      setStatusData(tempStatus);
      setLoading(false);
    }
    getStatusAllEndPoint();
    const interval = setInterval(() => getStatusAllEndPoint(), secondsToRetrieveData * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />
      {loading && <Loading />}
      <Cards loading={loading} statusData={statusData} />
    </>
  );
};

export default Main;
