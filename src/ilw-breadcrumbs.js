import { LitElement, html } from 'lit';
import { map } from 'lit/directives/map.js';
import styles from './ilw-breadcrumbs.styles.js';
import './ilw-breadcrumbs.css';
import { ManualSlotController } from "./ManualSlotController.js";

class Breadcrumbs extends LitElement {

    static shadowRootOptions = {...LitElement.shadowRootOptions, slotAssignment: "manual"};

    _observer = new ManualSlotController(this);

    static get properties() {
        return {
            label: {type: String, attribute: true},
        };
    }

    static get styles() {
        return styles;
    }

    constructor() {
        super();
        this.label = "Breadcrumbs";
    }

    render() {
        return html`
        <nav aria-label=${this.label} class="breadcrumb">
            <ol>
                ${map(Array.from(this.children), () => html`<li><slot></slot></li>`)}
            </ol>
        </nav>
    `;
    }
}

customElements.define('ilw-breadcrumbs', Breadcrumbs);
