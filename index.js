'use strict';

import core from '@actions/core';
import github from '@actions/github';

async function main() {
  try {
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
  } catch (error) {
    core.setFailed(error.message);
  }
  try {
    console.log('Node Process Running from:', process.cwd());
  } catch (err) {
    console.error('Error getting process.cwd:', err);
  }
  try {
    console.log('All Envs', process.env);
  } catch (err) {
    console.error('Error getting process.env:', err);
  }
  try {
    console.log(`__dirname js var: ${__dirname}`);
  } catch (err) {
    console.error('Error getting __dirname:', err);
  }
}

main();
