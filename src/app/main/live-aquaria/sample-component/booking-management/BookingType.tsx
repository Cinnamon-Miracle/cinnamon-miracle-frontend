import React, { useEffect, useRef, useState } from 'react';
import {
	Autocomplete,
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Grid,
	IconButton,
	LinearProgress,
	Paper,
	styled,
	Switch,
	TextField,
	Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReplayIcon from '@mui/icons-material/Replay';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import NoteAlt from '@mui/icons-material/NoteAlt';
import PrintIcon from '@mui/icons-material/Print';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { createOrder, fetchAllProducts } from '../../../../axios/services/mega-city-services/common/CommonService';
import MaterialTableWrapper from '../../../../common/tableComponents/MaterialTableWrapper';

interface Product {
	_id: string;
	itemCode: string;
	description: string;
	category: string;
	brandName: string;
	price: number;
	isActive: boolean;
	updatedBy: string;
	categoryCode: string;
	createdAt: string;
	expireDate: string;
	manufactureDate: string;
	manufacturerCode: string;
	manufacturerName: string;
	stocks: number;
	updatedAt: string;
	warrantyClaimProcess: string;
	warrantyDetails: string;
	warrantyPeriod: number;
	__v: number;
	itemName: string;
	productImage: string;
	isExotic?: boolean;
}

interface CartItem {
	orderNumber: string;
	productId: string;
	productName: string;
	quantity: number;
	price: number;
	total: number;
	categoryCode: string;
}

interface Percentages {
	boatman: number;
	guide: number;
	gift: number;
	customBoatman: boolean;
	customGuide: boolean;
	customGift: boolean;
	less: boolean;
	lessAmount: number;
	exoticTich: boolean;
	company: number;
	customCompany: boolean;
	discount: number;
	customDiscount: boolean;
}

const CustomSwitch = styled(Switch)(({ theme }) => ({
	width: 52,
	height: 26,
	padding: 0,
	'& .MuiSwitch-switchBase': {
		padding: 2,
		margin: 2,
		transitionDuration: '300ms',
		'&.Mui-checked': {
			transform: 'translateX(26px)',
			color: 'white',
			'& + .MuiSwitch-track': {
				backgroundColor: theme.palette.primary.main,
				opacity: 1,
				border: 0
			}
		},
		'& .MuiSwitch-thumb': {
			boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
			width: 18,
			height: 18,
			backgroundColor: 'white'
		}
	},
	'& .MuiSwitch-track': {
		borderRadius: 13,
		backgroundColor: theme.palette.grey[400],
		opacity: 1
	}
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
	padding: theme.spacing(1.5),
	borderRadius: '8px',
	boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
	minHeight: '400px',
	display: 'flex',
	flexDirection: 'column'
}));

const CostItem = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	marginBottom: theme.spacing(0.5),
	'& .label': { color: theme.palette.text.secondary },
	'& .value': { fontWeight: 500 }
}));

const PlaceOrderButton = styled(Button)(({ theme }) => ({
	backgroundColor: '#4caf50',
	color: 'white',
	fontWeight: 'bold',
	borderRadius: '6px',
	padding: theme.spacing(0.75),
	'&:hover': { backgroundColor: '#388e3c' },
	'&:disabled': {
		backgroundColor: theme.palette.grey[400],
		color: theme.palette.grey[600]
	}
}));

const GreenProgress = styled(LinearProgress)(({ theme }) => ({
	'& .MuiLinearProgress-bar': {
		backgroundColor: '#4caf50'
	}
}));

function generateOrderNumber(): string {
	const date = new Date();
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');
	const randomDigits = Math.floor(1000 + Math.random() * 9000);
	return `ORD-${year}-${month}-${day}-${hours}-${minutes}-${seconds}-${randomDigits}`;
}

function getCategoryCodeCounter(): number {
	const today = new Date().toISOString().slice(0, 10);
	const stored = localStorage.getItem('categoryCodeCounter');

	if (stored) {
		const parsed = JSON.parse(stored);

		if (parsed.date === today) {
			return parsed.counter;
		}
	}

	return 1;
}

function incrementCategoryCodeCounter(): number {
	const today = new Date().toISOString().slice(0, 10);
	let counter = 1;
	const stored = localStorage.getItem('categoryCodeCounter');

	if (stored) {
		const parsed = JSON.parse(stored);

		if (parsed.date === today) {
			counter = parsed.counter + 1;
		}
	}

	localStorage.setItem('categoryCodeCounter', JSON.stringify({ date: today, counter }));
	return counter;
}

function generateCategoryCode(counter: number): string {
	const date = new Date();
	const year = date.getFullYear().toString();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	const dayName = date.toLocaleString('en-US', { weekday: 'long' }).slice(0, 3).toUpperCase();
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');
	return `GRCAT-${year}-${month}-${day}-${dayName}-${hours}-${minutes}-${seconds}-${counter}`;
}

