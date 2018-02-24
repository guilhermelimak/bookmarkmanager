declare namespace JSX {
  interface Element {}
  interface ElementAttributesProperty {
    $props
  }
  interface IntrinsicElements {
    [elemName: string]: any
  }
}

declare module 'style'
declare module 'vue-styled-components'
