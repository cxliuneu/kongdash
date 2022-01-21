/**
 * Copyright (c) Ajay Sreedhar. All rights reserved.
 *
 * Licensed under the MIT License.
 * Please see LICENSE file located in the project root for more information.
 */

'use strict';

import KongDash from './kongdash.js';
import FooterController from './controllers/footer.js';
import BootstrapController from './controllers/bootstrap.js';

KongDash.controller('BootstrapController', [
    '$scope',
    '$element',
    '$base64',
    'ajax',
    'viewFrame',
    'toast',
    BootstrapController
]);

KongDash.controller('FooterController', [
    '$window',
    '$scope',
    '$http',
    'viewFrame',
    'toast',
    'logger',
    FooterController
]);
