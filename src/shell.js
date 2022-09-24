import './imports'
import { LitElement, html } from 'lit'

export default customElements.define('we-connect-shell', class WeConnectShell extends LitElement {
  static properties = {
    sources: {
      type: Array
    }
  }

  constructor() {
    super()
  }
  
  async selectScreen() {
    this.shadowRoot.querySelector('.dialog.select-screen').setAttribute('open', '')
    console.log('select');
  }

  render() {    
    return html`
    <style>
    :host {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
    }

    .dialog {
      position: absolute;
      display: flex;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      pointer-events: none;
    }

    .dialog[open] {
      opacity: 1;
      pointer-events: auto;
    }

    .dialog.select-screen {
      flex-flow: row wrap;
    }

    .screen-item {
      width: 240px;
      height: 240px;
    }

    img {
      width: 100%;
    }

    </style>
    <span class="dialog select-screen">
      ${this.sources ? this.sources.map(source => html`<span class="screen-item">
        <img src="${source.thumbnail}">
        <strong>${source.name}</strong>
      </span>`) : ''}
    </span>
    <span class="container">

      <button @click=${this.selectScreen}>share</button>
      <button>connect</button>
    </span>
    `
  }
})