import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';
import JwtLoginTab from './tabs/JwtSignInTab';
import FirebaseSignInTab from './tabs/FirebaseSignInTab';
import AwsSignInTab from './tabs/AwsSignInTab';
import image from '../../assets/Flux_Schnell_A_hyperrealistic_ultrapremium_cinematic_wide_comp_2.jpg';

// Material Icons
import GoogleIcon from '@mui/icons-material/Google';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

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

	const handleOpenCamera = () => {
		// Add your camera logic here (e.g., standard HTML5 navigator.mediaDevices.getUserMedia)
		console.log("Opening camera...");
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
				<div className="w-full px-20 py-32 sm:w-auto sm:p-48 md:p-64">
					<CardContent className="mx-auto w-full max-w-320 sm:mx-0 sm:w-320">
						{/* Logo */}
						<img
							className="mb-8 w-48"
							src="assets/images/logo/icons8-cinnamon-sticks-120.png"
							alt="logo"
						/>

						{/* Title */}
						<Typography className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900">
							Sign In
						</Typography>

						{/* Tabs (Assumes your primary sign in button is inside these components) */}
						<div className="mt-12">
							{selectedTabId === 'jwt' && <JwtLoginTab />}
													</div>

						{/* Extra Login Options */}
						<div className="mt-6 flex flex-col gap-4">
							<Divider sx={{ my: 1, fontSize: '0.875rem', color: 'text.secondary' }}>
								OR
							</Divider>

							{/* Google Sign In Button */}
							<Button
								variant="outlined"
								fullWidth
								className="mb-6"
								startIcon={<GoogleIcon />}
								sx={{
									borderColor: '#e5e7eb',
									color: '#374151',
									textTransform: 'none',
									py: 1.5,
									fontWeight: 600,
									borderRadius: '8px',
									'&:hover': {
										borderColor: '#111827',
										backgroundColor: '#fff7ed', // Light orange tint
										color: '#111827'
									}
								}}
							>
								Continue with Google
							</Button>

							{/* Open Camera Button */}
							<Button
								variant="contained"
								fullWidth
								startIcon={<CameraAltIcon />}
								onClick={handleOpenCamera}
								sx={{
									backgroundColor: '#111827',
									color: '#fff',
									textTransform: 'none',
									py: 1.5,
									fontWeight: 600,
									borderRadius: '8px',
									boxShadow: 'none',
									'&:hover': {
										backgroundColor: '#111827',
										boxShadow: '0 4px 6px -1px rgba(239, 139, 52, 0.4)',
									}
								}}
							>
								Open Camera to Login
							</Button>
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
						filter: 'brightness(0.85)'
					}}
				>
					{/* Bottom-left quote overlay */}
					<Box
						sx={{
							position: 'absolute',
							top: 535,
							backgroundColor: '#000000',
							padding: '16px 20px',
							borderRadius: '12px'
						}}
					>
						<Typography
							variant="h6"
							sx={{
								color: '#fff',
								fontWeight: 300,
								lineHeight: 1.4
							}}
						>
							Take your business to the next level with B2BIZ Cloud ERP.
						</Typography>
					</Box>
				</Box>
			</Paper>
		</div>
	);
}

export default SignInPage;