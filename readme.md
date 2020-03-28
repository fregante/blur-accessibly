# Deprecated ⚠️

Chrome 79 and Firefox 74 (at least) finally fixed the native `.blur()` method, so this module is no longer necessary :tada:

# blur-accessibly [![][badge-gzip]][link-npm]

  [badge-gzip]: https://img.shields.io/bundlephobia/minzip/blur-accessibly.svg?label=gzipped
  [link-npm]: https://www.npmjs.com/package/blur-accessibly

> Use `element.blur()` without losing the `tab` position.

Firefox (v71) / Safari (v13): The native `Element.blur()` resets the tab focus to the start of the document; This module places it back next to the blurred field/element.

Chrome (v79): `element.blur()` works correctly there.

## Install

You can just download the [standalone bundle](https://packd.fregante.now.sh/blur-accessibly) (it might take a minute to download)


Or use `npm`:

```
npm install blur-accessibly
```

```js
// This module is only offered as a ES Module
import blurAccessibly from 'blur-accessibly';
```

## Usage

```js
// Instead of calling `element.blur()`
blurAccessibly(element);
```

For example if you want to blur a field by pressing <kbd>esc</kbd>:

```js
document.querySelector('textarea').addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    blurAccessibly(event.target);
  }
});
```

## API

### blurAccessibly(element);

#### element

Type: `HTMLElement`

The element to call `.blur()` on. The `tabindex` will be preserved *around* it (`textarea` and `input`, except in Safari) or *after* it elsewhere.

# Related

- [indent-textarea](https://github.com/fregante/indent-textarea) - Add editor-like tab-to-indent functionality to `<textarea>`, in a few bytes.
- [insert-text-textarea](https://github.com/fregante/insert-text-textarea) - Insert text in a textarea (supports Firefox and Undo). Used by this module.
- [fit-textarea](https://github.com/fregante/fit-textarea) - Automatically expand a `<textarea>` to fit its content, in a few bytes.
- [delegate-it](https://github.com/fregante/delegate-it) - DOM event delegation, in <1KB. Can be used to attach one `blur-accessibly` to many elements.
