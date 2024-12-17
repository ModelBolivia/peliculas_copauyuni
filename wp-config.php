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
define( 'AUTH_KEY',         '(osq?5a]paFxv9!d^T]h?Va+ a2H`dv3DW#|5J7$Zl.<i_{IIFmF?4<{V8itV&H]' );
define( 'SECURE_AUTH_KEY',  'VslS[#%/>MYmO|E[KbFCL%lv:;;.s_J=}O<mJ_/r]f5?%6[^EIXF =ewCqqJBp|a' );
define( 'LOGGED_IN_KEY',    'A;h?K[-3Oh+c;Q|~x4x/,vq|^=8;G/[~I-E[R!}W(Ka@h5YmF-P<X![}b(0TOR L' );
define( 'NONCE_KEY',        '_]P<Xhb-~V~.{O`f>yfll3.fgz>B] .CXGk-v9(mkrN=UyU?]<K2$k3dR3| YjN+' );
define( 'AUTH_SALT',        'T0Ea$+H),(_uf(>mQ)YJ0)be|eC#F~h@s{G&*{?/BhrC#7[.WS$iqwM+0u^E8 ^5' );
define( 'SECURE_AUTH_SALT', 'li41K]!7$g}Xhk`E3i-K~aNAkEUJ5eGw9@w_OU4TOz*MW#e>q]VzHW9n=Qh6!o(c' );
define( 'LOGGED_IN_SALT',   '$foCqzt1dW.@:|6VX@4& r~#$EblHE(gdY5|`F*LzzL{D~wDKtmqhI&{{k,{7`9w' );
define( 'NONCE_SALT',       '%pgH#p@shOd+`@Z*J_MGMB_ObB(DGuuGSl#rb#cd~fxspB{&oSg?T,@7l.jvvq#b' );

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
