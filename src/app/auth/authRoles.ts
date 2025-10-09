// @ts-ignore
/**
 * The authRoles object defines the authorization roles for the Fuse application.
 */
const authRoles = {
	/**
	 * The admin role grants access to users with the 'admin' role.
	 */
	admin: ['admin'],

	/**
	 * The staff role grants access to users with the 'staff' role.
	 */
	staff: ['staff'], // Now only 'staff'

	/**
	 * The user role grants access to users with the 'user' role.
	 */
	user: ['user'], // Now only 'user'

	/**
	 * The onlyGuest role grants access to unauthenticated users.
	 */
	onlyGuest: []
};

export default authRoles;