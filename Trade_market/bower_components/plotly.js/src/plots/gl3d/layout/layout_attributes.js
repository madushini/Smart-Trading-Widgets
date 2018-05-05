/**
* Copyright 2012-2017, Plotly, Inc.
* All rights reserved.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/


'use strict';

var gl3dAxisAttrs = require('./axis_attributes');
var extendFlat = require('../../../lib/extend').extendFlat;
var counterRegex = require('../../../lib').counterRegex;


function makeCameraVector(x, y, z) {
    return {
        x: {
            valType: 'number',
            role: 'info',
            dflt: x,
            editType: 'camera'
        },
        y: {
            valType: 'number',
            role: 'info',
            dflt: y,
            editType: 'camera'
        },
        z: {
            valType: 'number',
            role: 'info',
            dflt: z,
            editType: 'camera'
        },
        editType: 'camera'
    };
}

module.exports = {
    _arrayAttrRegexps: [counterRegex('scene', '.annotations', true)],

    bgcolor: {
        valType: 'color',
        role: 'style',
        dflt: 'rgba(0,0,0,0)',
        editType: 'plot'
    },
    camera: {
        up: extendFlat(makeCameraVector(0, 0, 1), {
            description: [
                'Sets the (x,y,z) components of the \'up\' camera vector.',
                'This vector determines the up direction of this scene',
                'with respect to the page.',
                'The default is *{x: 0, y: 0, z: 1}* which means that',
                'the z axis points up.'
            ].join(' ')
        }),
        center: extendFlat(makeCameraVector(0, 0, 0), {
            description: [
                'Sets the (x,y,z) components of the \'center\' camera vector',
                'This vector determines the translation (x,y,z) space',
                'about the center of this scene.',
                'By default, there is no such translation.'
            ].join(' ')
        }),
        eye: extendFlat(makeCameraVector(1.25, 1.25, 1.25), {
            description: [
                'Sets the (x,y,z) components of the \'eye\' camera vector.',
                'This vector determines the view point about the origin',
                'of this scene.'
            ].join(' ')
        }),
        editType: 'camera'
    },
    domain: {
        x: {
            valType: 'info_array',
            role: 'info',
            items: [
                {valType: 'number', min: 0, max: 1, editType: 'plot'},
                {valType: 'number', min: 0, max: 1, editType: 'plot'}
            ],
            dflt: [0, 1],
            editType: 'plot',
            description: [
                'Sets the horizontal domain of this scene',
                '(in plot fraction).'
            ].join(' ')
        },
        y: {
            valType: 'info_array',
            role: 'info',
            items: [
                {valType: 'number', min: 0, max: 1, editType: 'plot'},
                {valType: 'number', min: 0, max: 1, editType: 'plot'}
            ],
            dflt: [0, 1],
            editType: 'plot',
            description: [
                'Sets the vertical domain of this scene',
                '(in plot fraction).'
            ].join(' ')
        },
        editType: 'plot'
    },
    aspectmode: {
        valType: 'enumerated',
        role: 'info',
        values: ['auto', 'cube', 'data', 'manual'],
        dflt: 'auto',
        editType: 'plot',
        impliedEdits: {
            'aspectratio.x': undefined,
            'aspectratio.y': undefined,
            'aspectratio.z': undefined
        },
        description: [
            'If *cube*, this scene\'s axes are drawn as a cube,',
            'regardless of the axes\' ranges.',

            'If *data*, this scene\'s axes are drawn',
            'in proportion with the axes\' ranges.',

            'If *manual*, this scene\'s axes are drawn',
            'in proportion with the input of *aspectratio*',
            '(the default behavior if *aspectratio* is provided).',

            'If *auto*, this scene\'s axes are drawn',
            'using the results of *data* except when one axis',
            'is more than four times the size of the two others,',
            'where in that case the results of *cube* are used.'
        ].join(' ')
    },
    aspectratio: { // must be positive (0's are coerced to 1)
        x: {
            valType: 'number',
            role: 'info',
            min: 0,
            editType: 'plot',
            impliedEdits: {'^aspectmode': 'manual'}
        },
        y: {
            valType: 'number',
            role: 'info',
            min: 0,
            editType: 'plot',
            impliedEdits: {'^aspectmode': 'manual'}
        },
        z: {
            valType: 'number',
            role: 'info',
            min: 0,
            editType: 'plot',
            impliedEdits: {'^aspectmode': 'manual'}
        },
        editType: 'plot',
        impliedEdits: {aspectmode: 'manual'},
        description: [
            'Sets this scene\'s axis aspectratio.'
        ].join(' ')
    },

    xaxis: gl3dAxisAttrs,
    yaxis: gl3dAxisAttrs,
    zaxis: gl3dAxisAttrs,

    dragmode: {
        valType: 'enumerated',
        role: 'info',
        values: ['orbit', 'turntable', 'zoom', 'pan', false],
        dflt: 'turntable',
        editType: 'plot',
        description: [
            'Determines the mode of drag interactions for this scene.'
        ].join(' ')
    },
    hovermode: {
        valType: 'enumerated',
        role: 'info',
        values: ['closest', false],
        dflt: 'closest',
        editType: 'modebar',
        description: [
            'Determines the mode of hover interactions for this scene.'
        ].join(' ')
    },
    editType: 'plot',

    _deprecated: {
        cameraposition: {
            valType: 'info_array',
            role: 'info',
            editType: 'camera',
            description: 'Obsolete. Use `camera` instead.'
        }
    }
};