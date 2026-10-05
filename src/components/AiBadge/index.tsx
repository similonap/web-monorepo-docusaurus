import React from 'react';
import styles from './styles.module.css';

type AiBadgeProps = {
  allowed: boolean;
  label?: string;
};

export default function AiBadge({allowed, label}: AiBadgeProps) {
  const text = label ?? (allowed ? 'AI toegestaan' : 'Geen AI');
  return (
    <span className={`${styles.badge} ${allowed ? styles.allowed : styles.forbidden}`}>
      <span className={styles.dot} aria-hidden="true" />
      {text}
    </span>
  );
}
