import {useState, useEffect} from "react";
import ReactPaginate from "react-paginate";
import {useSelector, useDispatch} from "react-redux";
import {getUsers} from "./redux/slices/usersSlice";
import "./App.scss";

import User from "./components/User";
import AddUserForm from "./components/AddUserForm";

function App() {
	const dispatch = useDispatch();
	const isLoading = useSelector((state) => state.users.isLoading);
	const users = useSelector((state) => state.users.users);

	const [currentItems, setCurrentItems] = useState([]);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 5;

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(users.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(users.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, users]);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % users.length;
		setItemOffset(newOffset);
	};

	console.log(users)

	return (
		<div className="App">
			<div className="container">
			<AddUserForm />
			{isLoading ? (
				<p>Loading...</p>
			) : (
				currentItems.map((item) => <User key={item.user_id} {...item} />)
			)}

			<ReactPaginate
				breakLabel="..."
				nextLabel="next"
				onPageChange={handlePageClick}
				pageRangeDisplayed={3}
				pageCount={pageCount}
				previousLabel="prev"
				containerClassName="pagination"
				pageLinkClassName="pagination__link"
				previousLinkClassName="pagination__link pagination__link--pag_prev"
				nextLinkClassName="pagination__link pagination__link--pag_next"
				activeLinkClassName="pagination__link pagination__link--pag_active"
			/>
			</div>
		</div>
	);
}

export default App;
