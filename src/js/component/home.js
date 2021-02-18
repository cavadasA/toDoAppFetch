import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

// test

//create your first component
export function InputTask() {
	const [tasks, setTask] = useState([]);

	return (
		<div className="row">
			<div className="offset-md-5">
				<div className="form-group mb-0">
					<form>
						<input
							type="text"
							className="form-control"
							placeholder="What needs to be done?"
							onKeyPress={() => enterHandler(event)}></input>
					</form>
				</div>
				<ul className="list-group mt-0">{listMaker(tasks)}</ul>
				<ul className="list-group">
					<li className="list-group-item">
						{tasks.length} items left
					</li>
				</ul>
			</div>
		</div>
	);

	function listMaker(tasks) {
		if (tasks.length === 0) {
			return <li className="list-group-item">No tasks, add a task</li>;
		}
		let list = tasks.map(task => {
			return (
				<li className="list-group-item" key={task.toString()}>
					{task}
					<a href="#" onClick={() => handleRemove(task)}>
						<FaTimes />
					</a>
				</li>
			);
		});
		return list;
	}

	function enterHandler(e) {
		if (e.charCode === 13) {
			e.preventDefault();
			return setTask(state => [...state, e.target.value]);
		}
	}

	function handleRemove(id) {
		let newList = tasks.filter(task => {
			return task != id;
		});
		return setTask(newList);
	}
}
