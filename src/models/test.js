"use strict";
exports.__esModule = true;
var jsonschema_1 = require("jsonschema");
var v = new jsonschema_1.Validator();
var freeText = {
    $id: "/freeText",
    type: "object",
    properties: {
        type: { "enum": ["freeText"], required: true },
        label: { type: "string" }
    },
    required: ["label"]
};
var form = {
    $id: "/form",
    type: "object",
    properties: {
        type: { "enum": ["form"], required: true }
    }
};
var toggle = {
    $id: "toggle",
    type: "object",
    properties: {
        type: { "enum": ["toggle"], required: true },
        label: { type: "string" },
        value: { type: "boolean" }
    },
    required: ["label", "value"]
};
// Address, to be embedded on Person
var baseSchema = {
    $id: "baseSchema",
    type: "object",
    properties: {
        content: {
            type: "array",
            minItems: 1,
            items: {
                anyOf: [
                    { $ref: "/freeText" },
                    { $ref: "/toggle" },
                    { $ref: "/form" }
                ]
            },
            required: true
        }
    }
};
var message = {
    content: [
        { label: "MyFreeText", type: "freeText" },
        { label: "MyToggle", value: false, type: "toggle" }
    ]
};
v.addSchema(freeText, '/freeText');
v.addSchema(toggle, '/toggle');
v.addSchema(form, '/form');
console.log(v.validate(message, baseSchema));
