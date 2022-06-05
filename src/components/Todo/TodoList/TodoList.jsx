import './TodoList.scss';

const TodoList = ({ todoItems, filter }) => {
	const emptyTodoText = () => {
		if (filter === 'All') return 'Please add todo';
		if (filter === 'Active') return 'No Active Todos';
		if (filter === 'Completed') return 'No Complete Todos';
		return '';
	};
	return (
		<div className="todo-list">
			<ul>
				{todoItems.length > 0 ? (
					todoItems
				) : (
					<p className="todo-list__empty">{emptyTodoText()}</p>
				)}
			</ul>
		</div>
	);
};

export default TodoList;
