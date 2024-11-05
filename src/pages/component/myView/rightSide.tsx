import Image from "next/image";
import React, { useState, useRef } from "react";
import { v4 as uuidv4 } from "uuid"; // Generate unique keys (optional)
import Section1 from "./section1";
import Section2 from "./section2";
import Section3 from "./section3";
import Analize from "./analize";
import News from "./news";
import Calendar from "./calendar";
import Training from "./training";
import New from "./new";
// Section type to handle drag and drop reordering
type SectionType = {
  id: string;
  component: JSX.Element;
};

// Function to handle drag and drop
export default function RighSide() {
  const [sections, setSections] = useState<SectionType[]>([
    {
      id: uuidv4(),
      component: <News />,
    },
    {
      id: uuidv4(),
      component: <Calendar />,
    },
    {
      id: uuidv4(),
      component: <Training />,
    },
    {
      id: uuidv4(),
      component: <New />,
    },
  ]);
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);
  const handleDragStart = (index: number) => {
    dragItem.current = index;
  };
  const handleDragEnter = (index: number) => {
    dragOverItem.current = index;
  };
  const handleDragEnd = () => {
    const _sections = [...sections];
    const draggedItemContent = _sections[dragItem.current!];

    // Remove the dragged item
    _sections.splice(dragItem.current!, 1);
    // Add it at the drag over location
    _sections.splice(dragOverItem.current!, 0, draggedItemContent);

    setSections(_sections);
    dragItem.current = null;
    dragOverItem.current = null;
  };

  return (
    <div>
      {sections.map((section, index) => (
        <div
          key={section.id}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragEnter={() => handleDragEnter(index)}
          onDragEnd={handleDragEnd}
        >
          {section.component}
        </div>
      ))}
    </div>
  );
}
