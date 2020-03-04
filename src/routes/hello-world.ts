import HelloWorldComponent from '../components/hello-world/hello-world.component';
import HeaderComponent from '../components/header/header.component';
import _ from 'lodash';

const header = new HeaderComponent;
header.render(_.upperFirst('hello world page'));
const helloWorld = new HelloWorldComponent;
helloWorld.render();