# Circular Dependency Check Action

This action checks for circular dependencies using [Madge](https://www.npmjs.com/package/madge).

## Why?

JavaScript's module systems (both CommonJS and ES Modules) can handle circular dependencies so
long as the usage of values is deferred, so the circularity can be resolved before the import is needed.

While benign circular dependencies are possible, if the above rule is not carefully followed,
this can lead to imports unexpectedly being undefined.

Examples:

- [metaplex-foundation/solita#22](https://github.com/metaplex-foundation/solita/issues/22)
- [vitejs/vite#7893](https://github.com/vitejs/vite/issues/7893)
- [TypeStrong/typedoc#1173](https://github.com/TypeStrong/typedoc/issues/1173)

## Inputs

| Option       | Description                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------- |
| `entry`      | **Required** The entry point (file or directory) to be passed to Madge                       |
| `extensions` | Extensions to be passed to Madge, defaults to `js`                                           |
| `fail`       | Whether or not to fail the build when circular dependencies are detected. Defaults to `true` |

## Outputs

| Output   | Description                                                      |
| -------- | ---------------------------------------------------------------- |
| `failed` | `true` if circular dependencies were detected, otherwise `false` |

## Example usage

```yaml
uses: gerrit0/circular-dependency-check@v2.0.2
with:
  entry: >
    src/index.js
    src/other-entry.ts
  extensions: >
    ts
    js
  fail: false
```
