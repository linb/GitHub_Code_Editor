// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
// Sub module don't support Dependencies, and those async functions
xui.Class('Module.CodeMirror5', 'xui.Module',{
    Instance:{
        Dependencies:[
            {
                uri:"https://cdn.jsdelivr.net/npm/codemirror@5.47.0/lib/codemirror.css",
                crossorigin:"anonymous"
            },
            "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/lint/lint.css",
            "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/show-hint.css",
            "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/dialog/dialog.css",
            "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/fold/foldgutter.css",
            "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/show-hint.css",
            "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/search/matchesonscrollbar.css"
        ],
        // Required modules
        Required:[
            {
                id:"CodeMirror",
                uri:"https://cdn.jsdelivr.net/npm/codemirror@5.47.0/lib/codemirror.min.js",
                crossorigin:"anonymous"
            },
            
            "[HTMLHint]https://cdn.jsdelivr.net/npm/htmlhint@latest/dist/htmlhint.js",
            "[JSHINT]https://cdn.jsdelivr.net/npm/jshint@2.9.6/dist/jshint.js",
            "[CSSLint]https://cdn.jsdelivr.net/npm/csslint@1.0.5/dist/csslint.js",
            "[jsonlint]https://cdn.jsdelivr.net/npm/jsonlint@1.6.3/lib/jsonlint.min.js",
            
            [
                "[CodeMirror.modeInfo]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/mode/meta.js",
                "[CodeMirror.requireMode]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/mode/loadmode.js",
                "[CodeMirror.prototype.performLint]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/lint/lint.js",
                "[CodeMirror.keyMap.macSublime]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/keymap/sublime.js",
                "[CodeMirror.prototype.foldCode]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/fold/foldcode.js",
                "[CodeMirror.commands.find]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/search/search.js",
                "[CodeMirror.prototype.showHint]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/show-hint.js"
            ],
            [
                [
                    "[CodeMirror.helpers.hint.anyword]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/anyword-hint.js",
                    "[CodeMirror.helpers.hint.css]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/css-hint.js",
                    "[CodeMirror.helpers.hint.html]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/html-hint.js",
                    "[CodeMirror.helpers.hint.javascript]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/javascript-hint.js",
                    "[CodeMirror.helpers.hint.sql]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/sql-hint.js",
                    "[CodeMirror.helpers.hint.xml]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/xml-hint.js",              
                    "[CodeMirror.helpers.lint.javascript]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/lint/javascript-lint.js",
                    "[CodeMirror.helpers.lint.json]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/lint/json-lint.js",
                    "[CodeMirror.helpers.lint.css]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/lint/css-lint.js",
                    "[CodeMirror.helpers.lint.html]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/lint/html-lint.js"
                ],
                [
                    "[CodeMirror.defaults.foldGutter]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/fold/foldgutter.js",
                    "[CodeMirror.helpers.fold.brace]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/fold/brace-fold.js",
                    "[CodeMirror.helpers.fold.xml]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/fold/xml-fold.js",
                    "[CodeMirror.helpers.fold.comment]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/fold/comment-fold.js"
                ],
                [
                    "[CodeMirror.prototype.openDialog]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/dialog/dialog.js",
                    "[CodeMirror.defaults.styleActiveLine]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/selection/active-line.js",
                    "[CodeMirror.prototype.matchBrackets]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/edit/matchbrackets.js",
                    "[CodeMirror.defaults.autoCloseBrackets]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/edit/closebrackets.js",
                    "[CodeMirror.prototype.toggleComment]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/comment/comment.js",
                    "[CodeMirror.defaults.continueComments]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/comment/continuecomment.js",
                    "[CodeMirror.prototype.getSearchCursor]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/search/searchcursor.js",
                    "[CodeMirror.defaults.highlightSelectionMatches]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/search/match-highlighter.js",
                    "[CodeMirror.prototype.getSearchCursor]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/search/searchcursor.js",
                    "[CodeMirror.prototype.annotateScrollbar]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/scroll/annotatescrollbar.js",
                    "[CodeMirror.prototype.showMatchesOnScrollbar]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/search/matchesonscrollbar.js",
                    "[CodeMirror.commands.jumpToLine]https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/search/jump-to-line.js"
                ]
            ]
        ],
        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
          CodeMirror.modeURL = "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/mode/%N/%N.js";  
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};

            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        attachCodeMirror : function(div, path, initValue){
            var module = this;
            
            if(module.$cm)return;
   
            var ext = path.split(".").pop(),
                mode = CodeMirror.findModeByExtension(ext) ||  CodeMirror.findModeByExtension("txt"),
                options = {
                mode:mode.mine || mode.mode,
                value: initValue || "",
                smartIndent:true,
                indentUnit:4,
                tabSize:4,
                indentWithTabs:false,
                keyMap: "sublime",
                matchBrackets: true,
                continueComments: "Enter",
                autoCloseBrackets:true,
                lineNumbers:true,
                lint:true,
                styleActiveLine: true,
                lineWrapping: true,
                flattenSpans:false,
                foldGutter:true,
                highlightSelectionMatches: {showToken: /^[$\w]\w*/},
                gutters: ["CodeMirror-lint-markers","CodeMirror-linenumbers", "CodeMirror-foldgutter"],                
                extraKeys: {"Ctrl-Q": function(cm){ cm.foldCode(cm.getCursor()); }}
            };
 
            var cm = new CodeMirror(function(elt){
                div.getRoot().append(elt);
            }, options);
            CodeMirror.autoLoadMode(cm, mode.mine || mode.mode);

            div.getRoot().onSize(function(node){
                if(cm && cm.setSize)cm.setSize(xui(node).width(),  xui(node).height());
            },"cm");
            cm.setSize(div.getRoot().width(),  div.getRoot().height());
            
            cm.on("change",function(cm,obj){
                module.fireEvent("onChange", [cm.doc.getValue()]);
            });

            module.$cm = div.get(0).$cm = cm;
        },
        reindent : function(){
            if(this.$cm){
                var cm = this.$cm,
                    doc = cm.doc;
                if(doc.somethingSelected()){
                    var p1 = doc.getCursor("start"),
                        p2 = doc.getCursor("end");
                    for(var i=p1.line, l=p2.line; i<=l; i++)
                        cm.indentLine(i);
                }else{
                    var p1l = doc.firstLine(),
                        p2l = doc.lastLine();
                    for(var m = p1l, n = p2l; m <= n; m++)
                        cm.indentLine(m);
                }
            }
        }
    },
    // export
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
            onChange:function(code /*String, new code */){}
        },
        $Functions:{
            attachCodeMirror:function( div /*xui.UI.Div, the Container*/, 
                                    path /*String, file path, with file ext*/,
                                    initValue /*String, the code*/
            ){},
            reindent:function(){}
        }
    }
});
