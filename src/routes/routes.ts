import AllTasks from '../pages/AllTasks/AllTasks';
import DeletedTasks from '../pages/DeletedTasks/DeletedTasks';
import { ComponentType } from 'react';

interface Route {
  path: string;
  component: ComponentType;
}

const routes: Route[] = [
  {
    path: '/',
    component: AllTasks,
  },
  {
    path: '/deleted',
    component: DeletedTasks,
  },
];

export default routes;
