import React, { useEffect, useRef, useState } from 'react';
import './AlertBar.scss';
import { Link } from 'gatsby';
import { IoArrowForwardSharp } from 'react-icons/io5';

const AlertBar = ({ alertText, alertLink }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (!containerRef.current || !contentRef.current) return;

      // Get actual widths
      const containerWidth = containerRef.current.clientWidth;
      const contentWidth = contentRef.current.clientWidth;

      // Check if content overflows
      setIsOverflowing(contentWidth > containerWidth);
    };

    checkOverflow();

    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  return (
    <div className="AlertBar_container" ref={containerRef}>
      {alertLink ? (
        <>
          <Link
            to={`/${alertLink}`}
            className={`AlertBar_link ${
              isOverflowing ? 'scroll_animation' : ''
            }`}
            ref={contentRef}
          >
            <p className="AlertBar_content">
              {alertText} <IoArrowForwardSharp />
            </p>
          </Link>
          {isOverflowing && (
            <>
              <Link
                aria-hidden={true}
                to={`/${alertLink}`}
                className={`AlertBar_link ${
                  isOverflowing ? 'scroll_animation' : ''
                }`}
              >
                <p className="AlertBar_content">
                  {alertText} <IoArrowForwardSharp />
                </p>
              </Link>
              <Link
                aria-hidden={true}
                to={`/${alertLink}`}
                className={`AlertBar_link ${
                  isOverflowing ? 'scroll_animation' : ''
                }`}
              >
                <p className="AlertBar_content">
                  {alertText} <IoArrowForwardSharp />
                </p>
              </Link>
              <Link
                aria-hidden={true}
                to={`/${alertLink}`}
                className={`AlertBar_link ${
                  isOverflowing ? 'scroll_animation' : ''
                }`}
              >
                <p className="AlertBar_content">
                  {alertText} <IoArrowForwardSharp />
                </p>
              </Link>
            </>
          )}
        </>
      ) : (
        <>
          <p
            className={`AlertBar_text ${
              isOverflowing ? 'scroll_animation' : ''
            }`}
            ref={contentRef}
          >
            {alertText}
          </p>
          {isOverflowing && (
            <>
              <p
                className={`AlertBar_text ${
                  isOverflowing ? 'scroll_animation' : ''
                }`}
                ref={contentRef}
              >
                {alertText}
              </p>
              <p
                className={`AlertBar_text ${
                  isOverflowing ? 'scroll_animation' : ''
                }`}
                ref={contentRef}
              >
                {alertText}
              </p>
              <p
                className={`AlertBar_text ${
                  isOverflowing ? 'scroll_animation' : ''
                }`}
                ref={contentRef}
              >
                {alertText}
              </p>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default AlertBar;
