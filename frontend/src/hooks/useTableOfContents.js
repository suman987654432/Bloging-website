import { useState, useEffect, useCallback } from 'react';

export const useTableOfContents = (blog) => {
  const [tableOfContents, setTableOfContents] = useState([]);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [modifiedContent, setModifiedContent] = useState('');

  const generateTableOfContents = useCallback((content) => {
    if (!content) return { tocItems: [], modifiedHTML: '' };
    
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;
    
    const headings = tempDiv.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const tocItems = [];
    
    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      const text = heading.textContent.trim();
      
      if (text && text.length > 2) {
        const id = `heading-${index}-${text.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
        heading.id = id;
        
        tocItems.push({
          id,
          text,
          level
        });
      }
    });
    
    return { tocItems, modifiedHTML: tempDiv.innerHTML };
  }, []);

  const scrollToHeading = (headingId) => {
    const element = document.getElementById(headingId);
    if (element) {
      const offset = 100; // Offset for fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsTocOpen(false);
    }
  };

  useEffect(() => {
    if (blog && (blog.content || blog.description)) {
      const content = blog.content || blog.description;
      
      const { tocItems, modifiedHTML } = generateTableOfContents(content);
      
      if (tocItems.length > 0) {
        setTableOfContents(tocItems);
        setModifiedContent(modifiedHTML);
      } else {
        setTableOfContents([]);
        setModifiedContent(content);
      }
    }
  }, [blog, generateTableOfContents]);

  return {
    tableOfContents,
    isTocOpen,
    setIsTocOpen,
    scrollToHeading,
    modifiedContent
  };
};
   

