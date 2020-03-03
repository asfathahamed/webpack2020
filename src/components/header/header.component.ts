class HeaderComponent {
    render(str: string) {
        const header = document.createElement('h1');
        header.textContent = str;

        const body = document.querySelector('body');
        body.appendChild(header);
    }
}

export default HeaderComponent;