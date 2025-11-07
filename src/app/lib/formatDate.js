// src/lib/formatDate.js
const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];

// Accepts 'YYYY-MM-DD'
export function formatDateUTC(isoDate) {
  if (!isoDate) return '';
  const [y, m, d] = isoDate.split('-').map(Number);
  const dt = new Date(Date.UTC(y, (m || 1) - 1, d || 1));
  if (Number.isNaN(dt.getTime())) return String(isoDate);
  return `${MONTHS[dt.getUTCMonth()]} ${dt.getUTCDate()}, ${dt.getUTCFullYear()}`;
}
