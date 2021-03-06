import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions'

class Dashboard extends Component {
	onLogoutClick = (e: any) => {
		e.preventDefault()
		// @ts-ignore
		this.props.logoutUser()
	}

	render() {
		// @ts-ignore
		const { user } = this.props.auth
		return (
			<div style={{ height: '75vh' }} className="container valign-wrapper">
				<div className="row">
					<div className="col s12 center-align">
						<h4>
							<b>Hey there,</b> {user.name.split(' ')[0]}
							<p className="flow-text grey-text text-darken-1">
								You are logged into a full-stack <span style={{ fontFamily: 'monospace' }}>MERN</span>{' '}
								app 👏
							</p>
						</h4>

						<div>
							<Link
								to="/tic-tac-toe"
								style={{
									width: '140px',
									borderRadius: '3px',
									letterSpacing: '1.5px'
								}}
								className="btn btn-large waves-effect waves-light hoverable white black-text">
								TicTacToe
							</Link>
						</div>

						<button
							style={{
								width: '150px',
								borderRadius: '3px',
								letterSpacing: '1.5px',
								marginTop: '1rem'
							}}
							onClick={this.onLogoutClick}
							className="btn btn-large waves-effect waves-light hoverable blue accent-3">
							Logout
						</button>
					</div>
				</div>
			</div>
		)
	}
}

// @ts-ignore
Dashboard.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
}
const mapStateToProps = (state: any) => ({
	auth: state.auth
})
export default connect(mapStateToProps, { logoutUser })(Dashboard)
