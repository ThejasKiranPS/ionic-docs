(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[78089],{22738:function(e,n,a){"use strict";a.r(n),a.d(n,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var t=a(22122),r=a(19756),o=(a(67294),a(3905)),i={sidebar_label:"Progressive Web Apps"},l={unversionedId:"angular/pwa",id:"angular/pwa",isDocsHomePage:!1,title:"Progressive Web Apps in Angular",description:"Making your Angular app a PWA",source:"@site/docs/angular/pwa.md",sourceDirName:"angular",slug:"/angular/pwa",permalink:"/docs/angular/pwa",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/angular/pwa.md",version:"current",sidebar_label:"Progressive Web Apps",frontMatter:{sidebar_label:"Progressive Web Apps"},sidebar:"docs",previous:{title:"Angular Performance",permalink:"/docs/angular/performance"},next:{title:"Ionic React",permalink:"/docs/react"}},s=[{value:"Making your Angular app a PWA",id:"making-your-angular-app-a-pwa",children:[]},{value:"Service Worker configuration",id:"service-worker-configuration",children:[]},{value:"Deploying",id:"deploying",children:[{value:"Firebase",id:"firebase",children:[]}]}],p={toc:s};function u(e){var n=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"making-your-angular-app-a-pwa"},"Making your Angular app a PWA"),(0,o.kt)("p",null,"The two main requirements of a PWA are a ",(0,o.kt)("a",{href:"https://developers.google.com/web/fundamentals/primers/service-workers/",target:"_blank"},"Service Worker")," and a ",(0,o.kt)("a",{href:"https://developers.google.com/web/fundamentals/web-app-manifest/",target:"_blank"},"Web Manifest"),". While it's possible to add both of these to an app manually, the Angular team has an ",(0,o.kt)("inlineCode",{parentName:"p"},"@angular/pwa")," package that can be used to automate this."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"@angular/pwa")," package will automatically add a service worker and an app manifest to the app.\nTo add this package to the app, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ng add @angular/pwa\n")),(0,o.kt)("p",null,"Once this package has been added run ",(0,o.kt)("inlineCode",{parentName:"p"},"ionic build --prod")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"www")," directory will be ready to deploy as a PWA."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"@angular/pwa")," package comes with the Angular logo for the app icons. Be sure to update the manifest to use the correct app name and also replace the icons.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Features like Service Workers and many JavaScript APIs (such as geolocation) require the app be hosted in a secure context. When deploying an app through a hosting service, be aware that HTTPS will be required to take full advantage of Service Workers.")),(0,o.kt)("h2",{id:"service-worker-configuration"},"Service Worker configuration"),(0,o.kt)("p",null,"After ",(0,o.kt)("inlineCode",{parentName:"p"},"@angular/pwa")," has been added, a new ",(0,o.kt)("inlineCode",{parentName:"p"},"ngsw-config.json")," file will be created at the root of the project. This file is responsible for configuring how Angular's service worker mechanism will handle caching assets. By default, the following will be provided:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "$schema": "./node_modules/@angular/service-worker/config/schema.json",\n  "index": "/index.html",\n  "assetGroups": [\n    {\n      "name": "app",\n      "installMode": "prefetch",\n      "resources": {\n        "files": [\n          "/favicon.ico",\n          "/index.html",\n          "/*.css",\n          "/*.js"\n        ]\n      }\n    }, {\n      "name": "assets",\n      "installMode": "lazy",\n      "updateMode": "prefetch",\n      "resources": {\n        "files": [\n          "/assets/**",\n          "/*.(eot|svg|cur|jpg|png|webp|gif|otf|ttf|woff|woff2|ani)"\n        ]\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"There are two sections in here, one for app specific resources (JS, CSS, HTML) and assets the app will load on demand. Depending on your app, these options can be customized. For a more detailed guide, read ",(0,o.kt)("a",{parentName:"p",href:"https://angular.io/guide/service-worker-config"},"the official guide from the Angular Team.")),(0,o.kt)("h2",{id:"deploying"},"Deploying"),(0,o.kt)("h3",{id:"firebase"},"Firebase"),(0,o.kt)("p",null,"Firebase hosting provides many benefits for Progressive Web Apps, including fast response times thanks to CDNs, HTTPS enabled by default, and support for ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.googleblog.com/2016/09/http2-comes-to-firebase-hosting.html"},"HTTP2 push"),"."),(0,o.kt)("p",null,"First, if not already available, ",(0,o.kt)("a",{parentName:"p",href:"https://console.firebase.google.com"},"create the project")," in Firebase."),(0,o.kt)("p",null,"Next, in a Terminal, install the Firebase CLI:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ npm install -g firebase-tools\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: If it's the first time you use firebase-tools, login to your Google account with ",(0,o.kt)("inlineCode",{parentName:"p"},"firebase login")," command.")),(0,o.kt)("p",null,"With the Firebase CLI installed, run ",(0,o.kt)("inlineCode",{parentName:"p"},"firebase init")," within your Ionic project. The CLI prompts:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'"Which Firebase CLI features do you want to set up for this folder?"'),'  Choose "Hosting: Configure and deploy Firebase Hosting sites."'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'"Select a default Firebase project for this directory:"')," Choose the project you created on the Firebase website."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'"What do you want to use as your public directory?"'),' Enter "www".'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Note: Answering these next two questions will ensure that routing, hard reload, and deep linking work in the app:")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'Configure as a single-page app (rewrite all urls to /index.html)?"'),' Enter "Yes".'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},'"File www/index.html already exists. Overwrite?"'),' Enter "No".'),(0,o.kt)("p",null,"A ",(0,o.kt)("inlineCode",{parentName:"p"},"firebase.json")," config file is generated, configuring the app for deployment."),(0,o.kt)("p",null,"The last thing needed is to make sure caching headers are being set correctly. To do this, add a ",(0,o.kt)("inlineCode",{parentName:"p"},"headers")," snippet to the ",(0,o.kt)("inlineCode",{parentName:"p"},"firebase.json")," file. The complete ",(0,o.kt)("inlineCode",{parentName:"p"},"firebase.json")," looks like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hosting": {\n    "public": "www",\n    "ignore": [\n      "firebase.json",\n      "**/.*",\n      "**/node_modules/**"\n    ],\n    "rewrites": [\n      {\n        "source": "**",\n        "destination": "/index.html"\n      }\n    ],\n    "headers": [\n      {\n        "source": "/build/app/**",\n        "headers": [\n          {\n            "key": "Cache-Control",\n            "value": "public, max-age=31536000"\n          }\n        ]\n      },\n      {\n        "source": "ngsw-worker.js",\n        "headers": [\n          {\n            "key": "Cache-Control",\n            "value": "no-cache"\n          }\n        ]\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"For more information about the ",(0,o.kt)("inlineCode",{parentName:"p"},"firebase.json")," properties, see the ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/hosting/full-config#section-firebase-json"},"Firebase documentation"),"."),(0,o.kt)("p",null,"Next, build an optimized version of the app by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ ionic build --prod\n")),(0,o.kt)("p",null,"Last, deploy the app by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ firebase deploy\n")),(0,o.kt)("p",null,"After this completes, the app will be live."))}u.isMDXComponent=!0}}]);