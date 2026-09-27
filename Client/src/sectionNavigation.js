// Measure layout rather than animated bounds so reveal transforms cannot
// change where an anchor lands. Keep the existing section padding/layout.
export function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (!section?.matches('main section[id]')) return false;

  let sectionTop = 0;
  for (let element = section; element; element = element.offsetParent) {
    sectionTop += element.offsetTop;
  }
  const styles = getComputedStyle(section);
  const contentTop = sectionTop + parseFloat(styles.paddingTop) + parseFloat(styles.borderTopWidth);
  const headerHeight = document.querySelector('header')?.offsetHeight ?? 0;
  const gap = window.matchMedia('(max-width: 767px)').matches ? 16 : 24;

  if (window.location.hash !== `#${sectionId}`) {
    window.history.pushState(null, '', `#${sectionId}`);
  }
  window.scrollTo({ top: Math.max(0, contentTop - headerHeight - gap), behavior: 'instant' });
  return true;
}
