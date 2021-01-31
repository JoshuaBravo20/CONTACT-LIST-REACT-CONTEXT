import React from "react";
import { Link, useParams } from "react-router-dom";
import { useContext, useRef, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditContact = ({ match }) => {
	//Importando context
	const { store, actions } = useContext(Context);

	//Traer parámetro ID
	const { id } = match.params;

	//Armar state de Contacto
	const [contact, setContact] = useState({
		full_name: "",
		email: "",
		agenda_slug: "JoshuaBravo20",
		address: "",
		phone: ""
	});

	//Ejecutar al ejecutar esta función
	useEffect(() => {
		let c = !!store.agenda && store.agenda.find(item => item.id === id);
		setContact(c);
	}, []);

	//Definiendo los refs
	let fullNameRef = useRef(null);
	let emailRef = useRef(null);
	let phoneRef = useRef(null);
	let addressRef = useRef(null);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							defaultValue={contact.full_name}
							ref={r => (fullNameRef = r)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							defaultValue={contact.email}
							ref={r => (emailRef = r)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							defaultValue={contact.phone}
							ref={r => (phoneRef = r)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							defaultValue={contact.address}
							ref={r => (addressRef = r)}
						/>
					</div>
					<button
						type="button"
						className="btn btn-primary form-control"
						onClick={() => {
							actions.editContactData(
								fullNameRef.value,
								emailRef.value,
								phoneRef.value,
								addressRef.value,
								contact.id
							);
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

EditContact.propTypes = {
	match: PropTypes.object
};
