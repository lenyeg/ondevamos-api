export default ({ env }) => ({
	connection: {
		client: 'mysql',
		connection: {
		host: env('DATABASE_HOST', 'ondevamos_db'),
			port: env.int('DATABASE_PORT', 3306),
			database: env('DATABASE_NAME', 'ondevamos'),
			user: env('DATABASE_USERNAME', 'ondevamos'),
			password: env('DATABASE_PASSWORD', 'ondevamos'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
