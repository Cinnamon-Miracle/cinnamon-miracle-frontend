import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { Grid, IconButton, Select } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import { z } from 'zod';
import CircularProgress from '@mui/material/CircularProgress';
import { toast } from 'react-toastify';
import InputAdornment from '@mui/material/InputAdornment';
import { PhotoCamera, Visibility, VisibilityOff } from '@mui/icons-material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import { useTranslation } from 'react-i18next';
import Avatar from '@mui/material/Avatar';
import { createUser } from '../../../../axios/services/mega-city-services/common/CommonService';

// Interface matching backend schema
interface UserInterface {
	id?: string;
	firstName: string;
	lastName: string;
	email: string;
	password?: string; // Optional for edit mode
	role: string;
	phone: string;
	address?: string;
	profilePicture?: string; // This will hold the base64 string
}

// Updated schema with conditional password validation and profilePicture
const createSchema = (isEdit: boolean) => {
	const baseSchema = z.object({
		role: z.enum(['admin', 'staff', 'root'], {
			message: 'Role is required'
		}),
		firstName: z.string().min(2, 'Must be at least 2 characters').max(100, 'Must be maximum 100 characters').trim(),
		lastName: z.string().min(2, 'Must be at least 2 characters').max(100, 'Must be maximum 100 characters').trim(),
		email: z.string().email('Invalid email').min(1, 'Email is required'),
		phone: z.string().regex(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
		address: z.string().optional(),
		profilePicture: z.string().optional() // Profile picture is an optional string (base64)
	});

	if (isEdit) {
		// For edit mode, password is optional
		return baseSchema
			.extend({
				password: z.string().min(8, 'Password must be at least 8 characters').optional().or(z.literal('')),
				passwordConfirm: z.string().optional().or(z.literal(''))
			})
			.refine(
				(data) => {
					if (data.password && data.password.length > 0) {
						return data.password === data.passwordConfirm;
					}

					return true;
				},
				{
					message: 'Passwords must match',
					path: ['passwordConfirm']
				}
			);
	}

	// For add mode, password is required
	return baseSchema
		.extend({
			password: z.string().min(8, 'Password must be at least 8 characters'),
			passwordConfirm: z.string()
		})
		.refine((data) => data.password === data.passwordConfirm, {
			message: 'Passwords must match',
			path: ['passwordConfirm']
		});
};

interface Props {
	isAdd: boolean;
	isEdit: boolean;
	isView: boolean;
	className?: string;
	isOpen: boolean;
	selectedRow: UserInterface | null;
	setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
	onCloseHandler: () => void;
	onSuccess: () => void;
}

type FormValues = {
	role: 'admin' | 'staff' | 'root' | string;
	firstName: string;
	lastName: string;
	email: string;
	password?: string;
	passwordConfirm?: string;
	phone: string;
	address?: string;
	profilePicture?: string;
};

async function handleSaveUsers(userInfo: UserInterface, isAdd: boolean, isEdit: boolean): Promise<void> {
	try {
		if (isAdd) {
			await createUser(userInfo);
			toast.success('User created successfully');
		} else if (isEdit) {
			// Replace with your update user function, e.g., await updateUser(userInfo);
			console.log('Updating user with data:', userInfo);
			toast.success('User updated successfully');
		}
	} catch (error: any) {
		const errorMessage = error?.response?.data?.message || 'Error while saving user';
		throw new Error(errorMessage);
	}
}

function UsersForm({
	isAdd,
	isEdit,
	isView,
	className,
	isOpen,
	selectedRow,
	setIsFormOpen,
	onCloseHandler,
	onSuccess
}: Props) {

	console.log('UsersForm rendered with props:', selectedRow)

	const { t } = useTranslation('sampleComponent');
	const [openDialog, setOpenDialog] = useState(false);
	const [loading, setLoading] = useState(false);
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);
	const [userRoles] = useState<{ value: string; label: string }[]>([
		{ value: 'admin', label: 'Admin' },
		{ value: 'root', label: 'Root' },
		{ value: 'staff', label: 'Staff' }
	]);

	const schema = createSchema(isEdit);

	const {
		control,
		handleSubmit,
		formState: { errors },
		reset,
		setValue,
		watch
	} = useForm<FormValues>({
		defaultValues: {
			role: '',
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			passwordConfirm: '',
			phone: '',
			address: '',
			profilePicture: ''
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		resolver: zodResolver(schema) as any
	});

	// Watch form fields
	const passwordValue = watch('password');
	const profilePic = watch('profilePicture');

	useEffect(() => {
		setOpenDialog(isOpen);
	}, [isOpen]);

	useEffect(() => {
		if (selectedRow && (isEdit || isView)) {
			setValue('role', selectedRow.role || '');
			setValue('firstName', selectedRow.firstName || '');
			setValue('lastName', selectedRow.lastName || '');
			setValue('email', selectedRow.email || '');
			setValue('phone', selectedRow.phone || '');
			setValue('address', selectedRow.address || '');
			setValue('password', '');
			setValue('passwordConfirm', '');
			setValue('profilePicture', selectedRow.profilePicture || '');
		} else if (isAdd) {
			reset();
		}
	}, [selectedRow, isAdd, isEdit, isView, setValue, reset]);

	const handleCloseDialog = () => {
		setOpenDialog(false);
		setIsFormOpen(false);
		reset();
		setShowPassword(false);
		setShowConfirmPassword(false);
		onCloseHandler();
	};

	const onSubmit = async (data: FormValues) => {
		if (isView) return;

		setLoading(true);
		try {
			const userInfo: UserInterface = {
				firstName: data.firstName,
				lastName: data.lastName,
				email: data.email,
				role: data.role,
				phone: data.phone,
				address: data.address || undefined,
				profilePicture: data.profilePicture || undefined
			};

			if (isEdit && selectedRow?.id) {
				userInfo.id = selectedRow.id;
			}

			// Only include password if it's provided
			if (data.password && data.password.trim() !== '') {
				userInfo.password = data.password;
			}

			await handleSaveUsers(userInfo, isAdd, isEdit);

			if (typeof onSuccess === 'function') {
				onSuccess();
			}

			handleCloseDialog();
		} catch (error: any) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	const handleProfilePicChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];

		if (file) {
			if (file.size > 5 * 1024 * 1024) {
				// 5MB limit
				toast.error('File size must be less than 5MB');
				return;
			}

			if (!file.type.startsWith('image/')) {
				toast.error('Please select a valid image file');
				return;
			}

			const reader = new FileReader();
			reader.onload = () => {
				// Set the base64 string to the form state
				setValue('profilePicture', reader.result as string, { shouldValidate: true });
			};
			reader.readAsDataURL(file);
		}
	};

	const togglePasswordVisibility = () => setShowPassword(!showPassword);
	const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

	const getTitle = (): string => {
		if (isView) return 'View User';

		if (isEdit) return 'Edit User';

		return 'Add User';
	};

	const isReadOnly = isView;

	return (
		<>
			{loading && (
				<div className="flex justify-center items-center w-[100vw] h-[100vh] fixed top-0 left-0 z-[10000] bg-white/95">
					<CircularProgress size={60} />
				</div>
			)}
			<div className={clsx('users-form', className)}>
				<Dialog
					fullWidth
					open={openDialog}
					onClose={handleCloseDialog}
					aria-labelledby="form-dialog-title"
					scroll="body"
					maxWidth="xl"
				>
					<DialogTitle className="pb-0">{getTitle()}</DialogTitle>
					<DialogContent>
						<form
							noValidate
							onSubmit={handleSubmit(onSubmit)}
							className="w-full"
						>
							<Grid
								container
								spacing={2}
								className="mb-4 pt-4"
							>
								{/* Profile Picture Section */}
								<Grid
									item
									xs={12}
									className="flex flex-col items-center justify-center"
								>
									<Avatar
										src={profilePic || ''}
										alt="Profile Picture"
										sx={{ width: 100, height: 100, mb: 1 }}
									/>
									{!isReadOnly && (
										<Button
											variant="outlined"
											component="label"
											startIcon={<PhotoCamera />}
										>
											Upload Picture
											<input
												hidden
												accept="image/*"
												type="file"
												onChange={handleProfilePicChange}
											/>
										</Button>
									)}
								</Grid>
							</Grid>

							{/* Form Fields */}
							<Grid
								container
								spacing={2}
								className="pt-[10px]"
							>
								<Grid
									item
									xs={12}
									md={6}
									lg={3}
								>
									<Typography className="formTypography">
										Role <span className="text-red-500">*</span>
									</Typography>
									<Controller
										name="role"
										control={control}
										render={({ field }) => (
											<FormControl
												fullWidth
												required
												error={!!errors.role}
											>
												<Select
													{...field}
													size="small"
													disabled={isReadOnly}
												>
													{userRoles.map((role) => (
														<MenuItem
															key={role.value}
															value={role.value}
														>
															{role.label}
														</MenuItem>
													))}
												</Select>
												{errors.role && <FormHelperText>{errors.role.message}</FormHelperText>}
											</FormControl>
										)}
									/>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}
									lg={3}
								>
									<Typography className="formTypography">
										First Name <span className="text-red-500">*</span>
									</Typography>
									<Controller
										name="firstName"
										control={control}
										render={({ field }) => (
											<TextField
												{...field}
												fullWidth
												size="small"
												error={!!errors.firstName}
												helperText={errors.firstName?.message}
												required
												disabled={isReadOnly}
											/>
										)}
									/>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}
									lg={3}
								>
									<Typography className="formTypography">
										Last Name <span className="text-red-500">*</span>
									</Typography>
									<Controller
										name="lastName"
										control={control}
										render={({ field }) => (
											<TextField
												{...field}
												fullWidth
												size="small"
												error={!!errors.lastName}
												helperText={errors.lastName?.message}
												required
												disabled={isReadOnly}
											/>
										)}
									/>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}
									lg={3}
								>
									<Typography className="formTypography">
										Email <span className="text-red-500">*</span>
									</Typography>
									<Controller
										name="email"
										control={control}
										render={({ field }) => (
											<TextField
												{...field}
												type="email"
												fullWidth
												size="small"
												error={!!errors.email}
												helperText={errors.email?.message}
												required
												disabled={isReadOnly}
											/>
										)}
									/>
								</Grid>

								{/* Password Fields */}
								{!isView && (
									<>
										<Grid
											item
											xs={12}
											md={6}
											lg={3}
										>
											<Typography className="formTypography">
												Password {isAdd && <span className="text-red-500">*</span>}
												{isEdit && (
													<span className="text-gray-500 text-sm">
														{' '}
														(leave blank to keep current)
													</span>
												)}
											</Typography>
											<Controller
												name="password"
												control={control}
												render={({ field }) => (
													<TextField
														{...field}
														type={showPassword ? 'text' : 'password'}
														fullWidth
														size="small"
														error={!!errors.password}
														helperText={errors.password?.message}
														required={isAdd}
														disabled={isReadOnly}
														InputProps={{
															endAdornment: (
																<InputAdornment position="end">
																	<IconButton
																		onClick={togglePasswordVisibility}
																		edge="end"
																		size="small"
																	>
																		{showPassword ? (
																			<Visibility />
																		) : (
																			<VisibilityOff />
																		)}
																	</IconButton>
																</InputAdornment>
															)
														}}
													/>
												)}
											/>
										</Grid>
										{(isAdd || (isEdit && passwordValue && passwordValue.length > 0)) && (
											<Grid
												item
												xs={12}
												md={6}
												lg={3}
											>
												<Typography className="formTypography">
													Confirm Password <span className="text-red-500">*</span>
												</Typography>
												<Controller
													name="passwordConfirm"
													control={control}
													render={({ field }) => (
														<TextField
															{...field}
															type={showConfirmPassword ? 'text' : 'password'}
															fullWidth
															size="small"
															error={!!errors.passwordConfirm}
															helperText={errors.passwordConfirm?.message}
															required
															disabled={isReadOnly}
															InputProps={{
																endAdornment: (
																	<InputAdornment position="end">
																		<IconButton
																			onClick={toggleConfirmPasswordVisibility}
																			edge="end"
																			size="small"
																		>
																			{showConfirmPassword ? (
																				<Visibility />
																			) : (
																				<VisibilityOff />
																			)}
																		</IconButton>
																	</InputAdornment>
																)
															}}
														/>
													)}
												/>
											</Grid>
										)}
									</>
								)}

								<Grid
									item
									xs={12}
									md={6}
									lg={3}
								>
									<Typography className="formTypography">
										Phone <span className="text-red-500">*</span>
									</Typography>
									<Controller
										name="phone"
										control={control}
										render={({ field }) => (
											<TextField
												{...field}
												fullWidth
												size="small"
												error={!!errors.phone}
												helperText={errors.phone?.message}
												required
												disabled={isReadOnly}
												placeholder="0771234567"
											/>
										)}
									/>
								</Grid>
								<Grid
									item
									xs={12}
									md={6}
									lg={3}
								>
									<Typography className="formTypography">Address</Typography>
									<Controller
										name="address"
										control={control}
										render={({ field }) => (
											<TextField
												{...field}
												fullWidth
												size="small"
												error={!!errors.address}
												helperText={errors.address?.message}
												disabled={isReadOnly}
											/>
										)}
									/>
								</Grid>

								{/* Action Buttons */}
								<Grid
									item
									xs={12}
									className="flex justify-end items-center gap-2 pt-4"
								>
									<Button
										variant="contained"
										color="error"
										onClick={handleCloseDialog}
									>
										{isView ? 'Close' : 'Cancel'}
									</Button>
									{!isView && (
										<Button
											variant="contained"
											type="submit"
											disabled={loading}
											className="bg-blue-600 hover:bg-blue-700"
										>
											{loading ? (
												<CircularProgress
													color="inherit"
													size={24}
												/>
											) : isAdd ? (
												'Create'
											) : (
												'Update'
											)}
										</Button>
									)}
								</Grid>
							</Grid>
						</form>
					</DialogContent>
				</Dialog>
			</div>
		</>
	);
}

export default UsersForm;
