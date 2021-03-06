// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

"use strict";

import installerProtocol = require("../elevatedInstallerProtocol");
import Q = require("q");

import ILogger = installerProtocol.ILogger;

class FakeLogger implements ILogger {
    public log(message: string): void {
        // Currently we don't care about these messages
    }

    public logWarning(message: string): void {
        // Currently we don't care about these messages
    }

    public logError(message: string): void {
        // Currently we don't care about these messages
    }

    public promptForEnvVariableOverwrite(message: string): Q.Promise<any> {
        return Q({});
    }
}

export = FakeLogger;
