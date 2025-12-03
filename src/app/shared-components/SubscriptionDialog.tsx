import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

interface SubscriptionDialogProps {
	open: boolean;
	onClose: () => void;
	navigationTitle?: string;
}

function SubscriptionDialog({ open, onClose, navigationTitle }: SubscriptionDialogProps) {
	const theme = useTheme();

	return (
		<Dialog
			open={open}
			onClose={onClose}
			maxWidth="sm"
			fullWidth
			PaperProps={{
				sx: {
					borderRadius: 4,
					background: '#17212e',
					color: '#fff',
					p: 1,
					boxShadow: '0 0 60px rgba(0,0,0,0.7)',
					fontFamily: theme.typography.fontFamily
				}
			}}
		>
			{/* TITLE */}
			<DialogTitle sx={{ pb: 3 }}>
				<Typography
					variant="h4"
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: 1.5,
						fontWeight: 800,
						fontSize: '2.0rem',
						letterSpacing: '0.5px',
						color: '#fff',
						fontFamily: theme.typography.fontFamily
					}}
				>
					{/* Inline SVG icon to ensure it renders without external imports */}
					<svg
						width="36"
						height="36"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						style={{ color: '#fff', flexShrink: 0 }}
						aria-hidden="true"
					>
						<path
							d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
							fill="none"
						/>
						<path
							d="M12 9v4"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M12 17h.01"
							stroke="currentColor"
							strokeWidth="1.5"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
					Subscription Required !
				</Typography>
			</DialogTitle>

			{/* CONTENT */}
			<DialogContent sx={{ pt: 1 }}>
				<Typography
					variant="body1"
					sx={{
						fontSize: '18px',
						lineHeight: 1.6,
						fontWeight: 500,
						fontFamily: theme.typography.fontFamily
					}}
				>
					{navigationTitle
						? `This feature is not available in your current subscription plan. (${navigationTitle})`
						: 'This feature is not available in your current subscription plan.'}
				</Typography>

				<Typography
					sx={{
						mt: 2,
						opacity: 0.85,
						fontSize: '17px',
						lineHeight: 1.55,
						fontFamily: theme.typography.fontFamily
					}}
				>
					Please contact your administrator to upgrade your subscription and unlock this feature.
				</Typography>
			</DialogContent>

			{/* ACTIONS */}
			<DialogActions
				sx={{
					px: 2,
					pb: 1,
					pt: 0.8,
					display: 'flex',
					justifyContent: 'flex-end',
					gap: 2.5
				}}
			>
				<Button
					onClick={onClose}
					variant="outlined"
					sx={{
						borderColor: 'rgba(255,255,255,0.45)',
						color: '#fff',
						minWidth: 130,
						fontSize: '15px',
						borderWidth: 2,
						fontWeight: 700,
						fontFamily: theme.typography.fontFamily,
						'&:hover': {
							borderColor: '#fff'
						}
					}}
				>
					CLOSE
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default SubscriptionDialog;
