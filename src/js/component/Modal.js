import React, { useState, useEffect, useContext } from "react";
import { useParams, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

const Modal = ({ match, onClose, show, history }) => {
	const { store, actions } = useContext(Context);

	const [id, setId] = useState({
		id: ""
	});

	const { id2 } = match.params;

	useEffect(() => {
		let c = !!store.agenda && store.agenda.find(item => item.id === id2);
		setId(c);
		console.log(c);
	}, []);

	return (
		<div className="modal" tabIndex="-1" role="dialog" style={{ display: show ? "inline-block" : "none" }}>
			<div className="modal-dialog" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Are you sure?</h5>
						{onClose ? (
							<button
								onClick={() => onClose()}
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						) : (
							""
						)}
					</div>
					<div className="modal-body">
						<p>Warning: unknown consequences after this point... Kidding!</p>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-primary">
							Oh no!
						</button>
						<button
							onClick={e => actions.deleteContact(e)}
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal">
							Do it!
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
/**
 * Define the data-types for
 * your component's properties
 **/
Modal.propTypes = {
	match: PropTypes.object,
	history: PropTypes.object,
	onClose: PropTypes.func,
	show: PropTypes.bool
};

/**
 * Define the default values for
 * your component's properties
 **/
Modal.defaultProps = {
	show: false,
	onClose: null
};

export default withRouter(Modal);
