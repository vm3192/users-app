import {useState} from "react";
import {useDispatch} from "react-redux";
import {postUsers} from "../../redux/slices/usersSlice";

const AddUserForm = () => {
	const [name, setName] = useState("");
	const [surname, setSurname] = useState("");
	const [desc, setDesc] = useState("");
	const dispatch = useDispatch();

	const handleAddClick = (e) => {
		e.preventDefault();
		const newUser = {
			name,
			surname,
			desc,
		};
		if (newUser.name && newUser.surname && newUser.desc) {
			dispatch(postUsers(newUser));
			setName("");
			setSurname("");
			setDesc("");
		} else {
			alert("Fill all inputs!");
		}
	};

	return (
		<form className="form">
			<h2 className="form__title">add new user</h2>
			<input
				className="form__input default_input"
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<input
				className="form__input default_input"
				type="text"
				value={surname}
				onChange={(e) => setSurname(e.target.value)}
			/>
			<textarea
				className="form__textarea default_textarea"
				type="text"
				value={desc}
				onChange={(e) => setDesc(e.target.value)}
			/>
			<button className="form__btn default_btn" onClick={handleAddClick}>
				add
			</button>
		</form>
	);
};

export default AddUserForm;
