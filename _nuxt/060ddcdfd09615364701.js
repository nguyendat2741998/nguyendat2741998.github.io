(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{179:function(t,e,o){var content=o(185);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(37).default)("1d5bef2f",content,!0,{sourceMap:!1})},180:function(t,e,o){var content=o(187);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(37).default)("6ea78d0f",content,!0,{sourceMap:!1})},181:function(t,e,o){var content=o(189);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(37).default)("6759f5ab",content,!0,{sourceMap:!1})},184:function(t,e,o){"use strict";var r=o(179);o.n(r).a},185:function(t,e,o){(e=o(36)(!1)).push([t.i,".card-body{position:relative}.post-carousel{margin-left:-1.25rem;margin-right:-1.25rem}.card--post .post-comment{margin:1.25rem -1.25rem 0;border-top:1px solid #dee2e6!important;padding:.25rem 1.25rem}.card--post .post-comment .post-comment-list{list-style-type:none;margin:0;padding:0}.reaction-bar{padding:.25rem!important;height:30px!important}.brl--active{color:#007bff!important}.reaction-icon{padding:10px;transition:.2s;cursor:pointer;background-size:contain;background-position:50%;background-repeat:no-repeat}.reaction-icon.icon-sad{background-image:url(/images/reactions/sad.svg)}.reaction-icon.icon-haha{background-image:url(/images/reactions/haha.svg)}.reaction-icon.icon-like{background-image:url(/images/reactions/like.svg)}.reaction-icon.icon-love{background-image:url(/images/reactions/love.svg)}.reaction-icon.icon-angry{background-image:url(/images/reactions/angry.svg)}.scrolling-wrapper{overflow-x:auto;overflow-y:hidden;white-space:nowrap;padding-bottom:.5rem;margin-left:calc(1.25rem - 5px)}.scrolling-wrapper .img-wrapper .top-left{position:absolute;top:10px;left:10px}.scrolling-wrapper .img-wrapper .top-right{position:absolute;top:10px;right:10px}.scrolling-wrapper .img-wrapper{display:inline-block;height:15rem;width:10rem;background-size:cover;background-repeat:no-repeat;background-position:50%;border-radius:10px;margin:0 5px;position:relative}.page .card--post .post-social .post-social-reactions{display:flex;justify-content:space-between;border-top:1px solid #dee2e6!important;padding:.25rem 0;margin-bottom:-1.25rem}.page .card--post .post-social .post-social-reactions .reaction{color:#606770;font-weight:700;margin:0 .05rem;width:100%}.page .card--post .post-social .post-social-details{margin-left:-1.25rem;margin-right:-1.25rem;border-top:1px solid #dee2e6!important;padding:0 1.25rem}.page .card--post .post-social .post-social-details .post-social-details-item{display:inline-block}.page .card--post .post-social .post-social-details .post-social-details-item button,.page .card--post .post-social .post-social-details .post-social-details-item label,.page .card--post .post-social .post-social-details .post-social-details-item span{font-size:13px;color:#606770;vertical-align:top;margin-bottom:0}",""]),t.exports=e},186:function(t,e,o){"use strict";var r=o(180);o.n(r).a},187:function(t,e,o){(e=o(36)(!1)).push([t.i,".create-post .scrolling-wrapper .img-wrapper{height:10rem;width:7rem;transition:all 1s}.flip-list-enter,.flip-list-leave-to{opacity:0;width:0!important}",""]),t.exports=e},188:function(t,e,o){"use strict";var r=o(181);o.n(r).a},189:function(t,e,o){(e=o(36)(!1)).push([t.i,".gedf-card .card--post{transition:all 1s}.post-list-enter,.post-list-leave-to{opacity:0;height:0!important}",""]),t.exports=e},196:function(t,e,o){"use strict";o.r(e);o(2),o(1);var r=o(0),n=o(31),c=(o(8),{name:"cricleAvatar",data:()=>({}),props:{defaultSource:String,source:Object||String,setSize:String},computed:{src(){var t="";return this.source?this.source instanceof String?this.source:(this.source.thumbnails&&(t=this.source.thumbnails.location+this.source.thumbnails.nodes[0]),t):this.defaultSource||""},size(){var t=this.setSize||"36px";return"".concat(t,"px")}}}),l=o(11),d=Object(l.a)(c,(function(){var t=this.$createElement;return(this._self._c||t)("b-avatar",{attrs:{variant:"primary",src:this.src,size:this.size}})}),[],!1,null,null,null).exports,m={components:{"cricle-avatar":d},props:{avatar:Object,username:String,description:String,href:String}},v=Object(l.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"d-flex justify-content-start align-items-start"},[o("cricle-avatar",{attrs:{source:t.avatar,defaultSource:"/images/avatar-anonymous.png",setSize:"46"}}),t._v(" "),o("div",{staticClass:"user-information ml-2"},[o("h5",[t._v(t._s(t.username))]),t._v(" "),o("p",{staticClass:"text-muted"},[t._v(t._s(t.description))])])],1)}),[],!1,null,null,null).exports,h=(o(14),o(6)),f=o(24),_={createReaction:(t,data,e)=>Object(h.a)((function*(){var{success:o,error:r}=e;try{yield f.a.post(t,data,{progress:!1}).then(t=>o&&o(t.data)).catch(t=>r&&r(t))}catch(t){r&&r(t.toString())}}))(),updateReaction:(t,data,e)=>Object(h.a)((function*(){var{success:o,error:r}=e;try{yield f.a.patch(t,data,{progress:!1}).then(t=>o&&o(t.data)).catch(t=>r&&r(t))}catch(t){r&&r(t.toString())}}))(),deleteReaction:(t,e)=>Object(h.a)((function*(){var{success:o,error:r}=e;try{yield f.a.delete(t,{progress:!1}).then(t=>o&&o(t.data)).catch(t=>r&&r(t))}catch(t){r&&r(t.toString())}}))(),loadReactions:(t,e)=>Object(h.a)((function*(){var{success:o,error:r}=e;try{yield f.a.get(t,{progress:!1}).then(t=>o&&o(t.data)).catch(t=>r&&r(t))}catch(t){r&&r(t.toString())}}))()},y={components:{"user-item":v},props:{id:String,common:Object},data:()=>({reactions:[],next:"",show:!1}),created(){this.next=this.common.location,console.log(this.next)},methods:{load(){this.show=!0,_.loadReactions(this.next,{error:t=>{this.show=!1},success:t=>{this.next=t.next,t.results.forEach(t=>{this.reactions.push(t)}),this.show=!1}})}}},C={name:"postItem",components:{CricleAvatar:d,"reactions-modal":Object(l.a)(y,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-modal",{attrs:{id:t.id,size:"md",centered:"","hide-footer":"",scrollable:"",title:"Reactions"},on:{shown:function(e){return t.load()}}},[o("b-overlay",{attrs:{show:t.show,"no-wrap":""}}),t._v(" "),o("b-container",{staticStyle:{margin:"-1rem"},attrs:{fluid:""}},[o("b-col",[o("ul",{staticStyle:{"padding-left":"0","list-style-type":"none"}},t._l(t.reactions,(function(e,i){return o("li",{key:i},[o("b-row",{staticStyle:{padding:"8px 0"}},[o("b-col",[o("user-item",{attrs:{avatar:e.create_by.avatar,username:e.create_by.full_name,description:"h1llo anymore",href:"#"}})],1),t._v(" "),o("b-col",{staticClass:"d-flex justify-content-center align-items-center",attrs:{cols:"2"}},["H"===e.react_type?o("div",[o("span",{staticClass:"reaction-icon icon-haha"}),t._v("  Haha\n              ")]):"O"===e.react_type?o("div",[o("span",{staticClass:"reaction-icon icon-love"}),t._v("  Love\n              ")]):"S"===e.react_type?o("div",[o("span",{staticClass:"reaction-icon icon-sad"}),t._v("  Sad\n              ")]):"A"===e.react_type?o("div",[o("span",{staticClass:"reaction-icon icon-angry"}),t._v("  Angry\n              ")]):"L"===e.react_type?o("div",[o("span",{staticClass:"reaction-icon icon-like"}),t._v("  Like\n              ")]):t._e()])],1)],1)})),0)])],1)],1)}),[],!1,null,null,null).exports},props:{id:String,author:Object,content:String,create_at:String,files:null,reactions:null,comments:null},data:()=>({isShowReaction:!1,icon:"",name:"",cardBodyWidth:0,singleFile:null,myReaction:{react:"M",isActive:!1,node:""},delayPopover:{show:1e3,hide:100},showReactionsModal:!1}),created(){if(this.cardBodyWidth=document.getElementsByClassName("create-post")[0].offsetWidth,"User"==this.author.type){var t=this.author.data;this.icon=t.avatar,this.name=t.full_name}else if("Company"==this.author.type){var e=this.author.data;this.icon=e.logo,this.name=e.name}if(this.files&&1==this.files.length){var o=this.files[0],r=this.getThumbnail(o),n=this.thumbnailFitCard(r.size,this.cardBodyWidth-40);this.singleFile={style:{"background-image":"url("+r.src+")",width:n[0]+"px",height:n[1]+"px"}}}this._.has(this.reactions,"my_react")&&this._.has(this.reactions,"my_react.data.react_type")&&Object.assign(this.myReaction,{isActive:!0,react:this.reactions.my_react.data.react_type,node:this.reactions.my_react.node})},computed:{images(){return!this.files||this.files&&0==this.files.length?null:this.files.filter((t,e)=>"image"==t.mimetype.split("/")[0]).map((t,e,o)=>({icon:'<i class="fas fa-image"></i>',src:t.raw}))}},methods:{getThumbnail(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,o={src:"",size:[]};if(this._.has(t,"thumbnails.location")&&this._.has(t,"thumbnails.nodes")){for(var i in t.thumbnails.nodes){var s=t.thumbnails.nodes[i],r=t.thumbnails.nodes[parseInt(i)+1],a=s.split("x"),b=a[1].split(".")[0],n=[parseInt(a[0]),parseInt(b)];if(!r){Object.assign(o,{src:t.thumbnails.location+s,size:n});break}b=(a=r.split("x"))[1].split(".")[0];var c=[parseInt(a[0]),parseInt(b)];n[0]<=e&&e<=c[0]&&Object.assign(o,{src:t.thumbnails.location+s,size:c})}}return o},thumbnailFitCard:(t,e)=>[e,e/t[0]*t[1]],reactionIconOnClick(t,e){if(this.myReaction.isActive){var o=this.reactions.location+this.myReaction.node+"/";this.myReaction.react===e?_.deleteReaction(o,{success:t=>{Object.assign(this.myReaction,{isActive:!1,react:"D",node:""})},error:t=>{console.log(t)}}):_.updateReaction(o,{react_type:e},{success:t=>{console.log(e,this.myReaction,t),Object.assign(this.myReaction,{isActive:!0,react:t.react_type,node:t.id})},error:t=>{console.log(t)}})}else _.createReaction(this.reactions.location,{react_type:e},{success:t=>{Object.assign(this.myReaction,{isActive:!0,react:t.react_type,node:t.id})},error:t=>{console.log(t)}})}}},w=(o(184),Object(l.a)(C,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-card",{key:t.id,staticClass:"gedf-card card--post",attrs:{"no-body":""}},[o("b-card-header",[o("div",{staticClass:"d-flex justify-content-between align-items-center"},[o("div",{staticClass:"d-flex justify-content-between align-items-center"},[o("div",{staticClass:"mr-2"},[o("CricleAvatar",{attrs:{source:t.icon,defaultSource:"/images/avatar-anonymous.png",setSize:"36"}})],1),t._v(" "),o("div",{staticClass:"ml-2"},[o("div",{staticClass:"h5 m-0"},[t._v(t._s(t.name))]),t._v(" "),o("div",{staticClass:"h7 text-muted"},[o("span",[o("timeago",{attrs:{datetime:t.create_at,"auto-update":60}})],1)])])]),t._v(" "),o("div",[o("b-dropdown",{attrs:{id:"gedf-drop1",variant:"link",right:"","toggle-class":"text-decoration-none btn-link","no-caret":""},scopedSlots:t._u([{key:"button-content",fn:function(){return[o("i",{staticClass:"fas fa-ellipsis-v",staticStyle:{color:"#C62168"}})]},proxy:!0}])},[t._v(" "),o("div",{staticClass:"h6 dropdown-header"},[t._v("Configuration")]),t._v(" "),o("b-dropdown-item",{attrs:{href:"#"}},[t._v("Save")]),t._v(" "),o("b-dropdown-item",{attrs:{href:"#"}},[t._v("Hide")]),t._v(" "),o("b-dropdown-item",{attrs:{href:"#"}},[t._v("Report")])],1)],1)])]),t._v(" "),o("b-card-body",[t.content?o("div",{staticClass:"post-content"},[o("read-more",{attrs:{length:200,text:t.content,link:"#","max-chars":200}})],1):t._e(),t._v(" "),t.images?o("div",{staticClass:"post-carousel"},[o("div",{staticClass:"scrolling-wrapper"},[t.singleFile?o("figure",{staticClass:"img-wrapper",style:t.singleFile.style},[o("div",{staticClass:"top-left"},[o("div",{staticClass:"text-white"},[o("b-avatar",{attrs:{size:24,href:"#foobar",variant:"primary"},domProps:{innerHTML:t._s(t.singleFile.icon)}})],1)])]):t._l(t.images,(function(e,i){return o("figure",{key:i,staticClass:"img-wrapper",style:"background-image: url("+e.src+")"},[o("div",{staticClass:"top-left"},[o("div",{staticClass:"text-white"},[o("b-avatar",{attrs:{size:24,href:"#foobar",variant:"primary"},domProps:{innerHTML:t._s(e.icon)}})],1)])])}))],2)]):t._e(),t._v(" "),o("div",{staticClass:"post-social"},[t.reactions.summary||t.comments.parent_comments?o("div",{staticClass:"post-social-details"},[o("div",{staticClass:"post-social-details-item psdi-reactions-count"},[t.reactions.summary?o("b-button",{attrs:{variant:"link"},on:{click:function(e){return t.$root.$emit("bv::show::modal","modal-reaction-"+t.id,e.target)}}},[t._l(t.reactions.summary,(function(e,i){return o("span",{key:i},["H"==i?o("label",{staticClass:"rounded"},[o("span",{staticClass:"reaction-icon icon-haha"})]):"L"==i?o("label",{staticClass:"rounded"},[o("span",{staticClass:"reaction-icon icon-like"})]):"S"==i?o("label",{staticClass:"rounded"},[o("span",{staticClass:"reaction-icon icon-sad"})]):"A"==i?o("label",{staticClass:"rounded"},[o("span",{staticClass:"reaction-icon icon-angry"})]):t._e()])})),t._v(" "),o("span",{domProps:{innerHTML:t._s(t.reactions.count)}})],2):t._e(),t._v(" "),t.comments.parent_comments?o("span",[t._v("•")]):t._e(),t._v(" "),t.comments.parent_comments?o("b-button",{attrs:{variant:"link"}},[o("span",{domProps:{innerHTML:t._s(t.comments.parent_comments.count+" Comments")}})]):t._e(),t._v(" "),o("reactions-modal",{attrs:{id:"modal-reaction-"+t.id,common:t.reactions}})],1)]):t._e(),t._v(" "),o("div",{staticClass:"post-social-reactions"},[o("b-button",{class:["reaction","btn-reaction-like",{"brl--active":t.myReaction.isActive}],attrs:{size:"sm",variant:"light",id:"popover-"+t.id},on:{click:function(e){return t.reactionIconOnClick(t.id,"L")}}},["H"===t.myReaction.react?o("div",[o("span",{staticClass:"reaction-icon icon-haha"}),t._v("  Haha\n          ")]):"O"===t.myReaction.react?o("div",[o("span",{staticClass:"reaction-icon icon-love"}),t._v("  Love\n          ")]):"S"===t.myReaction.react?o("div",[o("span",{staticClass:"reaction-icon icon-sad"}),t._v("  Sad\n          ")]):"A"===t.myReaction.react?o("div",[o("span",{staticClass:"reaction-icon icon-angry"}),t._v("  Angry\n          ")]):o("div",[o("i",{staticClass:"far fa-thumbs-up"}),t._v(" Like\n          ")])]),t._v(" "),o("b-popover",{attrs:{target:"popover-"+t.id,triggers:"hover",placement:"top",delay:"delayPopover"}},[o("div",{staticClass:"d-flex justify-content-around align-items-center reaction-bar"},[o("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"reaction-icon",attrs:{title:"Thích"},on:{click:function(e){return t.reactionIconOnClick(t.id,"L")}}},[o("span",{staticClass:"reaction-icon icon-like"})]),t._v(" "),o("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"reaction-icon",attrs:{title:"Haha"},on:{click:function(e){return t.reactionIconOnClick(t.id,"H")}}},[o("span",{staticClass:"reaction-icon icon-haha"})]),t._v(" "),o("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"reaction-icon",attrs:{title:"Buồn"},on:{click:function(e){return t.reactionIconOnClick(t.id,"S")}}},[o("span",{staticClass:"reaction-icon icon-sad"})]),t._v(" "),o("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"reaction-icon",attrs:{title:"Yêu thích"},on:{click:function(e){return t.reactionIconOnClick(t.id,"L")}}},[o("span",{staticClass:"reaction-icon icon-love"})]),t._v(" "),o("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"reaction-icon",attrs:{title:"Phẫn nộ"},on:{click:function(e){return t.reactionIconOnClick(t.id,"A")}}},[o("span",{staticClass:"reaction-icon icon-angry"})])])]),t._v(" "),o("button",{staticClass:"btn reaction btn-sm btn-light",attrs:{type:"button"}},[o("i",{staticClass:"far fa-comments",attrs:{"aria-hidden":"true"}}),t._v(" Comment\n        ")]),t._v(" "),o("button",{staticClass:"btn reaction btn-sm btn-light",attrs:{type:"button"}},[o("i",{staticClass:"fas fa-share"})])],1)])])],1)}),[],!1,null,null,null).exports),x={uploadFile:(t,e)=>Object(h.a)((function*(){var{success:o,error:r}=e;try{var n=new FormData;n.append("raw",t),yield f.a.post("files/",n,{headers:{"Content-Type":"multipart/form-data"}}).then(t=>o&&o(t.data)).catch(t=>r&&r(t))}catch(t){r&&r(t.toString())}}))(),destroyFile:(t,e)=>Object(h.a)((function*(){var{success:o,error:r}=e;try{yield f.a.delete("files/"+t+"/").then(t=>o&&o(t.data)).catch(t=>r&&r(t))}catch(t){r&&r(t.toString())}}))(),readFile:(t,e)=>Object(h.a)((function*(){var{success:o,error:r}=e;try{yield f.a.get("files/"+t+"/").then(t=>o&&o(t.data)).catch(t=>r&&r(t))}catch(t){r&&r(t.toString())}}))()},k=o(83);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var S={components:{CricleAvatar:d},data:()=>({valid:!1,show:!1,medias:[],post:{content:"",content_type:0,object_id:"",status:"A",attaches:[]},currentFile:""}),computed:j({},Object(n.b)({loggedInUser:"loggedInUser"})),created(){Object.assign(this.post,{content_type:13,object_id:this.loggedInUser.id})},methods:{createPost(){this.show=!0,Object.assign(this.post,{attaches:this.medias.reduce((t,e,o)=>(t.push({object_id:e.id,content_type:35}),t),[])}),k.a.createPost(j({},this.post),{success:t=>{k.a.checkFields(t)&&(this.$store.commit("posts/addPost",t),Object.assign(this.post,{content:"",attaches:[]}),this.medias=[])},error:t=>{this.$bvToast.toast(t.toString(),{title:"An error occurred",toaster:"b-toaster-bottom-right",variant:"danger"})}}),this.show=!1},chooseImageVideo(){document.getElementById("imageVideoUpload").click()},handleImageVideo(){this.currentFile=this.$refs.file.files[0],x.uploadFile(this.currentFile,{success:t=>{this.medias.unshift({id:t.id,src:t.raw,icon:'<i class="fas fa-image"></i>'}),this.currentFile=""},error:t=>{this.$bvToast.toast(t.toString(),{title:"An error occurred",toaster:"b-toaster-bottom-right",variant:"danger"})}})},removeMedia(t){x.destroyFile(t.id,{success:()=>{this.medias.splice(this.medias.indexOf(t),1)},error:t=>{this.$bvToast.toast(t.toString(),{title:"An error occurred",toaster:"b-toaster-bottom-right",variant:"danger"})}})}}};o(186);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var F={components:{PostItem:w,PostForm:Object(l.a)(S,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-overlay",{attrs:{show:t.show,rounded:"sm"}},[o("b-card",{staticClass:"gedf-card create-post"},[o("b-form",{on:{submit:function(e){return e.preventDefault(),t.createPost(e)}}},[o("b-card-header",{staticClass:"pb-1 pt-1"},[o("p",{staticClass:"font-weight-bold mb-0"},[t._v("Create Post")])]),t._v(" "),o("div",{staticClass:"card-body"},[o("div",{staticClass:"tab-content",attrs:{id:"myTabContent"}},[o("div",{staticClass:"form-group mb-0"},[o("div",{staticClass:"d-flex justify-content-lg-between align-items-stretch"},[o("div",{staticClass:"pr-2"},[o("CricleAvatar",{attrs:{source:t.loggedInUser.avatar,defaultSource:"/images/avatar-anonymous.png",setSize:"36"}})],1),t._v(" "),o("div",{staticClass:"text-block w-100"},[o("b-textarea",{staticClass:"form-control",staticStyle:{border:"none",resize:"none"},attrs:{rows:"3",placeholder:"what are you thinking?"},model:{value:t.post.content,callback:function(e){t.$set(t.post,"content",e)},expression:"post.content"}})],1)]),t._v(" "),t.medias&&t.medias.length>0?o("div",{staticClass:"scrolling-wrapper mt-2",staticStyle:{"margin-left":"-5px"}},[o("transition-group",{attrs:{name:"flip-list",tag:"div"}},t._l(t.medias,(function(e){return o("figure",{key:e.id,staticClass:"img-wrapper",style:"background-image: url("+e.src+")"},[o("div",{staticClass:"top-left"},[o("div",{staticClass:"text-white"},[o("b-avatar",{attrs:{size:24,href:"#foobar",variant:"primary"},domProps:{innerHTML:t._s(e.icon)}})],1)]),t._v(" "),o("div",{staticClass:"top-right"},[o("div",{staticClass:"text-dark"},[o("b-avatar",{attrs:{size:24,href:"#foobar",variant:"danger"},on:{click:function(o){return t.removeMedia(e)}}},[o("i",{staticClass:"fas fa-times-circle"})])],1)])])})),0)],1):t._e()])])]),t._v(" "),o("b-card-footer",{staticStyle:{"background-color":"#fff"}},[o("div",{staticClass:"d-flex justify-content-between align-items-center"},[o("div",{staticClass:"attachment"},[o("b-button",{staticClass:"font-weight-bold btn-sm",attrs:{variant:"light"},on:{click:function(e){return t.chooseImageVideo()}}},[o("i",{staticClass:"fas fa-photo-video",staticStyle:{color:"#C62168"}}),t._v(" Photo/Video\n            ")]),t._v(" "),o("b-button",{staticClass:"font-weight-bold btn-sm",attrs:{variant:"light"}},[o("i",{staticClass:"fas fa-paste",staticStyle:{color:"#00539C"}}),t._v(" Files\n            ")]),t._v(" "),o("input",{ref:"file",attrs:{id:"imageVideoUpload",type:"file",accept:".jpg, .jpeg, .tif, .gif, .bmp, .png, .mov, .mp4",hidden:""},on:{change:function(e){return t.handleImageVideo()}}})],1),t._v(" "),o("div",{staticClass:"create-post"},[o("b-button",{staticClass:"font-weight-bold btn-sm",attrs:{variant:"light",disabled:t.valid,type:"submit"}},[o("i",{staticClass:"fas fa-plus-circle text-primary"}),t._v(" Post\n            ")])],1)])])],1)],1)],1)}),[],!1,null,null,null).exports,CricleAvatar:d},head:{title:"Aj"},data:()=>({offset:{top:70,bottom:20}}),created(){this.initPlugins(),this.initialScreen()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(n.b)({loggedInUser:"loggedInUser",countFollowers:"follows/countFollowers",countFollowing:"follows/countFollowing",posts:"posts/getPosts"})),methods:{scroll(t){window.onscroll=()=>{document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight&&console.log("aaaaaaaaaaaa")}},initialScreen(){this.$store.watch(()=>this.$store.getters["posts/getError"],(t,e)=>{this.$bvToast.toast("An error occurred, please check the connection or try again in a few minutes!",{title:"An error occurred",toaster:"b-toaster-bottom-right",variant:"danger"})}),this.$store.dispatch("posts/tryNext"),this.$store.dispatch("follows/updateReport")},initPlugins(){}}},I=(o(188),Object(l.a)(F,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"container-md page page-index"},[o("div",{staticClass:" gedf-wrapper"},[o("div",{staticClass:"row"},[o("div",{staticClass:"col-sm-4 col-md-4 col-lg-3"},[o("div",{directives:[{name:"sticky",rawName:"v-sticky"}],attrs:{"z-index":99,"sticky-offset":"offset"}},[o("b-card",{staticClass:"gedf-card card-profile-user",attrs:{"no-body":""}},[o("b-card-body",[o("div",{staticClass:"d-flex justify-content-between align-items-start"},[o("div",{staticClass:"item pr-2 align-self-start"},[o("CricleAvatar",{attrs:{source:t.loggedInUser.avatar,defaultSource:"/images/avatar-anonymous.png",setSize:"36"}})],1),t._v(" "),o("div",{staticClass:"item flex-fill"},[o("div",{staticClass:"h5"},[t._v(t._s(t.loggedInUser.username))]),t._v(" "),o("div",{staticClass:"h7 text-muted"},[t._v("Fullname : "+t._s(t.loggedInUser.full_name))])])]),t._v(" "),o("div",{staticClass:"h7"},[t._v("\n                Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js,\n                etc.\n              ")])]),t._v(" "),o("b-list-group",{staticClass:"list-group-flush"},[o("b-list-group-item",[o("div",{staticClass:"h6 text-muted"},[t._v("Followers")]),t._v(" "),o("div",{staticClass:"h5"},[t._v(t._s(t.countFollowers))])]),t._v(" "),o("li",{staticClass:"list-group-item"},[o("div",{staticClass:"h6 text-muted"},[t._v("Following")]),t._v(" "),o("div",{staticClass:"h5"},[t._v(t._s(t.countFollowing))])]),t._v(" "),o("li",{staticClass:"list-group-item"},[t._v("Vestibulum at eros")])],1)],1),t._v(" "),o("b-card",{staticClass:"gedf-card card-groups"},[o("h5",[o("i",{staticClass:"fas fa-user-friends text-primary"}),t._v(" Groups\n            ")]),t._v(" "),o("b-list-group",[o("b-list-group-item",{attrs:{href:"#some-link"}},[t._v("Nhóm 16DTHJA1")]),t._v(" "),o("b-list-group-item",{attrs:{href:"#",active:""}},[t._v("VJIT 2019")]),t._v(" "),o("b-list-group-item",{attrs:{href:"#"}},[t._v("Khoa công nghệ thông tin")]),t._v(" "),o("b-list-group-item",{attrs:{href:"#foobar",disabled:""}},[t._v("Đai học HUTECH")])],1),t._v(" "),o("b-link",{attrs:{href:"#foo"}},[o("i",{staticClass:"fas fa-users-medical"}),t._v(" Create new group\n            ")])],1)],1)]),t._v(" "),o("div",{staticClass:"col-sm-8 col-md-8 col-lg-6"},[o("PostForm"),t._v(" "),t._l(t.posts,(function(t){return o("div",{key:t.id},[o("transition-group",{attrs:{name:"post-list",tag:"div"}},[o("PostItem",{key:"post.id",attrs:{id:t.id,author:t.author,content:t.content,create_at:t.create_at,files:t.files,reactions:t.reactions,comments:t.comments}})],1)],1)}))],2),t._v(" "),o("div",{staticClass:"col-lg-3 d-none d-lg-block"},[o("div",{directives:[{name:"sticky",rawName:"v-sticky"}],attrs:{"z-index":99,"sticky-offset":"offset"}},[o("b-card",{staticClass:"gedf-card card-profile-user",attrs:{"no-body":""}},[o("b-card-body",[o("div",{staticClass:"d-flex justify-content-between align-items-start"},[o("div",{staticClass:"item pr-2 align-self-start"},[o("CricleAvatar",{attrs:{source:t.loggedInUser.avatar,defaultSource:"/images/avatar-anonymous.png",setSize:"36"}})],1),t._v(" "),o("div",{staticClass:"item flex-fill"},[o("div",{staticClass:"h5"},[t._v(t._s(t.loggedInUser.username))]),t._v(" "),o("div",{staticClass:"h7 text-muted"},[t._v("Fullname : "+t._s(t.loggedInUser.full_name))])])]),t._v(" "),o("div",{staticClass:"h7"},[t._v("\n                Developer of web applications, JavaScript, PHP, Java, Python, Ruby, Java, Node.js,\n                etc.\n              ")])]),t._v(" "),o("b-list-group",{staticClass:"list-group-flush"},[o("b-list-group-item",[o("div",{staticClass:"h6 text-muted"},[t._v("Followers")]),t._v(" "),o("div",{staticClass:"h5"},[t._v(t._s(t.countFollowers))])]),t._v(" "),o("li",{staticClass:"list-group-item"},[o("div",{staticClass:"h6 text-muted"},[t._v("Following")]),t._v(" "),o("div",{staticClass:"h5"},[t._v(t._s(t.countFollowing))])]),t._v(" "),o("li",{staticClass:"list-group-item"},[t._v("Vestibulum at eros")])],1)],1)],1)])])])])}),[],!1,null,null,null));e.default=I.exports}}]);