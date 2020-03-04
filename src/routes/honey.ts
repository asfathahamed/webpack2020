import HeaderComponent from '../components/header/header.component';
import HoneyComponent from '../components/honey/honey.component';
import _ from 'lodash';

const header = new HeaderComponent;
header.render(_.upperFirst('honey page'));
const honey = new HoneyComponent;
honey.render();