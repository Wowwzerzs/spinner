process.stdout.write('hello from spinner2.js... \rheyyy\n');

const spinnerFrames = ["|", "/", "-", "\\", "|"];
let delay = 100;

for (let i = 0; i < spinnerFrames.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinnerFrames[i]}  `);
    if (i === spinnerFrames.length - 1) {
      process.stdout.write("\n");
    }
  }, delay);
  delay += 200;
}

/**
 * Using a For Of loop 

let i = 0;
for (const fram of spinnerFrames) {
  setTimeout(() => {
    if (i === spinnerFrames.length - 1) {
      // console.log("i is ", i);
      // console.log("fram is ", fram);
      process.stdout.write("\n");
    } else {
      i += 1;
      process.stdout.write(`\r${fram}  `);
    }
  }, delay);
  delay += 200;
}

*/