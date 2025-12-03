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
				title: 'AI Advisor',
				type: 'item',
				icon: 'heroicons-outline:sparkles',
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
	},

	/* ---------------------------
	   Enterprise additions START
	   (full, comprehensive ERP)
	   --------------------------- */

	// FINANCE & ACCOUNTING
	{
		id: 'finance',
		title: 'Finance & Accounting',
		type: 'collapse',
		icon: 'heroicons-outline:receipt-tax',
		translate: 'FINANCE',
		auth: ['admin', 'finance'],
		requiresSubscription: true,
		children: [
			{
				id: 'finance.dashboard',
				title: 'Finance Dashboard',
				type: 'item',
				icon: 'heroicons-outline:chart-square-bar',
				url: '/finance/dashboard'
			},
			{
				id: 'finance.invoices',
				title: 'Invoices',
				type: 'item',
				icon: 'heroicons-outline:document-text',
				url: '/finance/invoices'
			},
			{
				id: 'finance.payments',
				title: 'Payments',
				type: 'item',
				icon: 'heroicons-outline:credit-card',
				url: '/finance/payments'
			},
			{
				id: 'finance.expenses',
				title: 'Expenses',
				type: 'item',
				icon: 'heroicons-outline:minus-circle',
				url: '/finance/expenses'
			},
			{
				id: 'finance.budgets',
				title: 'Budgets',
				type: 'item',
				icon: 'heroicons-outline:calculator',
				url: '/finance/budgets'
			},
			{
				id: 'finance.reports',
				title: 'Financial Reports',
				type: 'item',
				icon: 'heroicons-outline:chart-bar',
				url: '/finance/reports'
			},
			{
				id: 'finance.tax',
				title: 'Tax Management',
				type: 'item',
				icon: 'heroicons-outline:currency-euro',
				url: '/finance/tax'
			},
			{
				id: 'finance.reconciliation',
				title: 'Bank Reconciliation',
				type: 'item',
				icon: 'heroicons-outline:refresh',
				url: '/finance/reconciliation'
			}
		]
	},

	// BANKING
	{
		id: 'banking',
		title: 'Banking',
		type: 'collapse',
		icon: 'heroicons-outline:credit-card',
		requiresSubscription: true, // VALID
		children: [
			{
				id: 'banking.accounts',
				title: 'Bank Accounts',
				type: 'item',
				icon: 'heroicons-outline:wallet', // FIXED
				url: '/banking/accounts'
			},
			{
				id: 'banking.transactions',
				title: 'Transactions',
				type: 'item',
				icon: 'heroicons-outline:arrows-right-left', // FIXED
				url: '/banking/transactions'
			},
			{
				id: 'banking.integration',
				title: 'Bank Integrations',
				type: 'item',
				icon: 'heroicons-outline:cloud', // VALID
				url: '/banking/integrations'
			}
		]
	},

	// HUMAN RESOURCES
	{
		id: 'hr',
		title: 'Human Resources',
		type: 'collapse',
		icon: 'heroicons-outline:user-group',
		requiresSubscription: true, // VALID
		children: [
			{
				id: 'hr.employees',
				title: 'Employees',
				type: 'item',
				icon: 'heroicons-outline:identification', // FIXED
				url: '/hr/employees'
			},
			{
				id: 'hr.attendance',
				title: 'Attendance & Time',
				type: 'item',
				icon: 'heroicons-outline:calendar-days', // FIXED
				url: '/hr/attendance'
			},
			{
				id: 'hr.timesheets',
				title: 'Timesheets',
				type: 'item',
				icon: 'heroicons-outline:clock', // VALID
				url: '/hr/timesheets'
			},
			{
				id: 'hr.payroll',
				title: 'Payroll',
				type: 'item',
				icon: 'heroicons-outline:banknotes', // FIXED
				url: '/hr/payroll'
			},
			{
				id: 'hr.recruitment',
				title: 'Recruitment',
				type: 'item',
				icon: 'heroicons-outline:user-plus', // VALID
				url: '/hr/recruitment'
			},
			{
				id: 'hr.training',
				title: 'Learning & Training',
				type: 'item',
				icon: 'heroicons-outline:academic-cap', // VALID
				url: '/hr/training'
			},
			{
				id: 'hr.performance',
				title: 'Performance Reviews',
				type: 'item',
				icon: 'heroicons-outline:star', // VALID
				url: '/hr/performance'
			},
			{
				id: 'hr.expenses',
				title: 'Expense Claims',
				type: 'item',
				icon: 'heroicons-outline:receipt-refund', // FIXED
				url: '/hr/expenses'
			}
		]
	},

	// CRM
	{
		id: 'crm',
		title: 'CRM',
		type: 'collapse',
		icon: 'heroicons-outline:users',
		requiresSubscription: true, // VALID
		children: [
			{
				id: 'crm.leads',
				title: 'Leads',
				type: 'item',
				icon: 'heroicons-outline:user-plus', // VALID
				url: '/crm/leads'
			},
			{
				id: 'crm.opportunities',
				title: 'Opportunities',
				type: 'item',
				icon: 'heroicons-outline:chart-line-up', // FIXED
				url: '/crm/opportunities'
			},
			{
				id: 'crm.accounts',
				title: 'Accounts',
				type: 'item',
				icon: 'heroicons-outline:user-circle', // VALID
				url: '/crm/accounts'
			},
			{
				id: 'crm.contacts',
				title: 'Contacts',
				type: 'item',
				icon: 'heroicons-outline:phone', // VALID
				url: '/crm/contacts'
			},
			{
				id: 'crm.activities',
				title: 'Activities',
				type: 'item',
				icon: 'heroicons-outline:calendar', // VALID
				url: '/crm/activities'
			},
			{
				id: 'crm.caseManagement',
				title: 'Case Management',
				type: 'item',
				icon: 'heroicons-outline:exclamation-triangle', // VALID
				url: '/crm/cases'
			}
		]
	},

	// PURCHASE & PROCUREMENT
	{
		id: 'procurement',
		title: 'Procurement',
		type: 'collapse',
		icon: 'heroicons-outline:shopping-cart',
		translate: 'PROCUREMENT',
		auth: ['admin', 'purchasing'],
		requiresSubscription: true,
		children: [
			{
				id: 'procurement.suppliers',
				title: 'Suppliers',
				type: 'item',
				icon: 'heroicons-outline:truck',
				url: '/procurement/suppliers'
			},
			{
				id: 'procurement.purchaseOrders',
				title: 'Purchase Orders',
				type: 'item',
				icon: 'heroicons-outline:clipboard-check',
				url: '/procurement/purchase-orders'
			},
			{
				id: 'procurement.requests',
				title: 'Requests for Quotation',
				type: 'item',
				icon: 'heroicons-outline:document-search',
				url: '/procurement/rfqs'
			},
			{
				id: 'procurement.contracts',
				title: 'Contracts',
				type: 'item',
				icon: 'heroicons-outline:document-text',
				url: '/procurement/contracts'
			}
		]
	},

	// WAREHOUSE & INVENTORY (advanced)
	{
		id: 'warehouse',
		title: 'Warehouse & Logistics',
		type: 'collapse',
		icon: 'heroicons-outline:archive',
		requiresSubscription: true,
		children: [
			{
				id: 'warehouse.locations',
				title: 'Locations',
				type: 'item',
				icon: 'heroicons-outline:map-pin', // VALID
				url: '/warehouse/locations'
			},
			{
				id: 'warehouse.stockAdjustment',
				title: 'Stock Adjustment',
				type: 'item',
				icon: 'heroicons-outline:adjustments-horizontal', // VALID
				url: '/warehouse/stock-adjustment'
			},
			{
				id: 'warehouse.transfer',
				title: 'Transfers',
				type: 'item',
				icon: 'heroicons-outline:arrow-path', // VALID
				url: '/warehouse/transfers'
			},
			{
				id: 'warehouse.returns',
				title: 'Returns (RMA)',
				type: 'item',
				icon: 'heroicons-outline:arrow-uturn-left', // FIXED
				url: '/warehouse/returns'
			},
			{
				id: 'warehouse.kitting',
				title: 'Kitting & Bundles',
				type: 'item',
				icon: 'heroicons-outline:archive-box-arrow-down', // FIXED
				url: '/warehouse/kitting'
			}
		]
	},

	// MANUFACTURING / MRP
	{
		id: 'manufacturing',
		title: 'Manufacturing (MRP)',
		type: 'collapse',
		icon: 'heroicons-outline:cog',
		requiresSubscription: true,
		children: [
			{
				id: 'mrp.bom',
				title: 'Bill of Materials',
				type: 'item',
				icon: 'heroicons-outline:clipboard-document-list', // FIXED
				url: '/mrp/bom'
			},
			{
				id: 'mrp.workOrders',
				title: 'Work Orders',
				type: 'item',
				icon: 'heroicons-outline:briefcase', // FIXED
				url: '/mrp/work-orders'
			},
			{
				id: 'mrp.inventoryPlanning',
				title: 'Material Planning',
				type: 'item',
				icon: 'heroicons-outline:squares-2x2', // VALID
				url: '/mrp/planning'
			},
			{
				id: 'mrp.shopfloor',
				title: 'Shop Floor Control',
				type: 'item',
				icon: 'heroicons-outline:computer-desktop', // VALID
				url: '/mrp/shopfloor'
			}
		]
	},

	// ASSET MANAGEMENT
	{
		id: 'assets',
		title: 'Asset Management',
		type: 'collapse',
		icon: 'heroicons-outline:server',
		translate: 'ASSETS',
		auth: ['admin', 'maintenance'],
		requiresSubscription: true,
		children: [
			{
				id: 'assets.assetsList',
				title: 'Assets Register',
				type: 'item',
				icon: 'heroicons-outline:collection',
				url: '/assets/list'
			},
			{
				id: 'assets.maintenance',
				title: 'Maintenance',
				type: 'item',
				icon: 'heroicons-outline:wrench',
				url: '/assets/maintenance'
			},
			{
				id: 'assets.depreciation',
				title: 'Depreciation',
				type: 'item',
				icon: 'heroicons-outline:trending-down',
				url: '/assets/depreciation'
			}
		]
	},

	// PROJECT MANAGEMENT
	{
		id: 'projects',
		title: 'Project Management',
		type: 'collapse',
		icon: 'heroicons-outline:briefcase', // FIXED ICON
		translate: 'PROJECTS',
		auth: ['admin', 'pm'],
		children: [
			{
				id: 'projects.overview',
				title: 'Overview',
				type: 'item',
				icon: 'heroicons-outline:chart-pie',
				url: '/projects/overview'
			},
			{
				id: 'projects.tasks',
				title: 'Tasks',
				type: 'item',
				icon: 'heroicons-outline:clipboard',
				url: '/projects/tasks'
			},
			{
				id: 'projects.gantt',
				title: 'Gantt',
				type: 'item',
				icon: 'heroicons-outline:chart-bar',
				url: '/projects/gantt'
			},
			{
				id: 'projects.budgets',
				title: 'Project Billing',
				type: 'item',
				icon: 'heroicons-outline:cash',
				url: '/projects/billing'
			}
		]
	},

	// REPORTS & BI
	{
		id: 'reports',
		title: 'Reports & BI',
		type: 'collapse',
		icon: 'heroicons-outline:document-report',
		translate: 'REPORTS',
		auth: ['admin', 'analyst'],
		requiresSubscription: true,
		children: [
			{
				id: 'reports.standard',
				title: 'Standard Reports',
				type: 'item',
				icon: 'heroicons-outline:document-text',
				url: '/reports/standard'
			},
			{
				id: 'reports.custom',
				title: 'Custom Reports',
				type: 'item',
				icon: 'heroicons-outline:adjustments',
				url: '/reports/custom'
			},
			{
				id: 'reports.analytics',
				title: 'Analytics Studio',
				type: 'item',
				icon: 'heroicons-outline:chart-pie',
				url: '/reports/analytics'
			},
			{
				id: 'reports.scheduler',
				title: 'Report Scheduler',
				type: 'item',
				icon: 'heroicons-outline:clock',
				url: '/reports/scheduler'
			}
		]
	},

	// DOCUMENT MANAGEMENT
	{
		id: 'documents',
		title: 'Document Management',
		type: 'collapse',
		icon: 'heroicons-outline:folder',
		translate: 'DOCUMENTS',
		auth: ['admin', 'staff'],
		requiresSubscription: true,
		children: [
			{
				id: 'documents.repo',
				title: 'Repository',
				type: 'item',
				icon: 'heroicons-outline:folder-open',
				url: '/documents/repository'
			},
			{
				id: 'documents.templates',
				title: 'Templates',
				type: 'item',
				icon: 'heroicons-outline:document-duplicate',
				url: '/documents/templates'
			},
			{
				id: 'documents.approvals',
				title: 'Document Approvals',
				type: 'item',
				icon: 'heroicons-outline:check',
				url: '/documents/approvals'
			}
		]
	},

	// COMMUNICATION
	{
		id: 'communication',
		title: 'Communication Suite',
		type: 'collapse',
		icon: 'heroicons-outline:chat',
		translate: 'COMMUNICATION',
		auth: ['admin', 'staff'],
		requiresSubscription: true,
		children: [
			{
				id: 'communication.chat',
				title: 'Chat',
				type: 'item',
				icon: 'heroicons-outline:chat-alt-2',
				url: '/communication/chat'
			},
			{
				id: 'communication.email',
				title: 'Email',
				type: 'item',
				icon: 'heroicons-outline:mail',
				url: '/communication/email'
			},
			{
				id: 'communication.notifications',
				title: 'Notifications',
				type: 'item',
				icon: 'heroicons-outline:bell',
				url: '/communication/notifications'
			}
		]
	},

	// QUALITY CONTROL
	{
		id: 'quality',
		title: 'Quality Control',
		type: 'collapse',
		icon: 'heroicons-outline:badge-check',
		translate: 'QUALITY',
		auth: ['admin', 'qc'],
		requiresSubscription: true,
		children: [
			{
				id: 'quality.inspections',
				title: 'Inspections',
				type: 'item',
				icon: 'heroicons-outline:search',
				url: '/quality/inspections'
			},
			{
				id: 'quality.nonconformance',
				title: 'Non-Conformance',
				type: 'item',
				icon: 'heroicons-outline:exclamation-triangle',
				url: '/quality/non-conformance'
			}
		]
	},

	// INTEGRATIONS
	{
		id: 'integrations',
		title: 'Integrations & Marketplace',
		type: 'collapse',
		icon: 'heroicons-outline:cloud',
		translate: 'INTEGRATIONS',
		auth: ['admin', 'integration'],
		requiresSubscription: true,
		children: [
			{
				id: 'integrations.api',
				title: 'API Management',
				type: 'item',
				icon: 'heroicons-outline:code',
				url: '/integrations/api'
			},
			{
				id: 'integrations.webhooks',
				title: 'Webhooks',
				type: 'item',
				icon: 'heroicons-outline:wifi',
				url: '/integrations/webhooks'
			},
			{
				id: 'integrations.ecommerce',
				title: 'E-Commerce Platforms',
				type: 'collapse',
				icon: 'heroicons-outline:shopping-bag',
				children: [
					{
						id: 'integrations.shopify',
						title: 'Shopify',
						type: 'item',
						icon: 'heroicons-outline:shopping-cart',
						url: '/integrations/shopify'
					},
					{
						id: 'integrations.woocommerce',
						title: 'WooCommerce',
						type: 'item',
						icon: 'heroicons-outline:globe',
						url: '/integrations/woocommerce'
					},
					{
						id: 'integrations.amazon',
						title: 'Amazon',
						type: 'item',
						icon: 'heroicons-outline:library',
						url: '/integrations/amazon'
					}
				]
			}
		]
	},

	// SUBSCRIPTION BILLING
	{
		id: 'billing',
		title: 'Subscription & Billing',
		type: 'collapse',
		icon: 'heroicons-outline:receipt-refund', // FIXED ICON
		translate: 'BILLING',
		auth: ['admin', 'billing'],
		requiresSubscription: true,
		children: [
			{
				id: 'billing.plans',
				title: 'Plans & Pricing',
				type: 'item',
				icon: 'heroicons-outline:star',
				url: '/billing/plans'
			},
			{
				id: 'billing.subscriptions',
				title: 'Subscriptions',
				type: 'item',
				icon: 'heroicons-outline:collection',
				url: '/billing/subscriptions'
			},
			{
				id: 'billing.invoices',
				title: 'Invoices',
				type: 'item',
				icon: 'heroicons-outline:document',
				url: '/billing/invoices'
			}
		]
	},

	// AI & AUTOMATION
	{
		id: 'ai',
		title: 'AI & Automation',
		type: 'collapse',
		icon: 'heroicons-outline:chip',
		translate: 'AI',
		auth: ['admin', 'analyst'],
		requiresSubscription: true,
		children: [
			{
				id: 'ai.insights',
				title: 'AI Insights',
				type: 'item',
				icon: 'heroicons-outline:sparkles',
				url: '/ai/insights'
			},
			{
				id: 'ai.automation',
				title: 'Workflow Automation',
				type: 'item',
				icon: 'heroicons-outline:adjustments',
				url: '/ai/automation'
			},
			{
				id: 'ai.approvedActions',
				title: 'Automated Approvals',
				type: 'item',
				icon: 'heroicons-outline:check-badge',
				url: '/ai/approvals'
			}
		]
	},

	// SECURITY & AUDIT
	{
		id: 'security',
		title: 'Security & Audit',
		type: 'collapse',
		icon: 'heroicons-outline:shield-check',
		translate: 'SECURITY',
		auth: ['admin', 'security'],
		requiresSubscription: true,
		children: [
			{
				id: 'security.auditLogs',
				title: 'Audit Logs',
				type: 'item',
				icon: 'heroicons-outline:clipboard-list',
				url: '/security/audit-logs'
			},
			{
				id: 'security.roles',
				title: 'Roles & Permissions',
				type: 'item',
				icon: 'heroicons-outline:key',
				url: '/security/roles'
			},
			{
				id: 'security.sso',
				title: 'SSO & Identity',
				type: 'item',
				icon: 'heroicons-outline:badge-check',
				url: '/security/sso'
			},
			{
				id: 'security.dataProtection',
				title: 'Data Protection',
				type: 'item',
				icon: 'heroicons-outline:lock-closed',
				url: '/security/data-protection'
			}
		]
	},

	// ADMIN / SYSTEM
	{
		id: 'system',
		title: 'System Admin',
		type: 'collapse',
		icon: 'heroicons-outline:server',
		requiresSubscription: true,
		children: [
			{
				id: 'system.settings',
				title: 'Global Settings',
				type: 'item',
				icon: 'heroicons-outline:cog-6-tooth',
				url: '/system/settings'
			},
			{
				id: 'system.tenants',
				title: 'Multi-Company',
				type: 'item',
				icon: 'heroicons-outline:building-office-2', // FIXED
				url: '/system/companies'
			},
			{
				id: 'system.currencies',
				title: 'Currencies & FX',
				type: 'item',
				icon: 'heroicons-outline:banknotes', // FIXED
				url: '/system/currencies'
			},
			{
				id: 'system.backups',
				title: 'Backups & Restore',
				type: 'item',
				icon: 'heroicons-outline:cloud-arrow-up', // FIXED
				url: '/system/backups'
			},
			{
				id: 'system.scheduler',
				title: 'Scheduler',
				type: 'item',
				icon: 'heroicons-outline:clock', // VALID
				url: '/system/scheduler'
			},
			{
				id: 'system.health',
				title: 'System Health',
				type: 'item',
				icon: 'heroicons-outline:heart', // FIXED
				url: '/system/health'
			},
			{
				id: 'system.devtools',
				title: 'Developer Tools',
				type: 'item',
				icon: 'heroicons-outline:code-bracket-square', // FIXED
				url: '/system/devtools'
			}
		]
	},

	// PORTALS & MOBILE
	{
		id: 'portals',
		title: 'Portals & Mobile',
		type: 'collapse',
		icon: 'heroicons-outline:globe-alt',
		translate: 'PORTALS',
		auth: ['admin'],
		requiresSubscription: true,
		children: [
			{
				id: 'portals.customer',
				title: 'Customer Portal',
				type: 'item',
				icon: 'heroicons-outline:desktop-computer',
				url: '/portals/customer'
			},
			{
				id: 'portals.vendor',
				title: 'Vendor Portal',
				type: 'item',
				icon: 'heroicons-outline:truck',
				url: '/portals/vendor'
			},
			{
				id: 'portals.mobile',
				title: 'Mobile & Offline',
				type: 'item',
				icon: 'heroicons-outline:device-phone-mobile',
				url: '/portals/mobile'
			}
		]
	},

	// HELP & KNOWLEDGE
	{
		id: 'help',
		title: 'Help & Knowledge',
		type: 'collapse',
		icon: 'heroicons-outline:question-mark-circle',
		translate: 'HELP',
		auth: ['admin', 'staff'],
		requiresSubscription: true,
		children: [
			{
				id: 'help.kb',
				title: 'Knowledge Base',
				type: 'item',
				icon: 'heroicons-outline:book-open',
				url: '/help/kb'
			},
			{
				id: 'help.docs',
				title: 'API Docs',
				type: 'item',
				icon: 'heroicons-outline:document-text',
				url: '/help/docs'
			},
			{
				id: 'help.support',
				title: 'Support Tickets',
				type: 'item',
				icon: 'heroicons-outline:ticket',
				url: '/help/support'
			}
		]
	},

	// EXPORTS / IMPORTS / DATA MIGRATION
	{
		id: 'data',
		title: 'Data Tools',
		type: 'collapse',
		icon: 'heroicons-outline:database',
		translate: 'DATA',
		auth: ['admin', 'data'],
		requiresSubscription: true,
		children: [
			{
				id: 'data.import',
				title: 'Import',
				type: 'item',
				icon: 'heroicons-outline:upload',
				url: '/data/import'
			},
			{
				id: 'data.export',
				title: 'Export',
				type: 'item',
				icon: 'heroicons-outline:download',
				url: '/data/export'
			},
			{
				id: 'data.migration',
				title: 'Migration Tools',
				type: 'item',
				icon: 'heroicons-outline:folder-move',
				url: '/data/migration'
			}
		]
	},

	// LEGAL & COMPLIANCE
	{
		id: 'legal',
		title: 'Legal & Compliance',
		type: 'collapse',
		icon: 'heroicons-outline:scale',
		translate: 'LEGAL',
		auth: ['admin', 'legal'],
		requiresSubscription: true,
		children: [
			{
				id: 'legal.contracts',
				title: 'Contracts',
				type: 'item',
				icon: 'heroicons-outline:document-text',
				url: '/legal/contracts'
			},
			{
				id: 'legal.compliance',
				title: 'Compliance Center',
				type: 'item',
				icon: 'heroicons-outline:shield-exclamation',
				url: '/legal/compliance'
			},
			{
				id: 'legal.gdpr',
				title: 'GDPR & Data Retention',
				type: 'item',
				icon: 'heroicons-outline:document-duplicate',
				url: '/legal/gdpr'
			}
		]
	},
	// NOTIFICATIONS / MESSAGING center
	{
		id: 'notifications',
		title: 'Notifications',
		type: 'item',
		icon: 'heroicons-outline:bell',
		url: '/notifications',
		auth: ['admin', 'staff'],
		requiresSubscription: true
	},

	// ANALYTICS & PREDICTIONS
	{
		id: 'insights',
		title: 'Insights & Forecasts',
		type: 'item',
		icon: 'heroicons-outline:chart-pie',
		url: '/insights',
		auth: ['admin', 'analyst'],
		requiresSubscription: true
	},
	// SHORTCUTS / FAVORITES (user-specific)
	{
		id: 'shortcuts',
		title: 'My Shortcuts',
		type: 'group',
		icon: 'heroicons-outline:star',
		auth: ['admin', 'staff'],
		requiresSubscription: true,
		children: [
			{
				id: 'shortcuts.favorites',
				title: 'Favorites',
				type: 'item',
				icon: 'heroicons-outline:star',
				url: '/me/favorites'
			},
			{
				id: 'shortcuts.recent',
				title: 'Recent',
				type: 'item',
				icon: 'heroicons-outline:clock',
				url: '/me/recent'
			}
		]
	}

	/* ---------------------------
	   Enterprise additions END
	   --------------------------- */
];

export default navigationConfig;
