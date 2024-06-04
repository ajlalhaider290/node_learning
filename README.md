# node_learning
# Setting up a TypeScript Project with Express

This guide will walk you through setting up a basic TypeScript project with the Express framework.

## Prerequisites

Before starting, ensure you have the following installed:

- Node.js and npm (Node Package Manager)
- TypeScript
- Express

You can install Node.js and npm from [here](https://nodejs.org/). 

Initialize your project: npm init -y

Once Node.js is installed, you can install TypeScript and Express globally using npm:

```bash
npm install --save-dev typescript
npm i express

Create a tsconfig.json file: npx tsc --init
Add some keys in the tsconfig.json file: 
Add a script in the package.json file: "start": "tsc && node dist/index.js"

Run your application: npm start

