import Honey from '../../assets/images/honey.png';
import './honey.component.less';

class HoneyComponent {
    render() {
        const img = document.createElement('img');
        img.alt = 'Honey';
        img.src = Honey;
        img.classList.add('honey-image');

        const body = document.querySelector('body');
        body.appendChild(img);
    }
}

export default HoneyComponent;