"use client";
import { SubjectManager } from '@/models';
import { Dialog } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { Subscription } from 'rxjs';

export type CustomDialogProps = {
	children: React.ReactNode;
}

export const dialogOpenSubject$ = new SubjectManager<boolean>();
export const dialogCloseSubject$ = new SubjectManager<boolean>();

const CustomDialog: React.FC<CustomDialogProps>  = ({children}: CustomDialogProps) => {
	const [open, setOpen] = useState(false)
	let openSubject$ = new Subscription()
	let closeSubject$ = new Subscription()

	useEffect(() => {
		openSubject$ = dialogOpenSubject$.getSubject.subscribe(() => handleOpen())
		closeSubject$ = dialogCloseSubject$.getSubject.subscribe(() => handleClose())
	
		return () => {
			openSubject$.unsubscribe();
			closeSubject$.unsubscribe();
		}
	}, [])
	
	const handleOpen = () => { setOpen(true) }
	const handleClose = () => { setOpen(false) }
	const handleExit = () => { dialogCloseSubject$.setSubject = false; }


	return (
		<div>
		<Dialog
			open={open}
			onClose={() => handleExit}
			aria-labelledby='alert-dialog-title'
			arial-describedby='alert-dialog-description'
			fullWidth>
				{children}
		</Dialog>
		</div>
	);
};

export default CustomDialog;
