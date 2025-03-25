import { Link } from 'react-router-dom';
import classes from './Navigation.module.scss';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: (
      <Link to="/" className={classes.button}>
        <button className={classes.button}>Home</button>
      </Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to="/favourites">
        <button className={classes.button}>Fav</button>
      </Link>
    ),
  },
];

const Navigation = () => {
  return <Tabs className={classes.input} defaultActiveKey="1" items={items} />;
};

export default Navigation;
