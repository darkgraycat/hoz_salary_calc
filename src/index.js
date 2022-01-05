const loadScript = (path) => {
  const element = document.createElement('script');
  element.setAttribute('src', 'src/' + path);
  document.head.appendChild(element);
  console.log('%c%s', 'color: lime', `script ${path} loaded`);
  return new Promise(resolve => element.onload = resolve);
}

const init = async () => {
  await loadScript('components/basic.js');
  await loadScript('components/add.js');
  await loadScript('components/info.js');
  await loadScript('components/input.js');
  await loadScript('calc.js');
  await loadScript('app.js');
}

window.addEventListener('load', init);
