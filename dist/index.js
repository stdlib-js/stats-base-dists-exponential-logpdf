/** @license Apache-2.0 */

'use strict';

/**
* Natural logarithm of the probability density function (PDF) for an exponential distribution.
*
* @module @stdlib/stats-base-dists-exponential-logpdf
*
* @example
* var logpdf = require( '@stdlib/stats-base-dists-exponential-logpdf' );
*
* var y = logpdf( 0.3, 4.0 );
* // returns ~0.186
*
* var mylogPDF = logpdf.factory( 0.5 );
*
* y = mylogPDF( 3.0 );
* // returns ~-2.193
*
* y = mylogPDF( 1.0 );
* // returns ~-1.193
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property/dist' );
var main = require( './main.js' );
var factory = require( './factory.js' );


// MAIN //

setReadOnly( main, 'factory', factory );


// EXPORTS //

module.exports = main;