function NewOrders() {
	const { t } = useTranslation('shippingTypes');
	const [cartItems, setCartItems] = useState<CartItem[]>([]);
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
	const [quantity, setQuantity] = useState<number | string>(1);
	const [guideName, setGuideName] = useState<string>('');
	const [boatmanName, setBoatmanName] = useState<string>('');
	const [demonstratorName, setDemonstratorName] = useState<string>('');
	const [isGroupCodeGenerated, setIsGroupCodeGenerated] = useState<boolean>(false);
	const [orderNumber, setOrderNumber] = useState<string>(generateOrderNumber());
	const [categoryCode, setCategoryCode] = useState<string>(() => generateCategoryCode(getCategoryCodeCounter()));
	const [percentages, setPercentages] = useState<Percentages>({
		boatman: 0,
		guide: 0,
		gift: 0,
		customBoatman: false,
		customGuide: false,
		customGift: false,
		less: false,
		lessAmount: 0,
		exoticTich: false,
		company: 0,
		customCompany: false,
		discount: 0,
		customDiscount: false
	});
	const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
	const [itemToDelete, setItemToDelete] = useState<CartItem | null>(null);
	const [, setCurrentDateTime] = useState<string>(new Date().toLocaleString());
	const [progress, setProgress] = useState<number>(0);
	const [isGenerating, setIsGenerating] = useState<boolean>(false);
	const [products, setProducts] = useState<Product[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string>('');
	const [billDialogOpen, setBillDialogOpen] = useState<boolean>(false);
	const [sendingEmail, setSendingEmail] = useState<boolean>(false);
	const [emailStatus, setEmailStatus] = useState<'success' | 'error' | null>(null);
	const billRef = useRef<HTMLDivElement>(null);

	const subtotal = cartItems.reduce((sum, item) => sum + (item.total || 0), 0);
	const lessAmount = percentages.less ? percentages.lessAmount : 0;
	const subtotalAfterLess = subtotal - lessAmount;
	const discountAmount = percentages.customDiscount ? (subtotalAfterLess * percentages.discount) / 100 : 0;
	const discountedSubtotal = subtotalAfterLess - discountAmount;
	const giftCost = percentages.customGift ? percentages.gift : 0;
	const companyCost = percentages.customCompany ? (discountedSubtotal * percentages.company) / 100 : 0;
	const boatmanCost = percentages.customBoatman ? (discountedSubtotal * percentages.boatman) / 100 : 0;
	const guideCost = percentages.customGuide ? (discountedSubtotal * percentages.guide) / 100 : 0;
	const totalAmount = discountedSubtotal;

	const fetchAllProductsFromBackend = async () => {
		setLoading(true);
		setError('');
		try {
			const response: any = await fetchAllProducts(1, 1000);
			console.log('welcome details', response);

			if (response && response.products) {
				setProducts(response.products as Product[]);
			} else {
				setError('No products found');
				toast.error('No products found');
			}
		} catch (error) {
			console.error('Error fetching products:', error);
			setError('Error fetching products');
			toast.error('Error fetching data');
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchAllProductsFromBackend();
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentDateTime(new Date().toLocaleString());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	const resetCategoryCode = (): void => {
		if (isGenerating) return;

		setIsGenerating(true);
		setProgress(0);
		const interval = setInterval(() => {
			setProgress((prevProgress) => {
				if (prevProgress >= 100) {
					clearInterval(interval);
					const newCounter = incrementCategoryCodeCounter();
					setCategoryCode(generateCategoryCode(newCounter));
					setIsGenerating(false);
					setIsGroupCodeGenerated(true);
					setGuideName('');
					setBoatmanName('');
					setDemonstratorName('');
					setCartItems([]);
					setPercentages({
						boatman: 0,
						guide: 0,
						gift: 0,
						customBoatman: false,
						customGuide: false,
						customGift: false,
						less: false,
						lessAmount: 0,
						exoticTich: false,
						company: 0,
						customCompany: false,
						discount: 0,
						customDiscount: false
					});
					return 100;
				}

				return prevProgress + 10;
			});
		}, 200);
	};

	const handleAddToCart = (): void => {
		const numQuantity = Number(quantity);

		if (!selectedProduct || !Number.isInteger(numQuantity) || numQuantity <= 0) {
			toast.error('Please select a product and enter a valid quantity of at least 1.');
			return;
		}

		const product = selectedProduct;

		if (numQuantity > product.stocks) {
			toast.error(`Quantity cannot exceed available stock of ${product.stocks}`);
			return;
		}

		if (!product.price && product.price !== 0) {
			toast.error(`Price for product ${product.itemName} is not defined`);
			return;
		}

		const existingItemIndex = cartItems.findIndex((item) => item.productId === product._id);
		const itemPrice: number = product.price;

		if (existingItemIndex >= 0) {
			const updatedItems = [...cartItems];
			const existingItem = updatedItems[existingItemIndex];
			const newQuantity = existingItem.quantity + numQuantity;

			if (newQuantity > product.stocks) {
				toast.error(`Total quantity cannot exceed available stock of ${product.stocks}`);
				return;
			}

			updatedItems[existingItemIndex] = {
				...existingItem,
				quantity: newQuantity,
				total: itemPrice * newQuantity
			};
			setCartItems(updatedItems);
			toast.success('Item quantity updated in cart');
		} else {
			const newCartItem: CartItem = {
				orderNumber,
				productId: product._id,
				productName: product.itemName,
				quantity: numQuantity,
				price: itemPrice,
				total: itemPrice * numQuantity,
				categoryCode
			};
			setCartItems((prev) => [...prev, newCartItem]);
			toast.success('Item added to cart');
		}

		setSelectedProduct(null);
		setQuantity(1);
	};

	const handleDownloadPDF = async () => {
		if (sendingEmail) return;

		setSendingEmail(true);
		setEmailStatus(null);

		try {
			const input = billRef.current;

			if (!input) {
				throw new Error('Bill reference not found');
			}

			const canvas = await html2canvas(input, {
				scale: 2,
				useCORS: true,
				backgroundColor: '#ffffff'
			});

			const imgData = canvas.toDataURL('image/png');
			const pdfWidth = 105;
			const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
			const pdf = new jsPDF({
				orientation: 'portrait',
				unit: 'mm',
				format: [pdfWidth, pdfHeight]
			});

			pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
			pdf.save(`Invoice-${new Date().toISOString().replace(/[-:.TZ]/g, '')}.pdf`);

			setEmailStatus('success');
			toast.success('Invoice downloaded successfully');
		} catch (error) {
			console.error('Error in PDF generation:', error);
			setEmailStatus('error');
			toast.error('Failed to generate PDF. Please try again.');
		} finally {
			setSendingEmail(false);
		}
	};

	const handlePrint = async () => {
		try {
			const input = billRef.current;

			if (!input) {
				toast.error('Bill content not found for printing.');
				return;
			}

			toast.info('Preparing bill for printing...');

			const canvas = await html2canvas(input, {
				scale: 3,
				useCORS: true,
				backgroundColor: '#ffffff'
			});

			const imgData = canvas.toDataURL('image/png');
			const pdfWidth = 105;
			const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
			const pdf = new jsPDF({
				orientation: 'portrait',
				unit: 'mm',
				format: [pdfWidth, pdfHeight]
			});

			pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
			pdf.autoPrint();
			window.open(pdf.output('bloburl'), '_blank');
		} catch (error) {
			console.error('Error preparing for print:', error);
			toast.error('Failed to prepare bill for printing.');
		}
	};

	const handlePlaceOrder = async (): Promise<void> => {
		if (cartItems.length === 0) {
			toast.error('Cart is empty');
			return;
		}

		if (!guideName.trim()) {
			toast.error('Please enter a guide name');
			return;
		}

		if (!boatmanName.trim()) {
			toast.error('Please enter a boatman name');
			return;
		}

		if (!demonstratorName.trim()) {
			toast.error('Please enter a demonstrator name');
			return;
		}

		if (!categoryCode.trim()) {
			toast.error('Please generate a group code');
			return;
		}

		for (const item of cartItems) {
			if (
				!item.productId ||
				!item.productName ||
				item.quantity <= 0 ||
				item.price == null ||
				item.total == null
			) {
				toast.error('Invalid product in cart');
				return;
			}
		}

		if (!orderNumber.trim()) {
			toast.error('Invalid order number');
			return;
		}

		const orderData = {
			groupCode: categoryCode.trim(),
			orderCode: orderNumber.trim(),
			selectedProducts: cartItems.map((item) => ({
				productId: item.productId,
				productName: item.productName.trim(),
				quantity: item.quantity
			})),
			company: {
				percentage: percentages.customCompany ? percentages.company : 0,
				amount: companyCost
			},
			discount: {
				percentage: percentages.customDiscount ? percentages.discount : 0,
				amount: discountAmount
			},
			guide: {
				name: guideName.trim(),
				percentage: percentages.customGuide ? percentages.guide : 0,
				amount: guideCost
			},
			categoryCode: categoryCode.trim(),
			forBoatman: [
				{
					boatmanName: boatmanName.trim(),
					percentage: percentages.customBoatman ? percentages.boatman : 0,
					costAmount: boatmanCost
				}
			],
			demonstratorName: demonstratorName.trim(),
			gift: giftCost,
			Price: totalAmount,
			itemWiseTotal: subtotal,
			exotic: percentages.exoticTich,
			less: percentages.less ? percentages.lessAmount : 0
		};
		try {
			console.log('Order Details:', orderData);
			await createOrder(orderData);
			await fetchAllProductsFromBackend();
			toast.success('Order placed successfully!');
			setCartItems([]);
			setOrderNumber(generateOrderNumber());
			setPercentages({
				boatman: 0,
				guide: 0,
				gift: 0,
				customBoatman: false,
				customGuide: false,
				customGift: false,
				less: false,
				lessAmount: 0,
				exoticTich: false,
				company: 0,
				customCompany: false,
				discount: 0,
				customDiscount: false
			});
			setIsGroupCodeGenerated(false);
			// ==================== FIX START ====================
			// Names are NO LONGER cleared for the next order within the same group.
			// The user can manually clear them or generate a new group code, which will clear them.
			// setGuideName('');
			// setBoatmanName('');
			// setDemonstratorName('');
			// ===================== FIX END =====================
		} catch (error) {
			console.error('Error placing order:', error);
			toast.error('Failed to place order');
		}
	};

	const handlePrintBill = () => {
		if (cartItems.length === 0 || !guideName.trim() || !boatmanName.trim() || !demonstratorName.trim()) {
			toast.error('Please add items to cart and enter guide, boatman, and demonstrator names');
			return;
		}

		setBillDialogOpen(true);
		setEmailStatus(null);
	};

	const handleDeleteItem = (rowData: CartItem): void => {
		setItemToDelete(rowData);
		setDeleteDialogOpen(true);
	};

	const confirmDelete = (): void => {
		if (itemToDelete) {
			setCartItems(cartItems.filter((item) => item.productId !== itemToDelete.productId));
			setDeleteDialogOpen(false);
			setItemToDelete(null);
			toast.success('Item removed from cart');
		}
	};

	const handleQuantityChange = (value: string) => {
		if (value === '') {
			setQuantity('');
			return;
		}

		const numValue = Number(value);

		if (!isNaN(numValue) && numValue >= 0) {
			if (selectedProduct && numValue > selectedProduct.stocks) {
				setQuantity(selectedProduct.stocks);
			} else {
				setQuantity(value);
			}
		}
	};

	const tableColumns = [
		{ title: t('Order Number'), field: 'orderNumber' },
		{
			title: t('Product ID'),
			field: 'productId'
		},
		{ title: t('Product Name'), field: 'productName' },
		{ title: t('Quantity'), field: 'quantity' },
		{
			title: t('Price'),
			field: 'price',
			render: (rowData: CartItem) =>
				`LKR ${typeof rowData.price === 'number' ? rowData.price.toFixed(2) : '0.00'}`
		},
		{
			title: t('Total'),
			field: 'total',
			render: (rowData: CartItem) =>
				`LKR ${typeof rowData.total === 'number' ? rowData.total.toFixed(2) : '0.00'}`
		},
		{ title: t('Category Code'), field: 'categoryCode' }
	];

	if (error) {
		return (
			<Box sx={{ p: 3, textAlign: 'center' }}>
				<Typography
					color="error"
					variant="h6"
				>
					{error}
				</Typography>
				<Button
					onClick={() => window.location.reload()}
					variant="contained"
					sx={{ mt: 2 }}
				>
					Retry
				</Button>
			</Box>
		);
	}

	return (
		<Box sx={{ p: 3 }}>
			<Grid
				container
				spacing={3}
				alignItems="stretch"
			>
				<Grid
					item
					xs={12}
					md={6}
				>
					<StyledPaper>
						<Typography
							variant="h6"
							gutterBottom
							sx={{ fontWeight: 600, fontSize: '1.1rem', color: '#37474f' }}
						>
							{t('Add New Order')}
						</Typography>
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, flex: 1 }}>
							<Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
								<TextField
									label={t('Group Code')}
									fullWidth
									value={categoryCode}
									InputProps={{ readOnly: true }}
									size="small"
									variant="outlined"
									sx={{ bgcolor: '#fff' }}
								/>
								<IconButton
									onClick={resetCategoryCode}
									color="primary"
									disabled={isGenerating}
									title="Generate new group code"
								>
									<ReplayIcon />
								</IconButton>
							</Box>
							{isGenerating && (
								<Box sx={{ width: '100%', mt: 1 }}>
									<GreenProgress
										variant="determinate"
										value={progress}
									/>
								</Box>
							)}
							<TextField
								label={t('Order Number')}
								fullWidth
								value={orderNumber}
								InputProps={{ readOnly: true }}
								size="small"
								variant="outlined"
								sx={{ bgcolor: '#fff' }}
							/>
							<Autocomplete
								options={products}
								getOptionLabel={(option) =>
									`${option.itemName} - LKR ${typeof option.price === 'number' ? option.price.toFixed(2) : 'N/A'} (Stock: ${option.stocks})`
								}
								value={selectedProduct}
								onChange={(event, newValue) => {
									setSelectedProduct(newValue);

									if (newValue) {
										const isExotic = !!newValue.isExotic;
										setPercentages((p) => ({
											...p,
											exoticTich: isExotic,
											guide: !p.customGuide ? (isExotic ? 50 : 0) : p.guide,
											customGift: false,
											less: false
										}));
									}
								}}
								getOptionDisabled={(option) => option.stocks === 0}
								renderOption={(props, option) => (
									<Box
										component="li"
										sx={{
											opacity: option.isActive ? 1 : 0.5,
											'&.Mui-disabled': {
												opacity: 0.5
											}
										}}
										{...props}
									>
										{`${option.itemName} - LKR ${
											typeof option.price === 'number' ? option.price.toFixed(2) : 'N/A'
										} (Stock: ${option.stocks})`}
									</Box>
								)}
								renderInput={(params) => (
									<TextField
										{...params}
										label={t('Select Product')}
										variant="outlined"
										size="small"
										sx={{ bgcolor: '#fff' }}
									/>
								)}
								disabled={loading}
								isOptionEqualToValue={(option, value) => option._id === value._id}
							/>
							<TextField
								label={t('Quantity')}
								type="number"
								fullWidth
								inputProps={{
									min: 0,
									max: selectedProduct?.stocks || 1000
								}}
								value={quantity}
								onChange={(e) => handleQuantityChange(e.target.value)}
								size="small"
								variant="outlined"
								sx={{ bgcolor: '#fff' }}
								disabled={!selectedProduct}
							/>
							<TextField
								label={t('Guide Name')}
								fullWidth
								value={guideName}
								onChange={(e) => setGuideName(e.target.value)}
								size="small"
								variant="outlined"
								sx={{ bgcolor: '#fff' }}
								disabled={loading}
							/>
							<TextField
								label={t('Boatman Name')}
								fullWidth
								value={boatmanName}
								onChange={(e) => setBoatmanName(e.target.value)}
								size="small"
								variant="outlined"
								sx={{ bgcolor: '#fff' }}
								disabled={loading}
							/>
							<TextField
								label={t('Demonstrator Name')}
								fullWidth
								value={demonstratorName}
								onChange={(e) => setDemonstratorName(e.target.value)}
								size="small"
								variant="outlined"
								sx={{ bgcolor: '#fff' }}
								disabled={loading}
							/>
							<div className="mt-10 flex items-center">
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
							<Button
								variant="contained"
								color="primary"
								fullWidth
								onClick={handleAddToCart}
								startIcon={<ShoppingCartIcon />}
								disabled={!selectedProduct || Number(quantity) <= 0 || loading}
								sx={{
									mt: 1,
									py: 0.75,
									borderRadius: '6px',
									bgcolor: '#0288d1',
									'&:hover': { bgcolor: '#0277bd' }
								}}
							>
								{t('Add to Cart')}
							</Button>
						</Box>
					</StyledPaper>
				</Grid>
				<Grid
					item
					xs={12}
					md={6}
				>
					<StyledPaper>
						<Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
							<Typography
								variant="h6"
								sx={{ fontWeight: 600, fontSize: '1.1rem', color: '#37474f' }}
							>
								{t('Cost Calculations')}
							</Typography>
							{guideName && (
								<Typography
									variant="body2"
									sx={{ fontWeight: 500, color: '#37474f' }}
								>
									{t('Business By')} - {guideName}
								</Typography>
							)}
						</Box>
						<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, flex: 1 }}>
							<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
								<Typography variant="body2">{t('Exotic')}</Typography>
								<CustomSwitch
									checked={percentages.exoticTich}
									onChange={(e) => {
										const isChecked = e.target.checked;
										setPercentages((p) => ({
											...p,
											exoticTich: isChecked,
											guide: p.customGuide ? p.guide : isChecked ? 50 : 0
										}));
									}}
								/>
							</Box>
							<Box>
								<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
									<Typography variant="body2">{t('Less Amount')}</Typography>
									<CustomSwitch
										checked={percentages.less}
										onChange={(e) => setPercentages((p) => ({ ...p, less: e.target.checked }))}
									/>
								</Box>
								{percentages.less && (
									<TextField
										fullWidth
										label={t('Less Amount')}
										type="number"
										inputProps={{ min: 0, max: subtotal }}
										value={percentages.lessAmount}
										onChange={(e) =>
											setPercentages((p) => ({
												...p,
												lessAmount: Math.max(0, Number(e.target.value))
											}))
										}
										size="small"
										variant="outlined"
										sx={{ mt: 0.5, bgcolor: '#fff' }}
									/>
								)}
							</Box>
							{(['discount', 'boatman', 'guide', 'company'] as const).map((role) => {
								const customKey =
									`custom${role.charAt(0).toUpperCase() + role.slice(1)}` as keyof Percentages;
								return (
									<Box key={role}>
										<Box
											sx={{
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'space-between'
											}}
										>
											<Typography variant="body2">
												{t(`Custom ${role.charAt(0).toUpperCase() + role.slice(1)} Percentage`)}
											</Typography>
											<CustomSwitch
												checked={percentages[customKey] as boolean}
												onChange={(e) => {
													const isChecked = e.target.checked;
													setPercentages((p) => ({
														...p,
														[customKey]: isChecked,
														[role]: isChecked ? p[role as keyof Percentages] : 0
													}));
												}}
											/>
										</Box>
										{percentages[customKey] && (
											<TextField
												fullWidth
												label={t(`${role.charAt(0).toUpperCase() + role.slice(1)} Percentage`)}
												type="number"
												inputProps={{ min: 0, max: 100 }}
												value={percentages[role as keyof Percentages]}
												onChange={(e) =>
													setPercentages((p) => ({
														...p,
														[role]: Math.min(100, Math.max(0, Number(e.target.value)))
													}))
												}
												size="small"
												variant="outlined"
												sx={{ mt: 0.5, bgcolor: '#fff' }}
											/>
										)}
									</Box>
								);
							})}
							<Box>
								<Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
									<Typography variant="body2">{t('Gift Value')}</Typography>
									<CustomSwitch
										checked={percentages.customGift}
										onChange={(e) =>
											setPercentages((p) => ({
												...p,
												customGift: e.target.checked,
												gift: e.target.checked ? p.gift : 0
											}))
										}
									/>
								</Box>
								{percentages.customGift && (
									<TextField
										fullWidth
										label={t('Gift Value')}
										type="number"
										inputProps={{ min: 0 }}
										value={percentages.gift}
										onChange={(e) =>
											setPercentages((p) => ({
												...p,
												gift: Math.max(0, Number(e.target.value))
											}))
										}
										size="small"
										variant="outlined"
										sx={{ mt: 0.5, bgcolor: '#fff' }}
									/>
								)}
							</Box>
							<Box sx={{ my: 1.5 }} />
							<Box>
								<CostItem>
									<Typography
										variant="body2"
										className="label"
									>
										{t('Subtotal')}:
									</Typography>
									<Typography
										variant="body2"
										className="value"
									>
										LKR {subtotal.toFixed(2)}
									</Typography>
								</CostItem>
								{percentages.customDiscount && (
									<CostItem>
										<Typography
											variant="body2"
											className="label"
										>
											{t('Discount')} ({percentages.discount}%):
										</Typography>
										<Typography
											variant="body2"
											className="value"
										>
											-LKR {discountAmount.toFixed(2)}
										</Typography>
									</CostItem>
								)}
								{percentages.customBoatman && (
									<CostItem>
										<Typography
											variant="body2"
											className="label"
										>
											{t('Boatman Cost')} ({percentages.boatman}%):
										</Typography>
										<Typography
											variant="body2"
											className="value"
										>
											LKR {boatmanCost.toFixed(2)}
										</Typography>
									</CostItem>
								)}
								{percentages.customGuide && (
									<CostItem>
										<Typography
											variant="body2"
											className="label"
										>
											{t('Guide Cost')} ({percentages.guide}%):
										</Typography>
										<Typography
											variant="body2"
											className="value"
										>
											LKR {guideCost.toFixed(2)}
										</Typography>
									</CostItem>
								)}
								{percentages.customGift && (
									<CostItem>
										<Typography
											variant="body2"
											className="label"
										>
											{t('Gift Cost')}:
										</Typography>
										<Typography
											variant="body2"
											className="value"
										>
											LKR {giftCost.toFixed(2)}
										</Typography>
									</CostItem>
								)}
								{percentages.customCompany && (
									<CostItem>
										<Typography
											variant="body2"
											className="label"
										>
											{t('Company Cost')} ({percentages.company}%):
										</Typography>
										<Typography
											variant="body2"
											className="value"
										>
											LKR {companyCost.toFixed(2)}
										</Typography>
									</CostItem>
								)}
								{percentages.less && (
									<CostItem>
										<Typography
											variant="body2"
											className="label"
										>
											{t('Less Amount')}:
										</Typography>
										<Typography
											variant="body2"
											className="value"
										>
											LKR {lessAmount.toFixed(2)}
										</Typography>
									</CostItem>
								)}
								<CostItem>
									<Typography
										variant="body2"
										className="label"
									>
										{t('Total Amount')}:
									</Typography>
									<Typography
										variant="body2"
										className="value"
										sx={{ fontWeight: 'bold', color: '#d32f2f' }}
									>
										LKR {totalAmount.toFixed(2)}
									</Typography>
								</CostItem>
							</Box>
							<Box sx={{ mt: 'auto', display: 'flex', gap: 2 }}>
								<PlaceOrderButton
									variant="contained"
									fullWidth
									onClick={handlePrintBill}
									disabled={
										cartItems.length === 0 ||
										!guideName.trim() ||
										!boatmanName.trim() ||
										!demonstratorName.trim()
									}
									startIcon={<NoteAlt />}
								>
									{t('Print Bill')}
								</PlaceOrderButton>
								<PlaceOrderButton
									variant="contained"
									fullWidth
									onClick={handlePlaceOrder}
									disabled={
										cartItems.length === 0 ||
										!guideName.trim() ||
										!boatmanName.trim() ||
										!demonstratorName.trim()
									}
									startIcon={<ShoppingBagIcon />}
								>
									{t('Place Order')}
								</PlaceOrderButton>
							</Box>
						</Box>
					</StyledPaper>
				</Grid>
				<Grid
					item
					xs={12}
				>
					<MaterialTableWrapper
						title={
							<Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
								<ShoppingCartIcon /> {t('Cart Items')}
							</Box>
						}
						filterChanged={null}
						handleColumnFilter={null}
						tableColumns={tableColumns}
						handlePageChange={() => {}}
						handlePageSizeChange={() => {}}
						handleCommonSearchBar={null}
						pageSize={5}
						disableColumnFiltering
						loading={loading}
						setPageSize={() => {}}
						pageIndex={0}
						searchByText=""
						count={cartItems.length}
						externalAdd={null}
						externalEdit={null}
						externalView={null}
						selection={false}
						selectionExport={null}
						isColumnVisible
						records={cartItems}
						tableRowDeleteHandler={handleDeleteItem}
						sx={{ bgcolor: '#fff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}
					/>
				</Grid>
			</Grid>
			<Dialog
				open={deleteDialogOpen}
				onClose={() => setDeleteDialogOpen(false)}
				aria-labelledby="orderNumber-dialog-title"
				aria-describedby="order-number-dialog-description"
			>
				<DialogTitle id="orderNumber-dialog-title">{t('Confirm Delete')}</DialogTitle>
				<DialogContent>
					<DialogContentText>
						{t('Are you sure you want to delete this item from the cart?')}
						{itemToDelete && (
							<>
								<br />
								<Box component="strong">{itemToDelete.productName}</Box> (Qty: {itemToDelete.quantity})
							</>
						)}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setDeleteDialogOpen(false)}>{t('Cancel')}</Button>
					<Button
						onClick={confirmDelete}
						color="error"
						autoFocus
					>
						{t('Delete')}
					</Button>
				</DialogActions>
			</Dialog>
			<Dialog
				open={billDialogOpen}
				onClose={() => setBillDialogOpen(false)}
				aria-labelledby="bill-dialog-title"
				maxWidth="md"
			>
				<DialogTitle
					id="bill-dialog-title"
					sx={{ fontSize: 14, py: 1, textAlign: 'center' }}
				>
					Invoice Preview
				</DialogTitle>
				<DialogContent sx={{ p: 0, bgcolor: '#f0f0f0' }}>
					<Box
						sx={{
							position: 'relative',
							width: '105mm',
							minHeight: '148mm',
							p: '5mm',
							'@media print': {
								width: '105mm !important',
								height: 'auto !important',
								margin: '0 !important',
								padding: '5mm !important',
								pageBreakAfter: 'always',
								'-webkit-print-color-adjust': 'exact',
								'color-adjust': 'exact'
							},
							bgcolor: '#fff',
							fontSize: '10px',
							lineHeight: 1.2,
							fontFamily: 'Arial, sans-serif',
							display: 'flex',
							flexDirection: 'column'
						}}
						ref={billRef}
					>
						{emailStatus && (
							<Box
								sx={{
									position: 'absolute',
									top: '-24px',
									left: '0',
									right: '0',
									textAlign: 'center',
									p: 0.5,
									fontSize: '10px',
									backgroundColor: emailStatus === 'success' ? '#4caf50' : '#f44336',
									color: '#fff',
									zIndex: 10
								}}
							>
								{emailStatus === 'success'
									? 'Invoice sent successfully!'
									: 'Failed to send invoice. Please try again.'}
							</Box>
						)}

						<IconButton
							sx={{ position: 'absolute', top: '2px', right: '2px', p: 0.25, zIndex: 5 }}
							onClick={() => setBillDialogOpen(false)}
							size="small"
						>
							<CloseIcon fontSize="inherit" />
						</IconButton>

						{/* Header */}
						<Box
							sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								minHeight: '8mm',
								pb: 1
							}}
						>
							<Box sx={{ flex: 1 }}>
								<Typography
									sx={{
										fontWeight: 'bold',
										fontSize: '11px',
										letterSpacing: '0.3px'
									}}
								>
									CINNAMON MIRACLE RETAIL
								</Typography>
							</Box>
							<Box
								sx={{
									p: 0.4,
									minWidth: '50px',
									textAlign: 'center'
								}}
							>
								<Typography
									sx={{
										fontWeight: 'bold',
										fontSize: '9px',
										letterSpacing: '0.2px'
									}}
								>
									INVOICE
								</Typography>
							</Box>
						</Box>

						{/* Company & Order Details Section */}
						<Box
							sx={{
								display: 'flex',
								minHeight: '10mm',
								pb: 1
							}}
						>
							{/* Company Details */}
							<Box
								sx={{
									p: 0.2,
									flex: 1
								}}
							>
								<Typography
									sx={{
										fontWeight: 'bold',
										fontSize: '8px',
										mb: 0.3,
										color: '#333'
									}}
								>
									COMPANY DETAILS
								</Typography>
								<Typography sx={{ fontSize: '7px', mb: 0.2, lineHeight: 1.2 }}>
									Tel: (+94) (091) 2254442
								</Typography>
								<Typography sx={{ fontSize: '7px', mb: 0.2, lineHeight: 1.2 }}>
									Contact: (+94) (077) 7369330
								</Typography>
								<Typography sx={{ fontSize: '7px', lineHeight: 1.2, mb: 0.2 }}>
									Email: s.gihan@yahoo.it
								</Typography>
							</Box>

							{/* Order Details */}
							<Box sx={{ p: 0.4, flex: 1 }}>
								<Typography
									sx={{
										fontWeight: 'bold',
										fontSize: '8px',
										mb: 0.3,
										color: '#333'
									}}
								>
									ORDER DETAILS
								</Typography>
								<Typography sx={{ fontSize: '7px', mb: 0.2, lineHeight: 1.2 }}>
									Group Code: {categoryCode}
								</Typography>
								<Typography sx={{ fontSize: '7px', mb: 0.2, lineHeight: 1.2 }}>
									Order Number: {orderNumber}
								</Typography>
								{percentages.exoticTich && (
									<Typography sx={{ fontSize: '7px', lineHeight: 1.2 }}>Exotic: Yes</Typography>
								)}
							</Box>
						</Box>

						{/* Table Header */}
						<Box
							sx={{
								display: 'flex',
								minHeight: '5mm',
								py: 0.5
							}}
						>
							<Box
								sx={{
									flex: 2,
									display: 'flex',
									alignItems: 'center'
								}}
							>
								<Typography sx={{ fontSize: '7px', fontWeight: 'bold', color: '#555' }}>
									DESCRIPTION
								</Typography>
							</Box>
							<Box
								sx={{
									flex: 0.5,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center'
								}}
							>
								<Typography
									sx={{ fontSize: '7px', fontWeight: 'bold', color: '#555', textAlign: 'center' }}
								>
									QTY
								</Typography>
							</Box>
							<Box
								sx={{
									flex: 1,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'flex-end'
								}}
							>
								<Typography
									sx={{ fontSize: '7px', fontWeight: 'bold', color: '#555', textAlign: 'center' }}
								>
									PRICE
								</Typography>
							</Box>
							<Box
								sx={{
									flex: 1,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'flex-end'
								}}
							>
								<Typography
									sx={{ fontSize: '7px', fontWeight: 'bold', color: '#555', textAlign: 'center' }}
								>
									TOTAL
								</Typography>
							</Box>
						</Box>

						{/* Table Rows */}
						<Box sx={{ display: 'flex', flexDirection: 'column' }}>
							{cartItems.map((item, index) => (
								<Box
									key={index}
									sx={{
										display: 'flex',
										alignItems: 'flex-start',
										py: 0.5
									}}
								>
									<Box
										sx={{
											flex: 2
										}}
									>
										<Typography
											sx={{
												fontSize: '6px',
												wordBreak: 'break-word',
												whiteSpace: 'normal'
											}}
										>
											{item.productName}
										</Typography>
									</Box>
									<Box
										sx={{
											flex: 0.5,
											textAlign: 'center'
										}}
									>
										<Typography sx={{ fontSize: '6px' }}>{item.quantity}</Typography>
									</Box>
									<Box
										sx={{
											flex: 1,
											textAlign: 'right'
										}}
									>
										<Typography sx={{ fontSize: '6px' }}>LKR {item.price.toFixed(2)}</Typography>
									</Box>
									<Box
										sx={{
											flex: 1,
											textAlign: 'right'
										}}
									>
										<Typography sx={{ fontSize: '6px', fontWeight: 'bold' }}>
											LKR {item.total.toFixed(2)}
										</Typography>
									</Box>
								</Box>
							))}
						</Box>

						{/* Totals Section */}
						<Box sx={{ pt: 1, mt: 'auto' }}>
							{/* Subtotal */}
							<Box
								sx={{
									display: 'flex',
									minHeight: '4mm',
									py: 0.2
								}}
							>
								<Box sx={{ flex: 2.5 }} />
								<Box
									sx={{
										p: 0.2,
										flex: 1,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'flex-end'
									}}
								>
									<Typography sx={{ fontSize: '6px', fontWeight: 'bold' }}>SUB TOTAL:</Typography>
								</Box>
								<Box
									sx={{
										p: 0.2,
										flex: 1,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'flex-end'
									}}
								>
									<Typography sx={{ fontSize: '6px' }}>LKR {subtotal.toFixed(2)}</Typography>
								</Box>
							</Box>

							{/* Discount */}
							{percentages.customDiscount && (
								<Box
									sx={{
										display: 'flex',
										minHeight: '4mm',
										py: 0.2
									}}
								>
									<Box sx={{ flex: 2.5 }} />
									<Box
										sx={{
											p: 0.2,
											flex: 1,
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'flex-end'
										}}
									>
										<Typography sx={{ fontSize: '6px', fontWeight: 'bold' }}>
											DISCOUNT ({percentages.discount}%):
										</Typography>
									</Box>
									<Box
										sx={{
											p: 0.2,
											flex: 1,
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'flex-end'
										}}
									>
										<Typography sx={{ fontSize: '6px' }}>
											-LKR {discountAmount.toFixed(2)}
										</Typography>
									</Box>
								</Box>
							)}

							{/* Gift */}
							{percentages.customGift && (
								<Box
									sx={{
										display: 'flex',
										minHeight: '4mm',
										py: 0.2
									}}
								>
									<Box sx={{ flex: 2.5 }} />
									<Box
										sx={{
											p: 0.2,
											flex: 1,
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'flex-end'
										}}
									>
										<Typography sx={{ fontSize: '6px', fontWeight: 'bold' }}>GIFT:</Typography>
									</Box>
									<Box
										sx={{
											p: 0.2,
											flex: 1,
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'flex-end'
										}}
									>
										<Typography sx={{ fontSize: '6px' }}>LKR {giftCost.toFixed(2)}</Typography>
									</Box>
								</Box>
							)}

							{/* Grand Total */}
							<Box
								sx={{
									display: 'flex',
									minHeight: '5mm',
									py: 0.5
								}}
							>
								<Box sx={{ flex: 2.5 }} />
								<Box
									sx={{
										p: 0.2,
										flex: 1,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'flex-end'
									}}
								>
									<Typography sx={{ fontSize: '7px', fontWeight: 'bold' }}>GRAND TOTAL:</Typography>
								</Box>
								<Box
									sx={{
										p: 0.2,
										flex: 1,
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'flex-end'
									}}
								>
									<Typography sx={{ fontSize: '7px', fontWeight: 'bold' }}>
										LKR {totalAmount.toFixed(2)}
									</Typography>
								</Box>
							</Box>
						</Box>

						{/* Terms */}
						<Box
							sx={{
								p: 0.3,
								py: 1
							}}
						>
							<Typography
								sx={{
									fontSize: '5px',
									lineHeight: 1.2,
									textAlign: 'justify'
								}}
							>
								TERMS: Payments must be made in full upon order completion via cash, card, or digital
								payment methods. Any disputes regarding pricing must be raised immediately.
							</Typography>
						</Box>

						{/* Footer */}
						<Box
							sx={{
								textAlign: 'center',
								p: 0.3,
								minHeight: '7mm',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center'
							}}
						>
							<Typography
								sx={{
									fontWeight: 'bold',
									fontSize: '5px',
									mb: 0.2
								}}
							>
								Thank you for choosing Cinnamon Miracle! We appreciate your trust and look forward to
								serving you again.
							</Typography>
							<Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
								<Typography sx={{ fontSize: '4px' }}>© 2025 Cinnamon Miracle</Typography>
								<Typography sx={{ fontSize: '4px' }}>@CinnamonMiracle</Typography>
							</Box>
						</Box>
					</Box>
				</DialogContent>
				<DialogActions sx={{ px: 1.5, py: 0.5, justifyContent: 'center' }}>
					<Button
						variant="contained"
						color="success"
						startIcon={<PrintIcon />}
						onClick={handlePrint}
						sx={{ py: 0.5, px: 2, fontSize: '11px' }}
					>
						Print
					</Button>
					<Button
						variant="contained"
						color="primary"
						onClick={handleDownloadPDF}
						disabled={sendingEmail}
						sx={{ py: 0.5, px: 2, fontSize: '11px' }}
					>
						{sendingEmail ? 'Processing...' : 'Download Invoice'}
					</Button>
					<Button
						onClick={() => setBillDialogOpen(false)}
						color="secondary"
						sx={{ py: 0.5, px: 2, fontSize: '11px' }}
					>
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</Box>
	);
}

export default NewOrders;
