webpackJsonp([2],{10:function(e,t){e.exports=require("crypto")},101:function(e,t){e.exports=require("buffer")},102:function(e,t){e.exports=require("dgram")},103:function(e,t){e.exports=require("dns")},104:function(e,t){e.exports=require("events")},105:function(e,t){e.exports=require("string_decoder")},106:function(e,t){e.exports=require("zlib")},13:function(e,t){e.exports=require("util")},14:function(e,t){e.exports=require("path")},18:function(e,t){e.exports=require("electron")},181:function(e,t,n){"use strict";t.a="WALLET_UNLOCK_ERROR"},23:function(e,t){e.exports=require("url")},26:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(79),s=(n.n(a),n(18)),o=(n.n(s),n(1)),i=n.n(o),r=n(49),c=n(14),l=n.n(c);const u=s.remote.dialog,d=s.remote.getCurrentWindow(),m=s.remote.getGlobal("config"),f=m.siad,p=s.remote.require("fs");let w=!1;const y=(e=0)=>new Promise(t=>setTimeout(t,e));window.onload=function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){function a(s,o){try{var i=t[s](o),r=i.value}catch(e){return void n(e)}if(!i.done)return Promise.resolve(r).then(function(e){a("next",e)},function(e){a("throw",e)});e(r)}return a("next")})}}(function*(){const e=n(47);let t=function(){};const s=function(){let n="Siad exited unexpectedly for an unknown reason.";try{n=p.readFileSync(l.a.join(f.datadir,"siad-output.log"),{encoding:"utf-8"})}catch(e){console.error("error reading error log: "+e.toString())}document.body.innerHTML='<div style="width:100%;height:100%;" id="crashdiv"></div>',e.render(i.a.createElement(r.a,{errorMsg:n,startSiad:t}),document.getElementById("crashdiv"))};for(t=function(){const e=a.launch(f.path,{"sia-directory":f.datadir,"rpc-addr":f.rpcaddr,"host-addr":f.hostaddr,"api-addr":f.address,modules:"cghrtw"});e.on("error",s),e.on("close",s),e.on("exit",s),window.siadProcess=e};;){const e=yield a.isRunning(f.address);e&&w&&(w=!1,window.location.reload()),e||w||(w=!0,s()),yield y(2e3)}}),window.SiaAPI={call:function(e,t){a.call(f.address,e).then(e=>t(null,e)).catch(e=>t(e,null))},config:m,hastingsToSiacoins:a.hastingsToSiacoins,siacoinsToHastings:a.siacoinsToHastings,openFile:e=>u.showOpenDialog(d,e),saveFile:e=>u.showSaveDialog(d,e),showMessage:e=>u.showMessageBox(d,e),showError:e=>u.showErrorBox(e.title,e.content)}},29:function(e,t,n){"use strict";var a=n(88);const s=()=>({type:a.a});t.a=s;const o=()=>({type:a.b});t.C=o;const i=()=>({type:a.c});t.D=i;const r=()=>({type:a.d});t.E=r;const c=()=>({type:a.e});t.F=c;const l=()=>({type:a.f});t.p=l;const u=(e,t)=>({type:a.g,password:e,seed:t});t.J=u;const d=e=>({type:a.h,password:e});t.B=d;const m=(e,t)=>({type:a.i,password:e,seed:t});t.y=m;const f=()=>({type:a.j});t.c=f;const p=(e,t,n)=>({type:a.k,confirmed:e,unconfirmed:t,siafunds:n});t.K=p;const w=()=>({type:a.l});t.d=w;const y=e=>({type:a.m,transactions:e});t.L=y;const E=e=>({type:a.n,currencytype:e});t.e=E;const h=()=>({type:a.o});t.j=h;const g=e=>({type:a.p,address:e});t.k=g;const v=e=>({type:a.q,amount:e});t.l=v;const S=()=>({type:a.r});t.N=S;const N=()=>({type:a.s});t.i=N;const C=()=>({type:a.t});t.r=C;const b=e=>({type:a.u,address:e});t.M=b;const R=(e,t,n)=>({type:a.v,destination:e,amount:t,currencytype:n});t.m=R;const k=(()=>({type:a.w}),e=>({type:a.x,password:e}));t.A=k;const T=()=>({type:a.y});t.t=T;const D=()=>({type:a.z});t.n=D;const P=()=>({type:a.A});t.o=P;const A=(e=30)=>({type:a.B,increment:e});t.f=A;const _=()=>({type:a.C});t.b=_;const I=e=>({type:a.D,synced:e});t.Q=I;const O=()=>({type:a.E});t.w=O;const W=()=>({type:a.F});t.z=W;const x=e=>({type:a.G,useCustomPassphrase:e});t.x=x;const q=()=>({type:a.H});t.s=q;const F=()=>({type:a.I});t.h=F;const L=e=>({type:a.J,seed:e});t.g=L;const M=()=>({type:a.K});t.O=M;const H=()=>({type:a.L});t.P=H;const z=()=>({type:a.M});t.u=z;const G=()=>({type:a.N});t.v=G;const B=()=>({type:a.O});t.H=B;const U=()=>({type:a.P});t.I=U;const Y=e=>({type:a.Q,rescanning:e});t.G=Y;const j=e=>({type:a.R,error:e});t.q=j},35:function(e,t){e.exports=require("http")},36:function(e,t){e.exports=require("stream")},380:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(47),s=n.n(a),o=n(553);s.a.render(n.i(o.a)(),document.getElementById("react-root"))},43:function(e,t){e.exports=require("assert")},48:function(e,t){e.exports=require("querystring")},49:function(e,t,n){"use strict";var a=n(2),s=n.n(a),o=n(1),i=n.n(o),r=n(18);n.n(r);const c={display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",backgroundColor:"#C6C6C6",width:"100%",height:"100%"},l={height:"300px",width:"80%",overflow:"auto",marginBottom:"15px"},u={color:"blue",cursor:"pointer"},d=()=>{r.shell.openExternal("https://github.com/NebulousLabs/Sia/issues")},m=({errorMsg:errorMsg,startSiad:startSiad})=>i.a.createElement("div",{style:c},i.a.createElement("h2",null,"Siad has exited unexpectedly. Please submit a bug report including the error log ",i.a.createElement("a",{style:u,onClick:d},"here.")),i.a.createElement("h2",null," Error Log: "),i.a.createElement("textarea",{style:l,readOnly:!0},errorMsg),i.a.createElement("button",{onClick:startSiad},"Start Siad"));m.propTypes={errorMsg:s.a.string.isRequired,startSiad:s.a.func.isRequired},t.a=m},520:function(e,t,n){"use strict";var a=n(181);const s=e=>({type:a.a,err:e});t.a=s},521:function(e,t,n){"use strict";var a=n(1),s=n.n(a),o=n(541),i=n(552);const r=()=>s.a.createElement("div",{className:"app"},s.a.createElement(o.a,null),s.a.createElement(i.a,null));t.a=r},522:function(e,t,n){"use strict";var a=n(1),s=n.n(a),o=n(2),i=n.n(o);const r=({seed:seed,password:password,error:error,actions:actions})=>{const e=()=>actions.hideConfirmationDialog();const t=e=>{e.preventDefault();e.target.seed.value===seed&&e.target.password.value===password?actions.dismissNewWalletDialog():e.target.seed.value!==seed?actions.setConfirmationError("seed did not match!"):e.target.password.value!==password&&actions.setConfirmationError("password did not match!")};return s.a.createElement("div",{className:"modal"},s.a.createElement("div",{className:"confirmation-dialog"},s.a.createElement("h3",null," Please confirm your password and seed to continue "),s.a.createElement("form",{className:"seed-confirmation-form",onSubmit:t},s.a.createElement("input",{className:"seed-confirmation-input",placeholder:"seed",type:"text",name:"seed",required:!0}),s.a.createElement("input",{className:"password-confirmation-input",placeholder:"password",type:"text",name:"password",required:!0}),s.a.createElement("div",{className:"confirmation-buttons"},s.a.createElement("button",{onClick:e},"Go Back"),s.a.createElement("button",{className:"seed-confirmation-button",type:"submit"},"Confirm"))),s.a.createElement("span",{className:"seed-confirmation-error"},error)))};r.propTypes={seed:i.a.string.isRequired,password:i.a.string.isRequired,error:i.a.string.isRequired},t.a=r},523:function(e,t,n){"use strict";var a=n(1),s=n.n(a);const o=({initializingSeed:initializingSeed,useCustomPassphrase:useCustomPassphrase,hideInitSeedForm:hideInitSeedForm,createNewWallet:createNewWallet})=>{if(initializingSeed)return s.a.createElement("div",{className:"new-wallet-form"},s.a.createElement("h3",null," Initializing seed... "),s.a.createElement("i",{className:"fa fa-circle-o-notch fa-spin fa-4x"}));const e=e=>{e.preventDefault();useCustomPassphrase?createNewWallet(e.target.password.value,e.target.seed.value):createNewWallet(void 0,e.target.seed.value)};const t=e=>{e.preventDefault();hideInitSeedForm()};return s.a.createElement("form",{className:"new-wallet-form",onSubmit:e},s.a.createElement("h3",null," Enter a seed to initialize your wallet from. "),s.a.createElement("p",null," This will initialize your wallet from the provided seed, rescanning the blockchain to find all your money. This rescan process can take a while. The blockchain must also be synced. "),s.a.createElement("input",{type:"text",name:"seed",placeholder:"Seed",autoFocus:!0}),useCustomPassphrase?s.a.createElement("input",{type:"password",placeholder:"Desired password",name:"password"}):null,s.a.createElement("div",{className:"new-wallet-form-buttons"},s.a.createElement("button",{type:"submit"},"Confirm"),s.a.createElement("button",{onClick:t},"Cancel")))};t.a=o},524:function(e,t,n){"use strict";var a=n(1),s=n.n(a);const o=({actions:actions})=>{const e=()=>actions.lockWallet();return s.a.createElement("div",{className:"lock-button",onClick:e},s.a.createElement("i",{className:"fa fa-lock fa-2x"}),s.a.createElement("span",null,"Lock Wallet"))};t.a=o},525:function(e,t,n){"use strict";var a=n(2),s=n.n(a),o=n(1),i=n.n(o),r=n(544),c=n(551),l=n(533);const u=({unlocked:unlocked,unlocking:unlocking,encrypted:encrypted,rescanning:rescanning})=>{if(unlocked&&encrypted&&!unlocking&&!rescanning)return i.a.createElement("div",null);let e;unlocked||!encrypted||rescanning?rescanning?e=i.a.createElement(l.a,null):encrypted||(e=i.a.createElement(c.a,null)):e=i.a.createElement(r.a,null);return i.a.createElement("div",{className:"modal"},i.a.createElement("div",{className:"lockscreen"},e))};u.propTypes={unlocked:s.a.bool.isRequired,unlocking:s.a.bool.isRequired,encrypted:s.a.bool.isRequired,rescanning:s.a.bool.isRequired},t.a=u},526:function(e,t,n){"use strict";var a=n(2),s=n.n(a),o=n(1),i=n.n(o),r=n(539);const c=({password:password,seed:seed,showConfirmationDialog:showConfirmationDialog,actions:actions})=>{const e=()=>actions.showConfirmationDialog();return i.a.createElement("div",{className:"newwallet-dialog"},showConfirmationDialog?i.a.createElement(r.a,null):null,i.a.createElement("p",null," You have created a new wallet!  Please write down the seed and password in a safe place.  If you forget your password, you won't be able to access your wallet. "),i.a.createElement("h2",null," Seed: "),i.a.createElement("span",{className:"newwallet-seed"},seed),i.a.createElement("h2",null," Password: "),i.a.createElement("span",{className:"newwallet-password"},password),i.a.createElement("button",{className:"newwallet-dismiss",onClick:e}," I have written these down in a safe place "))};c.propTypes={password:s.a.string.isRequired,seed:s.a.string.isRequired},t.a=c},527:function(e,t,n){"use strict";var a=n(1),s=n.n(a);const o=({actions:actions})=>{const e=e=>{e.preventDefault();actions.createNewWallet(e.target.password.value);actions.hideNewWalletForm()};const t=e=>{e.preventDefault();actions.hideNewWalletForm()};return s.a.createElement("form",{className:"new-wallet-form",onSubmit:e},s.a.createElement("h3",null,"Enter a password to encrypt your wallet. You can leave this empty to use a secure, automatically generated password."),s.a.createElement("input",{type:"password",name:"password",autoFocus:!0}),s.a.createElement("div",{className:"new-wallet-form-buttons"},s.a.createElement("button",{type:"submit"},"Confirm"),s.a.createElement("button",{onClick:t},"Cancel")))};t.a=o},528:function(e,t,n){"use strict";var a=n(2),s=n.n(a),o=n(1),i=n.n(o);const r=({password:password,error:error,unlocking:unlocking,actions:actions})=>{const e=e=>actions.handlePasswordChange(e.target.value);const t=()=>actions.unlockWallet(password);if(unlocking)return i.a.createElement("span",{className:"unlock-status"}," Unlocking your wallet, this may take a while (up to several minutes)... ");return i.a.createElement("div",{className:"password-prompt"},i.a.createElement("h2",null," Wallet Locked "),i.a.createElement("span",null," Enter your wallet password to unlock the wallet. "),i.a.createElement("i",{className:"fa fa-lock fa-4x"}),i.a.createElement("input",{type:"password",value:password,className:"password-input",onChange:e}),i.a.createElement("button",{className:"unlock-button",onClick:t},"Unlock"),i.a.createElement("div",{className:"password-prompt-error"},error))};r.propTypes={password:s.a.string.isRequired,error:s.a.string},t.a=r},529:function(e,t,n){"use strict";var a=n(1),s=n.n(a);const o=({actions:actions})=>{const e=()=>actions.getNewReceiveAddress();return s.a.createElement("div",{className:"receive-button",onClick:e},s.a.createElement("i",{className:"fa fa-download fa-2x"}),s.a.createElement("span",null,"Receive Siacoin"))};t.a=o},530:function(e,t,n){"use strict";var a=n(2),s=n.n(a),o=n(1),i=n.n(o);const r=({address:address,actions:actions})=>{const e=()=>actions.hideReceivePrompt();return i.a.createElement("div",{className:"modal"},i.a.createElement("div",{className:"receive-prompt"},"You can receive Siacoins using the following address:",i.a.createElement("div",{className:"wallet-address"},address),i.a.createElement("button",{className:"receiveprompt-dismissbtn",onClick:e},"OK")))};r.propTypes={address:s.a.string},t.a=r},531:function(e,t,n){"use strict";var a=n(1),s=n.n(a);const o=({actions:actions})=>{const e=()=>actions.showSeedRecoveryDialog();return s.a.createElement("div",{className:"recover-button",onClick:e},s.a.createElement("i",{className:"fa fa-key fa-2x"}),s.a.createElement("span",null,"Recover Seed"))};t.a=o},532:function(e,t,n){"use strict";var a=n(2),s=n.n(a),o=n(1),i=n.n(o);const r=({recovering:recovering,actions:actions})=>{const e=e=>{e.preventDefault();actions.recoverSeed(e.target.seed.value)};const t=e=>{e.preventDefault();actions.hideSeedRecoveryDialog()};if(recovering)return i.a.createElement("div",{className:"modal"},i.a.createElement("div",{className:"recovery-status"},i.a.createElement("i",{className:"fa fa-circle-o-notch fa-spin fa-4x","aria-hidden":"true"}),i.a.createElement("h3",null," Recovering seed, this may take a long time... ")));return i.a.createElement("div",{className:"modal"},i.a.createElement("form",{className:"recovery-form",onSubmit:e},i.a.createElement("h3",null," Enter a seed to recover funds from. "),i.a.createElement("p",null," The entire blockchain will be scanned for outputs belonging to the seed. This takes a while. "),i.a.createElement("p",null," After the scan completes, these outputs will be sent to your wallet. "),i.a.createElement("input",{type:"text",name:"seed",autoFocus:!0}),i.a.createElement("div",{className:"recovery-form-buttons"},i.a.createElement("button",{type:"submit"},"Recover"),i.a.createElement("button",{onClick:t},"Cancel"))))};r.propTypes={recovering:s.a.bool.isRequired},t.a=r},533:function(e,t,n){"use strict";var a=n(1),s=n.n(a);const o=()=>s.a.createElement("div",{className:"rescan-dialog"},s.a.createElement("i",{className:"fa fa-circle-o-notch fa-spin fa-4x","aria-hidden":"true"}),s.a.createElement("h3",null," Scanning the Blockchain... "));t.a=o},534:function(e,t,n){"use strict";var a=n(2),s=n.n(a),o=n(1),i=n.n(o);const r=({currencytype:currencytype,onClick:onClick})=>i.a.createElement("div",{onClick:onClick,className:"send-button"},i.a.createElement("i",{className:"fa fa-paper-plane fa-2x"}),i.a.createElement("span",null,"Send ",currencytype));r.propTypes={currencytype:s.a.string.isRequired},t.a=r},535:function(e,t,n){"use strict";var a=n(2),s=n.n(a),o=n(1),i=n.n(o);const r=({currencytype:currencytype,sendAddress:sendAddress,sendAmount:sendAmount,actions:actions})=>{const e=e=>actions.setSendAddress(e.target.value);const t=e=>actions.setSendAmount(e.target.value);const n=()=>actions.sendCurrency(sendAddress,sendAmount,currencytype);const a=()=>actions.closeSendPrompt();return i.a.createElement("div",{className:"modal"},i.a.createElement("div",{className:"sendprompt"},i.a.createElement("div",{className:"sendamount"},i.a.createElement("h3",null,"Send Amount ","siacoins"===currencytype?"(SC)":"(SF)"," "),i.a.createElement("input",{onChange:t,value:sendAmount})),i.a.createElement("div",{className:"sendaddress"},i.a.createElement("h3",null," To Address "),i.a.createElement("input",{onChange:e,value:sendAddress})),i.a.createElement("div",{className:"send-prompt-buttons"},i.a.createElement("button",{className:"send-siacoin-button",onClick:n},"Send"),i.a.createElement("button",{className:"cancel-send-button",onClick:a},"Cancel"))))};r.propTypes={sendAddress:s.a.string.isRequired,sendAmount:s.a.string.isRequired,currencytype:s.a.string.isRequired},t.a=r},536:function(e,t,n){"use strict";var a=n(2),s=n.n(a),o=n(1),i=n.n(o),r=n(7);n.n(r);const c=({transactions:transactions,ntransactions:ntransactions,actions:actions})=>{if(0===transactions.size)return i.a.createElement("div",{className:"transaction-list"},i.a.createElement("h3",null," No recent transactions "));const e=e=>{const t=e=>String("0"+e).slice(-2);const n=new Date;n.setHours(n.getHours()-24);if(e>n)return"Today at "+t(e.getHours())+":"+t(e.getMinutes());return e.getFullYear()+"-"+t(e.getMonth()+1)+"-"+t(e.getDate())+" "+t(e.getHours())+":"+t(e.getMinutes())};const t=transactions.take(ntransactions).map((t,n)=>{let a="";t.transactionsums.totalSiacoin.abs().gt(0)&&(a+=t.transactionsums.totalSiacoin.round(4).toNumber().toLocaleString()+" SC ");t.transactionsums.totalSiafund.abs().gt(0)&&(a+=t.transactionsums.totalSiafund.round(4).toNumber().toLocaleString()+" SF ");t.transactionsums.totalMiner.abs().gt(0)&&(a+=t.transactionsums.totalMiner.round(4).toNumber().toLocaleString()+" SC (miner) ");""===a&&(a="0 SC");return i.a.createElement("tr",{key:n},i.a.createElement("td",null,t.confirmed?e(t.confirmationtimestamp):"Not Confirmed"),i.a.createElement("td",null,a),i.a.createElement("td",{className:"txid"},t.transactionid),i.a.createElement("td",null,t.confirmed?i.a.createElement("i",{className:"fa fa-check-square confirmed-icon"}," Confirmed "):i.a.createElement("i",{className:"fa fa-clock-o unconfirmed-icon"}," Unconfirmed ")))});const n=()=>actions.showMoreTransactions();return i.a.createElement("div",{className:"transaction-list"},i.a.createElement("h2",null," Recent Transactions "),i.a.createElement("table",{className:"pure-table transaction-table"},i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"Date"),i.a.createElement("th",null,"Net Value"),i.a.createElement("th",null,"Transaction ID"),i.a.createElement("th",null,"Confirmation Status"))),i.a.createElement("tbody",null,t)),transactions.size>ntransactions?i.a.createElement("div",{className:"load-more"},i.a.createElement("button",{className:"load-more-button",onClick:n},"More Transactions")):null)};c.propTypes={transactions:s.a.instanceOf(r.List).isRequired,ntransactions:s.a.number.isRequired},t.a=c},537:function(e,t,n){"use strict";var a=n(2),s=n.n(a),o=n(1),i=n.n(o),r=n(543),c=n(523);const l=({initializingSeed:initializingSeed,useCustomPassphrase:useCustomPassphrase,showInitSeedForm:showInitSeedForm,showNewWalletForm:showNewWalletForm,actions:actions})=>{if(showNewWalletForm&&useCustomPassphrase)return i.a.createElement(r.a,null);if(showInitSeedForm)return i.a.createElement(c.a,{initializingSeed:initializingSeed,useCustomPassphrase:useCustomPassphrase,hideInitSeedForm:actions.hideInitSeedForm,createNewWallet:actions.createNewWallet});showNewWalletForm&&!useCustomPassphrase&&actions.createNewWallet();const e=()=>actions.setUseCustomPassphrase(!useCustomPassphrase);const t=()=>actions.showNewWalletForm();const n=()=>actions.showInitSeedForm();return i.a.createElement("div",{className:"uninitialized-wallet-dialog"},i.a.createElement("div",{className:"wallet-init-buttons"},i.a.createElement("div",{onClick:t,className:"create-wallet-button"},i.a.createElement("i",{className:"fa fa-plus-circle fa-4x"}),i.a.createElement("h3",null," Create a new wallet ")),i.a.createElement("div",{className:"create-wallet-button"},i.a.createElement("i",{className:"fa fa-key fa-4x",onClick:n}),i.a.createElement("h3",null," Load a wallet from a seed "))),i.a.createElement("div",{className:"use-passphrase-checkbox"},i.a.createElement("input",{type:"checkbox",checked:useCustomPassphrase,onChange:e}),i.a.createElement("span",null," Use custom passphrase ")))};l.propTypes={useCustomPassphrase:s.a.bool.isRequired,showNewWalletForm:s.a.bool.isRequired,initializingSeed:s.a.bool.isRequired},t.a=l},538:function(e,t,n){"use strict";var a=n(2),s=n.n(a),o=n(1),i=n.n(o),r=n(550),c=n(534),l=n(549),u=n(545),d=n(546),m=n(542),f=n(540),p=n(547),w=n(548);const y=({synced:synced,confirmedbalance:confirmedbalance,unconfirmedbalance:unconfirmedbalance,siafundbalance:siafundbalance,showReceivePrompt:showReceivePrompt,showSendPrompt:showSendPrompt,showNewWalletDialog:showNewWalletDialog,showRecoveryDialog:showRecoveryDialog,actions:actions})=>{const e=e=>()=>actions.startSendPrompt(e);return i.a.createElement("div",{className:"wallet"},i.a.createElement("div",{className:"wallet-toolbar"},i.a.createElement("div",{className:"balance-info"},i.a.createElement("span",null,"Confirmed Balance: ",confirmedbalance," SC "),i.a.createElement("span",null,"Unconfirmed Delta: ",unconfirmedbalance," SC "),"0"!==siafundbalance?i.a.createElement("span",null," Siafund Balance: ",siafundbalance," SF "):null,synced?null:i.a.createElement("span",{style:{marginRight:"40px",color:"rgb(255, 93, 93)"},className:"fa fa-exclamation-triangle"},"Your wallet is not synced, balances are not final.")),i.a.createElement(f.a,null),i.a.createElement(p.a,null),"0"!==siafundbalance?i.a.createElement(c.a,{currencytype:"Siafund",onClick:e("siafunds")}):null,i.a.createElement(c.a,{currencytype:"Siacoin",onClick:e("siacoins")}),i.a.createElement(u.a,null)),showNewWalletDialog?i.a.createElement(m.a,null):null,showSendPrompt?i.a.createElement(l.a,null):null,showReceivePrompt?i.a.createElement(d.a,null):null,showRecoveryDialog?i.a.createElement(w.a,null):null,i.a.createElement(r.a,null))};y.propTypes={synced:s.a.bool.isRequired,confirmedbalance:s.a.string.isRequired,unconfirmedbalance:s.a.string.isRequired,siafundbalance:s.a.string.isRequired,showNewWalletDialog:s.a.bool,showSendPrompt:s.a.bool,showReceivePrompt:s.a.bool},t.a=y},539:function(e,t,n){"use strict";var a=n(522),s=n(3),o=(n.n(s),n(4)),i=n(29);const r=e=>({seed:e.newwalletdialog.get("seed"),password:e.newwalletdialog.get("password"),error:e.newwalletdialog.get("confirmationerror")}),c=e=>({actions:n.i(o.bindActionCreators)({hideConfirmationDialog:i.o,dismissNewWalletDialog:i.p,setConfirmationError:i.q},e)}),l=n.i(s.connect)(r,c)(a.a);t.a=l},540:function(e,t,n){"use strict";var a=n(524),s=n(3),o=(n.n(s),n(4)),i=n(29);const r=()=>({}),c=e=>({actions:n.i(o.bindActionCreators)({lockWallet:i.t},e)}),l=n.i(s.connect)(r,c)(a.a);t.a=l},541:function(e,t,n){"use strict";var a=n(525),s=n(3);n.n(s);const o=e=>({unlocked:e.wallet.get("unlocked"),unlocking:e.wallet.get("unlocking"),encrypted:e.wallet.get("encrypted"),rescanning:e.wallet.get("rescanning")}),i=n.i(s.connect)(o)(a.a);t.a=i},542:function(e,t,n){"use strict";var a=n(526),s=n(29),o=n(4),i=n(3);n.n(i);const r=e=>({password:e.newwalletdialog.get("password"),seed:e.newwalletdialog.get("seed"),showConfirmationDialog:e.newwalletdialog.get("showConfirmationDialog")}),c=e=>({actions:n.i(o.bindActionCreators)({showConfirmationDialog:s.n},e)}),l=n.i(i.connect)(r,c)(a.a);t.a=l},543:function(e,t,n){"use strict";var a=n(527),s=n(29),o=n(3),i=(n.n(o),n(4));const r=()=>({}),c=e=>({actions:n.i(i.bindActionCreators)({createNewWallet:s.y,hideNewWalletForm:s.z},e)}),l=n.i(o.connect)(r,c)(a.a);t.a=l},544:function(e,t,n){"use strict";var a=n(528),s=n(29),o=n(4),i=n(3);n.n(i);const r=e=>({password:e.passwordprompt.get("password"),error:e.passwordprompt.get("error"),unlocking:e.wallet.get("unlocking")}),c=e=>({actions:n.i(o.bindActionCreators)({handlePasswordChange:s.A,unlockWallet:s.B},e)}),l=n.i(i.connect)(r,c)(a.a);t.a=l},545:function(e,t,n){"use strict";var a=n(529),s=n(3),o=(n.n(s),n(4)),i=n(29);const r=()=>({}),c=e=>({actions:n.i(o.bindActionCreators)({getNewReceiveAddress:i.r},e)}),l=n.i(s.connect)(r,c)(a.a);t.a=l},546:function(e,t,n){"use strict";var a=n(530),s=n(3),o=(n.n(s),n(29)),i=n(4);const r=e=>({address:e.receiveprompt.get("address")}),c=e=>({actions:n.i(i.bindActionCreators)({hideReceivePrompt:o.i},e)}),l=n.i(s.connect)(r,c)(a.a);t.a=l},547:function(e,t,n){"use strict";var a=n(531),s=n(3),o=(n.n(s),n(4)),i=n(29);const r=()=>({}),c=e=>({actions:n.i(o.bindActionCreators)({showSeedRecoveryDialog:i.s},e)}),l=n.i(s.connect)(r,c)(a.a);t.a=l},548:function(e,t,n){"use strict";var a=n(532),s=n(3),o=(n.n(s),n(4)),i=n(29);const r=e=>({recovering:e.wallet.get("recovering")}),c=e=>({actions:n.i(o.bindActionCreators)({recoverSeed:i.g,hideSeedRecoveryDialog:i.h},e)}),l=n.i(s.connect)(r,c)(a.a);t.a=l},549:function(e,t,n){"use strict";var a=n(535),s=n(29),o=n(4),i=n(3);n.n(i);const r=e=>({sendAddress:e.sendprompt.get("sendaddress"),sendAmount:e.sendprompt.get("sendamount"),currencytype:e.sendprompt.get("currencytype")}),c=e=>({actions:n.i(o.bindActionCreators)({closeSendPrompt:s.j,setSendAddress:s.k,setSendAmount:s.l,sendCurrency:s.m},e)}),l=n.i(i.connect)(r,c)(a.a);t.a=l},55:function(e,t){e.exports=require("fs")},550:function(e,t,n){"use strict";var a=n(536),s=n(3),o=(n.n(s),n(4)),i=n(29);const r=e=>({transactions:e.wallet.get("transactions"),ntransactions:e.wallet.get("ntransactions")}),c=e=>({actions:n.i(o.bindActionCreators)({showMoreTransactions:i.f},e)}),l=n.i(s.connect)(r,c)(a.a);t.a=l},551:function(e,t,n){"use strict";var a=n(537),s=n(29),o=n(3),i=(n.n(o),n(4));const r=e=>({showNewWalletForm:e.wallet.get("showNewWalletForm"),showInitSeedForm:e.wallet.get("showInitSeedForm"),useCustomPassphrase:e.wallet.get("useCustomPassphrase"),initializingSeed:e.wallet.get("initializingSeed")}),c=e=>({actions:n.i(i.bindActionCreators)({showInitSeedForm:s.u,hideInitSeedForm:s.v,showNewWalletForm:s.w,setUseCustomPassphrase:s.x,createNewWallet:s.y},e)}),l=n.i(o.connect)(r,c)(a.a);t.a=l},552:function(e,t,n){"use strict";var a=n(538),s=n(3),o=(n.n(s),n(4)),i=n(29);const r=e=>({synced:e.wallet.get("synced"),confirmedbalance:e.wallet.get("confirmedbalance"),unconfirmedbalance:e.wallet.get("unconfirmedbalance"),siafundbalance:e.wallet.get("siafundbalance"),showReceivePrompt:e.wallet.get("showReceivePrompt"),showSendPrompt:e.wallet.get("showSendPrompt"),showNewWalletDialog:e.wallet.get("showNewWalletDialog"),showRecoveryDialog:e.wallet.get("showRecoveryDialog")}),c=e=>({actions:n.i(o.bindActionCreators)({startSendPrompt:i.e},e)}),l=n.i(s.connect)(r,c)(a.a);t.a=l},553:function(e,t,n){"use strict";var a=n(1),s=n.n(a),o=n(121),i=n.n(o),r=n(4),c=n(3),l=(n.n(c),n(554)),u=n(561),d=n(29),m=n(521);const f=()=>{const e=i()();const t=n.i(r.createStore)(l.a,n.i(r.applyMiddleware)(e));e.run(u.a);const a=()=>{t.dispatch(n.i(d.a)());t.dispatch(n.i(d.b)());t.getState().wallet.get("unlocked")&&(t.dispatch(n.i(d.c)()),t.dispatch(n.i(d.d)()))};setInterval(a,5e3);a();window.onfocus=a;return s.a.createElement(c.Provider,{store:t},s.a.createElement(m.a,null))};t.a=f},554:function(e,t,n){"use strict";var a=n(4),s=n(559),o=n(556),i=n(555),r=n(558),c=n(557);const l=n.i(a.combineReducers)({wallet:s.a,passwordprompt:o.a,newwalletdialog:i.a,sendprompt:r.a,receiveprompt:c.a});t.a=l},555:function(e,t,n){"use strict";function a(e=i,t){switch(t.type){case o.R:return e.set("confirmationerror",t.error);case o.g:return e.set("password",t.password).set("seed",t.seed);case o.z:return e.set("showConfirmationDialog",!0);case o.A:return e.set("showConfirmationDialog",!1);default:return e}}t.a=a;var s=n(7),o=(n.n(s),n(88));const i=n.i(s.Map)({password:"",seed:"",showConfirmationDialog:!1,confirmationerror:""})},556:function(e,t,n){"use strict";function a(e=r,t){switch(t.type){case o.x:return e.set("password",t.password);case i.a:return e.set("error",t.err);default:return e}}t.a=a;var s=n(7),o=(n.n(s),n(88)),i=n(181);const r=n.i(s.Map)({password:"",error:""})},557:function(e,t,n){"use strict";function a(e=i,t){switch(t.type){case o.u:return e.set("address",t.address);default:return e}}t.a=a;var s=n(7),o=(n.n(s),n(88));const i=n.i(s.Map)({address:""})},558:function(e,t,n){"use strict";function a(e=i,t){switch(t.type){case o.q:return e.set("sendamount",t.amount);case o.p:return e.set("sendaddress",t.address);case o.n:return e.set("currencytype",t.currencytype);default:return e}}t.a=a;var s=n(7),o=(n.n(s),n(88));const i=n.i(s.Map)({sendaddress:"",sendamount:"",currencytype:"siacoins"})},559:function(e,t,n){"use strict";function a(e=r,t){switch(t.type){case o.K:return e.set("recovering",!0);case o.L:return e.set("recovering",!1);case o.g:return e.set("showNewWalletDialog",!0);case o.f:return e.set("showNewWalletDialog",!1);case o.E:return e.set("showNewWalletForm",!0);case o.F:return e.set("showNewWalletForm",!1);case o.r:return e.set("showReceivePrompt",!0);case o.s:return e.set("showReceivePrompt",!1);case o.n:return e.set("showSendPrompt",!0);case o.o:return e.set("showSendPrompt",!1);case o.h:return e.set("unlocking",!0);case i.a:return e.set("unlocking",!1);case o.b:return e.set("unlocked",!1);case o.c:return e.set("unlocked",!0).set("unlocking",!1);case o.d:return e.set("encrypted",!0);case o.e:return e.set("encrypted",!1);case o.D:return e.set("synced",t.synced);case o.k:return e.set("confirmedbalance",t.confirmed).set("unconfirmedbalance",t.unconfirmed).set("siafundbalance",t.siafunds);case o.B:return e.set("ntransactions",e.get("ntransactions")+t.increment);case o.m:return e.set("transactions",t.transactions);case o.G:return e.set("useCustomPassphrase",t.useCustomPassphrase);case o.H:return e.set("showRecoveryDialog",!0);case o.I:return e.set("showRecoveryDialog",!1);case o.M:return e.set("showInitSeedForm",!0);case o.N:return e.set("showInitSeedForm",!1);case o.O:return e.set("initializingSeed",!0);case o.P:return e.set("initializingSeed",!1);case o.Q:{let n=e.set("rescanning",t.rescanning);return t.rescanning&&(n=n.set("recovering",!1).set("initializingSeed",!1).set("unlocking",!1).set("showRecoveryDialog",!1).set("showInitSeedForm",!1)),n}default:return e}}t.a=a;var s=n(7),o=(n.n(s),n(88)),i=n(181);const r=n.i(s.Map)({synced:!1,rescanning:!1,unlocked:!1,encrypted:!0,unlocking:!1,recovering:!1,confirmedbalance:"0",unconfirmedbalance:"0",siafundbalance:"0",transactions:n.i(s.List)(),ntransactions:30,showSendPrompt:!1,showReceivePrompt:!1,showNewWalletDialog:!1,showNewWalletForm:!1,showInitSeedForm:!1,useCustomPassphrase:!1,showRecoveryDialog:!1,initializingSeed:!1})},560:function(e,t,n){"use strict";var a=n(107),s=n.n(a),o=n(7);n.n(o);const i=Math.pow(2,64),r=e=>new Promise((t,n)=>{SiaAPI.call(e,(e,a)=>{e?n(e):t(a)})});t.a=r;const c=(e,t)=>e.reduce((e,n)=>{if(n.fundtype.indexOf(t)>-1)return e.add(new s.a(n.value));return e},new s.a(0)),l=e=>{let t=new s.a(0);let n=new s.a(0);let a=new s.a(0);let o=new s.a(0);let i=new s.a(0);let r=new s.a(0);if(e.inputs){const s=e.inputs.filter(e=>e.walletaddress&&e.value);t=c(s,"siacoin"),n=c(s,"siafund"),a=c(s,"miner")}if(e.outputs){const t=e.outputs.filter(e=>e.walletaddress&&e.value);o=c(t,"siacoin"),i=c(t,"siafund"),r=c(t,"miner")}return{totalSiacoin:SiaAPI.hastingsToSiacoins(o.minus(t)),totalSiafund:i.minus(n),totalMiner:SiaAPI.hastingsToSiacoins(r.minus(a))}},u=e=>{e.unconfirmedtransactions||(e.unconfirmedtransactions=[]);e.confirmedtransactions||(e.confirmedtransactions=[]);const t=e.unconfirmedtransactions.concat(e.confirmedtransactions);const a=n.i(o.List)(t.map(e=>{const t=l(e);const n=e.confirmationtimestamp!==i;return{confirmed:n,transactionsums:t,transactionid:e.transactionid,confirmationtimestamp:new Date(1e3*e.confirmationtimestamp)}}));return a.sortBy(e=>-e.confirmationtimestamp)};t.b=u},561:function(e,t,n){"use strict";function*a(){yield Object.values(s).map(o.fork)}t.a=a;var s=n(562),o=n(133);n.n(o)},562:function(e,t,n){"use strict";function*a(){try{const e=yield n.i(R.a)("/wallet");e.unlocked?yield n.i(b.put)(k.D()):yield n.i(b.put)(k.C()),e.encrypted?yield n.i(b.put)(k.E()):yield n.i(b.put)(k.F()),yield n.i(b.put)(k.G(e.rescanning))}catch(e){console.error("error fetching lock status: "+e.toString())}}function*s(e){try{yield n.i(R.a)({url:"/wallet/unlock",method:"POST",timeout:1728e5,qs:{encryptionpassword:e.password}}),yield n.i(b.put)(k.E()),yield n.i(b.put)(k.D()),yield n.i(b.put)(k.A(""))}catch(e){yield n.i(b.put)(k.A("")),yield n.i(b.put)(n.i(D.a)(e.message))}}function*o(){try{yield n.i(R.a)({url:"/wallet/lock",method:"POST"}),yield n.i(b.put)(k.E()),yield n.i(b.put)(k.C())}catch(e){P(e)}}function*i(e){const t=void 0!==e.seed;try{let a;t?(yield n.i(b.put)(k.H()),a=yield n.i(R.a)({url:"/wallet/init/seed",method:"POST",timeout:17e7,qs:{dictionary:"english",encryptionpassword:e.password,seed:e.seed}}),yield n.i(b.put)(k.I())):a=yield n.i(R.a)({url:"/wallet/init",method:"POST",qs:{dictionary:"english",encryptionpassword:e.password}}),!t&&void 0===e.password||""===e.password?yield n.i(b.put)(k.J(a.primaryseed,a.primaryseed)):t||(yield n.i(b.put)(k.J(e.password,a.primaryseed))),yield n.i(b.take)(T.c),yield n.i(b.put)(k.p())}catch(e){t&&(yield n.i(b.put)(k.I())),P(e)}}function*r(){try{const e=yield n.i(R.a)("/wallet"),t=SiaAPI.hastingsToSiacoins(e.confirmedsiacoinbalance),a=SiaAPI.hastingsToSiacoins(e.unconfirmedincomingsiacoins),s=SiaAPI.hastingsToSiacoins(e.unconfirmedoutgoingsiacoins),o=a.minus(s);yield n.i(b.put)(k.K(t.round(2).toString(),o.round(2).toString(),e.siafundbalance))}catch(e){console.error("error fetching balance: "+e.toString())}}function*c(){try{const e=yield n.i(R.a)("/wallet/transactions?startheight=0&endheight=-1"),t=n.i(R.b)(e);yield n.i(b.put)(k.L(t))}catch(e){console.error("error fetching transactions: "+e.toString())}}function*l(){try{const e=yield n.i(R.a)("/wallet/address");yield n.i(b.put)(k.M(e.address)),yield n.i(b.put)(k.N())}catch(e){P(e)}}function*u(e){try{yield n.i(b.put)(k.O()),yield n.i(R.a)({url:"/wallet/sweep/seed",method:"POST",timeout:2e8,qs:{seed:e.seed}}),yield n.i(b.put)(k.P()),yield new Promise(e=>setTimeout(e,1e3)),yield n.i(b.put)(k.h())}catch(e){yield n.i(b.put)(k.P()),yield n.i(b.put)(k.h()),P(e)}}function*d(e){try{if(void 0===e.currencytype||void 0===e.amount||void 0===e.destination||""===e.amount||""===e.currencytype||""===e.destination)throw{message:"You must specify an amount and a destination to send Siacoin!"};if("siafunds"!==e.currencytype&&"siacoins"!==e.currencytype)throw{message:"Invalid currency type!"};const t="siacoins"===e.currencytype?SiaAPI.siacoinsToHastings(e.amount).toString():e.amount;yield n.i(R.a)({url:"/wallet/"+e.currencytype,method:"POST",qs:{destination:e.destination,amount:t}}),yield n.i(b.put)(k.j()),yield n.i(b.put)(k.c()),yield n.i(b.put)(k.d()),yield n.i(b.put)(k.l("")),yield n.i(b.put)(k.k(""))}catch(e){P(e)}}function*m(){try{const e=yield n.i(R.a)("/consensus");yield n.i(b.put)(k.Q(e.synced))}catch(e){console.error("error fetching sync status: "+e.toString())}}function*f(){yield*n.i(C.takeEvery)(T.i,i)}function*p(){yield*n.i(C.takeEvery)(T.J,u)}function*w(){yield*n.i(C.takeEvery)(T.a,a)}function*y(){yield*n.i(C.takeEvery)(T.h,s)}function*E(){yield*n.i(C.takeEvery)(T.y,o)}function*h(){yield*n.i(C.takeEvery)(T.j,r)}function*g(){yield*n.i(C.takeEvery)(T.l,c)}function*v(){yield*n.i(C.takeEvery)(T.t,l)}function*S(){yield*n.i(C.takeEvery)(T.v,d)}function*N(){yield*n.i(C.takeEvery)(T.C,m)}Object.defineProperty(t,"__esModule",{value:!0}),t.watchCreateNewWallet=f,t.watchRecoverSeedSaga=p,t.watchGetLockStatus=w,t.watchUnlockWallet=y,t.watchLockWallet=E,t.watchGetBalance=h,t.watchGetTransactions=g,t.watchGetNewReceiveAddress=v,t.watchSendCurrency=S,t.watchGetSyncState=N;var C=n(121),b=(n.n(C),n(133)),R=(n.n(b),n(560)),k=n(29),T=n(88),D=n(520);const P=e=>{SiaAPI.showError({title:"Sia-UI Wallet Error",content:void 0!==e.message?e.message:e.toString()})}},61:function(e,t){e.exports=require("https")},71:function(e,t){e.exports=require("net")},72:function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=72},81:function(e,t){e.exports=require("child_process")},82:function(e,t){e.exports=require("punycode")},83:function(e,t){e.exports=require("tls")},84:function(e,t){function n(e){throw new Error("Cannot find module '"+e+"'.")}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=84},88:function(e,t,n){"use strict";t.a="GET_LOCK_STATUS";t.b="SET_LOCKED";t.c="SET_UNLOCKED";t.d="SET_ENCRYPTED";t.e="SET_UNENCRYPTED";t.i="CREATE_NEW_WALLET";t.w="CLOSE_PASSWORD_PROMPT";t.x="HANDLE_PASSWORD_CHANGE";t.g="SHOW_NEW_WALLET_DIALOG";t.f="DISMISS_NEW_WALLET_DIALOG";t.y="LOCK_WALLET";t.h="UNLOCK_WALLET";t.j="GET_BALANCE";t.k="SET_BALANCE";t.l="GET_TRANSACTIONS";t.m="SET_TRANSACTIONS";t.n="START_SEND_PROMPT";t.o="CLOSE_SEND_PROMPT";t.q="SET_SEND_AMOUNT";t.p="SET_SEND_ADDRESS";t.v="SEND_CURRENCY";t.r="SHOW_RECEIVE_PROMPT";t.s="HIDE_RECEIVE_PROMPT";t.u="SET_RECEIVE_ADDRESS";t.t="GET_NEW_RECEIVE_ADDRESS";t.z="SHOW_CONFIRMATION_DIALOG";t.A="HIDE_CONFIRMATION_DIALOG";t.B="SHOW_MORE_TRANSACTIONS";t.D="SET_SYNCSTATE";t.C="GET_SYNCSTATE";t.E="SHOW_NEW_WALLET_FORM";t.F="HIDE_NEW_WALLET_FORM";t.G="SET_USE_CUSTOM_PASSPHRASE";t.H="SHOW_SEED_RECOVERY_DIALOG";t.I="HIDE_SEED_RECOVERY_DIALOG";t.J="RECOVER_SEED";t.K="SEED_RECOVERY_STARTED";t.L="SEED_RECOVERY_FINISHED";t.M="SHOW_INIT_SEED_FORM";t.N="HIDE_INIT_SEED_FORM";t.O="SEED_INIT_STARTED";t.P="SEED_INIT_FINISHED";t.Q="SET_RESCANNING";t.R="SET_CONFIRMATION_ERROR"},991:function(e,t,n){n(37),n(26),e.exports=n(380)}},[991]);