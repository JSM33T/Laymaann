function e(e,t,n,a,r,l,i){try{var o=e[l](i),m=o.value}catch(e){n(e);return}o.done?t(m):Promise.resolve(m).then(a,r)}import{acGetData as t,acInit as n,prettifyDate as a}from"../../global.js";let r=document.getElementById("fullName"),l=document.getElementById("emailId"),i=document.getElementById("bio"),o=document.getElementById("gender"),m=document.getElementById("dateJoined"),d=document.getElementById("userName"),u=document.getElementById("avatarPlaceHolder");function c(){var n;return n=function*(){let e=t("api/profile/getdetails");console.log(e);let n=(yield e).data;r.innerHTML=n.firstName+" "+n.lastName,i.innerHTML=n.bio,l.innerHTML=n.eMail,o.innerHTML="m"===n.gender?"Male":"f"===n.gender?"Female":"Other",m.innerHTML=a(n.dateElement),d.innerHTML="@"+n.userName.trim(),u.style.backgroundImage="url(/assets/images/avatars/default/"+n.avatarImg+".png)"},(c=function(){var t=this,a=arguments;return new Promise(function(r,l){var i=n.apply(t,a);function o(t){e(i,r,l,o,m,"next",t)}function m(t){e(i,r,l,o,m,"throw",t)}o(void 0)})}).apply(this,arguments)}n([function(){return c.apply(this,arguments)}]);
//# sourceMappingURL=dashboard.js.map