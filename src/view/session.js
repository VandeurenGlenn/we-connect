import { LitElement } from 'lit'
// import template from './shell.html'

export default customElements.define('session-view', class SessionView extends LitElement {
  constructor() {
    super()
  }

  async connectedCallback() {
    this.template = (await import('./session.html')).default
    super.connectedCallback()
  }

  render() {    
    return this.template
  }
})