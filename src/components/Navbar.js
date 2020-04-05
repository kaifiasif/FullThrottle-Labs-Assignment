import React, { Component } from 'react';
import { Navbar, Container } from 'react-bootstrap';
class Nav extends Component {
	state = {};
	render() {
		return (
			<Navbar expand="lg" variant="light" bg="light">
				<Container>
					<Navbar.Brand href="#">FullThrottle Labs Assignment </Navbar.Brand>
				</Container>
			</Navbar>
		);
	}
}

export default Nav;
