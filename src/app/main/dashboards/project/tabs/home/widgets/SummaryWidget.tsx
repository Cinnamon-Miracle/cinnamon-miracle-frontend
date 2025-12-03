import { Paper, Box, Typography, styled, useTheme, IconButton } from '@mui/material';
import { memo } from 'react';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

interface SummaryWidgetProps {
	value?: number;
}

const WidgetRoot = styled(Paper)(({ theme }) => ({
	position: 'relative',
	borderRadius: '22px',
	padding: theme.spacing(4, 4),
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'flex-start',
	justifyContent: 'center',
	background: '#ffffff',
	overflow: 'hidden',
	boxShadow: '0 20px 45px -12px rgba(0,0,0,0.12)',
	transition: '0.3s ease',

	'&:hover': {
		transform: 'translateY(-4px)',
		boxShadow: '0 30px 70px -10px rgba(0,0,0,0.18)'
	}
}));

// Background Unsplash Image (visible + premium)
const BgImage = styled('img')(() => ({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	opacity: 0.4, // clear image
	filter: 'blur(0.3px)', // soft premium blur
	pointerEvents: 'none',
	userSelect: 'none'
}));

const DarkLayer = styled(Box)(() => ({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	background: 'rgba(0,0,0,0.75)', // strong dark layer
	pointerEvents: 'none'
}));

const MenuDots = styled(Box)(({ theme }) => ({
	position: 'absolute',
	top: 12,
	right: 12,
	opacity: 0.65,
	transition: '0.2s ease',
	zIndex: 3,

	'&:hover': {
		opacity: 1
	}
}));

function SummaryWidget({ value = 0 }: SummaryWidgetProps) {
	const theme = useTheme();

	return (
		<WidgetRoot>
			{/* Background Image */}
			<BgImage
				src="https://plus.unsplash.com/premium_photo-1723874462909-99abb7ff12d3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fHNyaWxhbmthfGVufDB8fDB8fHww"
				alt="groups-bg"
			/>

			{/* Dark overlay */}
			<DarkLayer />

			{/* Menu dots */}
			<MenuDots>
				<IconButton size="small">
					<FuseSvgIcon
						size={22}
						color="action"
					>
						heroicons-outline:dots-vertical
					</FuseSvgIcon>
				</IconButton>
			</MenuDots>

			{/* Title */}
			<Typography
				sx={{
					fontSize: '1.4rem',
					fontWeight: 700,
					letterSpacing: '0.01em',
					color: '#fff', // full white
					mb: 1,
					position: 'relative',
					zIndex: 2
				}}
			>
				Total Groups
			</Typography>

			{/* Large number */}
			<Typography
				sx={{
					fontSize: '4.5rem',
					fontWeight: 900,
					lineHeight: 1,
					color: '#fff', // pure white
					position: 'relative',
					zIndex: 2,
					fontVariantNumeric: 'tabular-nums'
				}}
			>
				{value}
			</Typography>
		</WidgetRoot>
	);
}

export default memo(SummaryWidget);
