import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useAppSelector } from 'app/store/hooks';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import FuseLoading from '@fuse/core/FuseLoading';
import { selectUser } from 'src/app/auth/user/store/userSlice';
import { useGetProjectDashboardProjectsQuery } from './ProjectDashboardApi';
import Button from '@mui/material/Button';

/**
 * The ProjectDashboardAppHeader page.
 */
function ProjectDashboardAppHeader() {
	const { isLoading } = useGetProjectDashboardProjectsQuery();
	const user = useAppSelector(selectUser);

	if (isLoading) {
		return <FuseLoading />;
	}

	return (
		<div
			className="relative flex flex-col w-full px-24 sm:px-32 overflow-hidden"
			style={{
				borderRadius: '16px',
				background: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%)',
				minHeight: '260px',
				boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
			}}
		>
			{/* === WAVE LAYERS === */}
			<div
				className="absolute inset-0 opacity-40"
				style={{
					background: 'radial-gradient(circle at 20% 80%, #60a5fa 0%, transparent 50%)',
					animation: 'pulse 6s ease-in-out infinite'
				}}
			/>
			<div
				className="absolute bottom-0 left-0 w-full h-32"
				style={{
					background: 'linear-gradient(transparent, rgba(255,255,255,0.1))'
				}}
			/>

			{/* Wave Layer 1 */}
			<div
				className="absolute bottom-0 w-full h-48 opacity-60"
				style={{
					background: 'linear-gradient(90deg, #3b82f6, #60a5fa, #93c5fd)',
					borderRadius: '100% 100% 0 0',
					transform: 'translateY(50%)',
					animation: 'wave1 8s ease-in-out infinite'
				}}
			/>

			{/* Wave Layer 2 (faster) */}
			<div
				className="absolute bottom-0 w-full h-40 opacity-40"
				style={{
					background: 'linear-gradient(90deg, #60a5fa, #93c5fd, #dbeafe)',
					borderRadius: '100% 100% 0 0',
					transform: 'translateY(40%)',
					animation: 'wave2 6s ease-in-out infinite reverse'
				}}
			/>

			{/* Glass Overlay */}
			<div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

			{/* === MAIN CONTENT === */}
			<div className="relative z-10 flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 my-32 sm:my-48">
				{/* User Greeting */}
				<div className="flex flex-auto items-center min-w-0">
					<Avatar
						sx={{
							background: 'rgba(255,255,255,0.15)',
							backdropFilter: 'blur(8px)',
							color: '#ffffff',
							width: 64,
							height: 64,
							fontSize: '2rem',
							fontWeight: 600,
							border: '2px solid rgba(255,255,255,0.3)'
						}}
						className="flex-0"
						alt="user photo"
						src={user?.data?.photoURL}
					>
						{user?.data?.displayName?.[0]}
					</Avatar>

					<div className="flex flex-col min-w-0 mx-16 text-white">
						<Typography
							className="text-2xl md:text-5xl font-semibold tracking-tight leading-7 md:leading-snug truncate"
							component="div"
						>
							{`Welcome back to, `}
							<span style={{ color: '#FDB813' }}>{user.data.displayName}</span>!
						</Typography>

						<div className="flex items-center mt-8">
							<FuseSvgIcon
								size={20}
								color="inherit"
							>
								heroicons-solid:bell
							</FuseSvgIcon>
							<Typography className="mx-6 leading-6 text-sm sm:text-base text-white/90 truncate">
								"Whenever you see a successful business, someone once made a courageous decision." ―
								Peter F. Drucker
							</Typography>
						</div>
					</div>
				</div>

				{/* Action Buttons */}
				<div className="flex items-center mt-24 sm:mt-0 sm:mx-8 space-x-12">
					<Button
						className="whitespace-nowrap px-24 py-12 text-sm font-medium"
						variant="contained"
						startIcon={<FuseSvgIcon size={20}>heroicons-solid:mail</FuseSvgIcon>}
						sx={{
							backgroundColor: 'rgba(255,255,255,0.2)',
							backdropFilter: 'blur(10px)',
							color: '#fff',
							border: '1px solid rgba(255,255,255,0.3)',
							'&:hover': {
								backgroundColor: 'rgba(255,255,255,0.3)',
								transform: 'translateY(-1px)'
							},
							borderRadius: '12px',
							textTransform: 'none',
							boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
						}}
					>
						Messages
					</Button>

					<Button
						className="whitespace-nowrap px-24 py-12 text-sm font-medium"
						variant="contained"
						startIcon={<FuseSvgIcon size={20}>heroicons-solid:cog</FuseSvgIcon>}
						sx={{
							backgroundColor: '#FDB813',
							color: '#1e293b',
							'&:hover': {
								backgroundColor: '#facc15',
								transform: 'translateY(-1px)'
							},
							borderRadius: '12px',
							textTransform: 'none',
							fontWeight: 600,
							boxShadow: '0 4px 16px rgba(253, 184, 19, 0.4)'
						}}
					>
						Settings
					</Button>
				</div>
			</div>

			{/* === CSS ANIMATIONS === */}
			<style jsx>{`
				@keyframes wave1 {
					0%,
					100% {
						transform: translateY(50%) translateX(-10%);
					}
					50% {
						transform: translateY(50%) translateX(10%);
					}
				}

				@keyframes wave2 {
					0%,
					100% {
						transform: translateY(40%) translateX(5%);
					}
					50% {
						transform: translateY(40%) translateX(-5%);
					}
				}

				@keyframes pulse {
					0%,
					100% {
						opacity: 0.3;
					}
					50% {
						opacity: 0.5;
					}
				}
			`}</style>
		</div>
	);
}

export default ProjectDashboardAppHeader;
