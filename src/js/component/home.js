import React, { useState, Fragment } from "react";
export function Home() {
	const [todos, setTodos] = useState([]);

	function addTodo(e) {
		if (e.key === "Enter") {
			let newTask = e.target.value;
			let myTodos = todos.slice();
			myTodos.push(newTask);
			e.target.value = "";
			setTodos(myTodos);
		}
	}
	function deleteTodo(i) {
		let myTodos = todos.slice();
		let todoDeleted = myTodos.splice(i, 1);
		setTodos(myTodos);
	}
	return (
		<div className="container-fluid">
			<h1 className="text-center">todos</h1>
			<div className="d-flex justify-content-center col-lg-6 col-md-6 col-12 mx-auto flex-column bg-white">
				<input
					className="w-100 border-bottom py-3 pl-4"
					placeholder="What need to be done?"
					onKeyPress={addTodo}></input>
				{todos.length == 0 ? (
					<div className="border-bottom pt-1 d-flex align-items-center justify-content-between task">
						<p className="pt-1 pl-4">No task, add a task</p>
					</div>
				) : (
					todos.map(function(todo, i) {
						return (
							<div
								key={i}
								className="border-bottom pt-1 d-flex align-items-center justify-content-between task">
								<p className="pt-1 pl-4">{todo}</p>
								<button
									className="pb-2"
									onClick={() => deleteTodo(i)}>
									<i className="fas fa-times"></i>
								</button>
							</div>
						);
					})
				)}

				<div className="border-bottom d-flex align-items-center justify-content-between pb-1">
					<span className="pt-1">{todos.length + " "}item left</span>
				</div>
			</div>
		</div>
	);
}
