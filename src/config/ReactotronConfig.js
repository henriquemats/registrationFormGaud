import Reactotron from 'reactotron-react-js';

const reactotron = Reactotron.configure({ host: 'your IP' }).connect();

reactotron.clear();

console.tron = reactotron;

export default reactotron;
