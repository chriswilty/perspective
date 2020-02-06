/******************************************************************************
 *
 * Copyright (c) 2017, the Perspective Authors.
 *
 * This file is part of the Perspective library, distributed under the terms of
 * the Apache License 2.0.  The full license can be found in the LICENSE file.
 *
 */
const path = require("path");

exports.default = function pitch(request) {
    return request;
};

exports.pitch = function(request) {
    const parsedModulePath =
        (process.platform.startsWith('win')
            ? request.replace(/\\/g, "\\\\")
            : request
        )
        .replace(
            path.join("umd", "perspective.inline"),
            path.join("esm", "perspective.parallel")
        );

    return `module.exports = require("${parsedModulePath}")`;
};

exports.raw = true;
