// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
// Sub module don't support Dependencies, and those async functions
xui.Class('Module.CodeMirror5', 'xui.Module',{
    Instance:{
        Dependencies:[
            "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/lib/codemirror.css",
            "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/lint/lint.css",
            "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/show-hint.css",
            "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/dialog/dialog.css",
            "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/fold/foldgutter.css",
            "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/show-hint.css",
            "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/search/matchesonscrollbar.css"
        ],
        // Required modules
        Required:[
            "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/lib/codemirror.min.js",
            
            "https://cdn.jsdelivr.net/npm/htmlhint@latest/dist/htmlhint.js",
            "https://cdn.jsdelivr.net/npm/jshint@2.9.6/dist/jshint.js",
            "https://cdn.jsdelivr.net/npm/csslint@1.0.5/dist/csslint.js",
            "https://cdn.jsdelivr.net/npm/jsonlint@1.6.3/lib/jsonlint.min.js",
            
            [
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/mode/meta.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/mode/loadmode.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/lint/lint.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/keymap/sublime.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/fold/foldcode.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/search/search.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/show-hint.js"
            ],
            [
                [
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/anyword-hint.js",
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/css-hint.js",
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/html-hint.js",
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/javascript-hint.js",
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/sql-hint.js",
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/xml-hint.js",              
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/lint/javascript-lint.js",
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/lint/json-lint.js",
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/lint/css-lint.js",
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/lint/html-lint.js"
                ],
                [
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/fold/foldgutter.js",
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/fold/brace-fold.js",
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/fold/xml-fold.js",
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/fold/comment-fold.js"
                ],
                [
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/dialog/dialog.js",
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/selection/active-line.js",
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/edit/matchbrackets.js",
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/edit/closebrackets.js",
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/comment/comment.js",
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/comment/continuecomment.js",
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/search/searchcursor.js",
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/search/match-highlighter.js",
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/search/searchcursor.js",
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/scroll/annotatescrollbar.js",
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/search/matchesonscrollbar.js",
                    "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/search/jump-to-line.js"
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
            if(module.$cm){
                var cm = module.$cm,
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
            ){}
        }
    }
});