<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# frexp

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Split a [double-precision floating-point number][ieee754] into a normalized fraction and an integer power of two.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-frexp
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var frexp = require( '@stdlib/math-base-special-frexp' );
```

#### frexp( \[out,] x )

Splits a [double-precision floating-point number][ieee754] into a normalized fraction and an integer power of two.

```javascript
var out = frexp( 4.0 );
// returns [ 0.5, 3 ]
```

By default, the function returns the normalized fraction and the exponent as a two-element `array`. The normalized fraction and exponent satisfy the relation `x = frac * 2^exp`.

```javascript
var pow = require( '@stdlib/math-base-special-pow' );

var x = 4.0;
var out = frexp( x );
// returns [ 0.5, 3 ]

var frac = out[ 0 ];
var exp = out[ 1 ];

var bool = ( x === frac * pow(2.0, exp) );
// returns true
```

To avoid unnecessary memory allocation, the function supports providing an output (destination) object.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var out = new Float64Array( 2 );

var y = frexp( out, 4.0 );
// returns <Float64Array>[ 0.5, 3 ]

var bool = ( y === out );
// returns true
```

If provided positive or negative zero, `NaN`, or positive or negative `infinity`, the function returns a two-element `array` containing the input value and an exponent equal to `0`.

```javascript
var out = frexp( 0.0 );
// returns [ 0.0, 0 ]

out = frexp( -0.0 );
// returns [ -0.0, 0 ]

out = frexp( NaN );
// returns [ NaN, 0 ]

out = frexp( Infinity );
// returns [ Infinity, 0 ]

out = frexp( -Infinity );
// returns [ -Infinity, 0 ]
```

For all other numeric input values, the [absolute value][@stdlib/math/base/special/abs] of the normalized fraction resides on the interval `[0.5,1)`.

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   Care should be taken when reconstituting a [double-precision floating-point number][ieee754] from a normalized fraction and an exponent. For example,

    ```javascript
    var pow = require( '@stdlib/math-base-special-pow' );

    var x = 8.988939926493918e+307; // x ~ 2^1023

    var out = frexp( x );
    // returns [ 0.5000263811533315, 1024 ]

    // Naive reconstitution:
    var y = out[ 0 ] * pow( 2.0, out[ 1 ] );
    // returns Infinity

    // Account for 2^1024 evaluating as infinity by recognizing 2^1024 = 2^1 * 2^1023:
    y = out[ 0 ] * pow( 2.0, out[1]-1023 ) * pow( 2.0, 1023 );
    // returns 8.988939926493918e+307
    ```

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var pow = require( '@stdlib/math-base-special-pow' );
var BIAS = require( '@stdlib/constants-float64-exponent-bias' );
var frexp = require( '@stdlib/math-base-special-frexp' );

var sign;
var frac;
var exp;
var x;
var f;
var v;
var i;

// Generate random numbers and break each into a normalized fraction and an integer power of two...
for ( i = 0; i < 100; i++ ) {
    if ( randu() < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    frac = randu() * 10.0;
    exp = round( randu()*616.0 ) - 308;
    x = sign * frac * pow( 10.0, exp );
    f = frexp( x );
    if ( f[ 1 ] > BIAS ) {
        v = f[ 0 ] * pow( 2.0, f[1]-BIAS ) * pow( 2.0, BIAS );
    } else {
        v = f[ 0 ] * pow( 2.0, f[ 1 ] );
    }
    console.log( '%d = %d * 2^%d = %d', x, f[ 0 ], f[ 1 ], v );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/base/special/ldexp`][@stdlib/math/base/special/ldexp]</span><span class="delimiter">: </span><span class="description">multiply a double-precision floating-point number by an integer power of two.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-frexp.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-frexp

[test-image]: https://github.com/stdlib-js/math-base-special-frexp/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-frexp/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-frexp/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-frexp?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-frexp.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-frexp/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-frexp/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-frexp/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-frexp/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-frexp/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-frexp/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

[@stdlib/math/base/special/abs]: https://github.com/stdlib-js/math-base-special-abs

<!-- <related-links> -->

[@stdlib/math/base/special/ldexp]: https://github.com/stdlib-js/math-base-special-ldexp

<!-- </related-links> -->

</section>

<!-- /.links -->
