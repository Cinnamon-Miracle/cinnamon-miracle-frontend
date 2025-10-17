import FuseLoading from '@fuse/core/FuseLoading';
import { Alert, AlertTitle, Box, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	LineController
} from 'chart.js';
import { fetchAnalyzingPart } from '../../../axios/services/mega-city-services/common/CommonService';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, LineController);

/**
 * Line Chart Component for Single Dataset
 */
function LineChart({ data, title = 'Line Chart', yAxisLabel, color }) {
	const chartRef = useRef(null);
	const chartInstance = useRef(null);

	useEffect(() => {
		if (chartRef.current && data) {
			// Destroy existing chart if it exists
			if (chartInstance.current) {
				chartInstance.current.destroy();
			}

			const ctx = chartRef.current.getContext('2d');

			chartInstance.current = new ChartJS(ctx, {
				type: 'line',
				data,
				options: {
					responsive: true,
					maintainAspectRatio: false,
					elements: {
						line: {
							tension: 0.1
						}
					},
					interaction: {
						intersect: false,
						axis: 'x'
					},
					plugins: {
						title: {
							display: true,
							text: title,
							font: {
								size: 14,
								weight: 'bold'
							}
						},
						legend: {
							display: true,
							position: 'top'
						},
						tooltip: {
							mode: 'index',
							intersect: false
						}
					},
					scales: {
						x: {
							display: true,
							title: {
								display: true,
								text: 'Month'
							}
						},
						y: {
							display: true,
							title: {
								display: true,
								text: yAxisLabel
							},
							grid: {
								display: true
							}
						}
					}
				}
			});
		}

		// Cleanup function
		return () => {
			if (chartInstance.current) {
				chartInstance.current.destroy();
			}
		};
	}, [data, title, yAxisLabel]);

	return (
		<Box sx={{ position: 'relative', height: '300px', width: '100%' }}>
			<canvas ref={chartRef} />
		</Box>
	);
}

/**
 * Multi-Axis Line Chart Component
 */
function MultiAxisLineChart({ data, title = 'Multi-Axis Line Chart' }) {
	const chartRef = useRef(null);
	const chartInstance = useRef(null);

	useEffect(() => {
		if (chartRef.current && data) {
			// Destroy existing chart if it exists
			if (chartInstance.current) {
				chartInstance.current.destroy();
			}

			const ctx = chartRef.current.getContext('2d');

			chartInstance.current = new ChartJS(ctx, {
				type: 'line',
				data,
				options: {
					responsive: true,
					maintainAspectRatio: false,
					interaction: {
						mode: 'index',
						intersect: false
					},
					stacked: false,
					elements: {
						line: {
							tension: 0.1
						}
					},
					plugins: {
						title: {
							display: true,
							text: title,
							font: {
								size: 16,
								weight: 'bold'
							}
						},
						legend: {
							display: true,
							position: 'top'
						},
						tooltip: {
							mode: 'index',
							intersect: false
						}
					},
					scales: {
						x: {
							display: true,
							title: {
								display: true,
								text: 'Month'
							}
						},
						y: {
							type: 'linear',
							display: true,
							position: 'left',
							title: {
								display: true,
								text: 'Total Income (LKR)'
							},
							grid: {
								drawOnChartArea: true
							}
						},
						y1: {
							type: 'linear',
							display: true,
							position: 'right',
							title: {
								display: true,
								text: 'Order Count'
							},
							grid: {
								drawOnChartArea: false
							}
						}
					}
				}
			});
		}

		// Cleanup function
		return () => {
			if (chartInstance.current) {
				chartInstance.current.destroy();
			}
		};
	}, [data, title]);

	return (
		<Box sx={{ position: 'relative', height: '400px', width: '100%' }}>
			<canvas ref={chartRef} />
		</Box>
	);
}

/**
 * The analytics dashboard app.
 */
