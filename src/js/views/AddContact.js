import React from "react";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { Context } from "../store/appContext";

export const AddContact = () => {
	//Importando context
	const { actions } = useContext(Context);

	//Definiendo los refs
	let fullNameRef = useRef(null);
	let emailRef = useRef(null);
	let phoneRef = useRef(null);
	let addressRef = useRef(null);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Add a new contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							ref={r => (fullNameRef = r)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							ref={r => (emailRef = r)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							ref={r => (phoneRef = r)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							ref={r => (addressRef = r)}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						to="/"
						onClick={() => {
							actions.addContactData(fullNameRef.value, emailRef.value, phoneRef.value, addressRef.value);
							fullNameRef.value = "";
							emailRef.value = "";
							phoneRef.value = "";
							addressRef.value = "";
						}}>
						save
					</button>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
