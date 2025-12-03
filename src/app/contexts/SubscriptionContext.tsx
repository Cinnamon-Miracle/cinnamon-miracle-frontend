import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import SubscriptionDialog from 'app/shared-components/SubscriptionDialog';

/**
 * Subscription Context Type
 */
interface SubscriptionContextType {
	allowedNavigationIds: string[];
	checkNavigationAccess: (navigationId: string) => boolean;
	showSubscriptionDialog: () => void;
	hideSubscriptionDialog: () => void;
	isDialogOpen: boolean;
}

/**
 * Subscription Context
 */
const SubscriptionContext = createContext<SubscriptionContextType | undefined>(undefined);

/**
 * Subscription Provider Props
 */
interface SubscriptionProviderProps {
	children: ReactNode;
}

/**
 * Subscription Provider Component
 * 
 * Manages subscription-based access control for navigation items.
 * Currently uses a hardcoded list of allowed navigation IDs.
 * 
 * TODO: Fetch subscription data from backend API based on user's subscription plan
 */
export function SubscriptionProvider({ children }: SubscriptionProviderProps) {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	/**
	 * List of navigation IDs that are accessible with the current subscription
	 * 
	 * Core features (always accessible):
	 * - dashboards: Dashboard, Analytics, AI Advisor
	 * - propertymanagement: Users management
	 * - stockManagement: Categories, Product Management
	 * - salesManagement: Sales, Orders, Order Details
	 * 
	 * Premium features (require subscription upgrade):
	 * - finance, banking, hr, crm, procurement, warehouse, manufacturing,
	 *   assets, projects, reports, documents, communication, quality,
	 *   integrations, billing, ai
	 */
	const allowedNavigationIds = [
		'dashboards',
		'dashboards.project',
		'dashboards.analytics',
		'dashboards.finance',
		'propertymanagement',
		'propertymanagement.users',
		'stockManagement',
		'stockManagement.categories',
		'stockManagement.product',
		'salesManagement',
		'salesManagement.bookings',
		'salesManagement.orders',
		'salesManagement.orderDetails'
	];

	/**
	 * Check if a navigation item is accessible based on subscription
	 */
	const checkNavigationAccess = useCallback(
		(navigationId: string): boolean => {
			// Check if the exact ID is in the allowed list
			if (allowedNavigationIds.includes(navigationId)) {
				return true;
			}

			// Check if any parent ID is in the allowed list
			// For example, if 'stockManagement' is allowed, then 'stockManagement.categories' is also allowed
			const parentId = navigationId.split('.')[0];
			return allowedNavigationIds.includes(parentId);
		},
		[allowedNavigationIds]
	);

	/**
	 * Show the subscription access dialog
	 */
	const showSubscriptionDialog = useCallback(() => {
		setIsDialogOpen(true);
	}, []);

	/**
	 * Hide the subscription access dialog
	 */
	const hideSubscriptionDialog = useCallback(() => {
		setIsDialogOpen(false);
	}, []);

	const value: SubscriptionContextType = {
		allowedNavigationIds,
		checkNavigationAccess,
		showSubscriptionDialog,
		hideSubscriptionDialog,
		isDialogOpen
	};

	return (
		<SubscriptionContext.Provider value={value}>
			{children}
			<SubscriptionDialog
				open={isDialogOpen}
				onClose={hideSubscriptionDialog}
			/>
		</SubscriptionContext.Provider>
	);
}

/**
 * Hook to use Subscription Context
 */
export function useSubscription(): SubscriptionContextType {
	const context = useContext(SubscriptionContext);

	if (!context) {
		throw new Error('useSubscription must be used within a SubscriptionProvider');
	}

	return context;
}
