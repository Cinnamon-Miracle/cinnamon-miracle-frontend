import i18next from 'i18next';
import { FuseNavItemType } from '@fuse/core/FuseNavigation/types/FuseNavItemType';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig: FuseNavItemType[] = [
	{
		id: 'dashboards',
		title: 'Dashboards',
		subtitle: 'Reports & Insights',
		type: 'group',
		icon: 'heroicons-outline:home',
		auth: ['admin'],
		children: [
			{
				id: 'dashboard.main',
				title: 'Dashboard',
				type: 'item',
				icon: 'heroicons-outline:presentation-chart-line',
				url: '/dashboards/project',
				auth: ['admin']
			},
			{
				id: 'dashboard.analytics',
				title: 'Analytics',
				type: 'item',
				icon: 'heroicons-outline:chart-pie',
				url: '/dashboards/analytics',
				auth: ['admin']
			},
			{
				id: 'dashboard.ai',
				title: 'AI Advisor',
				type: 'item',
				icon: 'heroicons-outline:sparkles',
				url: '/dashboards/chatbot',
				auth: ['admin']
			}
		]
	},

	{
		id: 'propertyManagement',
		title: 'Property Management',
		subtitle: 'Property Operations',
		type: 'group',
		icon: 'heroicons-outline:home',
		auth: ['admin'],
		children: [
			{
				id: 'userManagement',
				title: 'User Management',
				type: 'item',
				icon: 'heroicons-outline:user',
				url: '/user-management/users',
				auth: ['admin']
			}
		]
	},

	// ✅ STOCK / PRODUCT SECTION (FLAT)
	{
		id: 'categoryManagement',
		title: 'Category Management',
		type: 'item',
		icon: 'heroicons-outline:tag',
		url: 'stocks/create-category',
		auth: ['admin', 'staff']
	},
	{
		id: 'productCatalog',
		title: 'Product Catalog',
		type: 'item',
		icon: 'heroicons-outline:cube',
		url: 'stocks/vehicle-management',
		auth: ['admin', 'staff']
	},

	// ✅ SALES SECTION (FLAT)
	{
		id: 'salesOverview',
		title: 'Place Orders',
		type: 'item',
		icon: 'heroicons-outline:currency-dollar',
		url: '/web/booking-type',
		auth: ['admin', 'staff']
	},
	{
		id: 'orderManagement',
		title: 'Sales Overview',
		type: 'item',
		icon: 'heroicons-outline:inbox',
		url: '/web/orders',
		auth: ['admin', 'staff']
	},
	{
		id: 'orderInsights',
		title: 'Order Insights',
		type: 'item',
		icon: 'heroicons-outline:document-report',
		url: 'web/orders-details',
		auth: ['admin', 'staff']
	}
	// {
	// 	id: 'ecommerceManagement',
	// 	title: 'Ecommerce Management',
	// 	subtitle: 'Online Store Operations',
	// 	type: 'group',
	// 	icon: 'heroicons-outline:shopping-cart',
	// 	auth: ['admin', 'staff'],
	// 	children: [
	// 		{
	// 			id: 'customers',
	// 			title: 'Customers',
	// 			type: 'item',
	// 			icon: 'heroicons-outline:users',
	// 			url: '/customers'
	// 		},
	// 		{
	// 			id: 'onlineOrders',
	// 			title: 'Online Orders',
	// 			type: 'item',
	// 			icon: 'heroicons-outline:inbox',
	// 			url: '/orders'
	// 		},
	// 		{
	// 			id: 'shipping',
	// 			title: 'Shipping & Delivery',
	// 			type: 'item',
	// 			icon: 'heroicons-outline:truck',
	// 			url: '/shipping'
	// 		}
	// 	]
	// }
];

export default navigationConfig;
