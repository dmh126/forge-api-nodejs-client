/**
 * Forge SDK
 * The Forge Platform contains an expanding collection of web service components that can be used with Autodesk cloud-based products or your own technologies. From visualizing data to 3D printing, take advantage of Autodesk’s expertise in design and engineering.
 *
 * OpenAPI spec version: 0.1.0
 * Contact: forge.help@autodesk.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

module.exports = (function() {
  'use strict';

  var ApiClient = require('../ApiClient'),
      JobPayloadInput = require('./JobPayloadInput'),
      JobPayloadOutput = require('./JobPayloadOutput');



  /**
   * The JobPayload model module.
   * @module model/JobPayload
   * @version 0.1.8
   */

   /**
    * Constructs a <code>JobPayload</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/JobPayload} obj Optional instance to populate.
    * @return {module:model/JobPayload} The populated <code>JobPayload</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('input')) {
        obj['input'] = JobPayloadInput.constructFromObject(data['input']);
      }
      if (data.hasOwnProperty('output')) {
        obj['output'] = JobPayloadOutput.constructFromObject(data['output']);
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>JobPayload</code>.
   * @alias module:model/JobPayload
   * @class
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobPayload} obj Optional instance to populate.
   */
  var exports = function(theData, obj) {
    var _this = this;




    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>JobPayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JobPayload} obj Optional instance to populate.
   * @return {module:model/JobPayload} The populated <code>JobPayload</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * @member {module:model/JobPayloadInput} input
   */
  exports.prototype['input'] = undefined;
  /**
   * @member {module:model/JobPayloadOutput} output
   */
  exports.prototype['output'] = undefined;



  return exports;
}());


