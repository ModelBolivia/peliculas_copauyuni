<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'peliculas_videos_copauyuni' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '%eqvCvGH$~Q4Z@O~I^aPof(E<dlpHy7v2`dQEQ1sL^9)0$FFM(Up-kp$+tH%OI.u' );
define( 'SECURE_AUTH_KEY',  '(qFW.b-,-X5;tH@C47bJ;a*$TD`~~IjQ);Ne$v(y<}k@?XqrY}U>hb0*x!WYg=AY' );
define( 'LOGGED_IN_KEY',    'L!<<[ZqRlRBi%{RUI~C;HJ>`&Z25J+{w&+|rOapiCGr&o<scBc]39,GjQ@nwJbU0' );
define( 'NONCE_KEY',        'rf~V8zY~h+To.;K:^t?>:D6QS2l6BD)#`p3bGug1h4l7L3),h;$*i{wdU97&Q2s(' );
define( 'AUTH_SALT',        ',O3`H`K*+0KgMuEL848lVz]UXw?=sEUE!RLR 9:tKuRohsO>d!_4M~$Tmq&HI79q' );
define( 'SECURE_AUTH_SALT', '2lm*E=I7?EeToeBqx7XfM`E5Bi0S}3z7F4sE~[Pr&i$?T%fdp#tTesw^1pdE1k*n' );
define( 'LOGGED_IN_SALT',   'dnZdi[j1HF&{|sRMYtyLRrSYC_q$1:q0X#KM &ko/#_[q%~ZsYMqe%|cVKLZyTP6' );
define( 'NONCE_SALT',       ',3c6*qL7|H)_bp.W@}9WVDaoa]d59LlDc6&d|w`O[DqD9{7{iEpy+VJKTsX]S011' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
