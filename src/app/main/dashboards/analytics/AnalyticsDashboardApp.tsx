import FuseLoading from '@fuse/core/FuseLoading';
import { Alert, AlertTitle, Box, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useRef, useState, ReactNode } from 'react';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	BarController,
	ArcElement,
	DoughnutController,
	Title,
	Tooltip,
	Legend,
	LineController,
	Filler,
	ChartData
} from 'chart.js';
import { fetchAnalyzingPart } from '../../../axios/services/mega-city-services/common/CommonService';

// Register Chart.js components
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	BarElement,
	BarController,
	ArcElement,
	DoughnutController,
	Title,
	Tooltip,
	Legend,
	LineController,
	Filler
);

// --- TypeScript Interfaces ---

interface RawChartDataset {
	label?: string;
	data: number[];
}

interface RawChartData {
	labels: string[];
	datasets: RawChartDataset[];
}

interface AnalyzingPartResponse {
	success: boolean;
	data: RawChartData;
}

interface BaseChartProps {
	title?: string;
}

interface LineChartProps extends BaseChartProps {
	data: ChartData<'line'>;
	yAxisLabel?: string;
}

interface BarChartProps extends BaseChartProps {
	data: ChartData<'bar'>;
	yAxisLabel?: string;
}

interface DoughnutChartProps extends BaseChartProps {
	data: ChartData<'doughnut'>;
}

interface MultiAxisChartProps extends BaseChartProps {
	data: ChartData<'line'>;
}

interface ChartCardProps {
	title: string;
	subtitle: string;
	children: ReactNode;
}

// --- Reusable Layout Components ---
// Moved OUTSIDE the main component to fix 'react/no-unstable-nested-components'

function ChartCard({ title, subtitle, children }: ChartCardProps): JSX.Element {
	return (
		<Grid
			item
			xs={12}
			md={6}
		>
			<Paper
				elevation={1}
				sx={{ p: 2, height: '400px', display: 'flex', flexDirection: 'column' }}
			>
				<Typography
					variant="h6"
					gutterBottom
				>
					{title}
				</Typography>
				<Typography
					variant="caption"
					color="text.secondary"
					display="block"
					mb={1}
				>
					{subtitle}
				</Typography>
				<Box sx={{ flexGrow: 1 }}>{children}</Box>
			</Paper>
		</Grid>
	);
}

function EmptyChart(): JSX.Element {
	return (
		<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
			<Typography color="text.secondary">No data available</Typography>
		</Box>
	);
}

// --- Reusable Chart Components ---

function LineChart({ data, title = 'Line Chart', yAxisLabel }: LineChartProps): JSX.Element {
	const chartRef = useRef<HTMLCanvasElement>(null);
	const chartInstance = useRef<ChartJS | null>(null);

	useEffect(() => {
		if (chartRef.current && data) {
			if (chartInstance.current) chartInstance.current.destroy();

			const ctx = chartRef.current.getContext('2d');

			if (ctx) {
				chartInstance.current = new ChartJS(ctx, {
					type: 'line',
					data,
					options: {
						responsive: true,
						maintainAspectRatio: false,
						elements: { line: { tension: 0.3 } },
						interaction: { intersect: false, mode: 'index' },
						plugins: {
							title: { display: true, text: title, font: { size: 14, weight: 'bold' } },
							legend: { display: true, position: 'top' },
							tooltip: { mode: 'index', intersect: false }
						},
						scales: {
							x: { display: true, title: { display: true, text: 'Month' } },
							y: { display: true, title: { display: true, text: yAxisLabel }, grid: { display: true } }
						}
					}
				});
			}
		}

		return () => {
			if (chartInstance.current) chartInstance.current.destroy();
		};
	}, [data, title, yAxisLabel]);

	return (
		<Box sx={{ position: 'relative', height: '300px', width: '100%' }}>
			<canvas ref={chartRef} />
		</Box>
	);
}

