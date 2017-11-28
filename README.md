# webassembly-example [![Build Status](https://travis-ci.org/azu/webassembly-example.svg?branch=master)](https://travis-ci.org/azu/webassembly-example)

An example of [dcodeIO/webassembly](https://github.com/dcodeIO/webassembly "dcodeIO/webassembly").
Run webassembly on Node.js

## Usage

    yarn install
    yarn test

    # or npm

### Output

```
✈ npm t

> webassembly-example@1.0.0 pretest /Users/azu/.ghq/github.com/azu/webassembly-example
> npm run build


> webassembly-example@1.0.0 build /Users/azu/.ghq/github.com/azu/webassembly-example
> wa compile src/program.c -o src/program.wasm

Compiling on darwin-x64 ...

clang src/program.c
 -c
 --target=wasm32-unknown-unknown
 -emit-llvm
 -nostdinc
 -nostdlib
 -D WEBASSEMBLY
 -isystem /Users/azu/.ghq/github.com/azu/webassembly-example/node_modules/webassembly/include
 -o /var/folders/3h/ksxf_vgd08z_jy__g662s1rm0000gn/T/wa1_87386RSGv1n27PM9I.tmp

llvm-link /var/folders/3h/ksxf_vgd08z_jy__g662s1rm0000gn/T/wa1_87386RSGv1n27PM9I.tmp /Users/azu/.ghq/github.com/azu/webassembly-example/node_modules/webassembly/lib/webassembly.bc
 -only-needed
 -o /var/folders/3h/ksxf_vgd08z_jy__g662s1rm0000gn/T/wa2_873864WEJ2F4Jlcda.tmp

llc /var/folders/3h/ksxf_vgd08z_jy__g662s1rm0000gn/T/wa2_873864WEJ2F4Jlcda.tmp
 -march=wasm32
 -filetype=asm
 -asm-verbose=false
 -thread-model=single
 -data-sections
 -function-sections
 -o /var/folders/3h/ksxf_vgd08z_jy__g662s1rm0000gn/T/wa1_87386RSGv1n27PM9I.tmp

s2wasm /var/folders/3h/ksxf_vgd08z_jy__g662s1rm0000gn/T/wa1_87386RSGv1n27PM9I.tmp
 --import-memory
 --allocate-stack 10000
 -o /var/folders/3h/ksxf_vgd08z_jy__g662s1rm0000gn/T/wa2_873864WEJ2F4Jlcda.tmp

wasm-opt /var/folders/3h/ksxf_vgd08z_jy__g662s1rm0000gn/T/wa2_873864WEJ2F4Jlcda.tmp
 -o src/program.wasm

SUCCESS

> webassembly-example@1.0.0 test /Users/azu/.ghq/github.com/azu/webassembly-example
> node src/program.js

1 + 2 = 3
```

## Changelog

See [Releases page](https://github.com/azu/webassembly-example/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/webassembly-example/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
