"use client";
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';

export type NavBarProps = {
	// types...
}

const NavBar: React.FC<NavBarProps>  = () => (
	<AppBar position="fixed">
		<Toolbar>
			<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
				About yout Happiness
			</Typography>
			<Button color="inherit">Login</Button>
		</Toolbar>
	</AppBar>
);

export default NavBar;
