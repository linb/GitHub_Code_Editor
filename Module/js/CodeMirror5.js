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
        attachCodeMirror : function(inputCtrl, path){
            var textarea = inputCtrl.getSubNode("INPUT").get(0),
                ext = path.split(".").pop(),
                mode = CodeMirror.findModeByExtension(ext) ||  CodeMirror.findModeByExtension("txt");
            CodeMirror.fromTextArea(textarea,{
               mode: mode.mode 
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
            attachCodeMirror:function( inputCtrl/*xui.UI.Input, the input control*/, 
                                      path/*String, file path*/
            ){}
        }
    }
});