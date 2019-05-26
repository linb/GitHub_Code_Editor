// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
// Sub module don't support Dependencies, and those async functions
xui.Class('Module.CodeMirror5', 'xui.Module',{
    Instance:{
        Dependencies:[
            "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/lib/codemirror.css",
            "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/show-hint.css",
            "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/lint/lint.css"
        ],
        // Required modules
        Required:[
            "https://cdn.jsdelivr.net/npm/htmlhint@latest/dist/htmlhint.js",
            "https://cdn.jsdelivr.net/npm/jshint@2.10.1/dist/jshint.js",
            "https://cdn.jsdelivr.net/npm/csslint@1.0.5/dist/csslint.js",
            "https://cdn.jsdelivr.net/npm/jsonlint@1.6.3/lib/jsonlint.min.js",
            "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/lib/codemirror.min.js",[
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/mode/meta.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/mode/loadmode.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/keymap/sublime.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/anyword-hint.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/css-hint.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/html-hint.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/javascript-hint.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/show-hint.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/sql-hint.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/hint/xml-hint.js",              
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/lint/lint.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/lint/javascript-lint.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/lint/json-lint.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/lint/css-lint.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/lint/html-lint.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/fold/foldcode.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/fold/foldgutter.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/fold/brace-fold.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/fold/xml-fold.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/fold/comment-fold.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/selection/active-line.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/search/searchcursor.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/search/match-highlighter.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/edit/matchbrackets.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/edit/closebrackets.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/comment/comment.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/comment/continuecomment.js"
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
            if(div.get(0).$cm)return;
   
            var ext = path.split(".").pop(),
                mode = CodeMirror.findModeByExtension(ext) ||  CodeMirror.findModeByExtension("txt");
            
            var cm = new CodeMirror(function(elt){
                div.getRoot().append(elt);
            }, {
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
                lint:(ext=='js'||ext=='json'||ext=='css'||ext=='html')?true:false,
                styleActiveLine: true,
                lineWrapping: false,
                flattenSpans:false,
                foldGutter:true,
                highlightSelectionMatches: {showToken: /^[$\w]\w*/},
                gutters: ["CodeMirror-lint-markers","CodeMirror-linenumbers", "CodeMirror-foldgutter"],                
                mode:mode.mode
            });
            CodeMirror.autoLoadMode(cm, mode.mode);

            div.getRoot().onSize(function(node){
                if(cm && cm.setSize)cm.setSize(xui(node).width(),  xui(node).height());
            },"cm");
            cm.setSize(div.getRoot().width(),  div.getRoot().height());
            
            div.get(0).$cm = cm;
            
            cm.on("change",function(cm,obj){
                
            });
        }
    },
    // export
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        },
        $Functions:{
            attachCodeMirror:function( div /*xui.UI.Div, the Container*/, 
                                    path /*String, file path, with file ext*/,
                                    initValue /*String, the code*/
            ){}
        }
    }
});