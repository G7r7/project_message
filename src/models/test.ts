import {Validator, Schema, } from 'jsonschema';
let v = new Validator();

const freeText: Schema = {
    $id: "/freeText",
    type: "object",
    properties: {
        type: { enum: ["freeText"], required: true },
        label: { type: "string" }
    },
    required: ["label"]
}

const form: Schema = {
    $id: "/form",
    type: "object",
    properties: {
        type: { enum: ["form"], required: true },
    }
}

const toggle: Schema = {
    $id: "toggle",
    type: "object",
    properties: {
        type: { enum: ["toggle"], required: true },
        label: { type: "string" },
        value: { type: "boolean" }
    },
    required: ["label", "value"]
}

// Address, to be embedded on Person
let baseSchema: Schema = {
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

const message = {
    content: [
        { label: "MyFreeText", type: "freeText" },
        { label: "MyToggle", value: false, type: "toggle" }
    ]
}

v.addSchema(freeText, '/freeText');
v.addSchema(toggle, '/toggle');
v.addSchema(form, '/form');
console.log(v.validate(message, baseSchema));