(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(33)},28:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),s=n(8),i=n(2),l=n(17),u=n(18);n(28),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(29);var h=n(5),d=n(6),m=n(9),E=n(7),b=n(10),p=(n(30),function(e){var t=e.name,n=e.email,r=e.id;return a.a.createElement("div",{className:"tc cardBg dib br3 pa3 ma2 grow shadow-5"},a.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?150x150")}),a.a.createElement("div",null,a.a.createElement("h2",{className:"nameBg"},t),a.a.createElement("p",{className:"textBg"},n)))}),g=function(e){var t=e.robots;return a.a.createElement("div",null,t.map(function(e,n){return a.a.createElement(p,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},f=(n(31),function(e){e.searchfield;var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba searchBg",type:"search",placeholder:"Search robots...",onChange:t}))}),O=(n(32),function(e){return a.a.createElement("div",{style:{overflowY:"scroll",border:"2px solid black",height:"790px"}},e.children)}),v=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(m.a)(this,Object(E.a)(t).call(this,e))).state={hasError:!1},n}return Object(b.a)(t,e),Object(d.a)(t,[{key:"compenentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Something when wrong."):this.props.children}}]),t}(r.Component),R=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return o?a.a.createElement("h1",null,"Loading"):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",null,"RoboFriends"),a.a.createElement(f,{searchChange:n}),a.a.createElement(O,null,a.a.createElement(v,null,a.a.createElement(g,{robots:c}))))}}]),t}(r.Component),y=Object(s.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCES",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(R),S={searchField:""},j={isPending:!1,robots:[],error:""},w=Object(l.createLogger)(),C=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCES":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),_=Object(i.d)(C,Object(i.a)(u.a,w));c.a.render(a.a.createElement(s.a,{store:_},a.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.0b299d88.chunk.js.map