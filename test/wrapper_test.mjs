import { MessageQueue } from "jswrapper"

async function test() {
    console.log("test wrapper is starting")
    var wrapperSrv = new MessageQueue(process.env.WRAPPER_SERVER);

    console.log("pop message is ", await wrapperSrv.pop());
    wrapperSrv.monitor((message, m) => {
        console.log(message);
        m.cancel();
    }, console.log);
}

test();