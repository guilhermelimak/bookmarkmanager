declare namespace JSX {
  interface Element {}
  interface ElementAttributesProperty {
    $props // specify the property name to use
  }
  interface IntrinsicElements {
    [elemName: string]: any
  }
}

declare module 'style'
declare module 'vue-styled-components'
