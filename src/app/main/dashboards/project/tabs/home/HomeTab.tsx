import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
	Alert,
	AlertTitle,
	Box,
	Grid,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	Divider,
	styled
} from '@mui/material';
// --- Add imports for Date Picker ---
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import SummaryWidget from './widgets/SummaryWidget';
import OverdueWidget from './widgets/OverdueWidget';
import IssuesWidget from './widgets/IssuesWidget';
import FeaturesWidget from './widgets/FeaturesWidget';
import {
	businessSummery,
	dailyPerformanceOfGuidesAndBoatmen
} from '../../../../../axios/services/mega-city-services/common/CommonService';

// Original types
interface BusinessSummary {
	orderCount: number;
	totalBoatmanCost: number;
	totalGuideCost: number;
	totalSalesAmount: number;
	groupCodeCount: number;
	date: string;
}

interface ApiResponse {
	success: boolean;
	message: string;
	data: BusinessSummary;
}

// --- NEW TYPES for detailed performance data ---
interface Guide {
	name: string;
	totalEarnings: number;
	orderCount: number;
}

interface Boatman {
	name: string;
	totalEarnings: number;
	orderCount: number;
}

interface DetailedSummary {
	date: string; // The response might still return a single date or date range. We'll use the title as requested.
	guides: Guide[];
	boatmen: Boatman[];
	summary: {
		totalGuides: number;
		totalBoatmen: number;
		totalGuidesEarnings: number;
		totalBoatmenEarnings: number;
		grandTotal: number;
	};
}

interface DetailedApiResponse {
	success: boolean;
	data: DetailedSummary;
}
// --- END NEW TYPES ---

// Styled component for a cleaner table header
const StyledTableHead = styled(TableHead)(({ theme }) => ({
	backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[800],
	'& .MuiTableCell-root': {
		fontWeight: 'bold'
	}
}));

// Helper to format date to YYYY-MM-DD for the API
const formatDateForApi = (date: Date): string => {
	return date.toISOString().split('T')[0];
};

// Helper to format date for display in the title
const formatDateForTitle = (date: Date | null): string => {
	if (!date) return '';

	// Adjust options as needed for your preferred format
	return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
};

/**
 * The HomeTab component.
 */
