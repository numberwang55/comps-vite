import { useState } from "react"
import { GoChevronDown, GoChevronUp } from "react-icons/go";

export default function Accordion({ items }) {

  const [expandedIndex, setExpandedIndex] = useState(-1)
  const handleClick = (index) => {
    if (index === expandedIndex) {
      setExpandedIndex(-1)
    } else {
      setExpandedIndex(index)
    }
  }

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex

    const icon = <span className="text-2xl">{isExpanded ? <GoChevronDown/> : <GoChevronUp/>}</span>

    return (
      <div key={index}>
        <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
          {item.label}
          {icon}
          </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    )
  })
  return (
    <div className="border-x border-t rounded">{renderedItems}</div>
  )
}