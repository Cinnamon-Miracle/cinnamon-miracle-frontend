import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { useAppSelector } from 'app/store/hooks';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import FuseLoading from '@fuse/core/FuseLoading';
import { selectUser } from 'src/app/auth/user/store/userSlice';
import Button from '@mui/material/Button';
import { useGetProjectDashboardProjectsQuery } from './ProjectDashboardApi';

function ProjectDashboardAppHeader() {
	const { isLoading } = useGetProjectDashboardProjectsQuery();
	const user = useAppSelector(selectUser);

	if (isLoading) return <FuseLoading />;

	return (
		<div
			className="relative flex flex-col w-full px-24 sm:px-32 overflow-hidden"
			style={{
				borderRadius: '16px',
				background: 'transparent',
				minHeight: '260px',
				boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
				position: 'relative'
			}}
		>

			{/* === PURE BACKGROUND IMAGE === */}
			<div
				className="absolute inset-0 z-0"
				style={{
					backgroundImage:
						"url('https://images.unsplash.com/photo-1574586595103-6775e147e412?w=1920&auto=format&fit=crop')",
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat'
				}}
			/>

			{/* === DARK TINT (STRONG) === */}
			<div className="absolute inset-0 bg-black/75 z-[1]" />

			{/* === MAIN CONTENT === */}
			<div className="relative z-[10] flex flex-col sm:flex-row flex-auto sm:items-center min-w-0 my-32 sm:my-48">

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
						alt="user photo"
						src={user?.data?.photoURL}
					>
						{user?.data?.displayName?.[0]}
					</Avatar>

					<div className="flex flex-col min-w-0 mx-16 text-white">
						<Typography
							className="text-2xl md:text-5xl font-semibold tracking-tight leading-7 md:leading-snug truncate"
						>
							Welcome back to <span style={{ color: '#FDB813' }}>{user.data.displayName}</span>!
						</Typography>

						<div className="flex items-center mt-8">
							<FuseSvgIcon size={20} color="inherit">
								heroicons-solid:bell
							</FuseSvgIcon>
							<Typography className="mx-6 leading-6 text-sm sm:text-base text-white/90 truncate">
								"Whenever you see a successful business, someone once made a courageous decision." — Peter F. Drucker
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
							backgroundColor: 'rgba(255,255,255,0.20)',
							backdropFilter: 'blur(10px)',
							color: '#fff',
							border: '1px solid rgba(255,255,255,0.3)',
							'&:hover': { backgroundColor: 'rgba(255,255,255,0.3)' },
							borderRadius: '12px',
							textTransform: 'none'
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
							'&:hover': { backgroundColor: '#facc15' },
							borderRadius: '12px',
							textTransform: 'none',
							fontWeight: 600
						}}
					>
						Settings
					</Button>
				</div>

			</div>
		</div>
	);
}

export default ProjectDashboardAppHeader;
