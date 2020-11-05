#! /usr/bin/env node

const cli = () => {
  require('yargs/yargs')(process.argv.slice(2))
    .strict(true)
    .command({
      command: 'throw-error',
      handler: async (argv) => {
        throw new Error("Handler error");
      }
    }).fail((msg, err, yargs) => {
      yargs.showHelp();
      if (msg) {
        console.error(`Error message: ${msg}`);
      }
      if (err) {
        console.error(err);
      }
    }).argv
}
try {
  cli();
} catch (err) {
  console.log("==== Uncaught error ====");
  console.log(err);
}
