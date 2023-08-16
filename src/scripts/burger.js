export const burger = () => {
    const container = document.querySelector('.mobile_nav');
    if (!container) return;
    const button = container.querySelector('.burger');
    const menu = container.querySelector('.hide_nav');

    button.addEventListener('click', () => {
        button.classList.toggle('active');
        menu.classList.toggle('active');
        document.body.classList.toggle('active');
    });
}