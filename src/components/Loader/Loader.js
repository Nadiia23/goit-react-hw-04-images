import { InfinitySpin } from 'react-loader-spinner';
import s from './loader.module.css';

const Loader = () => {
  return (
    <div className={s.loader}>
      <InfinitySpin width="200" color="#3f51b5"  />
    </div>
  );
};

export default Loader;
