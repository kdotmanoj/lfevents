<?php
/**
 * The admin-specific functionality of the plugin.
 *
 * @link       http://example.com
 * @since      1.0.0
 *
 * @package    LFEvents
 * @subpackage LFEvents/admin
 */

/**
 * The admin-specific functionality of the plugin.
 *
 * Defines the plugin name, version, and two examples hooks for how to
 * enqueue the admin-specific stylesheet and JavaScript.
 *
 * @package    LFEvents
 * @subpackage LFEvents/admin
 * @author     Your Name <email@example.com>
 */
class LFEvents_Admin {

	/**
	 * The ID of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $lfevents    The ID of this plugin.
	 */
	private $lfevents;

	/**
	 * The version of this plugin.
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      string    $version    The current version of this plugin.
	 */
	private $version;

	/**
	 * Array of lfevent custom post types that are in use
	 *
	 * @since    1.0.0
	 * @access   private
	 * @var      array    $post_types    Array of lfevent custom post types that are in use
	 */
	private $post_types;

	/**
	 * Initialize the class and set its properties.
	 *
	 * @since    1.0.0
	 * @param      string $lfevents       The name of this plugin.
	 * @param      string $version    The version of this plugin.
	 */
	public function __construct( $lfevents, $version ) {

		$this->lfevents   = $lfevents;
		$this->version    = $version;
		$this->post_types = [ 'page' ];
		$current_year     = date( 'Y' );

		for ( $x = 2019; $x <= $current_year; $x++ ) {
			$this->post_types[] = 'lfevent' . $x;
		}
	}

	/**
	 * Register the stylesheets for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_styles() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in LFEvents_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The LFEvents_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_style( $this->lfevents, plugin_dir_url( __FILE__ ) . 'css/lfevents-admin.css', array(), $this->version, 'all' );

	}

	/**
	 * Register the JavaScript for the admin area.
	 *
	 * @since    1.0.0
	 */
	public function enqueue_scripts() {

		/**
		 * This function is provided for demonstration purposes only.
		 *
		 * An instance of this class should be passed to the run() function
		 * defined in LFEvents_Loader as all of the hooks are defined
		 * in that particular class.
		 *
		 * The LFEvents_Loader will then create the relationship
		 * between the defined hooks and the functions defined in this
		 * class.
		 */

		wp_enqueue_script( $this->lfevents, plugin_dir_url( __FILE__ ) . 'js/lfevents-admin.js', array( 'jquery' ), $this->version, false );

	}

	/**
	 * Registers the custom post types
	 */
	public function new_cpts() {

		$opts = array(
			'labels'       => array(
				'name'          => __( 'About Pages' ),
				'singular_name' => __( 'About Page' ),
				'all_items'     => __( 'All About Pages' ),
			),
			'public'       => true,
			'has_archive'  => true,
			'show_in_rest' => true,
			'hierarchical' => true,
			'menu_icon'    => 'dashicons-info',
			'rewrite'      => array( 'slug' => 'about' ),
			'supports'     => array( 'title', 'editor', 'thumbnail', 'excerpt', 'revisions', 'page-attributes' ),
		);

		register_post_type( 'lfevents_about_page', $opts );

		$opts = array(
			'public'       => true,
			'has_archive'  => true,
			'show_in_rest' => true,
			'hierarchical' => true,
			'menu_icon'    => 'dashicons-admin-page',
			'supports'     => array( 'title', 'editor', 'thumbnail', 'excerpt', 'revisions', 'custom-fields', 'page-attributes' ),
		);

		$current_year = date( 'Y' );
		for ( $x = 2019; $x <= $current_year; $x++ ) {
			$opts['labels']  = array(
				'name'          => $x . ' Events',
				'singular_name' => $x . ' Event',
				'all_items'     => 'All ' . $x . ' Events',
			);
			$opts['rewrite'] = array( 'slug' => 'archive/' . $x );

			register_post_type( 'lfevent' . $x, $opts );
		}

	}

	/**
	 * Changes the "Pages" labels to "Events"
	 */
	public function change_page_label() {
		global $wp_post_types;
		$labels = &$wp_post_types['page']->labels;
		$labels->name = 'Events';
		$labels->singular_name = 'Event';
		$labels->add_new_item = 'Add Event';
		$labels->edit_item = 'Edit Event';
		$labels->new_item = 'New Event';
		$labels->view_item = 'View Event';
		$labels->all_items = "All Events";
		$labels->view_items = 'View Events';
		$labels->search_items = 'Search Events';
		$labels->not_found = 'No Events found';
		$labels->not_found_in_trash = 'No Events found in Trash';
		$labels->archives = "Event Archives";
		$labels->attributes = "Event Attributes";
		$labels->menu_name = "Events";
		$labels->name_admin_bar = "Event";

	}

	/**
	 * Registers the LFEvent categories
	 */
	public function register_event_categories() {
		$labels = [
			'name'          => _x( 'Event Categories', 'taxonomy general name' ),
			'singular_name' => _x( 'Event Category', 'taxonomy singular name' ),
		];
		$args   = [
			'labels'       => $labels,
			'show_in_rest' => true,
			'hierarchical' => true,
		];

		register_taxonomy( 'lfevent-category', $this->post_types, $args );

	}

