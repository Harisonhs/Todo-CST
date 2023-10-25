import { AddTask } from "./components/AddTask";
import { GetTasks } from "./components/GetTasks";
import { Home } from "./components/Home";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/add-task',
    element: <AddTask />
  },
  {
    path: '/get-tasks',
    element: <GetTasks />
  }
];

export default AppRoutes;
