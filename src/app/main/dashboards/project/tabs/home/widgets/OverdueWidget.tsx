import { Paper, Box, Typography, styled, useTheme, alpha, IconButton } from '@mui/material';
import { memo } from 'react';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

interface OverdueWidgetProps {
	value?: number;
}

// Styled root matching the new design system
const WidgetRoot = styled(Paper)(({ theme }) => ({
	position: 'relative',
	borderRadius: '24px',
	padding: theme.spacing(3, 4),
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	textAlign: 'center',
	minHeight: '180px',
	boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
	border: `1px solid ${theme.palette.divider}`,
	backgroundColor: '#ffffff',
	transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
	overflow: 'hidden',
	// RED accent at the BOTTOM
	borderBottom: `8px solid ${theme.palette.error.main}`,
	'&:hover': {
		transform: 'translateY(-5px)',
		boxShadow: '0 16px 32px rgba(0,0,0,0.12)'
	}
}));

const IconWrapper = styled(Box)(({ theme }) => ({
	position: 'absolute',
	top: 16,
	right: 16,
	opacity: 0.5
}));

function OverdueWidget({ value = 0 }: OverdueWidgetProps) {
	const theme = useTheme();

	return (
		<WidgetRoot>
			<IconWrapper>
				<IconButton size="small">
					<FuseSvgIcon
						size={20}
						color="action"
					>
						heroicons-outline:dots-vertical
					</FuseSvgIcon>
				</IconButton>
			</IconWrapper>

			{/* Red Visual Anchor Icon */}
			<Box
				sx={{
					mb: 2,
					p: 1.5,
					borderRadius: '50%',
					bgcolor: alpha(theme.palette.error.main, 0.1),
					color: theme.palette.error.main,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center'
				}}
			>
				<FuseSvgIcon size={32}>heroicons-outline:currency-dollar</FuseSvgIcon>
			</Box>

			<Typography
				sx={{
					fontSize: '1.1rem',
					fontWeight: 800,
					textTransform: 'uppercase',
					letterSpacing: '0.05em',
					color: 'text.secondary',
					mb: 1
				}}
			>
				Total Boatman Cost
			</Typography>

			<Typography
				sx={{
					fontSize: '2.8rem', // Large for readability
					fontWeight: 900,
					lineHeight: 1,
					color: theme.palette.error.dark, // Dark red for good contrast
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