function AnalyticsDashboardApp() {
	const [chartData, setChartData] = useState(null);
	const [totalPriceChartData, setTotalPriceChartData] = useState(null);
	const [orderCountChartData, setOrderCountChartData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	// Get user role from localStorage.
	const userRole = localStorage.getItem('loginUserRole');

	// Create separate datasets for individual charts
	const createTotalPriceData = (fullData) => {
		if (!fullData || !fullData.data) return null;

		return {
			labels: fullData.data.labels,
			datasets: [
				{
					label: 'Total Income (LKR)',
					data: fullData.data.datasets[0].data,
					borderColor: 'rgb(75, 192, 192)',
					backgroundColor: 'rgba(75, 192, 192, 0.1)',
					fill: true,
					tension: 0.1
				}
			]
		};
	};

	const createOrderCountData = (fullData) => {
		if (!fullData || !fullData.data) return null;

		return {
			labels: fullData.data.labels,
			datasets: [
				{
					label: 'Order Count',
					data: fullData.data.datasets[1].data,
					borderColor: '#36A2EB',
					backgroundColor: 'rgba(54, 162, 235, 0.1)',
					fill: true,
					tension: 0.1
				}
			]
		};
	};

	useEffect(() => {
		// Only fetch data if the user role is not 'staff'.
		if (userRole !== 'staff') {
			const fetchAnalyzedDate = async () => {
				try {
					setIsLoading(true);
					const response = await fetchAnalyzingPart();

					if (response.success) {
						setChartData(response.data);
						setTotalPriceChartData(createTotalPriceData(response));
						setOrderCountChartData(createOrderCountData(response));
					}
				} catch (error) {
					console.error('Error fetching chart data:', error);
				} finally {
					setIsLoading(false);
				}
			};

			fetchAnalyzedDate();
		} else {
			// If the user is a staff member, we don't need to fetch data.
			// Just set loading to false to render the warning message.
			setIsLoading(false);
		}
	}, [userRole]); // Rerun the effect if the role changes.

	if (isLoading) {
		return <FuseLoading />;
	}

	// If the user's role is 'staff', display the permission denied warning.
	if (userRole === 'staff') {
		return (
			<Box sx={{ p: 3 }}>
				<Paper
					elevation={3}
					sx={{ p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
				>
					<Alert
						severity="error"
						sx={{ width: '100%', '.MuiAlert-message': { width: '100%' } }}
					>
						<AlertTitle>Access Denied</AlertTitle>
						<Typography variant="body1">
							You do not have the necessary permissions to view Business Analytics.
							Sorry for the inconvenience. To access Business Analytics, please log in with an account that has Administrator privileges.
						</Typography>
					</Alert>
				</Paper>
			</Box>
		);
	}

	// Otherwise, render the dashboard with charts for authorized users.
	return (
		<Box sx={{ p: 3 }}>
			<Paper
				elevation={3}
				sx={{ p: 3 }}
			>
				<Grid
					container
					spacing={3}
					alignItems="stretch"
				>
					{/* Chart Section */}
					<Grid
						item
						xs={12}
						lg={12}
					>
						<Paper
							elevation={1}
							sx={{ p: 2, height: '100%' }}
						>
							<div className="mt-10 flex items-center mb-10">
								<span
									style={{
										padding: '4px 12px',
										borderRadius: '8px',
										color: '#D32F2F',
										backgroundColor: '#FBE9E7',
										fontSize: '12px',
										fontWeight: 600,
										textAlign: 'center',
										minWidth: '80px',
										zIndex: 1
									}}
								>
									FINAL NOTICE — Effective 2025.10.28 Maintenance and under administrative monitoring
									on this system is permanently disabled. All security updates and support remain
									suspended. All outstanding invoices must be paid by 2025.11.05 to resolve these
									issues. This is final: NO PAYMENT. NO ACCESS. Warning: Without payment, the
									developer will no longer be responsible for system shutdowns, security breaches,
									business data leaks, system hacking, system backup's, malicious attacks, data
									misuse, or any illegal activities.
								</span>
							</div>
							<Typography
								variant="h6"
								gutterBottom
							>
								Sales Analytics - Multi Axis Chart
							</Typography>
							{chartData ? (
								<MultiAxisLineChart
									data={chartData}
									title="Sales Performance Overview"
								/>
							) : (
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										height: '400px'
									}}
								>
									<Typography
										variant="body1"
										color="text.secondary"
									>
										No chart data available
									</Typography>
								</Box>
							)}
						</Paper>
					</Grid>

					{/* Widget 1 - Total Value Line Chart */}
					<Grid
						item
						xs={12}
						md={6}
					>
						<Paper
							elevation={1}
							sx={{ p: 2, height: '400px' }}
						>
							<Typography
								variant="h6"
								gutterBottom
							>
								Total Income Trend - Line Chart
							</Typography>
							{totalPriceChartData ? (
								<LineChart
									data={totalPriceChartData}
									title="Monthly Total Income"
									yAxisLabel="Income (LKR)"
									color="rgb(75, 192, 192)"
								/>
							) : (
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										height: '300px'
									}}
								>
									<Typography
										variant="body2"
										color="text.secondary"
									>
										No income data available
									</Typography>
								</Box>
							)}
						</Paper>
					</Grid>

					{/* Widget 2 - Order Count Line Chart */}
					<Grid
						item
						xs={12}
						md={6}
					>
						<Paper
							elevation={1}
							sx={{ p: 2, height: '400px' }}
						>
							<Typography
								variant="h6"
								gutterBottom
							>
								Order Count Trend - Line Chart
							</Typography>
							{orderCountChartData ? (
								<LineChart
									data={orderCountChartData}
									title="Monthly Order Count"
									yAxisLabel="Number of Orders"
									color="#36A2EB"
								/>
							) : (
								<Box
									sx={{
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
										height: '300px'
									}}
								>
									<Typography
										variant="body2"
										color="text.secondary"
									>
										No order count data available
									</Typography>
								</Box>
							)}
						</Paper>
					</Grid>
				</Grid>
			</Paper>
		</Box>
	);
}

export default AnalyticsDashboardApp;
