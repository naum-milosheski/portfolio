'use client';

import { useEffect, useRef, useState } from 'react';

interface SelectProps {
  id?: string;
  name: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

const chevron = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export default function Select({
  id,
  name,
  value,
  options,
  onChange,
}: SelectProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(() =>
    Math.max(0, options.indexOf(value))
  );
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handle = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [open]);

  // Keep highlighted option in view
  useEffect(() => {
    if (!open || !listRef.current) return;
    const el = listRef.current.children[active] as HTMLElement | undefined;
    el?.scrollIntoView({ block: 'nearest' });
  }, [open, active]);

  const select = (option: string) => {
    onChange(option);
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!open) {
          setOpen(true);
          break;
        }
        setActive((i) => Math.min(i + 1, options.length - 1));
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (!open) {
          setOpen(true);
          break;
        }
        setActive((i) => Math.max(i - 1, 0));
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (open) {
          select(options[active]);
        } else {
          setOpen(true);
        }
        break;
      case 'Escape':
        setOpen(false);
        break;
      case 'Tab':
        setOpen(false);
        break;
    }
  };

  return (
    <div className="select" ref={rootRef}>
      {/* Native value submitted with the form */}
      <input type="hidden" name={name} value={value} />
      <button
        type="button"
        id={id}
        className="select-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => {
          setActive(Math.max(0, options.indexOf(value)));
          setOpen((o) => !o);
        }}
        onKeyDown={handleKeyDown}
      >
        <span>{value}</span>
        <span className={`select-chevron${open ? ' open' : ''}`}>
          {chevron}
        </span>
      </button>
      {open && (
        <ul className="select-menu" role="listbox" ref={listRef} tabIndex={-1}>
          {options.map((option, i) => (
            <li
              key={option}
              role="option"
              aria-selected={option === value}
              className={`select-option${i === active ? ' active' : ''}${
                option === value ? ' selected' : ''
              }`}
              onMouseEnter={() => setActive(i)}
              onClick={() => select(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
