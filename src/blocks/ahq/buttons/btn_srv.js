import * as Blockly from "blockly/core";
const ahqcolor = ['#3366ff', '#FF10F0', '#33cc00', '#ff6666'];
function listsGetRandomItem(list, remove) {
    var x = Math.floor(Math.random() * list.length);
    if (remove) {
        return list.splice(x, 1)[0];
    } else {
        return list[x];
    }
}
const blockName = "id_btn_srv";
//block working now working
const blockData = {
    "message0": "button server",
    "colour": listsGetRandomItem(ahqcolor, false),
    "output": "Server",
    "tooltip": "",
    "helpUrl": ""
};


Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};
Blockly.JavaScript[blockName] = function(){
    const code = ['(i.guild)', Blockly.JavaScript.ORDER_NONE];
    return code;
};
