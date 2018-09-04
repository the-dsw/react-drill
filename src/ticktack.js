import { TimeActions } from "./flux";

setInterval(() => {
  TimeActions.addTime.defer(`Il est ${new Date()}`);
}, 1000);
