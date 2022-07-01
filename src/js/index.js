// Import the main styles
import "../scss/main.scss";

// Polyfills for Internet Explorer
import "core-js/stable";
import "regenerator-runtime/runtime";

// SVG Polyfill for Internet Explorer
import svg4everybody from 'svg4everybody';
svg4everybody()

// // Import vendor libraries
// import "bootstrap";

// Global Scripts
import "./global";
import "./helpers/validations"
import "./vue-state"

// Import vendor libraries
import "bootstrap";

// Import the JS components
import "./components/tab-modal";
import "./components/form";
import "./components/admin";
import "./components/wish-card";

