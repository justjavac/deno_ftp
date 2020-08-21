// 1xx: Positive Preliminary Reply
export const INITIATING = /*                            */ 100;
export const RESTART_MARKER = /*                        */ 110;
export const READY_MINUTE = /*                          */ 120;
export const ALREADY_OPEN = /*                          */ 125;
export const ABOUT_TO_SEND = /*                         */ 150;

// 2xx: Positive Completion Reply
export const COMMAND_OK = /*                            */ 200;
export const COMMAND_NOT_IMPLEMENTED = /*               */ 202;
export const SYSTEM = /*                                */ 211;
export const DIRECTORY = /*                             */ 212;
export const FILE = /*                                  */ 213;
export const HELP = /*                                  */ 214;
export const NAME = /*                                  */ 215;
export const READY = /*                                 */ 220;
export const CLOSING = /*                               */ 221;
export const DATA_CONNECTION_OPEN = /*                  */ 225;
export const CLOSING_DATA_CONNECTION = /*               */ 226;
export const PASSIVE_MODE = /*                          */ 227;
export const LONG_PASSIVE_MODE = /*                     */ 228;
export const EXTENDED_PASSIVE_MODE = /*                 */ 229;
export const LOGGED_IN = /*                             */ 230;
export const LOGGED_OUT = /*                            */ 231;
export const LOGOUT_ACK = /*                            */ 232;
export const AUTH_OK = /*                               */ 234;
export const REQUESTED_FILE_ACTION_OK = /*              */ 250;
export const PATH_CREATED = /*                          */ 257;

// 3xx: Positive intermediate Reply
export const NEED_PASSWORD = /*                         */ 331;
export const LOGIN_NEED_ACCOUNT = /*                    */ 332;
export const REQUEST_FILE_PENDING = /*                  */ 350;

// 4xx: Transient Negative Completion Reply
export const NOT_AVAILABLE = /*                         */ 421;
export const CANNOT_OPEN_DATA_CONNECTION = /*           */ 425;
export const TRANSER_ABORTED = /*                       */ 426;
export const INVALID_CREDENTIALS = /*                   */ 430;
export const HOST_UNAVAILABLE = /*                      */ 434;
export const REQUEST_FILE_ACTION_IGNORED = /*           */ 450;
export const ACTION_ABORTED = /*                        */ 451;
export const REQUESTED_ACTION_NOT_TAKEN = /*            */ 452;

// 5xx: Permanent Negative Completion Reply
export const BAD_COMMAND = /*                           */ 500;
export const BAD_ARGUMENTS = /*                         */ 501;
export const NOT_IMPLEMENTED = /*                       */ 502;
export const BAD_SEQUENCE = /*                          */ 503;
export const NOT_IMPLEMENTED_PARAMETER = /*             */ 504;
export const NOT_LOGGED_IN = /*                         */ 530;
export const STORING_NEED_ACCOUNT = /*                  */ 532;
export const FILE_UNAVAILABLE = /*                      */ 550;
export const PAGE_TYPE_UNKNOWN = /*                     */ 551;
export const EXCEEDED_STORAGE = /*                      */ 552;
export const BAD_FILENAME = /*                          */ 553;
