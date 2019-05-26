// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
// Sub module don't support Dependencies, and those async functions
xui.Class('Module.CodeMirror5', 'xui.Module',{
    Instance:{
        Dependencies:[
            "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/lib/codemirror.css",
            "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/lint/lint.css"
        ],
        // Required modules
        Required:[
            "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/lib/codemirror.min.js",[
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/mode/meta.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/mode/loadmode.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/keymap/sublime.js",
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
        attachCodeMirror : function(div, path, value){
            if(div.get(0).$cm)return;
            debugger;
            var ext = path.split(".").pop(),
                mode = CodeMirror.findModeByExtension(ext) ||  CodeMirror.findModeByExtension("txt");
            var cm = new CodeMirror(function(elt){
                div.getRoot().append(elt);
            }, {
                value: value,
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
                mode:mode.mode
            });
            CodeMirror.autoLoadMode(cm, mode.mode);

            div.getRoot().onSize(function(node){
                if(cm && cm.setSize)cm.setSize(xui(node).width(),  xui(node).height());
            },"cm");
            
            div.get(0).$cm = cm;
        }
    },
    // export
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        },
        $Functions:{
            attachCodeMirror:function( div/*xui.UI.Div, the Container*/, 
                                    path/*String, file path*/,
                                    value/*String, the code*/
            ){}
        }
    }
});