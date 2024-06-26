import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {

	const { store, actions } = useContext(Context);
	
	return (
	<div className="container">
		<div className="mb-4 d-flex">
			<Link className="ms-auto" to="/AddContact">
				<button className="btn btn-success">Add contact</button>
			</Link>
		</div>
		<ul>
			{store.contacts && store.contacts.map((value, index) => {
				return (
					<li>
						<div className="d-flex border border-secondary-subtle">
							<div className="d-flex align-items-center justify-content-center">
								<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrhaHBD0cS9aOWld7CPBVsZwBySHAp_HKs7Q&s"></img>
							</div>
							<div className="info">
								<h2>{value.name}</h2>
								<div>
									<i className="fa-solid fa-location-dot"></i>
									{value.address}
								</div>
								<div>
									<i className="fa-solid fa-phone"></i>
									{value.phone}
								</div>
								<div>
									<i className="fa-solid fa-envelope"></i>
									{value.email}
								</div>
							</div>
							<div className="d-flex ms-auto">
								<Link to={`/EditContact/${value.name}/${value.email}/${value.phone}/${value.address}/${value.id}`} >
									<i className="fa-solid fa-pencil">edit</i>
								</Link>
								<i className="fa-solid fa-trash btn" onClick={()=>{actions.deleteContact(value.id)}} ></i>
							</div>
						</div>
					</li>
				)
			})}
		</ul>
	</div>
	)
};