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
define( 'AUTH_KEY',         '49v &K2a&M/5,Nefkr@b|fl.yKv1Ep$2Vg$k1V &4/Y{)IDEKzic$r{O&$C<DMtJ' );
define( 'SECURE_AUTH_KEY',  ',Rku)#dTru-<&pA)~Yc=I4!8ty_VfY<6ghoFMsg2Fof6f>@4Lrs(as4{FUe0*@Pi' );
define( 'LOGGED_IN_KEY',    '`HiuMx|Om8@S^c[WM7&7AkL~?tY}4`%m>DMr.K$lBJ?sf><|C-BGr`kj6_fG$tC(' );
define( 'NONCE_KEY',        'xMQhW=|%/4WN7<tF>~iv0)51]$::2b7cSw)m#!7AD;!z81{qY1+FR?7oGwZ`3!^y' );
define( 'AUTH_SALT',        'Xl?BPo-XNA91rUW#-JHK*x&t(?3OpEJ|D@sK~)-R9l|}:+K+>tygdo`wY3Csh{>~' );
define( 'SECURE_AUTH_SALT', 'g0)H_^nbvac3ft1s&>!$sc/h|fb!|<_i8=CeZ&[`glh(Ul2<&D#/FDiu_hxD4hie' );
define( 'LOGGED_IN_SALT',   'm+CLZ# 8Wksw6}ti^tW}/sY>Wyk>cL[E#+d0.>,1fCku}^FPAkR[dK^6u<FE=D=q' );
define( 'NONCE_SALT',       '>Xy06&N4(mMFs)Z<y}9ngJfJ6:rSt&I7~j@RVo#UTI9DBY6NZl9h|_`0>{BrG* K' );

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
