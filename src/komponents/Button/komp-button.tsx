import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("komp-button")
export class KompButton extends LitElement {
  @property()
  label = "Button";

  static styles = css`
    :host {
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      font-weight: 500;
      background: hsl(var(--komp-primary-background));
      color: hsl(var(--komp-primary-foreground));
      border-radius: 4px;
      cursor: pointer;
      border-radius: var(--komp-radius);
      transition: background-color 0.25s ease;
    }

    :host(:hover) {
      background: hsl(var(--komp-primary-background) / 0.9);
    }
  `;

  render() {
    return html`${this.label}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "komp-button": KompButton;
  }
}
