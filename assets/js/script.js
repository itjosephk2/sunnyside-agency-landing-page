let isMobileNavOpen = false;
document.getElementById('hamburger').onclick = function(){
  if (!isMobileNavOpen) {
    console.log('on');
    document.getElementById('mobile-nav-tab').classList.remove('hidden');
    document.getElementById('mobile-nav-box').classList.remove('hidden');
    document.getElementById('header-title').classList.add('hidden');
    document.getElementById('header-arrow').classList.add('hidden');
    isMobileNavOpen = true;
  }
  else if (isMobileNavOpen) {
    console.log('off');
    document.getElementById('mobile-nav-tab').classList.add('hidden');
    document.getElementById('mobile-nav-box').classList.add('hidden');
    document.getElementById('header-title').classList.remove('hidden');
    document.getElementById('header-arrow').classList.remove('hidden');
    isMobileNavOpen = false;
  }
};