function BarChart({ data, title = 'Bar Chart', yAxisLabel }: BarChartProps): JSX.Element {
	const chartRef = useRef<HTMLCanvasElement>(null);
	const chartInstance = useRef<ChartJS | null>(null);

	useEffect(() => {
		if (chartRef.current && data) {
			if (chartInstance.current) chartInstance.current.destroy();

			const ctx = chartRef.current.getContext('2d');

			if (ctx) {
				chartInstance.current = new ChartJS(ctx, {
					type: 'bar',
					data,
					options: {
						responsive: true,
						maintainAspectRatio: false,
						plugins: {
							title: { display: true, text: title, font: { size: 14, weight: 'bold' } },
							legend: { display: true, position: 'top' },
							tooltip: { mode: 'index', intersect: false }
						},
						scales: {
							x: { display: true, title: { display: true, text: 'Month' } },
							y: { display: true, title: { display: true, text: yAxisLabel }, grid: { display: true } }
						}
					}
				});
			}
		}

		return () => {
			if (chartInstance.current) chartInstance.current.destroy();
		};
	}, [data, title, yAxisLabel]);

	return (
		<Box sx={{ position: 'relative', height: '300px', width: '100%' }}>
			<canvas ref={chartRef} />
		</Box>
	);
}

function DoughnutChart({ data, title = 'Doughnut Chart' }: DoughnutChartProps): JSX.Element {
	const chartRef = useRef<HTMLCanvasElement>(null);
	const chartInstance = useRef<ChartJS | null>(null);

	useEffect(() => {
		if (chartRef.current && data) {
			if (chartInstance.current) chartInstance.current.destroy();

			const ctx = chartRef.current.getContext('2d');

			if (ctx) {
				chartInstance.current = new ChartJS(ctx, {
					type: 'doughnut',
					data,
					options: {
						responsive: true,
						maintainAspectRatio: false,
						plugins: {
							title: { display: true, text: title, font: { size: 14, weight: 'bold' } },
							legend: { display: true, position: 'right' }
						}
					}
				});
			}
		}

		return () => {
			if (chartInstance.current) chartInstance.current.destroy();
		};
	}, [data, title]);

	return (
		<Box sx={{ position: 'relative', height: '300px', width: '100%' }}>
			<canvas ref={chartRef} />
		</Box>
	);
}

function MultiAxisLineChart({ data, title = 'Multi-Axis Line Chart' }: MultiAxisChartProps): JSX.Element {
	const chartRef = useRef<HTMLCanvasElement>(null);
	const chartInstance = useRef<ChartJS | null>(null);

	useEffect(() => {
		if (chartRef.current && data) {
			if (chartInstance.current) chartInstance.current.destroy();

			const ctx = chartRef.current.getContext('2d');

			if (ctx) {
				chartInstance.current = new ChartJS(ctx, {
					type: 'line',
					data,
					options: {
						responsive: true,
						maintainAspectRatio: false,
						interaction: { mode: 'index', intersect: false },
						// TS2353 Fix: Removed 'stacked: false' from here. It does not exist on root options.
						elements: { line: { tension: 0.1 } },
						plugins: {
							title: { display: true, text: title, font: { size: 14, weight: 'bold' } },
							legend: { display: true, position: 'top' },
							tooltip: { mode: 'index', intersect: false }
						},
						scales: {
							x: { display: true, title: { display: true, text: 'Month' } },
							y: {
								type: 'linear',
								display: true,
								position: 'left',
								title: { display: true, text: 'Income (LKR)' }
							},
							y1: {
								type: 'linear',
								display: true,
								position: 'right',
								title: { display: true, text: 'Order Count' },
								grid: { drawOnChartArea: false }
							}
						}
					}
				});
			}
		}

		return () => {
			if (chartInstance.current) chartInstance.current.destroy();
		};
	}, [data, title]);

	return (
		<Box sx={{ position: 'relative', height: '300px', width: '100%' }}>
			<canvas ref={chartRef} />
		</Box>
	);
}

// --- Pure Data Formatting Functions ---

