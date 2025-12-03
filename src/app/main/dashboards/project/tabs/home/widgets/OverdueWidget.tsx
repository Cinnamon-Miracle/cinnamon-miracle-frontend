import { Paper, Box, Typography, styled, useTheme, alpha, IconButton } from '@mui/material';
import { memo } from 'react';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

interface OverdueWidgetProps {
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
	boxShadow: '0 22px 48px -12px rgba(0,0,0,0.12)',
	transition: '0.3s ease',

	'&:hover': {
		transform: 'translateY(-4px)',
		boxShadow: '0 32px 70px -10px rgba(0,0,0,0.18)'
	}
}));

// Background image (stronger & sharp)
const BgImage = styled('img')(() => ({
	position: 'absolute',
	top: 0,
	right: 0,
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	opacity: 0.4,              // more visible
	filter: 'blur(0.3px)',     // very small blur
	pointerEvents: 'none',
	userSelect: 'none'
}));

// Strong dark overlay so text is fully clear
const DarkLayer = styled(Box)(() => ({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	background: 'rgba(0,0,0,0.65)',  // strong dark layer
	pointerEvents: 'none'
}));

const IconWrapper = styled(Box)(({ theme }) => ({
	position: 'absolute',
	top: 12,
	right: 12,
	opacity: 0.7,
	transition: '0.2s ease',

	'&:hover': {
		opacity: 1
	}
}));

function OverdueWidget({ value = 0 }: OverdueWidgetProps) {
	const theme = useTheme();

	return (
		<WidgetRoot>

			{/* Background Image */}
			<BgImage
				src="https://plus.unsplash.com/premium_photo-1663051078919-600b09742917?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9hdG1hbnxlbnwwfHwwfHx8MA%3D%3D"
				alt="boatman"
			/>

			{/* Dark Overlay */}
			<DarkLayer />

			{/* Dots Menu */}
			<IconWrapper>
				<IconButton size="small">
					<FuseSvgIcon size={22} color="action">
						heroicons-outline:dots-vertical
					</FuseSvgIcon>
				</IconButton>
			</IconWrapper>

			{/* Title (100% clear) */}
			<Typography
				sx={{
					fontSize: '1.45rem',
					fontWeight: 700,
					letterSpacing: '0.01em',
					color: '#fff',            // FULL CLEAR WHITE
					mb: 1,
					position: 'relative',
					zIndex: 2
				}}
			>
				Total Boatman Cost
			</Typography>

			{/* Big Value (100% clear) */}
			<Typography
				sx={{
					fontSize: '4.5rem',
					fontWeight: 900,
					lineHeight: 1.1,
					color: '#fff',            // PURE WHITE
					position: 'relative',
					zIndex: 2,
					fontVariantNumeric: 'tabular-nums'
				}}
			>
				{value.toLocaleString('en-US', {
					style: 'currency',
					currency: 'LKR',
					maximumFractionDigits: 0
				})}
			</Typography>

		</WidgetRoot>
	);
}

export default memo(OverdueWidget);
