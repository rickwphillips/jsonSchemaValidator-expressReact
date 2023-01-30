const schemas = new Map();

const _schema = {
    id: 1000,
    name: "test",
    schema: {
        type: "object",
        properties: {
            foo: { type: "integer" },
            bar: { type: "string" }
        },
        required: ["foo"],
        additionalProperties: false
    }
}

schemas.set(_schema.id, _schema);

module.exports = {
    schemas,
}