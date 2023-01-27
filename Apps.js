/************************* Method 1 : Render Element using plain javascript*******************************/

//This is js code to render h1 tag over root Div
/*const heading1=document.createElement("h1");
heading1.innerHTML="Hello World";
const rootDiv=document.getElementById("root");
rootDiv.append(heading1);*/

/*************************Method 2 : Render Element using react CDN*******************************/

//This is plain react code for rendering h1 tage over root element to use react need react loberary
/*const heading1=React.createElement("h1",{},"This react's first heading element");
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(heading1);*/

/************************* Method 3 : Render Element using react pacakge*******************************/

/*To use react without react CDN need to follow following steps
1.install nodejs and  npm(node package manager)
2.then init npm using npm init it will create pacakge.json
3. then install react and react dom using npm install --D react and npm install --D react-dom then node-modules and two package.lock.json created. In node-modules folder node and node-dom pacakge stored and in pacakge.lock.json files pacakge depeceies is maintained
4. To use react and react-dom package use the import statement
If we use import statement in js files then it becomes module so to call that module in jssscript need to passs type=module parameter
5.modules execute on server so to push the application on server we need bundler .parcel is bundler install it using following command
npm install parcel and installion
and after installation run it using following command
npx parcel index.html(entry point of application) => it create local server for application
parcel-cache and dist folder are created after execution of parcel
parcel cache is space for parcel and dist folder store the miniefd code of application 
 */

 import React from "react";
 import ReactDOM from "react-dom/client";

 const heading1=React.createElement("h1",{},"This is first heading element");
 const root=ReactDOM.createRoot(document.getElementById('root'));
 root.render(heading1);
 




