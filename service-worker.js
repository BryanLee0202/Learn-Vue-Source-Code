/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "476f81f01cbd0139c2b6be7e9be0ad60"
  },
  {
    "url": "assets/BuiltInComponents/1.gif",
    "revision": "6ca41eec5e31e3dfe02deb623d77e40a"
  },
  {
    "url": "assets/BuiltInComponents/2.gif",
    "revision": "f2c26398e59654d015df555d73d7e567"
  },
  {
    "url": "assets/BuiltInComponents/3.png",
    "revision": "bfadecb3205d7747a74b6ca40c700460"
  },
  {
    "url": "assets/BuiltInComponents/4.gif",
    "revision": "97ae2a0a75b357bb7aafacd18f8f4ba9"
  },
  {
    "url": "assets/complie/1.png",
    "revision": "f0570125eb8822928478517981b11731"
  },
  {
    "url": "assets/complie/2.png",
    "revision": "5596631afab5bd42ff54308ab5caf407"
  },
  {
    "url": "assets/complie/3.png",
    "revision": "15d9566b1b67acf63ce0a77bd5fc8c15"
  },
  {
    "url": "assets/complie/4.png",
    "revision": "16462ada9bae217a77c6a50eff566ec2"
  },
  {
    "url": "assets/complie/5.png",
    "revision": "8af3217e7f462450e406a466cf3c98a3"
  },
  {
    "url": "assets/complie/6.png",
    "revision": "b5792c464900e4fdf5f626688d79b61a"
  },
  {
    "url": "assets/complie/7.png",
    "revision": "6ca1dbf075647915f7976acf72f302b2"
  },
  {
    "url": "assets/complie/8.jpg",
    "revision": "ad277be00d14d90a50e064aedae2cd4a"
  },
  {
    "url": "assets/css/0.styles.da44ac08.css",
    "revision": "778def17f2559d3dfaa4e318f93777b8"
  },
  {
    "url": "assets/filter/1.jpg",
    "revision": "db8412c9eb63dba2fc639ed9a037368a"
  },
  {
    "url": "assets/filter/2.jpg",
    "revision": "8743140ff4a6977c0944da8f530cbb39"
  },
  {
    "url": "assets/filter/3.jpg",
    "revision": "ec8d7d0370309c5bb64bb6f9eae6dff9"
  },
  {
    "url": "assets/filter/4.jpg",
    "revision": "8fba6173e1aa83a465a8120d3f3a0dfa"
  },
  {
    "url": "assets/img/1.4fa9d829.png",
    "revision": "4fa9d829aab20d4a0ab50573afa5ca39"
  },
  {
    "url": "assets/img/1.6ca41eec.gif",
    "revision": "6ca41eec5e31e3dfe02deb623d77e40a"
  },
  {
    "url": "assets/img/1.6e1e57be.jpg",
    "revision": "6e1e57be4ac7569b66bc8e3ff85b4c87"
  },
  {
    "url": "assets/img/1.86404441.png",
    "revision": "8640444157c33373fc96f4851b7b2edc"
  },
  {
    "url": "assets/img/1.a052465d.png",
    "revision": "a052465d12384c5358090501a832312d"
  },
  {
    "url": "assets/img/1.db8412c9.jpg",
    "revision": "db8412c9eb63dba2fc639ed9a037368a"
  },
  {
    "url": "assets/img/1.ec40be4a.jpg",
    "revision": "ec40be4a11d550dfeebc4385347ed132"
  },
  {
    "url": "assets/img/1.f0570125.png",
    "revision": "f0570125eb8822928478517981b11731"
  },
  {
    "url": "assets/img/10.cf98adc0.png",
    "revision": "cf98adc09dfd3eb21e6f13fb084df9d7"
  },
  {
    "url": "assets/img/11.2ddb5ee5.png",
    "revision": "2ddb5ee5e7f7f19bf77f75abdd62bf56"
  },
  {
    "url": "assets/img/12.bace2f7f.png",
    "revision": "bace2f7fb11962cc182b80f0eefb06e4"
  },
  {
    "url": "assets/img/13.98dbc208.png",
    "revision": "98dbc2082450bee66b7b3345d3906356"
  },
  {
    "url": "assets/img/14.18c1c6dd.png",
    "revision": "18c1c6ddc16ffbe377e4218cb17a59ab"
  },
  {
    "url": "assets/img/15.e9bdf5c1.png",
    "revision": "e9bdf5c1958f766c3d7be6cb48e4c169"
  },
  {
    "url": "assets/img/2.02d5c7b1.png",
    "revision": "02d5c7b1930a1238a9bfd814c11c07cb"
  },
  {
    "url": "assets/img/2.3828fb66.png",
    "revision": "3828fb66a442259f9cb671e991ea8487"
  },
  {
    "url": "assets/img/2.5596631a.png",
    "revision": "5596631afab5bd42ff54308ab5caf407"
  },
  {
    "url": "assets/img/2.8743140f.jpg",
    "revision": "8743140ff4a6977c0944da8f530cbb39"
  },
  {
    "url": "assets/img/2.b446ab83.png",
    "revision": "b446ab834db2822c6bf817be835b2ef8"
  },
  {
    "url": "assets/img/2.f2c26398.gif",
    "revision": "f2c26398e59654d015df555d73d7e567"
  },
  {
    "url": "assets/img/3.0b99330d.jpg",
    "revision": "0b99330df8a6e8393ee0f89953df79d0"
  },
  {
    "url": "assets/img/3.15d9566b.png",
    "revision": "15d9566b1b67acf63ce0a77bd5fc8c15"
  },
  {
    "url": "assets/img/3.7b0442aa.png",
    "revision": "7b0442aa3cd674f486654c33280ecdfa"
  },
  {
    "url": "assets/img/3.8d0dc6f5.png",
    "revision": "8d0dc6f523c37d116de241d61de30b3d"
  },
  {
    "url": "assets/img/3.bfadecb3.png",
    "revision": "bfadecb3205d7747a74b6ca40c700460"
  },
  {
    "url": "assets/img/3.ec8d7d03.jpg",
    "revision": "ec8d7d0370309c5bb64bb6f9eae6dff9"
  },
  {
    "url": "assets/img/4.16462ada.png",
    "revision": "16462ada9bae217a77c6a50eff566ec2"
  },
  {
    "url": "assets/img/4.6a76bb54.png",
    "revision": "6a76bb54293d6c1c87da2c215ced104e"
  },
  {
    "url": "assets/img/4.8fba6173.jpg",
    "revision": "8fba6173e1aa83a465a8120d3f3a0dfa"
  },
  {
    "url": "assets/img/4.97ae2a0a.gif",
    "revision": "97ae2a0a75b357bb7aafacd18f8f4ba9"
  },
  {
    "url": "assets/img/4.cb62f1aa.png",
    "revision": "cb62f1aa1a4d26cea40592798224143f"
  },
  {
    "url": "assets/img/5.bcb4dcee.png",
    "revision": "bcb4dceea98b8c1f67dcfcd08f627824"
  },
  {
    "url": "assets/img/5.e43324ab.png",
    "revision": "e43324aba93e61f03b12815fffa57c1e"
  },
  {
    "url": "assets/img/6.4c45da1c.png",
    "revision": "4c45da1c38991ee2838dbf54b0679d42"
  },
  {
    "url": "assets/img/6.b9621b4d.png",
    "revision": "b9621b4d74ba20cd0d8f46d361f75afb"
  },
  {
    "url": "assets/img/7.057d7609.jpg",
    "revision": "057d76096455fb37aba585c4f4e3fe17"
  },
  {
    "url": "assets/img/7.6ca1dbf0.png",
    "revision": "6ca1dbf075647915f7976acf72f302b2"
  },
  {
    "url": "assets/img/7.810540a5.png",
    "revision": "810540a5ea3d36ba9b8525b05c793fb3"
  },
  {
    "url": "assets/img/8.ad277be0.jpg",
    "revision": "ad277be00d14d90a50e064aedae2cd4a"
  },
  {
    "url": "assets/img/8.e4c85c40.png",
    "revision": "e4c85c40d285e1c23b9669d5cccf9c31"
  },
  {
    "url": "assets/img/9.e017b452.png",
    "revision": "e017b45275be5239fb59ba4e6e12cda9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/instanceMethods/1.jpg",
    "revision": "ec40be4a11d550dfeebc4385347ed132"
  },
  {
    "url": "assets/js/10.36d9c362.js",
    "revision": "eb52db43ebc1456e80a873b17813bc7c"
  },
  {
    "url": "assets/js/11.91d25394.js",
    "revision": "752849c955f6cdb69e36231b199a9ab9"
  },
  {
    "url": "assets/js/12.1dd362fa.js",
    "revision": "e24f8da3549494faf575cdd6e589cf0b"
  },
  {
    "url": "assets/js/13.c630ad97.js",
    "revision": "a043e34969f3f55ae89ffc2082dea50d"
  },
  {
    "url": "assets/js/14.9fbaa7c8.js",
    "revision": "7a176ecc205d1ad53175b37ca5ed5065"
  },
  {
    "url": "assets/js/15.40daa7ae.js",
    "revision": "979abd109367b51513f06dab09efece8"
  },
  {
    "url": "assets/js/16.68c5dda1.js",
    "revision": "346042f88fa0276c3361809959e3b92a"
  },
  {
    "url": "assets/js/17.cddfe4f0.js",
    "revision": "52954c65ac3d04b4437288fda9b96b7e"
  },
  {
    "url": "assets/js/18.a67af78b.js",
    "revision": "6fe2f9b52f9b4835846bf7e82f9e1afe"
  },
  {
    "url": "assets/js/19.2e439a2e.js",
    "revision": "dcee85f7341fe5f3cc6f78cda50dc694"
  },
  {
    "url": "assets/js/2.d9c0e138.js",
    "revision": "dd90ec8289f9132c41fb749a2e7f7121"
  },
  {
    "url": "assets/js/20.09867436.js",
    "revision": "20ddf014fdbf055099b22fc2e84716cd"
  },
  {
    "url": "assets/js/21.8358a507.js",
    "revision": "6e56805198bdf2e083baa0642230d6de"
  },
  {
    "url": "assets/js/22.8f35d997.js",
    "revision": "2585ad1a6b0426d11110765ff79ae5fe"
  },
  {
    "url": "assets/js/23.bf5ecc3a.js",
    "revision": "9e254cd521fc0d6ba168823531ca2a25"
  },
  {
    "url": "assets/js/24.3a7aecf5.js",
    "revision": "72597b3dfe9a111664a7437b46a0d182"
  },
  {
    "url": "assets/js/25.db432844.js",
    "revision": "9e44b5bf5c1c68579f9b93a1546887de"
  },
  {
    "url": "assets/js/26.876bea85.js",
    "revision": "9631498104308ce01f026c9de56b291f"
  },
  {
    "url": "assets/js/27.c40a146c.js",
    "revision": "7022cfa8231862432b4c883b68989354"
  },
  {
    "url": "assets/js/28.6965b7a8.js",
    "revision": "246cb1af3b5e4ac5aa8777d4958774d5"
  },
  {
    "url": "assets/js/29.2f030ec7.js",
    "revision": "e1f2c1c9dfd7f78c94322e9848788912"
  },
  {
    "url": "assets/js/3.758c2b0e.js",
    "revision": "b81108441211d7adcee51fe92e191896"
  },
  {
    "url": "assets/js/30.05a886e7.js",
    "revision": "a133c679a1873ce88de083e1f20b6e61"
  },
  {
    "url": "assets/js/31.10e0ea30.js",
    "revision": "81e234204723f26aec12e9b8abd1e718"
  },
  {
    "url": "assets/js/32.4a63b895.js",
    "revision": "ba630302683fddd25b00b9c3112f3c02"
  },
  {
    "url": "assets/js/33.81082a81.js",
    "revision": "17da62dd1fbc210285a5cff8799c3ff5"
  },
  {
    "url": "assets/js/34.32326404.js",
    "revision": "b19d57aa873179666c307cd04f927708"
  },
  {
    "url": "assets/js/35.4cf51e65.js",
    "revision": "9dbf927c359f2f3f1946754a4dd0664d"
  },
  {
    "url": "assets/js/36.74b90e77.js",
    "revision": "0b793bded5e6e6f3b0ee9fe2ddef024e"
  },
  {
    "url": "assets/js/37.dcadd65c.js",
    "revision": "565cd76d3ab6dcb97aa22c06ab3ae799"
  },
  {
    "url": "assets/js/38.6d486bd7.js",
    "revision": "13a8c677abb5f301795f2eba8bac7725"
  },
  {
    "url": "assets/js/39.1f0ac4e7.js",
    "revision": "61701246c31dbba42d921a2ac3c4845f"
  },
  {
    "url": "assets/js/4.2a85900e.js",
    "revision": "fec5f7b525a0293782e6d4719f39a53f"
  },
  {
    "url": "assets/js/40.b6ca6897.js",
    "revision": "c0f773a7c37d8a399626e778896705b7"
  },
  {
    "url": "assets/js/5.d489cdd0.js",
    "revision": "da323e8dbdbb3d2d81c0c46ffdadfc5a"
  },
  {
    "url": "assets/js/6.a4c68a5e.js",
    "revision": "fce2084f6ca268ff964aba6abcd375ea"
  },
  {
    "url": "assets/js/7.a9b0c1aa.js",
    "revision": "4cb3f3efd87cd4b9ced34609b70c46ee"
  },
  {
    "url": "assets/js/8.aebbe207.js",
    "revision": "118a5f1f427a0aa1ace995e6634884e6"
  },
  {
    "url": "assets/js/9.1851f97c.js",
    "revision": "892e38c415a7da69f604e726cc7785f5"
  },
  {
    "url": "assets/js/app.12c42a42.js",
    "revision": "33149d7657bed9a961b57cb95d50d0fd"
  },
  {
    "url": "assets/lifecycle/1.jpg",
    "revision": "6e1e57be4ac7569b66bc8e3ff85b4c87"
  },
  {
    "url": "assets/lifecycle/2.png",
    "revision": "3828fb66a442259f9cb671e991ea8487"
  },
  {
    "url": "assets/lifecycle/3.png",
    "revision": "8d0dc6f523c37d116de241d61de30b3d"
  },
  {
    "url": "assets/lifecycle/4.png",
    "revision": "6a76bb54293d6c1c87da2c215ced104e"
  },
  {
    "url": "assets/lifecycle/5.png",
    "revision": "e43324aba93e61f03b12815fffa57c1e"
  },
  {
    "url": "assets/lifecycle/6.png",
    "revision": "4c45da1c38991ee2838dbf54b0679d42"
  },
  {
    "url": "assets/lifecycle/7.png",
    "revision": "810540a5ea3d36ba9b8525b05c793fb3"
  },
  {
    "url": "assets/reactive/1.png",
    "revision": "8640444157c33373fc96f4851b7b2edc"
  },
  {
    "url": "assets/reactive/2.png",
    "revision": "b446ab834db2822c6bf817be835b2ef8"
  },
  {
    "url": "assets/reactive/3.jpg",
    "revision": "0b99330df8a6e8393ee0f89953df79d0"
  },
  {
    "url": "assets/start/1.png",
    "revision": "4fa9d829aab20d4a0ab50573afa5ca39"
  },
  {
    "url": "assets/virtualDOM/1.png",
    "revision": "a052465d12384c5358090501a832312d"
  },
  {
    "url": "assets/virtualDOM/10.png",
    "revision": "cf98adc09dfd3eb21e6f13fb084df9d7"
  },
  {
    "url": "assets/virtualDOM/11.png",
    "revision": "2ddb5ee5e7f7f19bf77f75abdd62bf56"
  },
  {
    "url": "assets/virtualDOM/12.png",
    "revision": "bace2f7fb11962cc182b80f0eefb06e4"
  },
  {
    "url": "assets/virtualDOM/13.png",
    "revision": "98dbc2082450bee66b7b3345d3906356"
  },
  {
    "url": "assets/virtualDOM/14.png",
    "revision": "18c1c6ddc16ffbe377e4218cb17a59ab"
  },
  {
    "url": "assets/virtualDOM/15.png",
    "revision": "e9bdf5c1958f766c3d7be6cb48e4c169"
  },
  {
    "url": "assets/virtualDOM/2.png",
    "revision": "02d5c7b1930a1238a9bfd814c11c07cb"
  },
  {
    "url": "assets/virtualDOM/3.png",
    "revision": "7b0442aa3cd674f486654c33280ecdfa"
  },
  {
    "url": "assets/virtualDOM/4.png",
    "revision": "cb62f1aa1a4d26cea40592798224143f"
  },
  {
    "url": "assets/virtualDOM/5.png",
    "revision": "bcb4dceea98b8c1f67dcfcd08f627824"
  },
  {
    "url": "assets/virtualDOM/6.png",
    "revision": "b9621b4d74ba20cd0d8f46d361f75afb"
  },
  {
    "url": "assets/virtualDOM/7.jpg",
    "revision": "057d76096455fb37aba585c4f4e3fe17"
  },
  {
    "url": "assets/virtualDOM/8.png",
    "revision": "e4c85c40d285e1c23b9669d5cccf9c31"
  },
  {
    "url": "assets/virtualDOM/9.png",
    "revision": "e017b45275be5239fb59ba4e6e12cda9"
  },
  {
    "url": "BuiltInComponents/keep-alive.html",
    "revision": "6bf4ccdced1f29f661ef39d3376a3a11"
  },
  {
    "url": "complie/codegen.html",
    "revision": "f005e02fe00745451ebc1b9e49e97dc1"
  },
  {
    "url": "complie/HTMLParse.html",
    "revision": "401b5f48334b8d77f7f91f8bf4a563cb"
  },
  {
    "url": "complie/index.html",
    "revision": "8aedac7db5f6185b871f83fe7a002e6f"
  },
  {
    "url": "complie/optimize.html",
    "revision": "55931865aa026587d318748a06a405e6"
  },
  {
    "url": "complie/parse.html",
    "revision": "06615cf3fd4908d22328335732b7bd61"
  },
  {
    "url": "complie/summary.html",
    "revision": "ceae5975dde47d654dcf1f2ab0fc9c67"
  },
  {
    "url": "complie/textParse.html",
    "revision": "62e5ae14b6060a09cfd678bdb616dc4f"
  },
  {
    "url": "directives/customDirectives.html",
    "revision": "24a4f696bda515241cf01c2954422c70"
  },
  {
    "url": "filter/filterPrinciple.html",
    "revision": "85f24742df8c552696a330c0ec089d1b"
  },
  {
    "url": "filter/index.html",
    "revision": "f7a508cf66e3101b6575ddeb4d3ed6cd"
  },
  {
    "url": "filter/parseFilters.html",
    "revision": "abdaa52582c6f03063d3a1aa43676a1d"
  },
  {
    "url": "globalAPI/index.html",
    "revision": "7ff6305fc2ad9cd2e93415b99eb7ea32"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "836c0921375df779fd7b84f60c03d01e"
  },
  {
    "url": "instanceMethods/data.html",
    "revision": "13fb435ddab2549cebfe52732d0cce14"
  },
  {
    "url": "instanceMethods/event.html",
    "revision": "067a98a4cf88d53859c2fd93626f8d13"
  },
  {
    "url": "instanceMethods/lifecycle.html",
    "revision": "b360d040e212f57f49cdfad2856148e4"
  },
  {
    "url": "lifecycle/destory.html",
    "revision": "580a3fef2df4c2d7892028afaa2ea155"
  },
  {
    "url": "lifecycle/index.html",
    "revision": "74f2a969729ad653fea28483f010e0bb"
  },
  {
    "url": "lifecycle/initEvents.html",
    "revision": "4ee1e69b9b358d0cca868a433397b0c8"
  },
  {
    "url": "lifecycle/initInjections.html",
    "revision": "0d5306f17fd97a05ebe5a135d095a30f"
  },
  {
    "url": "lifecycle/initLifecycle.html",
    "revision": "79e050497256c1673fcb3bd4ca5f112b"
  },
  {
    "url": "lifecycle/initState.html",
    "revision": "5c7c49f2e8d5a5f9d390ded386a1e123"
  },
  {
    "url": "lifecycle/mount.html",
    "revision": "47c141a88e84465e753bc44cb0902d85"
  },
  {
    "url": "lifecycle/newVue.html",
    "revision": "831c2b38e089a23795233d4ccf3b4a1c"
  },
  {
    "url": "lifecycle/templateComplie.html",
    "revision": "7fee06cba9262de81c4480f00256d147"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "reactive/array.html",
    "revision": "fd0243ca6c415da1a35e792190969ca4"
  },
  {
    "url": "reactive/index.html",
    "revision": "c587611b46586c4c428ef06ba02c8d7f"
  },
  {
    "url": "reactive/object.html",
    "revision": "a8903712717e7ae4108fc1a8c884307e"
  },
  {
    "url": "start/index.html",
    "revision": "bcc871130ab72078b1a766d74b66ed93"
  },
  {
    "url": "virtualDOM/index.html",
    "revision": "ebffd2fef61766a7d4f499685b6505e4"
  },
  {
    "url": "virtualDOM/optimizeUpdataChildren.html",
    "revision": "a74c7f8e6e48c98195a83a853f1b3c6e"
  },
  {
    "url": "virtualDOM/patch.html",
    "revision": "4ba4c7ffcbd021e802035a12ea61d779"
  },
  {
    "url": "virtualDOM/updataChildren.html",
    "revision": "5065e3ef778b895d1522fceef2a8041e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
