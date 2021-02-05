(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{398:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"java"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java"}},[t._v("#")]),t._v(" 🍉 Java")]),t._v(" "),a("h2",{attrs:{id:"restful-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restful-api"}},[t._v("#")]),t._v(" ❤️ RESTful API")]),t._v(" "),a("h3",{attrs:{id:"methods方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods方法"}},[t._v("#")]),t._v(" 🔖 Methods方法")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("GET /articles/1\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#读取，返回200")]),t._v("\nPUT /articles/1\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#编辑（或路径），返回200")]),t._v("\nDELETE /articles/1\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除，返回200")]),t._v("\nPOST /articles\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#创建，返回201")]),t._v("\nGET /articles\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#清单，传回200")]),t._v("\n")])])]),a("h3",{attrs:{id:"status-codes-状态码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#status-codes-状态码"}},[t._v("#")]),t._v(" 🔖 Status codes(状态码)")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" OK\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#成功获取，修补（返回JSON对象）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("201")]),t._v(" Created\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#成功发布（返回JSON对象）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("202")]),t._v(" Accepted\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#成功发布，删除，路径-异步")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("204")]),t._v(" No content\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#成功删除")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("206")]),t._v(" Partial content\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#成功获取-异步")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("401")]),t._v(" Unauthorized\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#未认证")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("403")]),t._v(" Forbidden\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#已验证，但没有权限")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("422")]),t._v(" Unprocessable entity\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#验证方式")]),t._v("\n")])])]),a("h3",{attrs:{id:"errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#errors"}},[t._v("#")]),t._v(" Errors")]),t._v(" "),a("blockquote",[a("p",[t._v("error示例")])]),t._v(" "),a("div",{staticClass:"language-http extra-class"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token response-status"}},[t._v("HTTP/1.1 "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("401 Unauthorized")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Type:")]),t._v(" application/json\n{\n  'id': 'auth_failed',\n  'message': \"You're not logged in.\"\n}\n")])])]),a("h2",{attrs:{id:"request-getparameter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-getparameter"}},[t._v("#")]),t._v(" ❤️ "),a("code",[t._v("request.getParameter()")])]),t._v(" "),a("blockquote",[a("p",[t._v("获取参数为"),a("code",[t._v("null")]),t._v("和"),a("code",[t._v('""')]),t._v("空字符串的区别")])]),t._v(" "),a("h3",{attrs:{id:"空字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#空字符串"}},[t._v("#")]),t._v(" "),a("code",[t._v('""')]),t._v("空字符串")]),t._v(" "),a("p",[t._v("当"),a("code",[t._v("url")]),t._v("里有"),a("code",[t._v("name")]),t._v("属性,但是没有值的时候后台用"),a("code",[t._v('request.getParameter("name")')]),t._v("获取的是空字符串"),a("code",[t._v('""')])]),t._v(" "),a("h3",{attrs:{id:"null"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#null"}},[t._v("#")]),t._v(" "),a("code",[t._v("null")])]),t._v(" "),a("p",[t._v("当"),a("code",[t._v("url")]),t._v("里没有"),a("code",[t._v("name")]),t._v("属性,"),a("code",[t._v('request.getParameter("name")')]),t._v("获取的值是"),a("code",[t._v("null")])]),t._v(" "),a("h2",{attrs:{id:"提取双引号中间的值-regex"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提取双引号中间的值-regex"}},[t._v("#")]),t._v(" ❤️ 提取双引号中间的值（"),a("code",[t._v("regex")]),t._v("）")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" str1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\"小明\\""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" ps "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"(?<=\\").*?(?=\\")"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pattern")]),t._v(" p "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Pattern")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("compile")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ps"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Matcher")]),t._v(" m "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("matcher")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("m"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// output: 小明")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);