const createTotalPriceData = (fullData: AnalyzingPartResponse): ChartData<'line'> | null => {
	if (!fullData?.data) return null;

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

const createOrderCountData = (fullData: AnalyzingPartResponse): ChartData<'line'> | null => {
	if (!fullData?.data) return null;

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

const createAOVData = (fullData: AnalyzingPartResponse): ChartData<'bar'> | null => {
	if (!fullData?.data) return null;

	const aov = fullData.data.datasets[0].data.map((income, i) => {
		const orderCount = fullData.data.datasets[1].data[i];

		if (orderCount > 0) {
			return parseFloat((income / orderCount).toFixed(2));
		}

		return 0;
	});
	return {
		labels: fullData.data.labels,
		datasets: [
			{
				label: 'Avg Order Value (LKR)',
				data: aov,
				backgroundColor: 'rgba(153, 102, 255, 0.6)',
				borderColor: 'rgb(153, 102, 255)',
				borderWidth: 1
			}
		]
	};
};

// Fix for 'no-nested-ternary': Using standard if/else statements
const createGrowthData = (
	fullData: AnalyzingPartResponse,
	datasetIndex: number,
	label: string,
	color: string
): ChartData<'line'> | null => {
	if (!fullData?.data) return null;

	const { data } = fullData.data.datasets[datasetIndex];

	const growth = data.map((val, i) => {
		if (i === 0) return 0;

		const prevValue = data[i - 1];

		if (prevValue > 0) {
			return parseFloat((((val - prevValue) / prevValue) * 100).toFixed(2));
		}

		return 0;
	});

	return {
		labels: fullData.data.labels,
		datasets: [
			{
				label,
				data: growth,
				borderColor: color,
				backgroundColor: color.replace(')', ', 0.2)').replace('rgb', 'rgba'),
				fill: true,
				tension: 0.3
			}
		]
	};
};

const createCumulativeData = (
	fullData: AnalyzingPartResponse,
	datasetIndex: number,
	label: string,
	color: string
): ChartData<'line'> | null => {
	if (!fullData?.data) return null;

	let sum = 0;
	const data = fullData.data.datasets[datasetIndex].data.map((val) => {
		sum += val;
		return sum;
	});
	return {
		labels: fullData.data.labels,
		datasets: [
			{
				label,
				data,
				borderColor: color,
				backgroundColor: color.replace(')', ', 0.2)').replace('rgb', 'rgba'),
				fill: true,
				tension: 0.4
			}
		]
	};
};

const createDeviationData = (
	fullData: AnalyzingPartResponse,
	datasetIndex: number,
	label: string
): ChartData<'bar'> | null => {
	if (!fullData?.data) return null;

	const { data } = fullData.data.datasets[datasetIndex];
	const avg = data.reduce((a, b) => a + b, 0) / (data.length || 1);
	const dev = data.map((val) => parseFloat((val - avg).toFixed(2)));
	return {
		labels: fullData.data.labels,
		datasets: [
			{
				label,
				data: dev,
				backgroundColor: dev.map((v) => (v >= 0 ? 'rgba(75, 192, 192, 0.6)' : 'rgba(255, 99, 132, 0.6)')),
				borderColor: dev.map((v) => (v >= 0 ? 'rgb(75, 192, 192)' : 'rgb(255, 99, 132)')),
				borderWidth: 1
			}
		]
	};
};

const createMovingAvgIncomeData = (fullData: AnalyzingPartResponse): ChartData<'line'> | null => {
	if (!fullData?.data) return null;

	const { data } = fullData.data.datasets[0];
	const movingAvg = data.map((val, i) => {
		if (i === 0) return val;

		if (i === 1) return parseFloat(((val + data[0]) / 2).toFixed(2));

		return parseFloat(((val + data[i - 1] + data[i - 2]) / 3).toFixed(2));
	});
	return {
		labels: fullData.data.labels,
		datasets: [
			{
				label: '3-Mo Moving Avg (LKR)',
				data: movingAvg,
				borderColor: 'rgb(255, 205, 86)',
				backgroundColor: 'rgba(255, 205, 86, 0.2)',
				fill: true,
				tension: 0.4
			}
		]
	};
};

const createRevenueShareData = (fullData: AnalyzingPartResponse): ChartData<'doughnut'> | null => {
	if (!fullData?.data) return null;

	const bgColors = [
		'#FF6384',
		'#36A2EB',
		'#FFCE56',
		'#4BC0C0',
		'#9966FF',
		'#FF9F40',
		'#E7E9ED',
		'#8AC926',
		'#1982C4',
		'#6A4C93',
		'#F15BB5',
		'#00F5D4'
	];
	return {
		labels: fullData.data.labels,
		datasets: [
			{
				data: fullData.data.datasets[0].data,
				backgroundColor: bgColors.slice(0, fullData.data.labels.length),
				borderWidth: 1
			}
		]
	};
};

// --- Main Application Component ---

function AnalyticsDashboardApp(): JSX.Element {
	const [chartData, setChartData] = useState<ChartData<'line'> | null>(null);
	const [totalPriceData, setTotalPriceData] = useState<ChartData<'line'> | null>(null);
	const [orderCountData, setOrderCountData] = useState<ChartData<'line'> | null>(null);
	const [aovData, setAovData] = useState<ChartData<'bar'> | null>(null);
	const [revenueGrowthData, setRevenueGrowthData] = useState<ChartData<'line'> | null>(null);
	const [orderGrowthData, setOrderGrowthData] = useState<ChartData<'line'> | null>(null);
	const [cumulativeIncomeData, setCumulativeIncomeData] = useState<ChartData<'line'> | null>(null);
	const [cumulativeOrdersData, setCumulativeOrdersData] = useState<ChartData<'line'> | null>(null);
	const [orderDeviationData, setOrderDeviationData] = useState<ChartData<'bar'> | null>(null);
	const [incomeDeviationData, setIncomeDeviationData] = useState<ChartData<'bar'> | null>(null);
	const [movingAvgIncomeData, setMovingAvgIncomeData] = useState<ChartData<'line'> | null>(null);
	const [revenueShareData, setRevenueShareData] = useState<ChartData<'doughnut'> | null>(null);

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const userRole = localStorage.getItem('loginUserRole');

	useEffect(() => {
		if (userRole !== 'staff') {
			const fetchAnalyzedDate = async () => {
				try {
					setIsLoading(true);
					const response = (await fetchAnalyzingPart()) as AnalyzingPartResponse;

					if (response.success && response.data) {
						setChartData(response.data as unknown as ChartData<'line'>);
						setTotalPriceData(createTotalPriceData(response));
						setOrderCountData(createOrderCountData(response));
						setAovData(createAOVData(response));
						setRevenueGrowthData(createGrowthData(response, 0, 'Revenue Growth (%)', 'rgb(255, 159, 64)'));
						setOrderGrowthData(createGrowthData(response, 1, 'Order Growth (%)', 'rgb(153, 102, 255)'));
						setCumulativeIncomeData(
							createCumulativeData(response, 0, 'YTD Cumulative Income (LKR)', 'rgb(54, 162, 235)')
						);
						setCumulativeOrdersData(
							createCumulativeData(response, 1, 'YTD Cumulative Orders', 'rgb(201, 203, 207)')
						);
						setOrderDeviationData(createDeviationData(response, 1, 'Variance from Avg Orders'));
						setIncomeDeviationData(createDeviationData(response, 0, 'Variance from Avg Income (LKR)'));
						setMovingAvgIncomeData(createMovingAvgIncomeData(response));
						setRevenueShareData(createRevenueShareData(response));
					}
				} catch (error) {
					console.error('Error fetching chart data:', error);
				} finally {
					setIsLoading(false);
				}
			};
			fetchAnalyzedDate();
		} else {
			setIsLoading(false);
		}
	}, [userRole]);

	if (isLoading) return <FuseLoading />;

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
							You do not have the necessary permissions to view Business Analytics. Sorry for the
							inconvenience. To access Business Analytics, please log in with an account that has
							Administrator privileges.
						</Typography>
					</Alert>
				</Paper>
			</Box>
		);
	}

	return (
		<Box sx={{ p: 3 }}>
			<Paper
				elevation={0}
				sx={{ p: 0, backgroundColor: 'transparent' }}
			>
				<Grid
					container
					spacing={3}
					alignItems="stretch"
				>
					<ChartCard
						title="1. Sales & Order Overview"
						subtitle="Combined Income and Orders comparison"
					>
						{chartData ? (
							<MultiAxisLineChart
								data={chartData}
								title="Income vs. Orders"
							/>
						) : (
							<EmptyChart />
						)}
					</ChartCard>

					<ChartCard
						title="2. Total Monthly Income"
						subtitle="Gross revenue generated per month"
					>
						{totalPriceData ? (
							<LineChart
								data={totalPriceData}
								title="Monthly Income"
								yAxisLabel="LKR"
							/>
						) : (
							<EmptyChart />
						)}
					</ChartCard>

					<ChartCard
						title="3. Order Volume Trend"
						subtitle="Number of transactions completed"
					>
						{orderCountData ? (
							<LineChart
								data={orderCountData}
								title="Monthly Orders"
								yAxisLabel="Orders"
							/>
						) : (
							<EmptyChart />
						)}
					</ChartCard>

					<ChartCard
						title="4. Average Order Value (AOV)"
						subtitle="Total Income divided by Total Orders"
					>
						{aovData ? (
							<BarChart
								data={aovData}
								title="Monthly AOV"
								yAxisLabel="LKR per Order"
							/>
						) : (
							<EmptyChart />
						)}
					</ChartCard>

					<ChartCard
						title="5. YTD Cumulative Revenue"
						subtitle="Running total of income throughout the year"
					>
						{cumulativeIncomeData ? (
							<LineChart
								data={cumulativeIncomeData}
								title="YTD Revenue"
								yAxisLabel="LKR"
							/>
						) : (
							<EmptyChart />
						)}
					</ChartCard>

					<ChartCard
						title="6. YTD Cumulative Orders"
						subtitle="Running total of orders processed"
					>
						{cumulativeOrdersData ? (
							<LineChart
								data={cumulativeOrdersData}
								title="YTD Orders"
								yAxisLabel="Orders"
							/>
						) : (
							<EmptyChart />
						)}
					</ChartCard>

					<ChartCard
						title="7. Revenue Growth Rate (MoM)"
						subtitle="Month-over-Month percentage change in income"
					>
						{revenueGrowthData ? (
							<LineChart
								data={revenueGrowthData}
								title="Income Growth Rate"
								yAxisLabel="%"
							/>
						) : (
							<EmptyChart />
						)}
					</ChartCard>

					<ChartCard
						title="8. Order Growth Rate (MoM)"
						subtitle="Month-over-Month percentage change in volume"
					>
						{orderGrowthData ? (
							<LineChart
								data={orderGrowthData}
								title="Order Growth Rate"
								yAxisLabel="%"
							/>
						) : (
							<EmptyChart />
						)}
					</ChartCard>

					<ChartCard
						title="9. Income Performance vs Average"
						subtitle="Revenue deviation from the monthly average"
					>
						{incomeDeviationData ? (
							<BarChart
								data={incomeDeviationData}
								title="Monthly Income Variance"
								yAxisLabel="+/- LKR"
							/>
						) : (
							<EmptyChart />
						)}
					</ChartCard>

					<ChartCard
						title="10. Order Performance vs Average"
						subtitle="Volume deviation from the monthly average"
					>
						{orderDeviationData ? (
							<BarChart
								data={orderDeviationData}
								title="Monthly Order Variance"
								yAxisLabel="+/- Orders"
							/>
						) : (
							<EmptyChart />
						)}
					</ChartCard>

					<ChartCard
						title="11. Income 3-Month Moving Average"
						subtitle="Smoothed revenue trend line"
					>
						{movingAvgIncomeData ? (
							<LineChart
								data={movingAvgIncomeData}
								title="Income Trend Smoothing"
								yAxisLabel="LKR"
							/>
						) : (
							<EmptyChart />
						)}
					</ChartCard>

					<ChartCard
						title="12. Yearly Revenue Distribution"
						subtitle="Percentage share of revenue by month"
					>
						{revenueShareData ? (
							<DoughnutChart
								data={revenueShareData}
								title="Monthly Revenue Share"
							/>
						) : (
							<EmptyChart />
						)}
					</ChartCard>
				</Grid>
			</Paper>
		</Box>
	);
}

export default AnalyticsDashboardApp;
