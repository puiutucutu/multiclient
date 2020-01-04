# blackjack-multiplayer

- ♣ ... clubs
- ♦ ... diamonds
- ♥ ... hearts
- ♠ ... spades

## Links

- unicode of card ranks
  - https://www.unicode.org/charts/PDF/U1F0A0.pdf

## Snippets

```js
/**
 * @param {array} head
 * @param {array} tail
 * @return {Generator<*[], void, ?>}
 * @example
 *
 * const a  = ['1','11'];
 * const b  = ['1','11'];
 * const c = ['10'];
 *
 * console.log(...cartesian(a, b, c));
 *
 */
function* cartesian(head, ...tail) {
  let remainder = tail.length ? cartesian(...tail) : [[]];
  for (let r of remainder) {
    for (let h of head) {
      yield [h, ...r];
    }
  }
}
```
