import React from 'react';
import Card from '../../UI/Card/Card';
import './TodoFilter.scss';

const TodoFilter = ({ onChangeFilter, filter }) => {
	const filterCategories = ['All', 'Active', 'Completed'];
	return (
		<div className="todo-filter">
			<Card>
				<div className="todo-filter__content">
					{filterCategories.map((category, index) => (
						<button
							onClick={() => onChangeFilter(category)}
							className={`todo-filter__button ${
								filter === category ? 'active' : ''
							}`}
							key={index}
							value={category}
						>
							{category}
						</button>
					))}
				</div>
			</Card>
		</div>
	);
};

export default TodoFilter;
