import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
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
	styled,
	useTheme,
	alpha,
	Chip,
	Fade
} from '@mui/material';
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

// --- Interfaces ---
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
	date: string;
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

// ---- MODERN HIGH-CONTRAST COMPONENTS ----

const ProCard = styled(Paper)(({ theme }) => ({
	borderRadius: '24px',
	boxShadow: '0 10px 30px -5px rgba(0,0,0,0.1)',
	border: `1px solid ${theme.palette.grey[200]}`,
	overflow: 'hidden',
	background: '#ffffff'
}));

// MODERN DARK HEADER FOR TABLES
const ModernTableHead = styled(TableHead)(({ theme }) => ({
	'& .MuiTableCell-root': {
		backgroundColor: '#1e293b', // Dark slate blue/grey for high contrast
		color: '#ffffff',
		fontSize: '0.9rem',
		textTransform: 'uppercase',
		letterSpacing: '0.1em',
		fontWeight: 700,
		padding: theme.spacing(2),
		borderBottom: 'none'
	}
}));

// ZEBRA STRIPED ROWS FOR READABILITY
const StyledTableRow = styled(TableRow)(({ theme }) => ({
	'&:nth-of-type(odd)': {
		backgroundColor: alpha(theme.palette.primary.main, 0.03) // Very faint alternating color
	},
	'&:hover': {
		backgroundColor: `${alpha(theme.palette.primary.main, 0.08)} !important` // Clear hover state
	},
	// Hide last border
	'&:last-child td, &:last-child th': {
		border: 0
	}
}));

const BaseTile = styled(Box)(({ theme }) => ({
	padding: theme.spacing(3),
	borderRadius: '20px',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	textAlign: 'center',
	minHeight: '160px',
	transition: 'transform 0.2s ease, box-shadow 0.2s ease',
	border: `1px solid ${theme.palette.divider}`,
	backgroundColor: '#fff',
	'&:hover': {
		transform: 'translateY(-5px)',
		boxShadow: '0 12px 24px -10px rgba(0,0,0,0.15)'
	},
	'& .metric-label': {
		fontSize: '1.15rem',
		fontWeight: 800,
		textTransform: 'uppercase',
		letterSpacing: '0.03em',
		marginBottom: theme.spacing(1.5),
		color: theme.palette.text.secondary
	},
	'& .metric-value': {
		fontSize: '2.6rem',
		fontWeight: 900,
		lineHeight: 1.1,
		color: theme.palette.text.primary
	},
	'& .currency': {
		fontSize: '0.5em',
		fontWeight: 700,
		marginRight: '6px',
		verticalAlign: 'super',
		opacity: 0.6
	}
}));

const GuideTile = styled(BaseTile)(({ theme }) => ({
	borderBottom: `6px solid ${theme.palette.primary.main}`, // Color coded bottom border
	'& .metric-value': { color: theme.palette.primary.dark }
}));

const BoatmanTile = styled(BaseTile)(({ theme }) => ({
	borderBottom: `6px solid ${theme.palette.info.main}`,
	'& .metric-value': { color: theme.palette.info.dark }
}));

const GrandTotalTile = styled(BaseTile)(({ theme }) => ({
	background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, #0f172a 100%)`,
	border: 'none',
	'& .metric-label': { color: alpha('#fff', 0.7) },
	'& .metric-value': { color: '#fff', fontSize: '3rem' },
	'& .currency': { color: alpha('#fff', 0.7), opacity: 1 }
}));

// --- Helpers ---
const formatDateForApi = (date: Date): string => date.toISOString().split('T')[0];
const formatDateForTitle = (date: Date | null): string =>
	!date ? '' : date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

