import { Alert, Avatar, Box, Chip, Divider, IconButton, Paper, TextField, Typography } from '@mui/material';
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
	// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
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
						width: 10,
						height: 10,
						bgcolor: '#6366F1',
						borderRadius: '50%',
						animation: 'pulse 1.5s infinite ease-in-out',
						animationDelay: `${dot * 0.2}s`
					}}
				/>
			))}
			<Typography
				variant="body2"
				color="#1e3a8a"
				sx={{ ml: 1, fontSize: '1rem', fontWeight: 500 }}
			>
				AI is thinking.....
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
					elements: { line: { tension: 0.3 } },
					plugins: {
						title: { display: !!title, text: title, color: '#1e3a8a', font: { size: 18, weight: 'bold' } },
						legend: { position: 'top', labels: { color: '#1e3a8a', font: { size: 14 } } },
						tooltip: { backgroundColor: 'rgba(30,58,138,0.95)', titleColor: '#fff', bodyColor: '#fff' }
					},
					scales: {
						y: {
							title: { display: !!yAxisLabel, text: yAxisLabel, color: '#1e3a8a', font: { size: 14 } },
							ticks: { color: '#1e3a8a', font: { size: 13 } },
							grid: { color: 'rgba(0,0,0,0.05)' }
						},
						x: { ticks: { color: '#1e3a8a', font: { size: 13 } }, grid: { color: 'rgba(0,0,0,0.05)' } }
					}
				} as ChartOptions<'line'>
			});
		}

		// eslint-disable-next-line consistent-return
		return () => {
			if (chartInstance.current) chartInstance.current.destroy();
		};
	}, [data, title, yAxisLabel]);

	return (
		<Box
			sx={{
				position: 'relative',
				height: '300px',
				width: '100%',
				minWidth: '300px',
				p: 2,
				bgcolor: '#fff',
				borderRadius: 3,
				boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
			}}
		>
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
					plugins: {
						title: { display: !!title, text: title, color: '#1e3a8a', font: { size: 20, weight: 'bold' } },
						legend: { labels: { color: '#1e3a8a', font: { size: 14 } } }
					},
					scales: {
						y: {
							position: 'left',
							title: { display: true, text: 'Income (LKR)', color: '#1e3a8a' },
							ticks: { color: '#1e3a8a' }
						},
						y1: {
							position: 'right',
							title: { display: true, text: 'Count', color: '#6366F1' },
							grid: { drawOnChartArea: false },
							ticks: { color: '#6366F1' }
						},
						x: { ticks: { color: '#1e3a8a' } }
					}
				} as ChartOptions<'line'>
			});
		}

		// eslint-disable-next-line consistent-return
		return () => {
			if (chartInstance.current) chartInstance.current.destroy();
		};
	}, [data, title]);

	return (
		<Box
			sx={{
				position: 'relative',
				height: '400px',
				width: '100%',
				minWidth: '450px',
				p: 2,
				bgcolor: '#fff',
				borderRadius: 3,
				boxShadow: '0 4px 16px rgba(0,0,0,0.1)'
			}}
		>
			<canvas ref={chartRef} />
		</Box>
	);
}

