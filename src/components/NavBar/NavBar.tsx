"use client";
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { CustomDialog, FavoriteTable } from '..';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { dialogOpenSubject$ } from '../CustomDialog/CustomDialog';

export type NavBarProps = {
	// types...
}

const NavBar: React.FC<NavBarProps>  = () => {
	
	const handleClick = () => dialogOpenSubject$.setSubject = true;

	return (
	<>
		<CustomDialog>
			<FavoriteTable />
		</CustomDialog>
		<AppBar position="fixed">
			<Toolbar>
				<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
					About yout Happiness
				</Typography>
				<IconButton component="label" aria-label='Favorites' onClick={handleClick}>
					<FavoriteIcon color='error' />
				</IconButton>
			</Toolbar>
		</AppBar>
	</>
	);
};

export default NavBar;
