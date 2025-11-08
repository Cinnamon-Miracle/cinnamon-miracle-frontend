import { lazy } from 'react';

const AnalyticsDashboardApp = lazy(() => import('././ChatBotApp'));
/**
 * The analytics dashboard app config.
 */
const ChatBotConfig = {
	settings: {
		layout: {
			config: {}
		}
	},
	routes: [
		{
			path: 'dashboards/chatbot',
			element: <AnalyticsDashboardApp />
		}
	]
};

export default ChatBotConfig;
