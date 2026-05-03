import { Button, Grid } from '@mui/material';
import React, { useEffect, useState, useCallback } from 'react';
import { t } from 'i18next';
import { toast } from 'react-toastify';
import { Form, Formik } from 'formik';
import LockIcon from '@mui/icons-material/Lock';
import MaterialTableWrapper from '../../../../common/tableComponents/MaterialTableWrapper';
import NavigationViewComp from '../../../../common/FormComponents/NavigationViewComp';
import UsersForm from './UsersForm';
import { fetchAllUsersByPagination } from '../../../../axios/services/mega-city-services/user-management-service/UserService';
import { deleteUser } from '../../../../axios/services/mega-city-services/common/CommonService';

interface AdvanceFilteringTypes {
	userName: string;
	status: string;
	firstName: string;
	lastName: string;
	email: string;
	mobile: string;
}

// Updated UserRow to include profilePicture and correct phone field
interface UserRow {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	password?: string;
	role: string;
	address?: string;
	phone?: string;
	passwordConfirm?: string;
	licenseNumber?: string;
	licenseExpiryDate?: string;
	vehicleAssigned?: boolean;
	driverStatus?: boolean;
	emergencyContact?: string;
	dateOfBirth?: string;
	dateOfJoining?: string;
	profilePicture?: string; // Added profilePicture
}

