(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},19:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},20:function(e,t,a){e.exports=a(49)},26:function(e,t,a){},27:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),i=a.n(r),c=(a(26),a(19)),o=a.n(c),u=(a(27),a(2)),s=a(3),h=a(6),m=a(4),d=a(1),b=a(7),g=a(5),p=a.n(g),f=function(){function e(){Object(u.a)(this,e)}return Object(s.a)(e,null,[{key:"authenticateUser",value:function(e){localStorage.setItem("token",e)}},{key:"isUserAuthenticated",value:function(){return null!==localStorage.getItem("token")}},{key:"deauthenticateUser",value:function(){localStorage.removeItem("token")}},{key:"getToken",value:function(){return localStorage.getItem("token")}},{key:"getUserId",value:function(){return localStorage.getItem("userId")}}]),e}(),v=a(9),E=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={name:"",password:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(b.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.name,l=a.password;p.a.post("/login",{name:n,password:l}).then(function(e){console.log("Result:",e),f.authenticateUser(e.data.token),console.log("token:",f.getToken()),t.setState({name:"",password:""}),t.props.refreshPage()},function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Name:",l.a.createElement("input",{type:"text",value:this.state.name,onChange:this.handleChange,name:"name",required:!0})),l.a.createElement("label",null,"Password:",l.a.createElement("input",{type:"password",value:this.state.password,onChange:this.handleChange,name:"password",required:!0})),l.a.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(n.Component),O=(a(47),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={name:"",email:"",password:"",repeat_password:"",message:""},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a}return Object(b.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state,n=a.name,l=a.password,r=a.repeat_password,i=a.email;l!=r&&this.setState({message:"Password does not match with repeat password field!<br/>"}),p.a.post("/register",{name:n,email:i,password:l}).then(function(e){console.log(e)}).then(function(e){t.props.refreshPageAndGoToLogin()},function(e){console.log(e),document.location.reload(!0)})}},{key:"render",value:function(){return l.a.createElement("div",{id:"signup"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Name:",l.a.createElement("input",{type:"text",value:this.state.name,onChange:this.handleChange,name:"name",required:!0})),l.a.createElement("br",null),l.a.createElement("label",null,"Email:",l.a.createElement("input",{type:"text",value:this.state.email,onChange:this.handleChange,name:"email",required:!0})),l.a.createElement("br",null),l.a.createElement("label",null,"Password:",l.a.createElement("input",{type:"password",value:this.state.password,onChange:this.handleChange,name:"password",required:!0})),l.a.createElement("br",null),l.a.createElement("label",null,"Repead-Password:",l.a.createElement("input",{type:"password",value:this.state.repeat_password,onChange:this.handleChange,name:"repeat_password",required:!0})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit"})),l.a.createElement("div",{id:"message"},this.state.message))}}]),t}(n.Component)),j=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={products:[]},a}return Object(b.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;p.a.get("/products",{headers:{Authorization:"Bearer "+f.getToken()}}).then(function(t){console.log(t.data),e.setState({products:t.data})})}},{key:"render",value:function(){var e=this.state.products.map(function(e){return l.a.createElement("div",null,e.name,l.a.createElement("br",null),l.a.createElement("img",{class:"itemShop",height:"300px",width:"500px",src:e.image}),l.a.createElement("br",null),"TOP: ",e.price)});return l.a.createElement("tbody",null," ",e," ")}}]),t}(n.Component),y=(a(11),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={name:"",article:""},a.handleChangeArticle=a.handleChangeArticle.bind(Object(d.a)(a)),a.handleSubmitArticle=a.handleSubmitArticle.bind(Object(d.a)(a)),a}return Object(b.a)(t,e),Object(s.a)(t,[{key:"handleChangeArticle",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmitArticle",value:function(e){e.preventDefault();var t=this.state,a=t.name,n=t.article;p.a.post("/addarticle",{name:a,article:n},{headers:{Authorization:"Bearer "+f.getToken()}}).then(function(e){console.log(e)}).then(function(e){console.log(e.data)},function(e){console.log(e),document.location.reload(!0)})}},{key:"render",value:function(){return l.a.createElement("div",{id:"addArticle"},l.a.createElement("form",{onSubmit:this.handleSubmitArticle},l.a.createElement("h5",null,"Write your article"),l.a.createElement("label",null,"Name:",l.a.createElement("input",{type:"text",value:this.state.name,onChange:this.handleChangeArticle,name:"name",required:!0})),l.a.createElement("br",null),l.a.createElement("label",null,"Article:",l.a.createElement("textarea",{rows:"5",cols:"30",value:this.state.article,onChange:this.handleChangeArticle,name:"article",required:!0})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(n.Component)),k=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={articles:[]},a}return Object(b.a)(t,e),Object(s.a)(t,[{key:"componentWillMount",value:function(){var e=this;p.a.get("/articles",{headers:{Authorization:"Bearer "+f.getToken()}}).then(function(t){console.log(t.data),e.setState({articles:t.data}),e.props.refreshPage()})}},{key:"render",value:function(){var e=this.state.articles.map(function(e){return l.a.createElement("tr",null,l.a.createElement("h5",{class:"five"},e.name),l.a.createElement("p",null,e.article))});return l.a.createElement("tbody",null," ",e," ")}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={name:"",article:""},a.handleChangeArticle3=a.handleChangeArticle3.bind(Object(d.a)(a)),a.handleSubmitArticle3=a.handleSubmitArticle3.bind(Object(d.a)(a)),a}return Object(b.a)(t,e),Object(s.a)(t,[{key:"handleChangeArticle3",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmitArticle3",value:function(e){alert("update"),e.preventDefault();var t=this.state,a=t.name,n=t.article;p.a.post("/updatearticle",{name:a,article:n},{headers:{Authorization:"Bearer "+f.getToken()}}).then(function(e){console.log(e)}).then(function(e){console.log(e.data)})}},{key:"render",value:function(){return l.a.createElement("div",{id:"updateArticle"},l.a.createElement("form",{onSubmit:this.handleSubmitArticle3},l.a.createElement("h5",null,"Update article"),l.a.createElement("label",null,"Name:",l.a.createElement("input",{type:"text",value:this.state.name,onChange:this.handleChangeArticle3,name:"name",required:!0})),l.a.createElement("br",null),l.a.createElement("label",null,"Article:",l.a.createElement("textarea",{rows:"5",cols:"30",value:this.state.article,onChange:this.handleChangeArticle3,name:"article",required:!0})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={name:""},a.handleChangeArticle4=a.handleChangeArticle4.bind(Object(d.a)(a)),a.handleSubmitArticle4=a.handleSubmitArticle4.bind(Object(d.a)(a)),a}return Object(b.a)(t,e),Object(s.a)(t,[{key:"handleChangeArticle4",value:function(e){this.setState(Object(v.a)({},e.target.name,e.target.value))}},{key:"handleSubmitArticle4",value:function(e){alert("delete"),e.preventDefault();var t=this.state.name;p.a.post("/deletearticle",{name:t},{headers:{Authorization:"Bearer "+f.getToken()}}).then(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:this.handleSubmitArticle4},l.a.createElement("h5",null,"Delete article"),l.a.createElement("label",null,"Name:",l.a.createElement("input",{type:"text",value:this.state.name,onChange:this.handleChangeArticle4,name:"name",required:!0})),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Submit"})))}}]),t}(n.Component),S=(a(48),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(h.a)(this,Object(m.a)(t).call(this,e))).state={show:!1},a.refreshPage=a.refreshPage.bind(Object(d.a)(a)),a.refreshPageAndGoToLogin=a.refreshPageAndGoToLogin.bind(Object(d.a)(a)),a}return Object(b.a)(t,e),Object(s.a)(t,[{key:"toggle",value:function(){this.setState({shown:!this.state.shown})}},{key:"refreshPage",value:function(){this.forceUpdate()}},{key:"refreshPageAndGoToLogin",value:function(){this.refreshPage(),this.toggle()}},{key:"logout",value:function(){alert("logout"),p.a.post("/logout",{token:f.getToken()}).then(function(e){console.log(e)}),f.deauthenticateUser(),this.refreshPage()}},{key:"render",value:function(){var e={display:this.state.shown?"none":"block"},t={display:this.state.shown?"block":"none"};return l.a.createElement("div",null,f.isUserAuthenticated()?l.a.createElement("div",null,l.a.createElement("div",{id:"logout"},l.a.createElement("button",{onClick:this.logout.bind(this)},"LogOut")),l.a.createElement("div",{class:"center-div"},l.a.createElement(j,null)),l.a.createElement("h3",null,"ARTICLES "),l.a.createElement("div",null," ",l.a.createElement(k,{refreshPage:this.refreshPage})," "),l.a.createElement("div",{id:"writeArticle"}," ",l.a.createElement(y,{refreshPage:this.refreshPage})," "),l.a.createElement("div",null,l.a.createElement(A,null)),l.a.createElement("div",null,l.a.createElement(C,null))):l.a.createElement("div",{id:"login"},l.a.createElement("div",{style:e},l.a.createElement(E,{refreshPage:this.refreshPage}),l.a.createElement("br",null),l.a.createElement("button",{onClick:this.toggle.bind(this)},"Register")),l.a.createElement("div",{style:t},l.a.createElement(O,{refreshPageAndGoToLogin:this.refreshPageAndGoToLogin}))))}}]),t}(n.Component));var w=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:o.a,className:"App-logo",alt:"logo"}),l.a.createElement(S,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(w,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.9f98954e.chunk.js.map