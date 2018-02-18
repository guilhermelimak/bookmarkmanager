import Vue from 'vue'

export default class VueComponent<P> extends Vue {
  $props: P
}
