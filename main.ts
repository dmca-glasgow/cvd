import './styles/styles.scss'
import './styles/themes.scss'

const $doc = document.documentElement
const $main = document.querySelector<HTMLElement>('main')!
const $cvd = document.querySelector<HTMLSelectElement>('#cvd')!
const $contrast = document.querySelector<HTMLInputElement>('#contrast')!
const $darkMode = document.querySelector<HTMLInputElement>('#dark-mode')!
const $background = document.querySelector<HTMLSelectElement>('#background')!
const $foreground = document.querySelector<HTMLSelectElement>('#foreground')!

$cvd.addEventListener('change', (event) => {
  if (event.target instanceof HTMLSelectElement) {
    const value = event.target.value
    const filter = value === 'none' ? 'none' : `url(#${value})`
    $main.style.setProperty('filter', filter);
  }
});

$contrast.addEventListener('input', (event) => {
  if (event.target instanceof HTMLInputElement) {
    $doc.style.setProperty('--contrast', event.target.value);
  }
});

$darkMode.addEventListener('change', (event) => {
  if (event.target instanceof HTMLInputElement) {
    if (event.target.checked) {
      $doc.classList.add('dark-mode')
      $doc.style.setProperty('--background', '#000');
      $doc.style.setProperty('--foreground', '#fff');
      $background.value = '#fff'
      $foreground.value = '#fff'
    } else {
      $doc.classList.remove('dark-mode')
      $doc.style.setProperty('--background', '#fff');
      $doc.style.setProperty('--foreground', '#000');
      $background.value = '#fff'
      $foreground.value = '#fff'
    }
  }
});

$background.addEventListener('change', (event) => {
  if (event.target instanceof HTMLSelectElement) {
    $doc.style.setProperty('--background', event.target.value);
  }
});

$foreground.addEventListener('change', (event) => {
  if (event.target instanceof HTMLSelectElement) {
    $doc.style.setProperty('--foreground', event.target.value);
  }
});
