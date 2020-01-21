import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from '../../../actions/authActions'

import TicTacToe from './game.js'

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
							<b>TicTacToe</b>
						</h4>

						<TicTacToe />
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
