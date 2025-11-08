import i18next from 'i18next';
import { FuseNavItemType } from '@fuse/core/FuseNavigation/types/FuseNavItemType';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

/**
 * The navigationConfig object is an array of navigation items for the Fuse application.
 */
const navigationConfig: FuseNavItemType[] = [
	{
		id: 'dashboards',
		title: 'Dashboards',
		subtitle: 'Reports generations',
		type: 'group',
		icon: 'heroicons-outline:home',
		translate: 'DASHBOARDS',
		auth: ['admin'], // Show only to 'admin'
		children: [
			{
				id: 'dashboards.project',
				title: 'Dashboard',
				type: 'item',
				icon: 'heroicons-outline:presentation-chart-line',
				url: '/dashboards/project',
				auth: ['admin'] // Restrict to 'admin' only
			},
			{
				id: 'dashboards.analytics',
				title: 'Analytics',
				type: 'item',
				icon: 'heroicons-outline:chart-pie',
				url: '/dashboards/analytics',
				auth: ['admin'] // Restrict to 'admin' only
			},
			{
				id: 'dashboards.finance',
				title: 'ChatBot',
				type: 'item',
				icon: 'heroicons-outline:heart',
				url: '/dashboards/chatbot',
				auth: ['admin'] // Restrict to 'admin' only
			}
		]
	},
	{
		id: 'propertymanagement',
		title: 'Property Management',
		type: 'group',
		icon: 'heroicons-outline:home',
		translate: 'PROPERTY_MANAGEMENT',
		subtitle: 'Business Properties Management',
		auth: ['admin'], // Show only to 'admin'
		children: [
			{
				id: 'propertymanagement.users',
				title: 'Users',
				type: 'item',
				icon: 'heroicons-outline:user',
				url: '/user-management/users',
				translate: 'USERS',
				auth: ['admin'] // Restrict to 'admin' only
			}
		]
	},
	{
		id: 'stockManagement',
		title: 'Stock Management',
		type: 'collapse',
		icon: 'heroicons-outline:clipboard',
		translate: 'STOCK_MANAGEMENT',
		auth: ['admin', 'staff'], // Visible to both admin and staff
		children: [
			// {
			// 	id: 'stockManagement.suppliers',
			// 	title: 'Recieved Stocks',
			// 	type: 'item',
			// 	icon: 'heroicons-outline:truck',
			// 	url: 'stocks/received-stocks'
			// },
			{
				id: 'stockManagement.categories',
				title: 'Create Categories',
				type: 'item',
				icon: 'heroicons-outline:tag',
				url: 'stocks/create-category'
			},
			{
				id: 'stockManagement.product',
				title: 'Product Management',
				type: 'item',
				icon: 'heroicons-outline:cube',
				url: 'stocks/vehicle-management'
			}
		]
	},
	{
		id: 'salesManagement',
		title: 'Sales Management',
		type: 'collapse',
		icon: 'heroicons-outline:bookmark',
		translate: 'SALES_MANAGEMENT',
		auth: ['admin', 'staff'], // Visible to both admin and staff
		children: [
			{
				id: 'salesManagement.bookings',
				title: 'Sales',
				type: 'item',
				icon: 'heroicons-outline:currency-dollar',
				url: '/web/booking-type'
			},
			{
				id: 'salesManagement.orders',
				title: 'Orders',
				type: 'item',
				icon: 'heroicons-outline:inbox',
				url: '/web/orders'
			},
			{
				id: 'salesManagement.orderDetails',
				title: 'Order Details',
				type: 'item',
				icon: 'heroicons-outline:document-report',
				url: 'web/orders-details'
			}
		]
	}
];

export default navigationConfig;