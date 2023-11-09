<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# isMultiSlice

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Test if a value is a [`MultiSlice`][@stdlib/slice/multi].

<section class="installation">

## Installation

```bash
npm install @stdlib/assert-is-multi-slice
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
var isMultiSlice = require( '@stdlib/assert-is-multi-slice' );
```

#### isMultiSlice( value )

Tests if a value is a [`MultiSlice`][@stdlib/slice/multi].

```javascript
var MultiSlice = require( '@stdlib/slice-multi' );

var s = new MultiSlice();

var bool = isMultiSlice( s );
// returns true
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var Slice = require( '@stdlib/slice-ctor' );
var MultiSlice = require( '@stdlib/slice-multi' );
var isMultiSlice = require( '@stdlib/assert-is-multi-slice' );

var out = isMultiSlice( new MultiSlice() );
// returns true

out = isMultiSlice( new Slice( 0, 10, 1 ) );
// returns false

out = isMultiSlice( {} );
// returns false

out = isMultiSlice( null );
// returns false
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/assert-is-slice`][@stdlib/assert/is-slice]</span><span class="delimiter">: </span><span class="description">test if a value is a Slice object.</span>
-   <span class="package-name">[`@stdlib/slice-multi`][@stdlib/slice/multi]</span><span class="delimiter">: </span><span class="description">multi-slice constructor.</span>

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

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/assert-is-multi-slice.svg
[npm-url]: https://npmjs.org/package/@stdlib/assert-is-multi-slice

[test-image]: https://github.com/stdlib-js/assert-is-multi-slice/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/assert-is-multi-slice/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/assert-is-multi-slice/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/assert-is-multi-slice?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/assert-is-multi-slice.svg
[dependencies-url]: https://david-dm.org/stdlib-js/assert-is-multi-slice/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/assert-is-multi-slice/tree/deno
[umd-url]: https://github.com/stdlib-js/assert-is-multi-slice/tree/umd
[esm-url]: https://github.com/stdlib-js/assert-is-multi-slice/tree/esm
[branches-url]: https://github.com/stdlib-js/assert-is-multi-slice/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/assert-is-multi-slice/main/LICENSE

[@stdlib/slice/multi]: https://github.com/stdlib-js/slice-multi

<!-- <related-links> -->

[@stdlib/assert/is-slice]: https://github.com/stdlib-js/assert-is-slice

<!-- </related-links> -->

</section>

<!-- /.links -->
