"use strict";

import { convertFromASCIICode, decryptXOR } from "./modules/fuctions.js";
import { messageXOR } from "./modules/messageXOR.js";

const clave = [100, 97, 114, 111];
console.log(convertFromASCIICode(decryptXOR(messageXOR, clave)));