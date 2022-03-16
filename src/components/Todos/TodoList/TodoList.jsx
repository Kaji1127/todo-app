import React, { useState } from 'react';
import Card from '../../UI/Card/Card';
import TodoFilter from '../TodoFilter/TodoFilter';
import TodoItem from '../TodoItem/TodoItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './TodoList.scss';

const TodoList = ({
	todos,
	onDeleteTodo,
	onCompleteTodo,
	onClearCompleteTodo,
}) => {
	const [filter, setFilter] = useState('All');
	const changeFilterHandler = (value) => {
		setFilter(value);
	};

	const filterTodos = todos.filter((todo) => {
		if (filter === 'All') return true;
		if (filter === 'Active' && !todo.isComplete) return true;
		if (filter === 'Completed' && todo.isComplete) return true;
		return false;
	});

	const handleOnDragEnd = (result) => {
		console.log(result);
	};

	return (
		<Card>
			<DragDropContext onDragEnd={handleOnDragEnd}>
				<Droppable droppableId="droppable">
					{(provided) => (
						<ul
							ref={provided.innerRef}
							className="todo-list"
							{...provided.droppableProps}
						>
							{filterTodos.map((todo, index) => {
								return (
									<Draggable key={todo.id} draggableId={todo.id} index={index}>
										{(provided) => (
											<div
												ref={provided.innerRef}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
											>
												<TodoItem
													task={todo.task}
													id={todo.id}
													todo={todo}
													onDeleteTodo={onDeleteTodo}
													onCompleteTodo={onCompleteTodo}
												/>
											</div>
										)}
									</Draggable>
								);
							})}
							{provided.placeholder}
						</ul>
					)}
				</Droppable>
			</DragDropContext>
			<div className="todo-list__info">
				<p>
					{todos.filter((todo) => todo.isComplete === false).length} items left
				</p>
				<TodoFilter filter={filter} onChangeFilter={changeFilterHandler} />
				<button
					className="todo-list__button"
					onClick={() => onClearCompleteTodo()}
					type="button"
				>
					Clear Completed
				</button>
			</div>
		</Card>
	);
};

export default TodoList;