interface ApiResponse {
	pagination: {
		currentPage: number;
		hasNextPage: boolean;
		hasPrevPage: boolean;
		size: number;
		totalPages: number;
		totalUsers: number;
	};
	users: Array<{
		_id: string;
		firstName: string;
		lastName: string;
		email: string;
		password?: string;
		role: string;
		address?: string;
		phone?: string;
		passwordConfirm?: string;
		licenseNumber?: string;
		licenseExpiryDate?: string;
		vehicleAssigned?: boolean;
		driverStatus?: boolean;
		emergencyContact?: string;
		dateOfBirth?: string;
		dateOfJoining?: string;
		profilePicture?: string;
	}>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const UsersApp: React.FC = () => {
	const [pageNo, setPageNo] = useState<number>(0);
	const [pageSize, setPageSize] = useState<number>(5);
	const [users, setUsers] = useState<UserRow[]>([]);
	const [isTableLoading, setTableLoading] = useState<boolean>(false);
	const [count, setCount] = useState<number>(0);
	const [isModelOpen, setIsModelOpen] = useState<boolean>(false);
	const [isAdd, setIsAdd] = useState<boolean>(false);
	const [isEdit, setIsEdit] = useState<boolean>(false);
	const [isView, setIsView] = useState<boolean>(false);
	const [selectedRow, setSelectedRow] = useState<UserRow | null>(null);

	const userRole = localStorage.getItem('loginUserRole');
	const isRestricted = userRole === 'staff';

	const handlePageChange = useCallback((page: number) => {
		setPageNo(page);
	}, []);

	const handlePageSizeChange = useCallback((size: number) => {
		setPageSize(size);
	}, []);

	const fetchAllGuidelines = useCallback(async () => {
		setTableLoading(true);
		try {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			const response = await fetchAllUsersByPagination(pageNo, pageSize) as ApiResponse;

			if (response?.users && Array.isArray(response.users) && response.pagination) {
				// Correctly map all fields including profilePicture
				const transformedUsers: UserRow[] = response.users.map((user) => ({
					id: user._id || '',
					firstName: user.firstName || '',
					lastName: user.lastName || '',
					email: user.email || '',
					password: user.password || '',
					role: user.role || '',
					address: user.address || '',
					phone: user.phone || '', // Corrected field name
					passwordConfirm: user.passwordConfirm || '',
					licenseNumber: user.licenseNumber || '',
					licenseExpiryDate: user.licenseExpiryDate || '',
					vehicleAssigned: user.vehicleAssigned ?? false,
					driverStatus: user.driverStatus ?? false,
					emergencyContact: user.emergencyContact || '',
					dateOfBirth: user.dateOfBirth || '',
					dateOfJoining: user.dateOfJoining || '',
					profilePicture: user.profilePicture || '' // Added profilePicture mapping
				}));

				setUsers(transformedUsers);
				setCount(response.pagination.totalUsers);
			} else {
				setUsers([]);
				setCount(0);
				toast.error('Invalid data format received');
			}
		} catch (error) {
			console.error('Error fetching users:', error);
			toast.error('Error fetching data');
			setUsers([]);
			setCount(0);
		} finally {
			setTableLoading(false);
		}
	}, [pageNo, pageSize]);

	useEffect(() => {
		fetchAllGuidelines();
	}, [fetchAllGuidelines]);

	const deleteUserFunction = useCallback(
		async (userId: string): Promise<void> => {
			try {
				await deleteUser(userId);
				await fetchAllGuidelines();
				toast.success(t('User deleted successfully'));
			} catch (error) {
				console.error('Error deleting user:', error);
				toast.error(t('Error deleting user'));
			}
		},
		[fetchAllGuidelines]
	);

	// MODIFICATION 2: Added a handler to be passed to the table component
	const tableRowDeleteHandler = useCallback(
		(rowData: UserRow) => {
			if (rowData.role === 'DEVELOPER') {
				toast.error("Cannot delete a user with the 'DEVELOPER' role.");
				return;
			}

			if (rowData.id) {
				// You can add a confirmation dialog here for better UX if needed
				deleteUserFunction(rowData.id).then((r) => r);
			}
		},
		[deleteUserFunction]
	);

	const tableColumns = [
		{ title: t('User Id'), field: 'id' },
		{
			title: t('First Name'),
			field: 'firstName',
			render: (rowData: UserRow) => {
				if (rowData.role === 'DEVELOPER') {
					return (
						<span>
							-- <LockIcon sx={{ color: '#00C853', fontSize: '18px' }} /> --
						</span>
					);
				}

				return rowData.firstName;
			}
		},
		{
			title: t('Last Name'),
			field: 'lastName',
			render: (rowData: UserRow) => {
				if (rowData.role === 'DEVELOPER') {
					return (
						<span>
							-- <LockIcon sx={{ color: '#00C853', fontSize: '18px' }} /> --
						</span>
					);
				}

				return rowData.lastName;
			}
		},
		{
			title: t('Email'),
			field: 'email',
			render: (rowData: UserRow) => {
				if (rowData.role === 'DEVELOPER') {
					return (
						<span>
							-- <LockIcon sx={{ color: '#00C853', fontSize: '18px' }} /> --
						</span>
					);
				}

				return rowData.email;
			}
		},
		{
			title: t('Password'),
			field: 'password',
			render: (rowData: UserRow) => {
				if (rowData.role === 'DEVELOPER') {
					return (
						<span>
							-- <LockIcon sx={{ color: '#00C853', fontSize: '18px' }} /> --
						</span>
					);
				}

				return '*********';
			}
		},
		{
			title: t('Role'),
			field: 'role',
			cellStyle: { padding: '4px 8px' },
			render: (rowData: UserRow) => {
				// Colors: STAFF is Green, ADMIN is Blue, ROOT is Red
				const roleColors: Record<string, { text: string; bg: string }> = {
					STAFF: { text: '#388E3C', bg: '#E8F5E9' },
					ADMIN: { text: '#1E88E5', bg: '#E3F2FD' },
					ROOT: { text: '#D32F2F', bg: '#FBE9E7' },
					DEMONSTRATOR: { text: '#440f85', bg: '#f0e3fb' },
					DEVELOPER: { text: '#1c0606', bg: '#c3bebe' }
				};

				// Normalize to uppercase for mapping to the color dictionary
				const normalizedRole = rowData.role?.toUpperCase() || '';
				const { text, bg } = roleColors[normalizedRole] ?? { text: '#424242', bg: '#E0E0E0' };

				// Capitalize first letter, lowercase the rest (e.g., "STAFF" -> "Staff")
				const formattedRole = rowData.role
					? rowData.role.charAt(0).toUpperCase() + rowData.role.slice(1).toLowerCase()
					: '';

				return (
					<span
						style={{
							display: 'inline-block',
							padding: '4px 12px',
							borderRadius: '16px',
							color: text,
							backgroundColor: bg,
							fontSize: '12px',
							fontWeight: 500,
							textAlign: 'center',
							minWidth: '70px'
						}}
					>
						{t(formattedRole)}
					</span>
				);
			}
		}
	];

	const handleFormModelOpen = useCallback(
		(isNew: boolean, isEditMode: boolean, isViewMode: boolean, selectedData: UserRow | null) => {
			setIsAdd(isNew);
			setIsEdit(isEditMode);
			setIsView(isViewMode);
			setSelectedRow(selectedData);
			setIsModelOpen(true);
		},
		[]
	);

	const tableRowViewHandler = useCallback(
		(rowData: UserRow) => {
			handleFormModelOpen(false, false, true, rowData);
		},
		[handleFormModelOpen]
	);

	const tableRowEditHandler = useCallback(
		(rowData: UserRow) => {
			handleFormModelOpen(false, true, false, rowData);
		},
		[handleFormModelOpen]
	);

	const onCloseHandler = useCallback(() => {
		setIsModelOpen(false);
		setSelectedRow(null);
		fetchAllGuidelines(); // Refresh data on close
	}, [fetchAllGuidelines]);

	return (
		<div className="min-w-full max-w-[100vw]">
			<NavigationViewComp title={t('users')} />
			<Formik
				initialValues={{} as AdvanceFilteringTypes}
				onSubmit={() => {}}
				enableReinitialize
			>
				{() => (
					<Form>
						<Grid
							container
							spacing={2}
						/>
					</Form>
				)}
			</Formik>

			<Grid
				container
				spacing={2}
				className="pt-[10px] pr-[30px] mx-auto"
			>
				<Grid
					item
					xs={12}
					className="flex flex-wrap justify-end items-end gap-[10px] pt-[10px!important]"
				>
					<Button
						className="min-w-[100px] min-h-[36px] max-h-[36px] text-[10px] sm:text-[12px] lg:text-[14px] text-white font-medium rounded-[6px] bg-[#16a085] hover:bg-[#16a085]"
						variant="contained"
						size="medium"
						onClick={() => handleFormModelOpen(true, false, false, null)}
						disabled={isRestricted}
					>
						{t('Create User')}
					</Button>
				</Grid>
			</Grid>

			<Grid
				container
				spacing={2}
				className="pr-[30px] mx-auto mt-0"
			>
				<Grid
					item
					xs={12}
					className="!pt-[5px]"
				>
					{/* MODIFICATION 3: Passed the delete handler to the table */}
					<MaterialTableWrapper
						title="User Management Table"
						filterChanged={null}
						handleColumnFilter={null}
						tableColumns={tableColumns}
						handlePageChange={handlePageChange}
						handlePageSizeChange={handlePageSizeChange}
						handleCommonSearchBar={null}
						pageSize={pageSize}
						disableColumnFiltering
						pageIndex={pageNo}
						setPageSize={setPageSize}
						searchByText=""
						loading={isTableLoading}
						count={count}
						exportToExcel={null}
						handleRowDeleteAction={null} // This can be removed if not used elsewhere
						externalAdd={null}
						externalEdit={tableRowEditHandler}
						externalView={tableRowViewHandler}
						selection={false}
						selectionExport={null}
						isColumnChoser
						records={users}
						tableRowViewHandler={tableRowViewHandler}
						tableRowDeleteHandler={tableRowDeleteHandler}
						// tableRowEditHandler={tableRowEditHandler}
					/>
				</Grid>
			</Grid>

			{isModelOpen && (
				<UsersForm
					isOpen={isModelOpen}
					isAdd={isAdd}
					isEdit={isEdit}
					isView={isView}
					selectedRow={selectedRow as any}
					setIsFormOpen={setIsModelOpen}
					onCloseHandler={onCloseHandler}
					onSuccess={fetchAllGuidelines} // Pass onSuccess handler
				/>
			)}
		</div>
	);
};

export default UsersApp;
