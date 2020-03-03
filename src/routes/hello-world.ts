import HelloWorldComponent from '../components/hello-world/hello-world.component';
import HeaderComponent from '../components/header/header.component';
import _ from 'lodash';

const header = new HeaderComponent;
header.render(_.upperFirst('Hello World Page'));
const helloWorld = new HelloWorldComponent;
helloWorld.render();