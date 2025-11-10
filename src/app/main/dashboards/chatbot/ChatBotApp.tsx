import { Alert, Avatar, Box, Chip, Divider, IconButton, Paper, TextField, Typography, useTheme } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import {
	CategoryScale,
	Chart as ChartJS,
	ChartData,
	ChartOptions,
	Legend,
	LinearScale,
	LineController,
	LineElement,
	PointElement,
	Title,
	Tooltip
} from 'chart.js';
import SendIcon from '@mui/icons-material/Send';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import PersonIcon from '@mui/icons-material/Person';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, LineController);

type MessageType = 'user' | 'bot';
type ContentType = 'text' | 'chart' | 'error';
interface ChatMessage {
	id: string;
	type: MessageType;
	contentType: ContentType;
	content: string | any;
	timestamp: Date;
}

function TypingIndicator() {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, p: 1 }}>
			{[0, 1, 2].map((dot) => (
				<Box
					key={dot}
					sx={{
						width: 8,
						height: 8,
						bgcolor: 'text.secondary',
						borderRadius: '50%',
						animation: 'pulse 1.5s infinite ease-in-out',
						animationDelay: `${dot * 0.2}s`,
						'@keyframes pulse': {
							'0%, 100%': { opacity: 0.3, transform: 'scale(0.8)' },
							'50%': { opacity: 1, transform: 'scale(1.2)' }
						}
					}}
				/>
			))}
			<Typography
				variant="body2"
				color="text.secondary"
				sx={{ ml: 1, fontSize: '1rem' }}
			>
				AI is thinking...
			</Typography>
		</Box>
	);
}

function LineChart({
					   data,
					   title = 'Line Chart',
					   yAxisLabel
				   }: {
	data: ChartData<'line'>;
	title?: string;
	yAxisLabel?: string;
}) {
	const chartRef = useRef<HTMLCanvasElement>(null);
	const chartInstance = useRef<ChartJS | null>(null);

	useEffect(() => {
		if (chartRef.current && data) {
			if (chartInstance.current) chartInstance.current.destroy();

			const ctx = chartRef.current.getContext('2d');

			if (!ctx) return;

			chartInstance.current = new ChartJS(ctx, {
				type: 'line',
				data,
				options: {
					responsive: true,
					maintainAspectRatio: false,
					elements: { line: { tension: 0.1 } },
					plugins: {
						title: { display: !!title, text: title, font: { size: 18, weight: 'bold' } },
						legend: { position: 'top', labels: { font: { size: 14 } } }
					},
					scales: {
						y: {
							display: true,
							title: { display: !!yAxisLabel, text: yAxisLabel, font: { size: 14 } },
							ticks: { font: { size: 13 } }
						},
						x: { ticks: { font: { size: 13 } } }
					}
				} as ChartOptions<'line'>
			});
		}

		return () => {
			if (chartInstance.current) chartInstance.current.destroy();
		};
	}, [data, title, yAxisLabel]);

	return (
		<Box sx={{ position: 'relative', height: '300px', width: '100%', minWidth: '300px' }}>
			<canvas ref={chartRef} />
		</Box>
	);
}

