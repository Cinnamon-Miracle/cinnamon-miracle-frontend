import { Paper, Box, Typography, styled, useTheme, alpha, IconButton } from '@mui/material';
import { memo } from 'react';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

interface FeaturesWidgetProps {
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

// BACKGROUND IMAGE (green-themed, visible)
const BgImage = styled('img')(() => ({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	objectFit: 'cover',
	opacity: 0.4,             // visible
	filter: 'blur(0.3px)',
	pointerEvents: 'none',
	userSelect: 'none'
}));

// DARK OVERLAY (for clear text)
const DarkLayer = styled(Box)(() => ({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	background: 'rgba(0,0,0,0.65)',
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

function FeaturesWidget({ value = 0 }: FeaturesWidgetProps) {
	const theme = useTheme();

	return (
		<WidgetRoot>

			{/* Background Image */}
			<BgImage
				src="https://plus.unsplash.com/premium_photo-1701180529217-f2270f92f01f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHNhbGVzfGVufDB8fDB8fHww"
				alt="sales-bg"
			/>

			{/* Dark Overlay */}
			<DarkLayer />

			{/* Dots Menu */}
			<MenuDots>
				<IconButton size="small">
					<FuseSvgIcon size={22} color="action">
						heroicons-outline:dots-vertical
					</FuseSvgIcon>
				</IconButton>
			</MenuDots>

			{/* Title */}
			<Typography
				sx={{
					fontSize: '1.45rem',
					fontWeight: 700,
					letterSpacing: '0.01em',
					color: '#fff',     // PURE WHITE
					mb: 1,
					position: 'relative',
					zIndex: 2
				}}
			>
				Total Sales Amount
			</Typography>

			{/* White Number */}
			<Typography
				sx={{
					fontSize: '4.2rem',
					fontWeight: 900,
					lineHeight: 1.1,
					color: '#fff',     // pure white
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

export default memo(FeaturesWidget);
