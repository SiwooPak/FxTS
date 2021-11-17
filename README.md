# ![fxts-icon](https://user-images.githubusercontent.com/10924072/141757649-cc715e62-21bb-441d-aeae-4732154ded10.png) FxTS

FxTS is a functional library for TypeScript/Javascript programmers.

### Why FxTS?

- Lazy evaluation
- Handling concurrent requests
- Type inference
- Follow [iteration protocal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols) Iterable / AsyncIterable

## Installation

```
npm install @marpple/fxts
```

## Documentation

Please review the [API documentation](https://fxts.dev/docs/index)

## Usage

```ts
import { pipe, range, map, filter, take, each } from "@marpple/fxts";

pipe(
  range(10),
  map((a) => a + 10),
  filter((a) => a % 2 === 0),
  take(2),
  each((a) => console.log(a)),
);
```

you can also handle asynchronous data, see the [example](https://fxts.dev/docs/overview#examples)

## Build

- `npm run build`

## Running Test

- `npm test`

## License

Apache License 2.0