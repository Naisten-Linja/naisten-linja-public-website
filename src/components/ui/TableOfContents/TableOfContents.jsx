import React, { useEffect, useState } from 'react';
import Container from '../utils/Container/Container';
import './TableOfContents.scss';
import { FaArrowDown } from 'react-icons/fa6';

const TableOfContents = () => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Find all h2 elements on the page
    const h2Elements = Array.from(document.querySelectorAll('h2'));

    // Map over each h2 element to store its text content and id, remove first as it is the h2 of the TOC
    const headingsData = h2Elements.slice(1).map((element, index) => {
      // Ensure the element has a unique ID for anchoring
      const id = element.id || `heading-${index}`;
      element.id = id;

      return {
        id,
        text: element.innerText || element.textContent,
      };
    });

    // Set the headings state with extracted data
    setHeadings(headingsData);
  }, []);

  return (
    <div className="table-of-contents">
      <Container theme={'ruis'} background={true}>
        <h2>Tällä sivulla</h2>
        <ul>
          {headings.map((heading) => (
            <li key={heading.id}>
              <FaArrowDown /> <a href={`#${heading.id}`}>{heading.text}</a>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default TableOfContents;
