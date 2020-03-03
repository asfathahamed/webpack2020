import HoneyComponent from '../components/hello-world/hello-world.component';
import HeaderComponent from '../components/header/header.component';
import _ from 'lodash';

const header = new HeaderComponent;
header.render(_.upperFirst('honey page'));
const honey = new HoneyComponent;
honey.render();