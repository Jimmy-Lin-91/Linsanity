import React from 'react';
import { BsChevronRight, BsChevronDown } from 'react-icons/bs';
const Accordion = (props) => {
  const { handleClick, pane, paneStatus} = props;

  let renderChevron = () => {
    if (paneStatus) {
      return (
        <BsChevronDown className="chevron-down"/>
      )
    } else {
      return (
        <BsChevronRight className="chevron-right" />
      )
    }
  }
  return (
    <div className="accordion-item">
    <a className="accordion-button" name={pane} onClick={handleClick}>{pane}
    {renderChevron()}
    </a>
</div>
  )
}

export default Accordion;