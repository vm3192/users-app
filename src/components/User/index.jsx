import {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteUsers, putUsers} from "../../redux/slices/usersSlice";

const User = ({user_id, name, surname, desc}) => {
	const [isEdit, setIsEdit] = useState(false);
	const [inputName, setInputName] = useState(name);
	const [inputSurname, setInputSurname] = useState(surname);
	const [inputDesc, setInputDesc] = useState(desc);
	const dispatch = useDispatch();

	const handleEditClick = () => {
		const editUser = {
			id: user_id,
			name: inputName,
			surname: inputSurname,
			desc: inputDesc,
		};

		if (editUser.name && editUser.surname && editUser.desc) {
			dispatch(putUsers(editUser));
			setIsEdit(false);
		} else {
			alert("Fill all inputs!");
		}
	};

	const handleDeleteCLick = () => {
		dispatch(deleteUsers(user_id));
	};

	return (
		<div className="user_card">
			{isEdit ? (
				<>
					<input
						className="user_card__input_name default_input"
						type="text"
						value={inputName}
						onChange={(e) => setInputName(e.target.value)}
					/>
					<input
						className="user_card__input_surname default_input"
						type="text"
						value={inputSurname}
						onChange={(e) => setInputSurname(e.target.value)}
					/>
					<textarea
						className="user_card__textarea_desc default_textarea"
						type="text"
						value={inputDesc}
						onChange={(e) => setInputDesc(e.target.value)}
					/>
				</>
			) : (
				<>
					<div className="user_card__name">{name}</div>
					<div className="user_card__surname">{surname}</div>
					<div className="user_card__desc">{desc}</div>
				</>
			)}
			{isEdit ? (
				<button
					className="user_card__btn default_btn"
					onClick={handleEditClick}>
					save user
				</button>
			) : (
				<button
					className="user_card__btn default_btn"
					onClick={() => setIsEdit(true)}>
					edit user
				</button>
			)}
			<button
				className="user_card__btn default_btn"
				onClick={handleDeleteCLick}>
				delete user
			</button>
		</div>
	);
};

export default User;
