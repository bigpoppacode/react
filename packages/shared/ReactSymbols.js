/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'

import {enableSymbolFallbackForWWW} from './ReactFeatureFlags';
// The Symbol used to tag the ReactElement-like types.

export let REACT_ELEMENT_TYPE;
export let REACT_PORTAL_TYPE;
export let REACT_FRAGMENT_TYPE;
export let REACT_STRICT_MODE_TYPE;
export let REACT_PROFILER_TYPE;
export let REACT_PROVIDER_TYPE;
export let REACT_CONTEXT_TYPE;
export let REACT_FORWARD_REF_TYPE;
export let REACT_SUSPENSE_TYPE;
export let REACT_SUSPENSE_LIST_TYPE;
export let REACT_MEMO_TYPE;
export let REACT_LAZY_TYPE;
export let REACT_SCOPE_TYPE;
export let REACT_DEBUG_TRACING_MODE_TYPE;
export let REACT_OFFSCREEN_TYPE;
export let REACT_LEGACY_HIDDEN_TYPE;
export let REACT_CACHE_TYPE;
export let REACT_TRACING_MARKER_TYPE;
export let REACT_SERVER_CONTEXT_TYPE;
export let REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED;
let MAYBE_ITERATOR_SYMBOL;

if (
  enableSymbolFallbackForWWW &&
  (typeof Symbol !== 'function' || !Symbol.for)
) {
  REACT_ELEMENT_TYPE = 0xeac7;
  REACT_PORTAL_TYPE = 0xeaca;
  REACT_FRAGMENT_TYPE = 0xeacb;
  REACT_STRICT_MODE_TYPE = 0xeacc;
  REACT_PROFILER_TYPE = 0xead2;
  REACT_PROVIDER_TYPE = 0xeacd;
  REACT_CONTEXT_TYPE = 0xeace;
  REACT_FORWARD_REF_TYPE = 0xead0;
  REACT_SUSPENSE_TYPE = 0xead1;
  REACT_SUSPENSE_LIST_TYPE = 0xead8;
  REACT_MEMO_TYPE = 0xead3;
  REACT_LAZY_TYPE = 0xead4;
  REACT_SCOPE_TYPE = 0xead7;
  REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
  REACT_OFFSCREEN_TYPE = 0xeae2;
  REACT_LEGACY_HIDDEN_TYPE = 0xeae3;
  REACT_CACHE_TYPE = 0xeae4;
  REACT_TRACING_MARKER_TYPE = 0xeae5;
  REACT_SERVER_CONTEXT_TYPE = 0xeae6;
  REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = 0xeae7;

  MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
} else {
  REACT_ELEMENT_TYPE = Symbol.for('react.element');
  REACT_PORTAL_TYPE = Symbol.for('react.portal');
  REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
  REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
  REACT_PROFILER_TYPE = Symbol.for('react.profiler');
  REACT_PROVIDER_TYPE = Symbol.for('react.provider');
  REACT_CONTEXT_TYPE = Symbol.for('react.context');
  REACT_SERVER_CONTEXT_TYPE = Symbol.for('react.server_context');
  REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
  REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
  REACT_MEMO_TYPE = Symbol.for('react.memo');
  REACT_LAZY_TYPE = Symbol.for('react.lazy');
  REACT_SCOPE_TYPE = Symbol.for('react.scope');
  REACT_DEBUG_TRACING_MODE_TYPE = Symbol.for('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = Symbol.for('react.legacy_hidden');
  REACT_CACHE_TYPE = Symbol.for('react.cache');
  REACT_TRACING_MARKER_TYPE = Symbol.for('react.tracing_marker');
  REACT_SERVER_CONTEXT_DEFAULT_VALUE_NOT_LOADED = Symbol.for(
    'react.default_value',
  );
  MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
}

const FAUX_ITERATOR_SYMBOL = '@@iterator';

export function getIteratorFn(maybeIterable: ?any): ?() => ?Iterator<*> {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }
  const maybeIterator =
    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
    maybeIterable[FAUX_ITERATOR_SYMBOL];
  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }
  return null;
}
