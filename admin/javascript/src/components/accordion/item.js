import React from 'react';
import SilverStripeComponent from 'silverstripe-component';

class AccordionItem extends SilverStripeComponent {
  render() {
    let className = `list-group-item ${this.props.className}`;
    return (
      <a tabIndex="0" className={className}>
        {this.props.children}
      </a>
    );
  }
}
export default AccordionItem;
