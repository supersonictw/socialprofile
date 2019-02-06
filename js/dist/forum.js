module.exports=function(t){var o={};function i(n){if(o[n])return o[n].exports;var a=o[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}return i.m=t,i.c=o,i.d=function(t,o,n){i.o(t,o)||Object.defineProperty(t,o,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,o){if(1&o&&(t=i(t)),8&o)return t;if(4&o&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&o&&"string"!=typeof t)for(var a in t)i.d(n,a,function(o){return t[o]}.bind(null,a));return n},i.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(o,"a",o),o},i.o=function(t,o){return Object.prototype.hasOwnProperty.call(t,o)},i.p="",i(i.s=11)}([function(t,o){t.exports=flarum.core.compat["components/Badge"]},function(t,o){t.exports=flarum.core.compat["components/Modal"]},function(t,o){t.exports=flarum.core.compat["components/Button"]},function(t,o){t.exports=flarum.core.compat["helpers/icon"]},function(t,o){t.exports=flarum.core.compat.Model},function(t,o){t.exports=flarum.core.compat["models/User"]},function(t,o){t.exports=flarum.core.compat.extend},function(t,o){t.exports=flarum.core.compat["components/UserCard"]},function(t,o){t.exports=flarum.core.compat.Component},function(t,o){t.exports=flarum.core.compat["components/Dropdown"]},function(t,o){t.exports=flarum.core.compat["utils/ItemList"]},function(t,o,i){"use strict";i.r(o);var n=i(4),a=i.n(n),e=i(5),s=i.n(e),r=i(6),c=i(7),l=i.n(c),f=i(0),u=i.n(f);function p(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,t.__proto__=o}var b=i(1),h=i.n(b),d=i(2),g=i.n(d),v=i(8),y=i.n(v),x=i(9),w=i.n(x),B=i(10),k=i.n(B),N=i(3),S=i.n(N),O=function(t){function o(){return t.apply(this,arguments)||this}p(o,t),o.initProps=function(o){t.initProps.call(this,o),o.className="icondropdown",o.buttonClassName="Button Button--icon",o.menuClassName="social-dropdown-menu"};var i=o.prototype;return i.init=function(){t.prototype.init.call(this),this.icons={social:["fas fa-globe","fab fa-amazon","fab fa-angellist","fab fa-apple","fab fa-behance","fab fa-bitbucket","fab fa-codepen","fab fa-connectdevelop","fab fa-dashcube","fab fa-delicious","fab fa-deviantart","fab fa-digg","fab fa-dribbble","fab fa-dropbox","fab fa-drupal","fab fa-facebook","fab fa-flickr","fab fa-foursquare","fab fa-get-pocket","fab fa-git","fab fa-github","fab fa-github-alt","fab fa-google","fab fa-google-plus","fab fa-google-wallet","fab fa-hacker-news","fab fa-instagram","fab fa-ioxhost","fab fa-joomla","fab fa-jsfiddle","fab fa-lastfm","fab fa-leanpub","fab fa-linkedin","fab fa-medium","fab fa-odnoklassniki","fab fa-opencart","fab fa-pagelines","fab fa-paypal","fab fa-pied-piper-alt","fab fa-pinterest-p","fab fa-qq","fab fa-reddit","fab fa-renren","fab fa-sellsy","fas fa-share-alt","fab fa-shirtsinbulk","fab fa-simplybuilt","fab fa-skyatlas","fab fa-skype","fab fa-slack","fab fa-slideshare","fab fa-soundcloud","fab fa-spotify","fab fa-stack-exchange","fab fa-stack-overflow","fab fa-steam","fab fa-stumbleupon","fab fa-tencent-weibo","fab fa-trello","fab fa-tripadvisor","fab fa-tumblr","fab fa-twitch","fab fa-twitter","fab fa-viacoin","fab fa-vimeo","fab fa-vine","fab fa-vk","fab fa-weibo","fab fa-weixin","fab fa-whatsapp","fab fa-wordpress","fab fa-xing","fab fa-y-combinator","fab fa-yelp","fab fa-youtube"]}},i.view=function(){return this.props.children=this.items().toArray(),t.prototype.view.call(this)},i.getButtonContent=function(){var t=this;return[/^favicon(-\w+)?$/.test(this.props.selection())?[m("img",{className:"favicon-grey"===this.props.selection()?"social-greyscale-button":"social-button",style:{width:"14px",height:"14px"},alt:"favicon",src:this.props.favicon(),onerror:function(){t.props.favicon("none"),t.select(t.icons.social[0])}})]:S()(this.props.selection(),{}),this.props.caretIcon?S()(this.props.caretIcon,{className:"Button-caret"}):""]},i.items=function(){var t=this,o=new k.a;return"none"!==this.props.favicon()&&(o.add("favicon",m("div",{onclick:function(){return t.select("favicon")},role:"button",className:"iconpicker-item "+("favicon"===this.props.selection()?"iconpicker--highlighted":""),title:"Favicon"},m("img",{className:"iconpicker-image-"+this.props.index(),alt:"favicon",style:{width:"14px",height:"14px",margin:"0 2px 0 2px"},src:this.props.favicon()})),102),o.add("favicon-grey",m("div",{onclick:function(){return t.select("favicon-grey")},role:"button",className:"iconpicker-item-invt "+("favicon-grey"===this.props.selection()?"iconpicker--highlighted":""),title:"Grey Favicon"},m("img",{className:"social-greyscale-button iconpicker-image-"+this.props.index(),alt:"favicon",style:{width:"14px",height:"14px",margin:"0 2px 0 2px"},src:this.props.favicon()})),101)),this.icons.social.forEach(function(i){var n=m.prop();t.props.selection()===i&&n("iconpicker--highlighted"),o.add(i.replace(/ /,"-"),m("div",{onclick:function(){return t.select(i)},className:"iconpicker-item "+n(),role:"button",title:"."+i},S()(i,{className:"social-icon"})),100)}),o},i.select=function(t){this.props.selection(t)},o}(w.a),j=function(t){function o(){return t.apply(this,arguments)||this}p(o,t);var i=o.prototype;return i.init=function(){t.prototype.init.call(this),this.button=this.props.button},i.view=function(){return m("div",{className:"Form-group form-group-social",id:"socialgroup-"+this.button.index()},m("input",{type:"text",className:"SocialFormControl SocialTitle",placeholder:app.translator.trans("fof-socialprofile.forum.edit.title"),tabIndex:2*(this.button.index()+1)-1,bidi:this.button.title}),O.component({selection:this.button.icon,favicon:this.button.favicon,index:this.button.index}),m("input",{type:"text",className:"SocialFormControl Socialurl",placeholder:app.translator.trans("fof-socialprofile.forum.edit.url"),tabIndex:2*(this.button.index()+1),value:this.button.url(),onchange:m.withAttr("value",this.onUrlChange.bind(this))}),m("input",{type:"hidden",className:"SocialFormControl SocialIcon",id:"icon"+this.button.index(),bidi:this.button.icon}),m("input",{type:"hidden",className:"SocialFormControl Socialfavicon",id:"icon"+this.button.index(),bidi:this.button.favicon}))},i.onUrlChange=function(t){var o=this;this.button.url(t),clearTimeout(this.waittilfinsihed),"fas fa-circle-notch fa-spin"!==this.button.icon()&&(this.button.icon("fas fa-circle-notch fa-spin"),this.button.favicon("none")),this.waittilfinsihed=setTimeout(function(){if(/(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/.test(o.button.url().toLowerCase())){var t=o.button.url().replace(/(:\/\/[^\/]+).*$/,"$1")+"/favicon.ico";o.button.favicon(t),o.button.icon("favicon"),m.redraw()}else o.button.icon("fas fa-fa-globe"),o.button.favicon("none"),m.redraw()},1e3)},o}(y.a),E=function(t){function o(){return t.apply(this,arguments)||this}p(o,t);var i=o.prototype;return i.init=function(){var o=this;t.prototype.init.call(this),this.buttons=[];var i=this.props.user.socialButtons();i.length?i.forEach(function(t,i){""!==t.title&&o.createButtonObject(i,t)}):this.createButtonObject(0)},i.className=function(){return"SocialButtonsModal Modal--small"},i.title=function(){return app.translator.trans("fof-socialprofile.forum.edit.headtitle")},i.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form"},this.buttons.map(function(t){return j.component({button:t})}),m("div",{className:"Form-group",id:"submit-button-group"},m("div",{className:"Button Button--primary EditSocialButtons-add",style:"margin-left: 1%;",onclick:this.addSocialButton.bind(this)},m("i",{className:"fas fa-fw fa-plus"})),m("div",{className:"Button Button--primary EditSocialButtons-del",style:"margin-left: 1%;",onclick:this.delSocialButton.bind(this)},m("i",{className:"fas fa-fw fa-minus"})),g.a.component({type:"submit",style:"float: right;",className:"Button Button--primary EditSocialButtons-save",loading:this.loading,children:app.translator.trans("fof-socialprofile.forum.edit.submit")}))))},i.data=function(){var t=[];return this.buttons.forEach(function(o,i){""!==o.title()&&(t[i]={},t[i].title=o.title(),t[i].url=o.url(),t[i].icon=o.icon(),t[i].favicon=o.favicon())}),{socialButtons:JSON.stringify(t)}},i.onsubmit=function(t){var o=this;t.preventDefault(),this.loading=!0,this.props.user.save(this.data(),{errorHandler:this.onerror.bind(this)}).then(this.hide.bind(this)).then($("#app").trigger("refreshSocialButtons",[this.data().socialButtons])).catch(function(){o.loading=!1,m.redraw()})},i.addSocialButton=function(){var t=this;this.createButtonObject(this.buttons.length),m.redraw(),$("document").ready(function(){$("#socialgroup-"+(t.buttons.length-1)).slideDown()})},i.delSocialButton=function(){var t=this,o=this.buttons.length-1;$("#socialgroup-"+o).slideUp("normal",function(){t.buttons.splice(o,1),m.redraw()})},i.createButtonObject=function(t,o){void 0===o&&(o=null),null==o?(this.buttons[t]={},this.buttons[t].index=m.prop(t),this.buttons[t].favicon=m.prop("none"),this.buttons[t].title=m.prop(""),this.buttons[t].url=m.prop(""),this.buttons[t].icon=m.prop("fas fa-globe")):(this.buttons[t]={},this.buttons[t].index=m.prop(t),this.buttons[t].favicon=m.prop(o.favicon),this.buttons[t].title=m.prop(o.title),this.buttons[t].url=m.prop(o.url),this.buttons[t].icon=m.prop(o.icon))},o}(h.a),C=function(t){function o(){return t.apply(this,arguments)||this}p(o,t);var i=o.prototype;return i.init=function(){var o=this;t.prototype.init.call(this),this.buttons=[],this.index=this.props.index;var i=this.props.user.socialButtons();this.button=i[this.index],i.forEach(function(t,i){o.createButtonObject(i,t)})},i.className=function(){return"SocialButtonsModal Modal--small"},i.title=function(){return app.translator.trans("fof-socialprofile.forum.edit.deletetitle")},i.content=function(){return m("div",{className:"Modal-body"},m("div",{className:"Form"},m("h3",{className:"SocialProfile-title"},this.button.title),m("p",{className:"SocialProfile-url"},this.button.url),m("div",{className:"Form-group",id:"submit-button-group"},g.a.component({type:"submit",className:"Button Button--primary EditSocialButtons-delete",loading:this.loading,children:app.translator.trans("fof-socialprofile.forum.edit.delete")}))))},i.data=function(){var t=[];return this.buttons.forEach(function(o,i){""!==o.title()&&(t[i]={},t[i].title=o.title(),t[i].url=o.url(),t[i].icon=o.icon(),t[i].favicon=o.favicon())}),{socialButtons:JSON.stringify(t)}},i.onsubmit=function(t){var o=this;t.preventDefault(),this.loading=!0,this.buttons.splice(this.index,1),this.props.user.save(this.data(),{errorHandler:this.onerror.bind(this)}).then(this.hide.bind(this)).then($("#app").trigger("refreshSocialButtons",[this.data().socialButtons])).catch(function(){o.loading=!1,m.redraw()})},i.createButtonObject=function(t,o){void 0===o&&(o=null),null==o?(this.buttons[t]={},this.buttons[t].index=m.prop(t),this.buttons[t].favicon=m.prop("none"),this.buttons[t].title=m.prop(""),this.buttons[t].url=m.prop(""),this.buttons[t].icon=m.prop("fas fa-globe")):(this.buttons[t]={},this.buttons[t].index=m.prop(t),this.buttons[t].favicon=m.prop(o.favicon),this.buttons[t].title=m.prop(o.title),this.buttons[t].url=m.prop(o.url),this.buttons[t].icon=m.prop(o.icon))},o}(h.a);app.initializers.add("fof/socialprofile",function(){s.a.prototype.socialButtons=a.a.attribute("socialButtons",function(t){return JSON.parse(t||"[]")}),Object(r.extend)(l.a.prototype,"infoItems",function(t){var o=this;this.isSelf=app.session.user===this.props.user,this.canEdit=!!app.session.user&&app.session.user.data.attributes.canEdit,this.buttons=this.props.user.socialButtons(),this.buttons.length?(this.buttons.forEach(function(i,n){if(""!==i.title&&""!==i.icon&&""!==i.url){var a="",e="";"favicon"===i.icon||"favicon-grey"===i.icon?(a='background-image: url("'+i.favicon+'");background-size: 60%;background-position: 50% 50%;background-repeat: no-repeat;',e="favicon-grey"===i.icon?i.icon+"-"+n+" social-button social-greyscale-button":i.icon+"-"+n+" social-button"):(a="",e=i.icon+"-"+n+" social-button"),t.add(e+(o.deleting?" social-button--highlightable":""),u.a.component({type:"social social-icon-"+n,icon:i.icon,label:i.title,style:a,onclick:function(){o.deleting?app.modal.show(new C({user:o.props.user,index:n})):window.open(i.url,"_blank")}}))}}),this.isSelf?t.add("settings social-button",u.a.component({type:"social social-settings",icon:"fas fa-cog",label:app.translator.trans("fof-socialprofile.forum.edit.edit"),onclick:function(){app.modal.show(new E({user:o.props.user}))}}),-1):this.canEdit&&t.add("settings social-button",u.a.component({type:"social social-moderate "+(this.deleting?"social-moderate--highlighted":""),icon:"fas fa-exclamation-triangle",label:app.translator.trans("fof-socialprofile.forum.edit.delete"),onclick:function(){o.deleting=!o.deleting}}),-1)):this.isSelf&&t.add("settings social-button",u.a.component({type:"social null-social-settings",icon:"fas fa-plus",label:app.translator.trans("fof-socialprofile.forum.edit.add"),onclick:function(){app.modal.show(new E({user:o.props.user}))}}),-1)})})}]);
//# sourceMappingURL=forum.js.map