// @ts-ignore
function ChatBotApp() {
	const MAX_QUERIES = 5;
	const [messages, setMessages] = useState<ChatMessage[]>([
		{
			id: '1',
			type: 'bot',
			contentType: 'text',
			content:
				'Hello! I am your **B2BIZ Advisor**. Ask me about revenue, orders, or system status.',
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

	// content update to test commenting feature
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

			// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
			const data = await response.json();
			processApiResponse(data);
		} catch (error: any) {
			setMessages((prev) => [
				...prev,
				{
					id: Date.now().toString(),
					type: 'bot',
					contentType: 'error',
					// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
					content: `Error connecting to server: ${error.message}`,
					timestamp: new Date()
				}
			]);
		} finally {
			setIsBotTyping(false);
		}
	};

	const processApiResponse = (apiData: any) => {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		if (apiData.answer) {
			setMessages((prev) => [
				...prev,
				{
					id: Date.now().toString(),
					type: 'bot',
					contentType: 'text',
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
					content: apiData.answer,
					timestamp: new Date()
				}
			]);
		}

		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		if (apiData.data?.labels && Array.isArray(apiData.data.datasets)) {
			setMessages((prev) => [
				...prev,
				{
					id: (Date.now() + 1).toString(),
					type: 'bot',
					contentType: 'chart',
					// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
					content: apiData.data,
					timestamp: new Date()
				}
			]);
		}

		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
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
								borderRadius: 2,
								overflow: 'hidden',
								border: `1px solid #e0e0e0`,
								fontSize: '1.4rem'
							},
							'& th': {
								padding: '16px 20px',
								textAlign: 'left',
								fontWeight: 700,
								fontSize: '1.6rem',
								backgroundColor: '#6366F1',
								color: '#fff',
								borderBottom: `2px solid #e0e0e0`
							},
							'& td': {
								padding: '16px 20px',
								fontSize: '1.4rem',
								borderBottom: `1px solid #e0e0e0`,
								color: '#1e3a8a'
							},
							'& tr:last-child td': { borderBottom: 'none' },
							'& h1': {
								marginTop: 2.5,
								marginBottom: 1.5,
								fontWeight: 700,
								fontSize: '3rem',
								lineHeight: 1.3,
								color: '#1e3a8a'
							},
							'& h2': {
								marginTop: 2.5,
								marginBottom: 1.5,
								fontWeight: 700,
								fontSize: '2.5rem',
								lineHeight: 1.3,
								color: '#1e3a8a'
							},
							'& p': { marginBottom: 1.5, lineHeight: 1.8, fontSize: '1.4rem', color: '#1e3a8a' },
							'& strong': { fontWeight: 700, color: '#6366F1' },
							'& code': {
								fontSize: '1.3rem',
								padding: '3px 8px',
								borderRadius: '4px',
								backgroundColor: 'rgba(99,102,241,0.1)',
								color: '#4338ca'
							},
							'& pre': {
								fontSize: '1.25rem',
								padding: '18px',
								borderRadius: '8px',
								overflow: 'auto',
								backgroundColor: '#f8f9ff',
								border: '1px solid #e0e7ff'
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
						sx={{ fontSize: '1.1rem', bgcolor: '#fef2f2', color: '#dc2626' }}
					>
						{msg.content}
					</Alert>
				);
			case 'chart':
				// eslint-disable-next-line no-case-declarations,@typescript-eslint/no-unsafe-member-access
				const isMultiAxis = msg.content.datasets.length > 1 && msg.content.datasets[1]?.yAxisID === 'y1';
				return (
					<Paper
						elevation={3}
						sx={{ p: 3, mt: 2, bgcolor: '#fff', borderRadius: 3, boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}
					>
						{/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
						{isMultiAxis ? <MultiAxisLineChart data={msg.content} /> : <LineChart data={msg.content} />}
					</Paper>
				);
			default:
				return null;
		}
	};

	// @ts-expect-error
	return (
		<Box
			sx={{
				width: '100%',
				height: '100%',
				p: 3,
				display: 'flex',
				flexDirection: 'column',
				overflow: 'hidden',
				backgroundColor: '#ffffff',
				borderRadius: '16px',
				position: 'relative',
				boxShadow: '0 12px 32px rgba(0,0,0,0.08)'
			}}
		>
			{/* BUBBLE BACKGROUND */}
			<div className="bubble-bg">
				<div className="bubble bubble-1" />
				<div className="bubble bubble-2" />
				<div className="bubble bubble-3" />
			</div>

			{/* HEADER */}
			<Paper
				elevation={0}
				sx={{
					p: 3,
					mb: 2,
					display: 'flex',
					alignItems: 'flex-start',
					flexShrink: 0,
					bgcolor: '#f8f9ff',
					borderRadius: 3,
					border: '1px solid #e0e7ff'
				}}
			>
				<Avatar sx={{ bgcolor: '#6366F1', mr: 2, width: 56, height: 56 }}>
					<SmartToyIcon sx={{ fontSize: 32 }} />
				</Avatar>
				<Box sx={{ flexGrow: 1 }}>
					<Typography
						variant="h5"
						sx={{ fontWeight: 700, color: '#1e3a8a' }}
					>
						B2BIZ
					</Typography>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mt: 0.5 }}>
						<Typography
							variant="body2"
							sx={{ color: '#6366F1', fontWeight: 500 }}
						>
							Active
						</Typography>
						<Chip
							label={`${dailyQueryCount}/${MAX_QUERIES} Queries`}
							size="small"
							color={dailyQueryCount >= MAX_QUERIES ? 'error' : 'primary'}
							variant="filled"
							sx={{ fontWeight: 600, color: '#fff' }}
						/>
					</Box>
					<Chip
						label="Free Tier: 5 queries/day. Upgrade for unlimited AI insights."
						sx={{
							mt: 2,
							p: '8px 16px',
							borderRadius: '12px',
							backgroundColor: '#eef2ff',
							color: '#4338ca',
							fontSize: '1.1rem',
							fontWeight: 600,
							textAlign: 'left',
							width: '100%',
							height: 'auto',
							'& .MuiChip-label': { display: 'block', whiteSpace: 'normal', lineHeight: 1.6 }
						}}
					/>
				</Box>
			</Paper>

			{/* QUICK CHIPS */}
			<Box sx={{ mb: 3, display: 'flex', gap: 1.5, flexWrap: 'wrap', flexShrink: 0 }}>
				{[
					{ label: "Last week's revenue", q: 'show me revenue trends for last week? remember we use LKR' },
					{ label: 'Monthly Orders', q: 'show me monthly order volume LKR for the past 6 months use LKR' },
					{ label: 'Top Products', q: 'show me top 5 selling products this month - remember to use LKR' },
					{ label: 'Low Stock', q: 'what products are low on stock?' },
					{
						label: 'Top Boatmen',
						q: 'show me the top 5 performing boatmen this quarter, ranked by total income - remember to use LKR'
					},
					{
						label: 'Top Guides',
						q: 'show me the top 5 performing guides this quarter, ranked by total income - remember to use LKR'
					}
				].map((chip, i) => (
					<Chip
						key={i}
						label={chip.label}
						onClick={() => executeQuery(chip.q)}
						clickable
						sx={{
							fontSize: '1rem',
							padding: '12px 20px',
							fontWeight: 600,
							bgcolor: '#eef2ff',
							color: '#4338ca',
							border: '1px solid #c7d2fe',
							'&:hover': { bgcolor: '#e0e7ff', transform: 'translateY(-2px)' },
							borderRadius: '12px',
							transition: 'all 0.3s ease'
						}}
					/>
				))}
			</Box>

			{/* MESSAGES */}
			<Paper
				elevation={0}
				sx={{
					flexGrow: 1,
					mb: 2,
					p: 3,
					bgcolor: '#ffffff',
					borderRadius: 3,
					border: '1px solid #e0e7ff',
					display: 'flex',
					flexDirection: 'column',
					overflow: 'hidden'
				}}
			>
				<Box sx={{ flexGrow: 1, overflowY: 'auto', pr: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
					{messages.map((msg) => {
						const isBot = msg.type === 'bot';
						return (
							<Box
								key={msg.id}
								sx={{ display: 'flex', justifyContent: isBot ? 'flex-start' : 'flex-end', mb: 2 }}
							>
								{isBot && (
									<Avatar sx={{ bgcolor: '#6366F1', mr: 1.5, mt: 1, width: 44, height: 44 }}>
										<SmartToyIcon sx={{ fontSize: 24 }} />
									</Avatar>
								)}
								<Box sx={{ maxWidth: isBot ? '82%' : '75%' }}>
									<Paper
										elevation={2}
										sx={{
											p: 3,
											borderRadius: 3,
											borderTopLeftRadius: isBot ? 0 : 16,
											borderTopRightRadius: isBot ? 16 : 0,
											bgcolor: isBot ? '#f8f9ff' : '#6366F1',
											color: isBot ? '#1e3a8a' : '#fff',
											boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
										}}
									>
										{renderMessageContent(msg)}
										<Typography
											variant="caption"
											sx={{
												display: 'block',
												mt: 1.5,
												opacity: 0.7,
												textAlign: 'right',
												fontSize: '0.85rem',
												color: isBot ? '#6366F1' : '#fff'
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
									<Avatar sx={{ bgcolor: '#1e3a8a', ml: 1.5, mt: 1, width: 44, height: 44 }}>
										<PersonIcon sx={{ fontSize: 24 }} />
									</Avatar>
								)}
							</Box>
						);
					})}
					{isBotTyping && (
						<Box sx={{ display: 'flex', alignItems: 'center', ml: 1, mb: 2 }}>
							<Avatar sx={{ bgcolor: '#6366F1', mr: 1.5, width: 44, height: 44 }}>
								<SmartToyIcon sx={{ fontSize: 22 }} />
							</Avatar>
							<Paper
								elevation={2}
								sx={{
									px: 3,
									py: 2,
									borderRadius: 3,
									borderTopLeftRadius: 0,
									bgcolor: '#f8f9ff',
									boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
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
				elevation={0}
				sx={{
					p: '8px',
					display: 'flex',
					alignItems: 'center',
					borderRadius: 4,
					flexShrink: 0,
					bgcolor: '#f8f9ff',
					border: '1px solid #e0e7ff'
				}}
			>
				<TextField
					fullWidth
					placeholder={dailyQueryCount >= MAX_QUERIES ? 'Daily limit reached.' : 'Ask your data question...'}
					variant="standard"
					InputProps={{
						disableUnderline: true,
						sx: { px: 2, py: 1.8, fontSize: '1.1rem', color: '#1e3a8a' }
					}}
					value={input}
					onChange={handleInputChange}
					onKeyPress={handleKeyPress}
					disabled={isBotTyping || dailyQueryCount >= MAX_QUERIES}
					sx={{ '& .MuiInputBase-input::placeholder': { color: '#9ca3af', opacity: 1 } }}
				/>
				<Divider
					sx={{ height: 36, m: 0.5, bgcolor: '#c7d2fe' }}
					orientation="vertical"
				/>
				<IconButton
					sx={{ p: '14px', bgcolor: '#6366F1', '&:hover': { bgcolor: '#4f46e5' }, color: '#fff' }}
					onClick={handleSend}
					disabled={isBotTyping || !input.trim() || dailyQueryCount >= MAX_QUERIES}
				>
					<SendIcon sx={{ fontSize: 26 }} />
				</IconButton>
			</Paper>

			{/* BUBBLE STYLES */}
			<style jsx>{`
				.bubble-bg {
					position: absolute;
					inset: 0;
					overflow: hidden;
					pointer-events: none;
				}
				.bubble {
					position: absolute;
					bottom: -100px;
					border-radius: 50%;
					opacity: 0;
					filter: blur(1px);
				}
				.bubble-1 {
					left: 15%;
					width: 60px;
					height: 60px;
					background: radial-gradient(circle at 30% 30%, #a5b4fc, #6366f1);
					animation: bubbleRise 3.5s ease-out infinite;
					animation-delay: 0s;
					--drift: -50px;
				}
				.bubble-2 {
					left: 48%;
					width: 45px;
					height: 45px;
					background: radial-gradient(circle at 30% 30%, #c7d2fe, #818cf8);
					animation: bubbleRise 3s ease-out infinite;
					animation-delay: 0.7s;
					--drift: 70px;
				}
				.bubble-3 {
					left: 78%;
					width: 55px;
					height: 55px;
					background: radial-gradient(circle at 30% 30%, #e0e7ff, #6366f1);
					animation: bubbleRise 4s ease-out infinite;
					animation-delay: 1.4s;
					--drift: -40px;
				}
				@keyframes bubbleRise {
					0% {
						transform: translateY(0) translateX(0) scale(0.5);
						opacity: 0;
					}
					20% {
						opacity: 0.7;
					}
					100% {
						transform: translateY(-130vh) translateX(var(--drift)) scale(1.5);
						opacity: 0;
					}
				}
			`}</style>
		</Box>
	);
}

export default ChatBotApp;
