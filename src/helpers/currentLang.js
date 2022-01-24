export default (() => {
    const currentLang = localStorage.getItem('i18nextLng');
    return currentLang === 'rw' ? 'ki' : currentLang
})();