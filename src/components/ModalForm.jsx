import React from 'react';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import axios from 'axios';

const CustomTextField = styled(TextField)(({ theme }) => ({
	margin: theme.spacing(1), // 8px
	padding: theme.spacing(1), // 4px
	height: '40px'
}));


function ModalForm({ openModal, setOpenModal, popupStyle, data, setData }) {

	const handleClose = () => setOpenModal(false);

	const endPointURL = "https://6658c6e4de346625136a7217.mockapi.io/api/v1/addMember";

	useEffect(() => {
		axios.get(endPointURL)
			.then(res => console.log(res.data))
			.catch(err => console.log(err))
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('data', data);
		axios.post(endPointURL, data)
		.then((res) => {
			console.log('res', res);
		})
		.catch((err) => {
			console.log('err', err);
		})
	}

	const handleChange = (event) => {
		const { name, value } = event.target;
		setData({ ...data, [name]: value });
	}

	return (

		<Modal
			open={openModal}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={popupStyle}>
				<CustomTextField placeholder="Enter Your Name" type="text" className="inputBox" name="u_name" value={data.u_name}
					onChange={handleChange} required />
				<CustomTextField placeholder="Enter Your Age" type="number" className="inputBox" name="u_age" value={data.u_age}
					onChange={handleChange} required />
				{/* Date of Birth */}
				<LocalizationProvider dateAdapter={AdapterDayjs} className="inputBox">
					<DemoContainer components={['DatePicker']}>
						<DatePicker />
					</DemoContainer>
				</LocalizationProvider>
				{/* Date of Joinging */}
				<LocalizationProvider dateAdapter={AdapterDayjs} className="inputBox">
					<DemoContainer components={['DatePicker']}>
						<DatePicker />
					</DemoContainer>
				</LocalizationProvider>
				<CustomTextField placeholder="Enter Your Email" type="email" className="inputBox" name="u_email" value={data.u_email}
					onChange={handleChange} required />
				<CustomTextField placeholder="Enter Your Phone Number" type="number" className="inputBox" name="u_phone_number" value={data.u_phone_number}
					onChange={handleChange} required />
				<CustomTextField placeholder="Billing Amount" type="number" className="inputBox" name="u_bill_amount" value={data.u_bill_amount}
					onChange={handleChange} required />
				<Button type="submit" onClick={(event) => handleSubmit(event)}>Submit</Button>
				<Button onClick={handleClose}>Close</Button>
			</Box>
		</Modal>

	)
}

export default ModalForm;