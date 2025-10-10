
const root = document.documentElement;
const savedAccent = localStorage.getItem('accent');
if (savedAccent) {
  root.style.setProperty('--accent', savedAccent);
  const pickerInit = document.getElementById('accentPicker');
  if (pickerInit) pickerInit.value = savedAccent;
}

// Wire up preset swatches
document.querySelectorAll('.swatch').forEach(btn => {
  // style the swatch using its data attribute
  btn.style.setProperty('--swatch-colour', btn.dataset.accent);
  btn.addEventListener('click', () => {
    const colour = btn.dataset.accent;
    root.style.setProperty('--accent', colour);
    localStorage.setItem('accent', colour);
    const picker = document.getElementById('accentPicker');
    if (picker) picker.value = colour;
  });
});

// Custom colour picker
const picker = document.getElementById('accentPicker');
picker?.addEventListener('input', e => {
  const colour = e.target.value;
  root.style.setProperty('--accent', colour);
  localStorage.setItem('accent', colour);
});

/* --------------------------------------------
   Collapsible sections (h3 toggles)
   - Click or press Enter/Space on a heading
   - Hides content up to the next h3
   - ARIA: uses aria-expanded on <h3>
   -------------------------------------------- */

const headings = Array.from(document.querySelectorAll('main h3'));

function getSectionContent(h3) {
  const bits = [];
  let n = h3.nextElementSibling;
  while (n && n.tagName !== 'H3') {
    bits.push(n);
    n = n.nextElementSibling;
  }
  return bits;
}

function setSectionState(h3, expanded) {
  h3.setAttribute('aria-expanded', String(expanded));
  const content = getSectionContent(h3);
  content.forEach(el => el.classList.toggle('is-hidden', !expanded));
}

// Enhance each h3
headings.forEach(h3 => {
  // Make focusable for keyboard users
  h3.tabIndex = 0;
  h3.setAttribute('role', 'button');
  h3.setAttribute('aria-expanded', 'true'); // start expanded

  const toggle = () => {
    const expanded = h3.getAttribute('aria-expanded') === 'true';
    setSectionState(h3, !expanded);
  };

  h3.addEventListener('click', toggle);
  h3.addEventListener('keydown', e => {
    // Support Enter and Space (Space has browser differences)
    if (e.key === 'Enter' || e.code === 'Space' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });
});

// Global controls
document.getElementById('collapseAll')?.addEventListener('click', () => {
  headings.forEach(h => setSectionState(h, false));
});
document.getElementById('expandAll')?.addEventListener('click', () => {
  headings.forEach(h => setSectionState(h, true));
});
