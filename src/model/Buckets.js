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
      BucketsPermissions = require('./BucketsPermissions');



  /**
   * The Buckets model module.
   * @module model/Buckets
   * @version 0.1.8
   */

   /**
    * Constructs a <code>Buckets</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Buckets} obj Optional instance to populate.
    * @return {module:model/Buckets} The populated <code>Buckets</code> instance.
    */
  var constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
  
      if (data.hasOwnProperty('bucketKey')) {
        obj['bucketKey'] = ApiClient.convertToType(data['bucketKey'], 'String');
      }
      if (data.hasOwnProperty('bucketOwner')) {
        obj['bucketOwner'] = ApiClient.convertToType(data['bucketOwner'], 'String');
      }
      if (data.hasOwnProperty('createdDate')) {
        obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Integer');
      }
      if (data.hasOwnProperty('permissions')) {
        obj['permissions'] = ApiClient.convertToType(data['permissions'], [BucketsPermissions]);
      }
      if (data.hasOwnProperty('policyKey')) {
        obj['policyKey'] = ApiClient.convertToType(data['policyKey'], 'String');
      }
    }
    return obj;
  };

  /**
   * Constructs a new <code>Buckets</code>.
   * Bucket json response
   * @alias module:model/Buckets
   * @class
   * @param bucketKey {String} The key for the created bucket
   * @param bucketOwner {String} Owner of the bucket
   * @param createdDate {Integer} Timestamp in epoch time
   * @param permissions {Array.<module:model/BucketsPermissions>} Array of objects representing the applications with access granted at bucket creation
   * @param policyKey {module:model/Buckets.PolicyKeyEnum} [Data retention policy](https://developer.autodesk.com/en/docs/data/v2/overview/retention-policy/)  Acceptable values: `transient`, `temporary` or `persistent` 
   * @param {Object} theData The plain JavaScript object bearing properties of interest.
   * @param {module:model/Buckets} obj Optional instance to populate.
   */
  var exports = function(bucketKey, bucketOwner, createdDate, permissions, policyKey, theData, obj) {
    var _this = this;

    _this['bucketKey'] = bucketKey;
    _this['bucketOwner'] = bucketOwner;
    _this['createdDate'] = createdDate;
    _this['permissions'] = permissions;
    _this['policyKey'] = policyKey;

    return constructFromObject(theData, obj);
  };

  /**
   * Constructs a <code>Buckets</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Buckets} obj Optional instance to populate.
   * @return {module:model/Buckets} The populated <code>Buckets</code> instance.
   */
  exports.constructFromObject = constructFromObject;

  /**
   * The key for the created bucket
   * @member {String} bucketKey
   */
  exports.prototype['bucketKey'] = undefined;
  /**
   * Owner of the bucket
   * @member {String} bucketOwner
   */
  exports.prototype['bucketOwner'] = undefined;
  /**
   * Timestamp in epoch time
   * @member {Integer} createdDate
   */
  exports.prototype['createdDate'] = undefined;
  /**
   * Array of objects representing the applications with access granted at bucket creation
   * @member {Array.<module:model/BucketsPermissions>} permissions
   */
  exports.prototype['permissions'] = undefined;
  /**
   * [Data retention policy](https://developer.autodesk.com/en/docs/data/v2/overview/retention-policy/)  Acceptable values: `transient`, `temporary` or `persistent` 
   * @member {module:model/Buckets.PolicyKeyEnum} policyKey
   */
  exports.prototype['policyKey'] = undefined;


  /**
   * Allowed values for the <code>policyKey</code> property.
   * @enum {String}
   * @readonly
   */
  exports.PolicyKeyEnum = {
    /**
     * value: "transient"
     * @const
     */
    "transient": "transient",
    /**
     * value: "temporary"
     * @const
     */
    "temporary": "temporary",
    /**
     * value: "persistent"
     * @const
     */
    "persistent": "persistent"  };


  return exports;
}());


