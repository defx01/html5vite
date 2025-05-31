document.addEventListener('DOMContentLoaded', () => {
    // cookie confirm
    if(!localStorage.getItem('cookieConfirm')){
        let $cookieBlock = document.querySelector('.cookie-block');
        $cookieBlock.style.display = 'block';
        $cookieBlock.querySelector('button').addEventListener('click', () => {
            localStorage.setItem('cookieConfirm', 'on');
            $cookieBlock.style.display = 'none';
        });
    }
});