function HomeTab() {
	const userRole = localStorage.getItem('loginUserRole');
	const isRestricted = userRole === 'staff';

	const [summaryData, setSummaryData] = useState<BusinessSummary | undefined>();
	const [detailedData, setDetailedData] = useState<DetailedSummary | null>(null);
	// --- State for Date Pickers ---
	const [startDate, setStartDate] = useState<Date | null>(new Date());
	const [endDate, setEndDate] = useState<Date | null>(new Date());

	const container = {
		show: {
			transition: {
				staggerChildren: 0.04
			}
		}
	};
	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 }
	};

	useEffect(() => {
		if (!isRestricted) {
			const fetchData = async () => {
				try {
					// Fetch original summary data (runs only once)
					const summaryResponse = (await businessSummery()) as ApiResponse;

					if (summaryResponse.success) {
						setSummaryData(summaryResponse.data);
					} else {
						toast.error(summaryResponse.message || 'Failed to fetch summary');
					}
				} catch (error) {
					toast.error(error instanceof Error ? error.message : 'An error occurred while fetching summary');
				}
			};
			fetchData();
		}
	}, [isRestricted]);

	useEffect(() => {
		// This separate useEffect handles fetching performance data when dates change.
		if (!isRestricted && startDate && endDate) {
			if (startDate > endDate) {
				toast.error('Start date cannot be after end date.');
				return;
			}

			const fetchPerformanceData = async () => {
				try {
					const detailedResponse = (await dailyPerformanceOfGuidesAndBoatmen(
						formatDateForApi(startDate),
						formatDateForApi(endDate)
					)) as DetailedApiResponse;

					if (detailedResponse.success) {
						setDetailedData(detailedResponse.data);
					} else {
						toast.error('Failed to fetch daily performance data');
					}
				} catch (error) {
					const errorMessage = error instanceof Error ? error.message : 'An error occurred';
					toast.error(errorMessage);
				}
			};

			fetchPerformanceData();
		}
	}, [isRestricted, startDate, endDate]); // Re-run when dates change

	if (isRestricted) {
		return (
			<Box sx={{ p: 3 }}>
				<Paper
					elevation={3}
					sx={{ p: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '200px' }}
				>
					<Alert
						severity="error"
						sx={{ width: '100%', '.MuiAlert-message': { width: '100%' } }}
					>
						<AlertTitle>Access Denied</AlertTitle>
						<Typography variant="body1">
							You don't have permissions to view the cinnamon miracle erp dashboard.
						</Typography>
					</Alert>
				</Paper>
			</Box>
		);
	}

	// Main component render
	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<Box
				className="w-full min-w-0 p-24"
				component={motion.div}
				initial="hidden"
				animate="show"
				variants={container}
			>
				{/* Top Summary Widgets */}
				<motion.div
					variants={item}
					className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-24 w-full"
				>
					<SummaryWidget value={summaryData?.groupCodeCount ?? 0} />
					<OverdueWidget value={summaryData?.totalBoatmanCost ?? 0} />
					<IssuesWidget value={summaryData?.totalGuideCost ?? 0} />
					<FeaturesWidget value={summaryData?.totalSalesAmount ?? 0} />
				</motion.div>

				{/* --- Daily Performance Section --- */}
				{detailedData && (
					<motion.div
						variants={item}
						className="mt-24"
					>
						<Paper
							elevation={3}
							sx={{ p: 3, borderRadius: '12px' }}
						>
							{/* Section Header with Title and Date Pickers */}
							<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
								<Typography
									variant="h5"
									component="h2"
									sx={{ fontWeight: 'bold' }}
								>
									Daily Performance Summary ({`${formatDateForTitle(startDate)}`}
									{endDate && startDate && startDate.getTime() !== endDate.getTime()
										? ` - ${formatDateForTitle(endDate)}`
										: ''}
									)
								</Typography>

								{/* Compact Date Pickers */}
								<Box sx={{ display: 'flex', gap: 3 }}>
									<DatePicker
										label="Start Date"
										value={startDate}
										onChange={(newValue) => setStartDate(newValue)}
										slotProps={{ textField: { size: 'small' } }}
									/>
									<DatePicker
										label="End Date"
										value={endDate}
										onChange={(newValue) => setEndDate(newValue)}
										slotProps={{ textField: { size: 'small' } }}
									/>
								</Box>
							</Box>
							<Divider />

							{/* Overall Earnings Summary */}
							<Box sx={{ my: 3 }}>
								<Grid
									container
									spacing={2}
									justifyContent="center"
									alignItems="center"
								>
									<Grid
										item
										xs={12}
										sm={4}
										sx={{ textAlign: 'center' }}
									>
										<Typography
											color="text.secondary"
											variant="button"
											display="block"
										>
											Guide Earnings
										</Typography>
										<Typography
											variant="h6"
											sx={{ fontWeight: 600 }}
										>
											LKR {detailedData.summary.totalGuidesEarnings.toLocaleString()}
										</Typography>
									</Grid>
									<Grid
										item
										xs={12}
										sm={4}
										sx={{ textAlign: 'center' }}
									>
										<Typography
											color="text.secondary"
											variant="button"
											display="block"
										>
											Boatmen Earnings
										</Typography>
										<Typography
											variant="h6"
											sx={{ fontWeight: 600 }}
										>
											LKR {detailedData.summary.totalBoatmenEarnings.toLocaleString()}
										</Typography>
									</Grid>
									<Grid
										item
										xs={12}
										sm={4}
										sx={{ textAlign: 'center', borderLeft: { sm: '1px solid #e0e0e0' } }}
									>
										<Typography
											color="text.secondary"
											variant="button"
											display="block"
										>
											Grand Total
										</Typography>
										<Typography
											variant="h5"
											color="primary"
											sx={{ fontWeight: 'bold' }}
										>
											LKR {detailedData.summary.grandTotal.toLocaleString()}
										</Typography>
									</Grid>
								</Grid>
							</Box>
							<Divider sx={{ my: 2 }} />

							<Grid
								container
								spacing={4}
							>
								{/* Guides Table */}
								<Grid
									item
									xs={12}
									md={6}
								>
									<Typography
										variant="h6"
										component="h3"
										gutterBottom
									>
										Top Performing Guides
									</Typography>
									<TableContainer
										component={Paper}
										variant="outlined"
									>
										<Table
											size="small"
											aria-label="guides performance table"
										>
											<StyledTableHead>
												<TableRow>
													<TableCell>Name</TableCell>
													<TableCell align="center">Orders</TableCell>
													<TableCell align="right">Earnings</TableCell>
												</TableRow>
											</StyledTableHead>
											<TableBody>
												{detailedData.guides.map((guide) => (
													<TableRow
														key={guide.name}
														sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
													>
														<TableCell
															component="th"
															scope="row"
														>
															{guide.name}
														</TableCell>
														<TableCell align="center">{guide.orderCount}</TableCell>
														<TableCell align="right">
															{guide.totalEarnings.toLocaleString('en-US', {
																style: 'currency',
																currency: 'LKR',
																minimumFractionDigits: 0
															})}
														</TableCell>
													</TableRow>
												))}
											</TableBody>
										</Table>
									</TableContainer>
								</Grid>

								{/* Boatmen Table */}
								<Grid
									item
									xs={12}
									md={6}
								>
									<Typography
										variant="h6"
										component="h3"
										gutterBottom
									>
										Top Performing Boatmen
									</Typography>
									<TableContainer
										component={Paper}
										variant="outlined"
									>
										<Table
											size="small"
											aria-label="boatmen performance table"
										>
											<StyledTableHead>
												<TableRow>
													<TableCell>Name</TableCell>
													<TableCell align="center">Orders</TableCell>
													<TableCell align="right">Earnings</TableCell>
												</TableRow>
											</StyledTableHead>
											<TableBody>
												{detailedData.boatmen.map((boatman) => (
													<TableRow
														key={boatman.name}
														sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
													>
														<TableCell
															component="th"
															scope="row"
														>
															{boatman.name}
														</TableCell>
														<TableCell align="center">{boatman.orderCount}</TableCell>
														<TableCell align="right">
															{boatman.totalEarnings.toLocaleString('en-US', {
																style: 'currency',
																currency: 'LKR',
																minimumFractionDigits: 0
															})}
														</TableCell>
													</TableRow>
												))}
											</TableBody>
										</Table>
									</TableContainer>
								</Grid>
							</Grid>
						</Paper>
					</motion.div>
				)}
			</Box>
		</LocalizationProvider>
	);
}

export default HomeTab;
