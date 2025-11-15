import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import JwtLoginTab from './tabs/JwtSignInTab';
import FirebaseSignInTab from './tabs/FirebaseSignInTab';
import AwsSignInTab from './tabs/AwsSignInTab';
import image from '../../assets/medium-shot-woman-celebrating-new-year-s-eve.jpg';

const tabs = [
	{
		id: 'jwt',
		title: 'JWT',
		logo: 'assets/images/logo/jwt.svg',
		logoClass: 'h-80 p-4 rounded-12'
	}
];

function SignInPage() {
	const [selectedTabId, setSelectedTabId] = useState(tabs[0].id);

	const handleSelectTab = (id: string) => {
		setSelectedTabId(id);
	};

	return (
		<div className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-50">
			<Paper
				elevation={3}
				className="flex w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-lg"
				sx={{
					borderRadius: 4,
					'&::-webkit-scrollbar': { display: 'none' },
					msOverflowStyle: 'none',
					scrollbarWidth: 'none'
				}}
			>
				{/* LEFT SECTION */}
				<div className="w-full px-16 py-32 sm:w-auto sm:p-48 md:p-64">
					<CardContent className="mx-auto w-full max-w-320 sm:mx-0 sm:w-320">
						{/* Logo */}
						<img
							className="w-48 mb-8"
							src="assets/images/logo/logo.svg"
							alt="logo"
						/>

						{/* Title */}
						<Typography className="text-4xl text-gray-900 font-extrabold leading-tight tracking-tight">
							Sign In
						</Typography>

						{/* Sub text */}
						<div className="mt-2 flex items-baseline font-medium">
							<Typography className="text-gray-700">Don't have an account?</Typography>
							<Link
								className="ml-4 text-blue-600 hover:underline"
								to=""
							>
								Sign up
							</Link>
						</div>

						{/* Tabs */}
						<div className="mt-24">
							{selectedTabId === 'jwt' && <JwtLoginTab />}
							{selectedTabId === 'firebase' && <FirebaseSignInTab />}
							{selectedTabId === 'aws' && <AwsSignInTab />}
						</div>
					</CardContent>
				</div>

				{/* RIGHT IMAGE SECTION */}
				<Box
					className="relative hidden h-full flex-auto items-center justify-center md:flex"
					sx={{
						backgroundImage: `url(${image})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						filter: 'brightness(0.85)',
						minWidth: '70%' // Increase width ONLY
					}}
				/>
			</Paper>
		</div>
	);
}

export default SignInPage;
