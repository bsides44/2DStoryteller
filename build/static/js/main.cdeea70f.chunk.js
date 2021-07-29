(this["webpackJsonpbsides44.github.io"]=this["webpackJsonpbsides44.github.io"]||[]).push([[0],{14:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var n=s(2),i=s(4),a=s.n(i),l=s(7),r=s(5),d=s(6),o=s(1),c=s(9),h=s(8),b=(s(14),s(0)),j=function(e){Object(c.a)(s,e);var t=Object(h.a)(s);function s(e){var n;return Object(r.a)(this,s),(n=t.call(this,e)).downloadTxtFile=function(){var e=document.createElement("a"),t=new Blob([n.state.storyCompiler],{type:"text/plain"});e.href=URL.createObjectURL(t),e.download="TwoDimensionalStory.txt",document.body.appendChild(e),e.click()},n.handleChange=n.handleChange.bind(Object(o.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(o.a)(n)),n.handleStart=n.handleStart.bind(Object(o.a)(n)),n.handleClick=n.handleClick.bind(Object(o.a)(n)),n.state={buttonsAreRevealled:!1,storyCompiler:"",disabledButtons:[]},n}return Object(d.a)(s,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({buttonsAreRevealled:!0});var t=document.getElementsByClassName("buttons-section");t[0]&&setTimeout((function(){t[0].scrollIntoView({behavior:"smooth"})}),500)}},{key:"handleChange",value:function(e){var t={};t[e.target.id]=e.target.value,this.setState(t)}},{key:"handleStart",value:function(e){this.setState({start:e.target.value})}},{key:"handleClick",value:function(e){var t=e.target.id,s="";if(this.state[t]&&(s=this.state[t]),this.setState({storyCompiler:this.state.storyCompiler.concat(" ",s),disabledButtons:[].concat(Object(l.a)(this.state.disabledButtons),[t])}),8==this.state.disabledButtons.length){var n=document.getElementsByClassName("story-section");n[0]&&setTimeout((function(){n[0].scrollIntoView({behavior:"smooth"})}),200)}}},{key:"render",value:function(){return Object(b.jsxs)("div",{className:"page-wrapper",children:[Object(b.jsxs)("div",{className:"intro",children:[Object(b.jsx)("h1",{children:"Welcome to the two-dimensional storyteller"}),Object(b.jsx)("p",{children:" Traditional linear storylines have one dimension: they go in a line, from beginning, to middle, to end."}),Object(b.jsx)("p",{children:" This worked well for books and movies, because you experience the plot in a set order."}),Object(b.jsx)("p",{children:" But as we move into a world of mixed, multimedia, interactive and immersive storytelling, we need greater breadth to our storywriting."}),Object(b.jsxs)("p",{children:[" Introducing ",Object(b.jsx)("span",{style:{fontWeight:400},children:"the Two-Dimensional Storyteller"})," - a tool to help you write a story that can go in many directions."]}),Object(b.jsx)("p",{children:" This could be helpful for writing a narrative for an interactive experience, for example."}),Object(b.jsx)("p",{children:" Enter the beginning of your story - this sets up your characters and scene."}),Object(b.jsx)("p",{children:" Then enter story elements that players can choose in a random order."}),Object(b.jsx)("p",{children:" Tip: Make each story element action-based and self-resolving."})]}),Object(b.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(b.jsxs)("label",{children:["Begin:",Object(b.jsx)("textarea",{onChange:this.handleStart,required:!0,id:"start",rows:5})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:["Story element 1:",Object(b.jsx)("textarea",{onChange:this.handleChange,required:!0,id:"1",rows:5})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:["Story element 2:",Object(b.jsx)("textarea",{onChange:this.handleChange,required:!0,id:"2",rows:5})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:["Story element 3:",Object(b.jsx)("textarea",{onChange:this.handleChange,required:!0,id:"3",rows:5})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:["Story element 4:",Object(b.jsx)("textarea",{onChange:this.handleChange,required:!0,id:"4",rows:5})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:["Story element 5:",Object(b.jsx)("textarea",{onChange:this.handleChange,required:!0,id:"5",rows:5})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:["Story element 6:",Object(b.jsx)("textarea",{onChange:this.handleChange,required:!0,id:"6",rows:5})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:["Story element 7:",Object(b.jsx)("textarea",{onChange:this.handleChange,required:!0,id:"7",rows:5})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:["Story element 8:",Object(b.jsx)("textarea",{onChange:this.handleChange,required:!0,id:"8",rows:5})]}),Object(b.jsx)("br",{}),Object(b.jsxs)("label",{children:["Story element 9:",Object(b.jsx)("textarea",{onChange:this.handleChange,required:!0,id:"9",rows:5})]}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{type:"submit",value:"Submit"})]}),Object(b.jsxs)("div",{className:"buttons-section",style:{display:this.state.buttonsAreRevealled?"flex":"none"},children:[Object(b.jsxs)("div",{className:"buttons-intro",children:[Object(b.jsx)("h3",{children:"Make your story"}),Object(b.jsx)("p",{children:"Select buttons in a random order to see how your story will play out."})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("button",{id:"1",disabled:this.state.disabledButtons.includes("1"),onClick:this.handleClick,children:"One"}),Object(b.jsx)("button",{id:"2",disabled:this.state.disabledButtons.includes("2"),onClick:this.handleClick,children:"Two"}),Object(b.jsx)("button",{id:"3",disabled:this.state.disabledButtons.includes("3"),onClick:this.handleClick,children:"Three"})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("button",{id:"4",disabled:this.state.disabledButtons.includes("4"),onClick:this.handleClick,children:"Four"}),Object(b.jsx)("button",{id:"5",disabled:this.state.disabledButtons.includes("5"),onClick:this.handleClick,children:"Five"}),Object(b.jsx)("button",{id:"6",disabled:this.state.disabledButtons.includes("6"),onClick:this.handleClick,children:"Six"})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("button",{id:"7",disabled:this.state.disabledButtons.includes("7"),onClick:this.handleClick,children:"Seven"}),Object(b.jsx)("button",{id:"8",disabled:this.state.disabledButtons.includes("8"),onClick:this.handleClick,children:"Eight"}),Object(b.jsx)("button",{id:"9",disabled:this.state.disabledButtons.includes("9"),onClick:this.handleClick,children:"Nine"})]}),Object(b.jsxs)("div",{className:"story-section",children:[Object(b.jsx)("div",{className:"buttons-intro",children:Object(b.jsx)("h2",{children:"Welcome to your story"})}),Object(b.jsxs)("p",{children:[this.state.start,this.state.storyCompiler]}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{onClick:this.downloadTxtFile,children:"Download story"})]})]})]})}}]),s}(n.Component);a.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.cdeea70f.chunk.js.map