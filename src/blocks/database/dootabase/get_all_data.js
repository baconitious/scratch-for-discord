import Blockly from "blockly/core";

const blockName = "s4d_get_all_data2";

const blockData = {
    "message0": "Delete current dootabase data",
    "args0": [
    ],
  "previousStatement": null,
    "nextStatement": null,
    "colour": "#5ba58b",
    "helpUrl": ""
};

Blockly.Blocks[blockName] = {
    init: function() {
        this.jsonInit(blockData);
    }
};

Blockly.JavaScript[blockName] = function() {
    return [ 'dootabase.clear()', Blockly.JavaScript.ORDER_ATOMIC ];
};