function MultiAxisLineChart({ data, title = 'Multi-Axis Line Chart' }: { data: ChartData<'line'>; title?: string }) {
	const chartRef = useRef<HTMLCanvasElement>(null);
	const chartInstance = useRef<ChartJS | null>(null);

	useEffect(() => {
		if (chartRef.current && data) {
			if (chartInstance.current) chartInstance.current.destroy();

			const ctx = chartRef.current.getContext('2d');

			if (!ctx) return;

			chartInstance.current = new ChartJS(ctx, {
				type: 'line',
				data,
				options: {
					responsive: true,
					maintainAspectRatio: false,
					interaction: { mode: 'index', intersect: false },
					stacked: false,
					plugins: {
						title: { display: !!title, text: title, font: { size: 20, weight: 'bold' } },
						legend: { labels: { font: { size: 14 } } }
					},
					scales: {
						y: {
							type: 'linear',
							display: true,
							position: 'left',
							title: { display: true, text: 'Income', font: { size: 14 } },
							ticks: { font: { size: 13 } }
						},
						y1: {
							type: 'linear',
							display: true,
							position: 'right',
							title: { display: true, text: 'Count', font: { size: 14 } },
							grid: { drawOnChartArea: false },
							ticks: { font: { size: 13 } }
						},
						x: { ticks: { font: { size: 13 } } }
					}
				} as ChartOptions<'line'>
			});
		}

		return () => {
			if (chartInstance.current) chartInstance.current.destroy();
		};
	}, [data, title]);

	return (
		<Box sx={{ position: 'relative', height: '400px', width: '100%', minWidth: '450px' }}>
			<canvas ref={chartRef} />
		</Box>
	);
}