	/**
	 * Registers the LFEvent sidebar
	 *
	 * @param array $sidebars    Existing sidebars in Gutenberg.
	 */
	public function create_sidebar( $sidebars ) {
		// First we define the sidebar with it's tabs, panels and settings.
		$sidebar = array(
			'id'              => 'lfevent-sidebar',
			'id_prefix'       => 'lfes_',
			'label'           => __( 'Event Settings' ),
			'post_type'       => $this->post_types,
			'data_key_prefix' => 'lfes_',
			'icon_dashicon'   => 'admin-site',
			'tabs'            => array(
				array(
					'label'  => __( 'Tab label' ),
					'panels' => array(
						array(
							'label'    => __( 'General Settings' ),
							'settings' => array(
								array(
									'type'          => 'text', // Required.
									'id'            => 'location',
									'data_type'     => 'meta',
									'data_key'      => 'location', // Required if 'data_type' is 'meta'.
									'label'         => __( 'Event location' ),
									'register_meta' => true, // This option is applicable only if 'data_type' is 'meta'.
									'ui_border_top' => true, // Display CSS border-top in the editor control.
									'default_value' => '',
									'placeholder'   => __( 'City, Country' ),
								),
								array(
									'type'          => 'date_range', // Required.
									// Optionally, an id may be specified. It will be used by the plugin to
									// identify the setting and will be applied to the control html.
									// The prefix set in the sidebar option 'id_prefix' will be applied.
									'id'            => 'date_range_id',
									'data_type'     => 'meta',
									'data_key'      => 'date_range_key', // Required if 'data_type' is 'meta' or 'localstorage'.
									// Use 'data_key_prefix' to set a custom prefix for this setting 'data_key'.
									// If 'data_key_prefix' is not assigned, the 'data_key_prefix' from the sidebar
									// where this setting is nested will be used.
									'label'         => __( 'Event dates', 'my_plugin' ),
									'register_meta' => true, // This option is applicable only if 'data_type' is 'meta'.
									'ui_border_top' => true, // Display CSS border-top in the editor control.
									'default_value' => '', // A string with a date that matches 'format'.
									// To see the available formats check: http://momentjs.com/docs/#/parsing/string-format/.
									'format'        => 'DD/MM/YYYY',
									// A string with the locale value.
									// For example 'en' for english, or 'ja' for japanese.
									// To see the available locales check https://momentjs.com/.
									'locale'        => 'en',
								),
							),
						),
						array(
							'label'    => __( 'Colors' ),
							'settings' => array(
								array(
									'type'          => 'color',
									'id'            => 'color_id',
									'data_type'     => 'meta',
									'data_key'      => 'accent_color', // Required if 'data_type' is 'meta' or 'localstorage'.
									'label'         => __( 'Accent color' ),
									'help'          => __( 'Choose a color for all accents for the Event' ),
									'register_meta' => true, // This option is applicable only if 'data_type' is 'meta'.
									'ui_border_top' => true, // Display CSS border-top in the editor control.
									'default_value' => '', // A string with a HEX, rgb or rgba color format.
									'alpha_control' => false, // Include alpha control to set color transparency.
								),
							),
						),
					),
				),
			),
		);

		// Push the $sidebar we just assigned to the variable
		// to the array of $sidebars that comes in the function argument.
		$sidebars[] = $sidebar;

		// Return the $sidebars array with our sidebar now included.
		return $sidebars;

	}

	/**
	 * Adds filters to the Events listing in wp-admin
	 */
	public function event_filters() {
		global $wpdb;

		// only do this for Events.
		$post_type_listing = isset( $_GET['post_type'] ) ? $_GET['post_type'] : '';
		if ( $post_type_listing !== 'page' && substr( $post_type_listing, 0, 7 ) !== 'lfevent' || $post_type_listing === 'lfevents_about_page') {
			return;
		}

		$myposts = $wpdb->get_results(
			$wpdb->prepare(
				"SELECT * FROM $wpdb->posts
				WHERE post_type like %s
				AND post_parent = 0 
				AND post_status <> 'trash'
				AND post_title <> 'Auto Draft'
				ORDER BY $wpdb->posts.post_title ASC",
				$wpdb->esc_like( $post_type_listing ) . '%'
			)
		);

		echo '<select name="admin-single-event" class="event-quick-link">
		<option selected="selected" value="">' . __( 'Select Event' ) . '</option>';
		foreach ( $myposts as $ep ) {
			$e = get_post( $ep );
			if ( $e->ID == $_GET['admin-single-event'] ) {
				echo '<option value="' . $e->ID . '" selected="selected">' . $e->post_title . '</option>';
			} else {
				echo '<option value="' . $e->ID . '">' . $e->post_title . '</option>';
			}
		}
		echo '</select>';
	}

	/**
	 * Does the actual filtering of Events in the Admin listing
	 *
	 * @param object $query Existing query.
	 */
	public function event_list_filter( $query ) {
		global $wpdb;

		$post_id = isset( $_GET['admin-single-event'] ) ? (int) $_GET['admin-single-event'] : '';
		if ( ! $post_id ) {
			return;
		}

		$posts_ids   = array( $post_id );
		$event_posts = $wpdb->get_results(
			$wpdb->prepare(
				"SELECT * FROM $wpdb->posts
				WHERE post_parent = '%d'
				AND post_status <> 'trash'",
				$post_id
			)
		);

		foreach ( $event_posts as $p ) {
			$e = (int) $p->ID;
			$posts_ids[] = $e;

			$gc_posts = $wpdb->get_results(
				$wpdb->prepare(
					"SELECT * FROM $wpdb->posts
					WHERE post_parent = '%d'
					AND post_status <> 'trash'",
					$e
				)
			);

			if ( $gc_posts ) {
				foreach ( $gc_posts as $gc ) {
					$posts_ids[] = $gc->ID;
				}
			}
		}

		$query->set( 'post__in', $posts_ids );
		$query->set( 'order', 'ASC' );
		$query->set( 'orderby', 'parent' );
	}
}
