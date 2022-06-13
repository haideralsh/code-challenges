// A very rough implementation of a deepEquals function
// that supports all types of objects and primitives
// except for functions. Please do not use in production.

import test from "node:test";
const assert = require("assert");

enum ObjectType {
    Array,
    Record,
    NaN,
    Primitive,
}

function typeOf(obj: any): ObjectType {
    switch (typeof obj) {
        case "object":
            if (Array.isArray(obj)) return ObjectType.Array;
            if (obj === null) return ObjectType.Primitive;

            return ObjectType.Record;

        case "number":
            if (isNaN(obj)) return ObjectType.NaN;

        default:
            return ObjectType.Primitive;
    }
}

function deepArrayEquals(a: Array<any>, b: Array<any>): boolean {
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i++) {
        if (deepEquals(a[i], b[i])) continue;
        else return false;
    }

    return true;
}

function deepRecordEquals(a: Record<any, any>, b: Record<any, any>): boolean {
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) return false;

    for (let k of Object.keys(a)) {
        if (b.hasOwnProperty(k) && deepEquals(a[k], b[k])) continue;
        else return false;
    }

    return true;
}

export default function deepEquals(a: any, b: any): boolean {
    const typeofA = typeOf(a);
    const typeofB = typeOf(b);

    if (typeofA !== typeofB) return false;

    switch (typeofA) {
        case ObjectType.NaN:
            return true;

        case ObjectType.Primitive:
            return a === b;

        case ObjectType.Record:
            return deepRecordEquals(a, b);

        case ObjectType.Array:
            return deepArrayEquals(a, b);
    }
}

test("it can compare primitives", () => {
    assert.strictEqual(deepEquals(Symbol("test"), Symbol("test")), false);
    assert.strictEqual(deepEquals(12, 12), true);
    assert.strictEqual(deepEquals(12, "12"), false);
    assert.strictEqual(deepEquals(NaN, NaN), true);
    assert.strictEqual(deepEquals(true, true), true);
    assert.strictEqual(deepEquals(undefined, undefined), true);
    assert.strictEqual(deepEquals(null, null), true);
    assert.strictEqual(deepEquals(null, {}), false);
});

test("it can compare empty objects", () => {
    assert.strictEqual(deepEquals([], []), true);
    assert.strictEqual(deepEquals({}, {}), true);
    assert.strictEqual(deepEquals({}, []), false);
});

test("it can compare deep objects", () => {
    assert.strictEqual(deepEquals({ a: ["qwe"] }, { a: ["qwe"], b: Symbol(12) }), false);
    assert.strictEqual(deepEquals([{ a: 1, b: 2 }], [{ a: 1, b: 2 }]), true);
    assert.strictEqual(deepEquals([{ a: 1, b: 2 }], [{ a: 1, b: 2, c: 3 }]), false);
});