// === MAIN COMPONENT ===
function HomeTab() {
	const theme = useTheme();
	const userRole = localStorage.getItem('loginUserRole');
	const isRestricted = userRole === 'staff';

	const [summaryData, setSummaryData] = useState<BusinessSummary | undefined>();
	const [detailedData, setDetailedData] = useState<DetailedSummary | null>(null);
	const [startDate, setStartDate] = useState<Date | null>(new Date());
	const [endDate, setEndDate] = useState<Date | null>(new Date());

	const container = { show: { transition: { staggerChildren: 0.05 } } };
	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 }
	};

	// --- Effects ---
	useEffect(() => {
		if (!isRestricted) {
			const fetchData = async () => {
				try {
					const res = (await businessSummery()) as ApiResponse;

					if (res.success) setSummaryData(res.data);
					else toast.error(res.message || 'Failed to fetch summary');
				} catch (error) {
					toast.error(error instanceof Error ? error.message : 'An error occurred');
				}
			};
			fetchData();
		}
	}, [isRestricted]);

	useEffect(() => {
		if (!isRestricted && startDate && endDate) {
			if (startDate > endDate) {
				toast.error('Start date cannot be after end date.');
				return;
			}

			const fetchPerformance = async () => {
				try {
					const res = (await dailyPerformanceOfGuidesAndBoatmen(
						formatDateForApi(startDate),
						formatDateForApi(endDate)
					)) as DetailedApiResponse;

					if (res.success) setDetailedData(res.data);
					else toast.error('Failed to fetch performance data');
				} catch (error) {
					toast.error(error instanceof Error ? error.message : 'An error occurred');
				}
			};
			fetchPerformance();
		}
	}, [isRestricted, startDate, endDate]);

	if (isRestricted) {
		return (
			<Fade
				in
				timeout={800}
			>
				<Box sx={{ p: 4, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
					<ProCard sx={{ p: 6, textAlign: 'center', maxWidth: 500 }}>
						<Typography
							variant="h1"
							sx={{ fontSize: '4rem', mb: 2 }}
						>
							🔒
						</Typography>
						<Typography
							variant="h4"
							sx={{ fontWeight: 800, mb: 2 }}
						>
							Access Restricted
						</Typography>
					</ProCard>
				</Box>
			</Fade>
		);
	}

	return (
		<LocalizationProvider dateAdapter={AdapterDateFns}>
			<Box
				component={motion.div}
				initial="hidden"
				animate="show"
				variants={container}
				sx={{
					maxWidth: '1600px',
					mx: 'auto',
					p: { xs: 2, md: 4 },
					bgcolor: '#f1f5f9' // Slightly darker background for contrast
				}}
			>
				{/* --- Top Summary Widgets --- */}
				<motion.div
					variants={item}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6"
				>
					<SummaryWidget value={summaryData?.groupCodeCount ?? 0} />
					<OverdueWidget value={summaryData?.totalBoatmanCost ?? 0} />
					<IssuesWidget value={summaryData?.totalGuideCost ?? 0} />
					<FeaturesWidget value={summaryData?.totalSalesAmount ?? 0} />
				</motion.div>

				{detailedData && (
					<motion.div variants={item}>
						<ProCard elevation={0}>
							<Box sx={{ p: { xs: 3, md: 5 } }}>
								{/* --- Header Row --- */}
								<Grid
									container
									spacing={3}
									alignItems="center"
									sx={{ mb: 6 }}
								>
									<Grid
										item
										xs={12}
										lg={6}
									>
										<Typography
											variant="h4"
											sx={{ fontWeight: 900, color: '#1e293b' }}
										>
											Performance Summary
										</Typography>
										<Typography
											variant="h6"
											sx={{ fontWeight: 700, color: 'text.secondary', mt: 1 }}
										>
											{`${formatDateForTitle(startDate)} — ${formatDateForTitle(endDate)}`}
										</Typography>
									</Grid>

									<Grid
										item
										xs={12}
										lg={6}
									>
										<Box
											sx={{
												display: 'flex',
												gap: 2,
												justifyContent: { xs: 'flex-start', lg: 'flex-end' }
											}}
										>
											<DatePicker
												label="START DATE"
												value={startDate}
												onChange={setStartDate}
												slotProps={{
													textField: {
														variant: 'outlined',
														sx: { width: 180, '& .MuiInputBase-input': { fontWeight: 700 } }
													}
												}}
											/>
											<DatePicker
												label="END DATE"
												value={endDate}
												onChange={setEndDate}
												slotProps={{
													textField: {
														variant: 'outlined',
														sx: { width: 180, '& .MuiInputBase-input': { fontWeight: 700 } }
													}
												}}
											/>
										</Box>
									</Grid>
								</Grid>

								{/* --- CENTERED INCOME CARDS --- */}
								<Grid
									container
									spacing={4}
									sx={{ mb: 8 }}
								>
									<Grid
										item
										xs={12}
										md={4}
									>
										<GuideTile>
											<Typography className="metric-label">Guide Earnings</Typography>
											<Typography className="metric-value">
												<span className="currency">LKR</span>
												{detailedData.summary.totalGuidesEarnings.toLocaleString()}
											</Typography>
										</GuideTile>
									</Grid>
									<Grid
										item
										xs={12}
										md={4}
									>
										<BoatmanTile>
											<Typography className="metric-label">Boatmen Earnings</Typography>
											<Typography className="metric-value">
												<span className="currency">LKR</span>
												{detailedData.summary.totalBoatmenEarnings.toLocaleString()}
											</Typography>
										</BoatmanTile>
									</Grid>
									<Grid
										item
										xs={12}
										md={4}
									>
										<GrandTotalTile>
											<Typography className="metric-label">Total Revenue</Typography>
											<Typography className="metric-value">
												<span className="currency">LKR</span>
												{detailedData.summary.grandTotal.toLocaleString()}
											</Typography>
										</GrandTotalTile>
									</Grid>
								</Grid>

								{/* --- MODERN BOLD TABLES --- */}
								<Grid
									container
									spacing={6}
								>
									{/* Guides Table */}
									<Grid
										item
										xs={12}
										xl={6}
									>
										<Box
											sx={{
												mb: 2,
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'space-between'
											}}
										>
											<Typography
												variant="h5"
												sx={{ fontWeight: 800, color: '#1e293b' }}
											>
												TOP GUIDES
											</Typography>
											<Chip
												label={`${detailedData.summary.totalGuides} Active`}
												color="primary"
												sx={{ fontWeight: 700 }}
											/>
										</Box>
										<TableContainer
											sx={{
												boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
												borderRadius: '12px',
												border: `1px solid ${theme.palette.divider}`
											}}
										>
											<Table>
												<ModernTableHead>
													<TableRow>
														<TableCell>Guide Name</TableCell>
														<TableCell align="center">Total Orders</TableCell>
														<TableCell align="right">Earnings (LKR)</TableCell>
													</TableRow>
												</ModernTableHead>
												<TableBody>
													{detailedData.guides.map((g, i) => (
														<StyledTableRow key={i}>
															<TableCell
																sx={{
																	fontSize: '1.05rem',
																	fontWeight: 700,
																	color: '#334155'
																}}
															>
																{i + 1}. {g.name}
															</TableCell>
															<TableCell align="center">
																<Chip
																	label={g.orderCount}
																	color="primary"
																	size="small"
																	sx={{ fontWeight: 800, minWidth: '40px' }}
																/>
															</TableCell>
															<TableCell
																align="right"
																sx={{
																	fontSize: '1.15rem',
																	fontWeight: 800,
																	fontFamily: 'monospace',
																	color: '#0f172a'
																}}
															>
																{g.totalEarnings.toLocaleString()}
															</TableCell>
														</StyledTableRow>
													))}
												</TableBody>
											</Table>
										</TableContainer>
									</Grid>

									{/* Boatmen Table */}
									<Grid
										item
										xs={12}
										xl={6}
									>
										<Box
											sx={{
												mb: 2,
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'space-between'
											}}
										>
											<Typography
												variant="h5"
												sx={{ fontWeight: 800, color: '#1e293b' }}
											>
												TOP BOATMEN
											</Typography>
											<Chip
												label={`${detailedData.summary.totalBoatmen} Active`}
												color="info"
												sx={{ fontWeight: 700 }}
											/>
										</Box>
										<TableContainer
											sx={{
												boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
												borderRadius: '12px',
												border: `1px solid ${theme.palette.divider}`
											}}
										>
											<Table>
												<ModernTableHead>
													<TableRow>
														<TableCell>Boatman Name</TableCell>
														<TableCell align="center">Total Orders</TableCell>
														<TableCell align="right">Earnings (LKR)</TableCell>
													</TableRow>
												</ModernTableHead>
												<TableBody>
													{detailedData.boatmen.map((b, i) => (
														<StyledTableRow key={i}>
															<TableCell
																sx={{
																	fontSize: '1.05rem',
																	fontWeight: 700,
																	color: '#334155'
																}}
															>
																{i + 1}. {b.name}
															</TableCell>
															<TableCell align="center">
																<Chip
																	label={b.orderCount}
																	color="info"
																	size="small"
																	sx={{ fontWeight: 800, minWidth: '40px' }}
																/>
															</TableCell>
															<TableCell
																align="right"
																sx={{
																	fontSize: '1.15rem',
																	fontWeight: 800,
																	fontFamily: 'monospace',
																	color: '#0f172a'
																}}
															>
																{b.totalEarnings.toLocaleString()}
															</TableCell>
														</StyledTableRow>
													))}
												</TableBody>
											</Table>
										</TableContainer>
									</Grid>
								</Grid>
							</Box>
						</ProCard>
					</motion.div>
				)}
			</Box>
		</LocalizationProvider>
	);
}

export default HomeTab;
