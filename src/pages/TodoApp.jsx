import React, { useState } from 'react';
import { Button, Input, List, ListItem, ListIcon, IconButton } from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTask = () => {
    if (input) {
      setTasks([...tasks, input]);
      setInput('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div>
      <Input
        placeholder="Add a new task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
      />
      <Button onClick={handleAddTask}>Add Task</Button>
      <List spacing={3}>
        {tasks.map((task, index) => (
          <ListItem key={index}>
            {task}
            <IconButton
              icon={<FaTrash />}
              onClick={() => handleDeleteTask(index)}
              aria-label="Delete task"
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoApp;