import './exit';
import config from './config';

console.log(process.env.test);

process.on("SIGINT", function () {
  //graceful shutdown
  process.exit();
});