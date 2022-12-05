import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import { Task } from '../../models/task.class';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

  const changeState = () => {
    console.log('TODO: Cambiar estado de una tarea')
  }

  const defaultTask = new Task('Example', 'Default description', false, LEVELS.NORMAL);

  return (
    <div>
      <div>
        <h1>Your Tasks: </h1>
      </div>
      {/* TODO: Aplicar un For/Map para renderizar una lista */}
      <TaskComponent task={defaultTask}></TaskComponent>
    </div>
  );
};


export default TaskListComponent;
