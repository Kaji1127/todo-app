import { v1 as uuid } from 'uuid';

export const initialTodos = [
	{
		id: uuid().toString(),
		isComplete: true,
		task: 'Complete online JavaScript course',
	},
	{ id: uuid().toString(), isComplete: false, task: 'Jog around the park 3x' },
	{ id: uuid().toString(), isComplete: false, task: '10 minutes meditation' },
	{ id: uuid().toString(), isComplete: false, task: 'Read for 1 hour' },
	{ id: uuid().toString(), isComplete: false, task: 'Pick up grocies' },
	{
		id: uuid(),
		isComplete: false,
		task: 'Complete Todo App on Frontend Mentor',
	},
];
