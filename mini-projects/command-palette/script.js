const commands = [
  { label: 'WebPrims home', url: 'https://www.webprims.com/' },
  { label: 'WebPrims GitHub', url: 'https://github.com/webprims' },
  { label: 'JavaScript examples', url: 'https://github.com/webprims/javascript-practice-examples' }
];
const dialog = document.querySelector('#palette');
const query = document.querySelector('#query');
const results = document.querySelector('#results');
const status = document.querySelector('#status');
let matches = [];
let active = 0;

function render() {
  matches = commands.filter(({ label }) => label.toLowerCase().includes(query.value.trim().toLowerCase()));
  active = 0;
  results.replaceChildren();
  matches.forEach(({ label, url }, index) => {
    const item = document.createElement('li');
    const link = document.createElement('button');
    link.type = 'button';
    link.textContent = label;
    link.addEventListener('click', () => { window.location.href = url; });
    item.append(link);
    results.append(item);
  });
  highlight();
  status.textContent = matches.length ? `${matches.length} command${matches.length === 1 ? '' : 's'} found` : 'No commands found';
}
function highlight() {
  results.querySelectorAll('button').forEach((button, index) => button.setAttribute('aria-selected', String(index === active)));
}
function openPalette() { if (dialog.open) return; query.value = ''; render(); dialog.showModal(); query.focus(); }
document.querySelector('#open').addEventListener('click', openPalette);
document.querySelector('#close').addEventListener('click', () => dialog.close());
query.addEventListener('input', render);
query.addEventListener('keydown', event => {
  if (!matches.length) return;
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault();
    active = (active + (event.key === 'ArrowDown' ? 1 : -1) + matches.length) % matches.length;
    highlight();
  } else if (event.key === 'Enter') {
    event.preventDefault();
    results.querySelectorAll('button')[active].click();
  }
});
document.addEventListener('keydown', event => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); openPalette(); }
});
