// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
// Sub module don't support Dependencies, and those async functions
xui.Class('Module.Editor', 'xui.Module',{
    Instance:{
        // Required modules
        Required:[],
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
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_cm")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
            );
            
            host.xui_ui_cm.append(
                xui.create("xui.UI.ToolBar")
                .setHost(host,"xui_ui_toolbar16")
                .setItems([
                    {
                        "id":"grp1",
                        "sub":[
                            {
                                "id":"reindent",
                                "caption":"Reindent",
                                "imageClass":"fa fa-lg fa-indent"
                            },
                            {
                                "id":"save",
                                "caption":"Save",
                                "type":"",
                                "imageClass":"fa fa-lg fa-save"
                            }
                        ],
                        "caption":"grp1"
                    }
                ])
                .setTop("19.166666666666668em")
                .onClick([
                    {
                        "desc":"reindent",
                        "type":"module",
                        "target":"module_codemirror51",
                        "args":[
                            "{page.module_codemirror51.reindent}"
                        ],
                        "method":"$Functions.reindent",
                        "conditions":[
                            {
                                "left":"{args[1].id}",
                                "symbol":"=",
                                "right":"reindent"
                            }
                        ],
                        "redirection":"other:callback:call",
                        "event":3
                    }
                ])
            );
            
            append(
                xui.create("Module.CodeMirror5", "xui.Module")
                .setHost(host,"module_codemirror51")
            );
            
            append(
                xui.create("xui.UI.CSSBox")
                .setHost(host,"xui_ui_cssbox8")
                .setClassName("xui-css-csj")
                .setNormalStatus({
                    "color":"#222222",
                    "border-radius":"6px",
                    "box-shadow":"inset 0px 1px 0px #ffffff",
                    "text-shadow":"0 1px 0 #ffffff",
                    "$gradient":{
                        "stops":[
                            {
                                "pos":"0%",
                                "clr":"#7fe0f8"
                            },
                            {
                                "pos":"100%",
                                "clr":"#9bf1ff"
                            }
                        ],
                        "type":"linear",
                        "orient":"T"
                    },
                    "cursor":"pointer",
                    "border-top":"solid #9bf1ff 1px",
                    "border-right":"solid #9bf1ff 1px",
                    "border-bottom":"solid #9bf1ff 1px",
                    "border-left":"solid #9bf1ff 1px"
                })
                .setHoverStatus({
                    "$gradient":{
                        "stops":[
                            {
                                "pos":"0%",
                                "clr":"#9bf1ff"
                            },
                            {
                                "pos":"100%",
                                "clr":"#4fd4f5"
                            }
                        ],
                        "type":"linear",
                        "orient":"T"
                    }
                })
                .setActiveStatus({
                    "box-shadow":"inset 0px 1px 2px #239397 ",
                    "background-image":"none",
                    "background-color":"#cef8ff"
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        functions:{
            "setcode":{
                "desc":"",
                "params":[
                    {
                        "id":"id",
                        "type":"String",
                        "desc":""
                    },
                    {
                        "id":"code",
                        "type":"String",
                        "desc":""
                    }
                ],
                "actions":[
                    {
                        "desc":"set code to txt",
                        "type":"module",
                        "target":"module_codemirror51",
                        "args":[
                            "{page.module_codemirror51.attachCodeMirror}",
                            undefined,
                            undefined,
                            "{page.xui_ui_cm}",
                            "{page.properties.path}",
                            "{args[1]}"
                        ],
                        "method":"$Functions.attachCodeMirror",
                        "redirection":"other:callback:call"
                    },
                    {
                        "desc":"freeUI",
                        "type":"control",
                        "target":"xui_ui_block19",
                        "args":[ ],
                        "method":"free"
                    }
                ]
            },
            "busyUI":{
                "desc":"",
                "params":[ ],
                "actions":[
                    {
                        "desc":"Action 1",
                        "type":"control",
                        "target":"xui_ui_block19",
                        "args":[ ],
                        "method":"busy"
                    }
                ]
            }
        },
            events:{
                "onGlobalMessage":{
                    "newbies":{ },
                        "actions":[
                            {
                                "desc":"refresh sha",
                                "type":"other",
                                "target":"var",
                                "args":[
                                    "sha",
                                    "{args[1]}"
                                ],
                                "method":"page.properties",
                                "conditions":[
                                    {
                                        "left":"{args[0]}",
                                        "symbol":"=",
                                        "right":"{page.properties.path}"
                                    }
                                ]
                            }
                        ]
                }
            }
    },
    // export
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        },
        $Functions:{
        }
    }
});