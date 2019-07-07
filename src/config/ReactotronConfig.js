import Reactotron from 'reactotron-react-js';

const reactotron = Reactotron.configure({ host: '192.168.1.3' }).connect();

reactotron.clear();

console.tron = reactotron;

export default reactotron;
