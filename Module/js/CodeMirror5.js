// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
// Sub module don't support Dependencies, and those async functions
xui.Class('Module.CodeMirror5', 'xui.Module',{
    Instance:{
        Dependencies:["https://cdn.jsdelivr.net/npm/codemirror@5.47.0/lib/codemirror.css"],
        // Required modules
        Required:[
            "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/lib/codemirror.min.js",[
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/mode/meta.js",
                "https://cdn.jsdelivr.net/npm/codemirror@5.47.0/addon/mode/loadmode.js" 
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
                highlightSelectionMatches: {showToken: /^[$\w]\w*/},
                foldGutter:true,
                mode:mode.mode
            });
            // CodeMirror.autoLoadMode(cm, mode.mode);
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