function ChatBotApp() {
	const theme = useTheme();
	const MAX_QUERIES = 10;

	const [messages, setMessages] = useState<ChatMessage[]>([
		{
			id: '1',
			type: 'bot',
			contentType: 'text',
			content:
				'Hello! I am your Cinnamon Miracle AI Advisor. Ask me about revenue, orders, or general system status.',
			timestamp: new Date()
		}
	]);
	const [input, setInput] = useState('');
	const [isBotTyping, setIsBotTyping] = useState(false);

	const [dailyQueryCount, setDailyQueryCount] = useState(() => {
		try {
			const savedDate = localStorage.getItem('drakoryn_query_date');
			const today = new Date().toDateString();

			if (savedDate !== today) {
				localStorage.setItem('drakoryn_query_date', today);
				localStorage.setItem('drakoryn_query_count', '0');
				return 0;
			}

			return parseInt(localStorage.getItem('drakoryn_query_count') || '0', 10);
		} catch {
			return 0;
		}
	});

	const messagesEndRef = useRef<HTMLDivElement>(null);
	const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
	useEffect(() => scrollToBottom(), [messages, isBotTyping]);
	useEffect(() => {
		localStorage.setItem('drakoryn_query_count', dailyQueryCount.toString());
		localStorage.setItem('drakoryn_query_date', new Date().toDateString());
	}, [dailyQueryCount]);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value);
	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault();
			handleSend();
		}
	};

	const executeQuery = async (queryText: string) => {
		if (dailyQueryCount >= MAX_QUERIES) {
			setMessages((prev) => [
				...prev,
				{
					id: Date.now().toString(),
					type: 'user',
					contentType: 'text',
					content: queryText,
					timestamp: new Date()
				},
				{
					id: (Date.now() + 1).toString(),
					type: 'bot',
					contentType: 'error',
					content: `You have reached your daily limit of ${MAX_QUERIES} queries. Please upgrade your package to continue.`,
					timestamp: new Date()
				}
			]);
			setInput('');
			return;
		}

		const userMessage: ChatMessage = {
			id: Date.now().toString(),
			type: 'user',
			contentType: 'text',
			content: queryText,
			timestamp: new Date()
		};
		setMessages((prev) => [...prev, userMessage]);
		setInput('');
		setIsBotTyping(true);
		setDailyQueryCount((prev) => prev + 1);

		try {
			const response = await fetch('http://localhost:8000/api/query', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ query: queryText, variables: {} })
			});

			if (!response.ok) throw new Error(`API Error: ${response.statusText}`);

			const data = await response.json();
			processApiResponse(data);
		} catch (error: any) {
			setMessages((prev) => [
				...prev,
				{
					id: Date.now().toString(),
					type: 'bot',
					contentType: 'error',
					content: `Error connecting to server: ${error.message}`,
					timestamp: new Date()
				}
			]);
		} finally {
			setIsBotTyping(false);
		}
	};

	const processApiResponse = (apiData: any) => {
		if (apiData.answer) {
			setMessages((prev) => [
				...prev,
				{
					id: Date.now().toString(),
					type: 'bot',
					contentType: 'text',
					content: apiData.answer,
					timestamp: new Date()
				}
			]);
		}

		if (apiData.data?.labels && Array.isArray(apiData.data.datasets)) {
			setMessages((prev) => [
				...prev,
				{
					id: (Date.now() + 1).toString(),
					type: 'bot',
					contentType: 'chart',
					content: apiData.data,
					timestamp: new Date()
				}
			]);
		}

		if (!apiData.answer && !apiData.data?.labels) {
			setMessages((prev) => [
				...prev,
				{
					id: Date.now().toString(),
					type: 'bot',
					contentType: 'text',
					content: `I received a response, but I don't know how to display it:\n${JSON.stringify(apiData, null, 2)}`,
					timestamp: new Date()
				}
			]);
		}
	};

	const handleSend = () => {
		if (input.trim()) executeQuery(input);
	};

	const renderMessageContent = (msg: ChatMessage) => {
		switch (msg.contentType) {
			case 'text':
				return (
					<Box
						sx={{
							'& table': {
								width: '100%',
								borderCollapse: 'separate',
								borderSpacing: 0,
								marginTop: 2,
								marginBottom: 2,
								borderRadius: 1,
								overflow: 'hidden',
								border: `1px solid ${theme.palette.divider}`,
								fontSize: '1.4rem'
							},
							'& th': {
								padding: '16px 20px',
								textAlign: 'left',
								fontWeight: 700,
								fontSize: '1.6rem',
								backgroundColor:
									theme.palette.mode === 'light' ? 'rgba(0,0,0,0.06)' : 'rgba(255,255,255,0.1)',
								borderBottom: `2px solid ${theme.palette.divider}`
							},
							'& td': {
								padding: '16px 20px',
								fontSize: '1.4rem',
								borderBottom: `1px solid ${theme.palette.divider}`
							},
							'& tr:last-child td': { borderBottom: 'none' },
							'& h1': {
								marginTop: 2.5,
								marginBottom: 1.5,
								fontWeight: 700,
								fontSize: '3rem',
								lineHeight: 1.3
							},
							'& h2': {
								marginTop: 2.5,
								marginBottom: 1.5,
								fontWeight: 700,
								fontSize: '2.5rem',
								lineHeight: 1.3
							},
							'& h3': {
								marginTop: 2,
								marginBottom: 1.2,
								fontWeight: 700,
								fontSize: '2rem',
								lineHeight: 1.4
							},
							'& p': { marginBottom: 1.5, lineHeight: 1.8, fontSize: '1.4rem' },
							'& ul, & ol': { paddingLeft: 3, marginBottom: 1.5, fontSize: '1.35rem' },
							'& li': { marginBottom: 0.8, lineHeight: 1.7, fontSize: '1.35rem' },
							'& strong': {
								fontWeight: 700,
								fontSize: '1.5rem',
								color:
									theme.palette.mode === 'light'
										? theme.palette.primary.dark
										: theme.palette.primary.light
							},
							'& code': {
								fontSize: '1.3rem',
								padding: '3px 8px',
								borderRadius: '4px',
								backgroundColor:
									theme.palette.mode === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.1)'
							},
							'& pre': {
								fontSize: '1.25rem',
								padding: '18px',
								borderRadius: '8px',
								overflow: 'auto',
								backgroundColor:
									theme.palette.mode === 'light' ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.1)'
							}
						}}
					>
						<ReactMarkdown remarkPlugins={[remarkGfm]}>{msg.content}</ReactMarkdown>
					</Box>
				);
			case 'error':
				return (
					<Alert
						severity="error"
						sx={{ fontSize: '1.1rem' }}
					>
						{msg.content}
					</Alert>
				);
			case 'chart':
				const isMultiAxis = msg.content.datasets.length > 1 && msg.content.datasets[1]?.yAxisID === 'y1';
				return (
					<Paper
						elevation={1}
						sx={{ p: 2, mt: 2, bgcolor: 'background.default' }}
					>
						{isMultiAxis ? <MultiAxisLineChart data={msg.content} /> : <LineChart data={msg.content} />}
					</Paper>
				);
			default:
				return null;
		}
	};

	return (
		<Box sx={{ width: '100%', height: '100%', p: 3, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
			{/* HEADER */}
			<Paper
				elevation={3}
				sx={{ p: 2, mb: 2, display: 'flex', alignItems: 'flex-start', flexShrink: 0 }}
			>
				<Avatar sx={{ bgcolor: 'primary.main', mr: 2, width: 48, height: 48 }}>
					<SmartToyIcon sx={{ fontSize: 28 }} />
				</Avatar>
				<Box sx={{ flexGrow: 1 }}>
					<Typography
						variant="h5"
						sx={{ fontWeight: 600 }}
					>
						Drakoryn The AI
					</Typography>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mt: 0.5, mb: 1 }}>
						<Typography
							variant="body2"
							color="text.secondary"
							sx={{ fontSize: '0.95rem' }}
						>
							Active
						</Typography>
						<Chip
							label={`${dailyQueryCount}/${MAX_QUERIES} Queries`}
							size="small"
							color={dailyQueryCount >= MAX_QUERIES ? 'error' : 'default'}
							variant="outlined"
							sx={{ fontWeight: 600 }}
						/>
					</Box>

					{/* BEAUTIFUL BLUE CHIP NOTICE */}
					<Chip
						label="You are currently using the Free Tier, which allows up to 10 queries within a 24-hour period. To unlock additional queries and advanced features, please contact the developer to upgrade to a higher AI Advisor package."
						sx={{
							mt: 1.5,
							p: '4px 12px',
							borderRadius: '8px',
							backgroundColor: '#E3F2FD', // Light blue
							color: '#1E88E5', // Dark blue
							fontSize: '1.3rem',
							fontWeight: 600,
							textAlign: 'left',
							width: '100%',
							height: 'auto',
							'& .MuiChip-label': {
								display: 'block',
								whiteSpace: 'normal',
								padding: '8px 0',
								lineHeight: 1.5
							}
						}}
					/>
				</Box>
			</Paper>

			{/* CHIPS */}
			<Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap', flexShrink: 0 }}>
				<Chip
					label="Last week's revenue"
					onClick={() => executeQuery('show me revenue trends for last week? remember we use LKR')}
					color="primary"
					variant="outlined"
					clickable
					sx={{ fontSize: '1rem', padding: '20px 12px' }}
				/>
				<Chip
					label="Monthly Orders"
					onClick={() => executeQuery('show me monthly order volume LKR for the past 6 months use LKR')}
					clickable
					sx={{ fontSize: '1rem', padding: '20px 12px' }}
				/>
				<Chip
					label="Top Selling Products"
					onClick={() => executeQuery('show me top 5 selling products this month - remember to use LKR')}
					clickable
					sx={{ fontSize: '1rem', padding: '20px 12px' }}
				/>
				<Chip
					label="Low Stock Alerts"
					onClick={() => executeQuery('what products are low on stock?')}
					clickable
					sx={{ fontSize: '1rem', padding: '20px 12px' }}
				/>
				<Chip
					label="Boatman Growth"
					onClick={() =>
						executeQuery(
							'show me the top 5 performing boatmen this quarter, ranked by total income - remember to use LKR'
						)
					}
					clickable
					sx={{ fontSize: '1rem', padding: '20px 12px' }}
				/>
				<Chip
					label="Guide Growth"
					onClick={() =>
						executeQuery('show me the top 5 performing guides this quarter, ranked by total income - remember to use LKR')
					}
					clickable
					sx={{ fontSize: '1rem', padding: '20px 12px' }}
				/>
			</Box>

			{/* MESSAGES */}
			<Paper
				elevation={3}
				sx={{
					flexGrow: 1,
					mb: 2,
					p: 3,
					bgcolor: 'background.paper',
					display: 'flex',
					flexDirection: 'column',
					overflow: 'hidden'
				}}
			>
				<Box
					sx={{
						flexGrow: 1,
						overflowY: 'auto',
						overflowX: 'hidden',
						pr: 1,
						display: 'flex',
						flexDirection: 'column',
						gap: 2
					}}
				>
					{messages.map((msg) => {
						const isBot = msg.type === 'bot';
						return (
							<Box
								key={msg.id}
								sx={{ display: 'flex', justifyContent: isBot ? 'flex-start' : 'flex-end', mb: 2 }}
							>
								{isBot && (
									<Avatar sx={{ bgcolor: 'secondary.main', mr: 1.5, mt: 1, width: 40, height: 40 }}>
										<SmartToyIcon sx={{ fontSize: 22 }} />
									</Avatar>
								)}
								<Box sx={{ maxWidth: isBot ? '85%' : '75%' }}>
									<Paper
										elevation={isBot ? 2 : 4}
										sx={{
											p: 3,
											borderRadius: 3,
											borderTopLeftRadius: isBot ? 0 : 12,
											borderTopRightRadius: isBot ? 12 : 0,
											bgcolor: isBot
												? theme.palette.mode === 'light'
													? '#f5f5f5'
													: '#2a2a2a'
												: 'primary.main',
											color: isBot ? 'text.primary' : 'primary.contrastText'
										}}
									>
										{renderMessageContent(msg)}
										<Typography
											variant="caption"
											sx={{
												display: 'block',
												mt: 1.5,
												opacity: 0.6,
												textAlign: 'right',
												fontSize: '0.85rem'
											}}
										>
											{msg.timestamp.toLocaleTimeString([], {
												hour: '2-digit',
												minute: '2-digit'
											})}
										</Typography>
									</Paper>
								</Box>
								{!isBot && (
									<Avatar sx={{ bgcolor: 'primary.dark', ml: 1.5, mt: 1, width: 40, height: 40 }}>
										<PersonIcon sx={{ fontSize: 22 }} />
									</Avatar>
								)}
							</Box>
						);
					})}
					{isBotTyping && (
						<Box sx={{ display: 'flex', alignItems: 'center', ml: 1, mb: 2 }}>
							<Avatar sx={{ bgcolor: 'secondary.main', mr: 1.5, width: 40, height: 40 }}>
								<SmartToyIcon sx={{ fontSize: 20 }} />
							</Avatar>
							<Paper
								elevation={1}
								sx={{
									px: 2.5,
									py: 1.5,
									borderRadius: 3,
									borderTopLeftRadius: 0,
									bgcolor: theme.palette.mode === 'light' ? '#f0f0f0' : '#333'
								}}
							>
								<TypingIndicator />
							</Paper>
						</Box>
					)}
					<div ref={messagesEndRef} />
				</Box>
			</Paper>

			{/* INPUT */}
			<Paper
				elevation={10}
				sx={{ p: '4px 8px', display: 'flex', alignItems: 'center', borderRadius: 4, flexShrink: 0 }}
			>
				<TextField
					fullWidth
					placeholder={dailyQueryCount >= MAX_QUERIES ? 'Daily limit reached.' : 'Ask your data question...'}
					variant="standard"
					InputProps={{ disableUnderline: true, sx: { px: 2, py: 1.5, fontSize: '1.1rem' } }}
					value={input}
					onChange={handleInputChange}
					onKeyPress={handleKeyPress}
					disabled={isBotTyping || dailyQueryCount >= MAX_QUERIES}
				/>
				<Divider
					sx={{ height: 32, m: 0.5 }}
					orientation="vertical"
				/>
				<IconButton
					color="primary"
					sx={{ p: '12px' }}
					onClick={handleSend}
					disabled={isBotTyping || !input.trim() || dailyQueryCount >= MAX_QUERIES}
				>
					<SendIcon sx={{ fontSize: 24 }} />
				</IconButton>
			</Paper>
		</Box>
	);
}

export default ChatBotApp;
