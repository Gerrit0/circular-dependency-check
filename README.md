# Circular Dependency Check Action

This action checks for circular dependencies using [Madge](https://www.npmjs.com/package/madge).

## Inputs

| Option | Description |
| --- | --- |
| `entry` | **Required** The entry point (file or directory) to be passed to Madge |
| `extensions` | Extensions to be passed to Madge, defaults to `js` |
| `fail` | Whether or not to fail the build when circular dependencies are detected. Defaults to `true` |

## Outputs

| Output | Description |
| --- | --- |
| `failed` | `true` if circular dependencies were detected, otherwise `false` |

## Example usage

```yaml
uses: gerrit0/circular-dependency-check@v1
with:
  entry: >
    src/index.js
    src/other-entry.ts
  extensions: >
    ts
    js
  fail: false
```
