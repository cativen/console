/* tslint:disable */
/* eslint-disable */
/**
 * Halo Next API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 2.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { ListedComment } from './listed-comment'

/**
 *
 * @export
 * @interface ListedCommentList
 */
export interface ListedCommentList {
  /**
   * Page number, starts from 1. If not set or equal to 0, it means no pagination.
   * @type {number}
   * @memberof ListedCommentList
   */
  page: number
  /**
   * Size of each page. If not set or equal to 0, it means no pagination.
   * @type {number}
   * @memberof ListedCommentList
   */
  size: number
  /**
   * Total elements.
   * @type {number}
   * @memberof ListedCommentList
   */
  total: number
  /**
   * A chunk of items.
   * @type {Array<ListedComment>}
   * @memberof ListedCommentList
   */
  items: Array<ListedComment>
  /**
   * Indicates whether current page is the first page.
   * @type {boolean}
   * @memberof ListedCommentList
   */
  first: boolean
  /**
   * Indicates whether current page is the last page.
   * @type {boolean}
   * @memberof ListedCommentList
   */
  last: boolean
  /**
   * Indicates whether current page has previous page.
   * @type {boolean}
   * @memberof ListedCommentList
   */
  hasNext: boolean
  /**
   * Indicates whether current page has previous page.
   * @type {boolean}
   * @memberof ListedCommentList
   */
  hasPrevious: boolean
  /**
   * Indicates total pages.
   * @type {number}
   * @memberof ListedCommentList
   */
  totalPages: number
}
