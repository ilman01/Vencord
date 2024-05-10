const { exec } = require('child_process');

function runCommand(command) {
  return new Promise((resolve, reject) => {
    const child = exec(command);

    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);

    child.on('error', (error) => {
      console.error(`Error executing command: ${error.message}`);
      resolve(); // Resolve to continue execution
    });

    child.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        console.error(`Command '${command}' exited with code ${code}`);
        resolve(); // Resolve to continue execution
      }
    });
  });
}


async function main() {
  await runCommand("git pull origin main");
  await runCommand("npm i -g pnpm@9.1.0");
  await runCommand("pnpm i");
  await runCommand("pnpm build");
  await runCommand("pnpm inject");
}

main();