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
                xui.create("xui.UI.Block")
                .setHost(host,"xui_ui_block19")
                .setDock("bottom")
                .setLeft("14.166666666666666em")
                .setTop("25em")
                .setHeight("3.3333333333333335em")
            );
            
            host.xui_ui_block19.append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_save")
                .setLeft("1.6666666666666667em")
                .setTop("0.5em")
                .setWidth("10em")
                .setHeight("2.3333333333333335em")
                .setCaption("Save")
                .onClick({
                    "newbies":{ },
                    "actions":[
                        {
                            "desc":"get file",
                            "type":"control",
                            "target":"xui_ui_cm",
                            "args":[
                                "{page.xui_ui_cm.getUIValue()}",
                                "temp",
                                "code"
                            ],
                            "method":"getUIValue",
                            "redirection":"other:callback:call",
                            "event":1
                        },
                        {
                            "desc":"post msg",
                            "type":"other",
                            "target":"msg",
                            "args":[
                                "{xui.broadcast()}",
                                "none",
                                "",
                                "saveFile",
                                "{page.properties.path}",
                                "{page.properties.sha}",
                                "{temp.code}"
                            ],
                            "method":"gbroadcast",
                            "redirection":"other:callback:call"
                        },
                        {
                            "desc":"busy UI",
                            "type":"other",
                            "target":"msg",
                            "args":[ ],
                            "method":"busy"
                        }
                    ]
                })
            );
            
            append(
                xui.create("xui.UI.Div")
                .setHost(host,"xui_ui_cm")
                .setDock("fill")
                .setLeft("0em")
                .setTop("0em")
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
                            "{args[0]}",
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