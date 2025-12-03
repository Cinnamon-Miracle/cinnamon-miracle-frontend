import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { alpha, styled } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import clsx from 'clsx';
import { useMemo } from 'react';
import { ListItemButton, ListItemButtonProps } from '@mui/material';
import FuseNavBadge from '../../FuseNavBadge';
import FuseSvgIcon from '../../../FuseSvgIcon';
import { FuseNavItemComponentProps } from '../../FuseNavItem';
import { useSubscription } from 'app/contexts/SubscriptionContext';

type ListItemButtonStyleProps = ListItemButtonProps & {
	itempadding: number;
};

const Root = styled(ListItemButton)<ListItemButtonStyleProps>(({ theme, ...props }) => ({
	minHeight: 44,
	width: '100%',
	borderRadius: '6px',
	margin: '0 0 4px 0',
	paddingRight: 16,
	paddingLeft: props.itempadding > 80 ? 80 : props.itempadding,
	paddingTop: 10,
	paddingBottom: 10,
	color: alpha(theme.palette.text.primary, 0.7),
	cursor: 'pointer',
	textDecoration: 'none!important',
	'&:hover': {
		color: theme.palette.text.primary
	},
	'&.active': {
		color: theme.palette.text.primary,
		backgroundColor:
			theme.palette.mode === 'light' ? 'rgba(0, 0, 0, .05)!important' : 'rgba(255, 255, 255, .1)!important',
		pointerEvents: 'none',
		transition: 'border-radius .15s cubic-bezier(0.4,0.0,0.2,1)',
		'& > .fuse-list-item-text-primary': {
			color: 'inherit'
		},
		'& > .fuse-list-item-icon': {
			color: 'inherit'
		}
	},
	'& >.fuse-list-item-icon': {
		marginRight: 16,
		color: 'inherit'
	},
	'& > .fuse-list-item-text': {}
}));

/**
 * FuseNavVerticalItem is a React component used to render FuseNavItem as part of the Fuse navigational component.
 */
function FuseNavVerticalItem(props: FuseNavItemComponentProps) {
	const { item, nestedLevel = 0, onItemClick, checkPermission } = props;
	const { checkNavigationAccess, showSubscriptionDialog } = useSubscription();

	const itempadding = nestedLevel > 0 ? 38 + nestedLevel * 16 : 16;

	// Check if item is restricted by subscription
	const isRestricted = item.requiresSubscription && !checkNavigationAccess(item.id);

	// If item is restricted, use 'li' instead of NavLinkAdapter to prevent navigation
	const component = isRestricted ? 'li' : (item.url ? NavLinkAdapter : 'li');

	let itemProps = {};

	// Only add navigation props if not restricted
	if (typeof component !== 'string' && !isRestricted) {
		itemProps = {
			disabled: item.disabled,
			to: item.url || '',
			end: item.end,
			role: 'button'
		};
	}

	if (checkPermission && !item?.hasPermission) {
		return null;
	}

	/**
	 * Handle navigation item click
	 * Check if item requires subscription and user has access
	 */
	const handleClick = (event: React.MouseEvent) => {
		// Check if item requires subscription
		if (item.requiresSubscription && !checkNavigationAccess(item.id)) {
			event.preventDefault();
			event.stopPropagation();
			showSubscriptionDialog();
			return;
		}

		// Call original onItemClick if provided
		if (onItemClick) {
			onItemClick(item);
		}
	};

	return useMemo(
		() => (
			<Root
				component={component}
				className={clsx('fuse-list-item', item.active && 'active')}
				onClick={handleClick}
				itempadding={itempadding}
				sx={item.sx}
				{...itemProps}
			>
				{item.icon && (
					<FuseSvgIcon
						className={clsx('fuse-list-item-icon shrink-0', item.iconClass)}
						color="action"
					>
						{item.icon}
					</FuseSvgIcon>
				)}

				<ListItemText
					className="fuse-list-item-text"
					primary={item.title}
					secondary={item.subtitle}
					classes={{
						primary: 'text-13 font-medium fuse-list-item-text-primary truncate',
						secondary: 'text-11 font-medium fuse-list-item-text-secondary leading-normal truncate'
					}}
				/>
				{item.badge && <FuseNavBadge badge={item.badge} />}
			</Root>
		),
		[item, itempadding, handleClick, component, isRestricted]
	);
}

const NavVerticalItem = FuseNavVerticalItem;

export default NavVerticalItem;
