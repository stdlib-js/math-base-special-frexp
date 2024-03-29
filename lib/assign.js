/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isnan = require( '@stdlib/math-base-assert-is-nan' );
var isInfinite = require( '@stdlib/math-base-assert-is-infinite' );
var normalize = require( '@stdlib/number-float64-base-normalize' ).assign;
var floatExp = require( '@stdlib/number-float64-base-exponent' );
var toWords = require( '@stdlib/number-float64-base-to-words' );
var fromWords = require( '@stdlib/number-float64-base-from-words' );


// VARIABLES //

// Exponent all 0s: 1 00000000000 11111111111111111111 => 2148532223
var CLEAR_EXP_MASK = 0x800fffff>>>0; // asm type annotation

// Exponent equal to 1022 (BIAS-1): 0 01111111110 00000000000000000000 => 1071644672
var SET_EXP_MASK = 0x3fe00000|0; // asm type annotation

// Normalization workspace:
var X = [ 0.0, 0.0 ]; // WARNING: not thread safe

// High/low words workspace:
var WORDS = [ 0, 0 ]; // WARNING: not thread safe


// MAIN //

/**
* Splits a double-precision floating-point number into a normalized fraction and an integer power of two and assigns results to a provided output array.
*
* @private
* @param {number} x - input value
* @param {Collection} out - output array
* @param {integer} stride - output array stride
* @param {NonNegativeInteger} offset - output array index offset
* @returns {Collection} output array
*
* @example
* var out = frexp( 4.0, new Array( 2 ), 1, 0 );
* // returns [ 0.5, 3 ]
*
* @example
* var out = frexp( 0.0, new Array( 2 ), 1, 0 );
* // returns [ 0.0, 0 ]
*
* @example
* var out = frexp( -0.0, new Array( 2 ), 1, 0 );
* // returns [ -0.0, 0 ]
*
* @example
* var out = frexp( NaN, new Array( 2 ), 1, 0 );
* // returns [ NaN, 0 ]
*
* @example
* var out = frexp( Infinity, new Array( 2 ), 1, 0 );
* // returns [ Infinity , 0 ]
*
* @example
* var out = frexp( -Infinity, new Array( 2 ), 1, 0 );
* // returns [ -Infinity , 0 ]
*/
function frexp( x, out, stride, offset ) {
	var high;
	var exp;
	if (
		x === 0.0 || // handles -0
		isnan( x ) ||
		isInfinite( x )
	) {
		out[ offset ] = x;
		out[ offset + stride ] = 0;
		return out;
	}
	// If `x` is subnormal, normalize it...
	normalize( x, X, 1, 0 );

	// Extract the exponent from `x` and add the normalization exponent:
	exp = floatExp( X[0] ) + X[ 1 ] + 1;

	// Break `x` into two unsigned 32-bit integers (higher and lower order words):
	toWords.assign( X[ 0 ], WORDS, 1, 0 );
	high = WORDS[ 0 ];

	// Clear the exponent bits within the higher order word:
	high &= CLEAR_EXP_MASK;

	// Set the exponent bits within the higher order word to BIAS-1 (1023-1=1022):
	high |= SET_EXP_MASK;

	// Create a new floating-point number:
	x = fromWords( high, WORDS[ 1 ] );

	out[ offset ] = x;
	out[ offset + stride ] = exp;
	return out;
}


// EXPORTS //

module.exports = frexp;
