const ERROR_CODE = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,

};

const ACCESS_TOKEN_EXPIRED = new Error('Access token has expired');
ACCESS_TOKEN_EXPIRED.code = ERROR_CODE.BAD_REQUEST;

const DATA_NOT_FOUND = new Error('Data not found');
DATA_NOT_FOUND.code = ERROR_CODE.NOT_FOUND;

const EMAIL_EXISTS = new Error('Email address already exists');
EMAIL_EXISTS.code = ERROR_CODE.BAD_REQUEST;

const INVALID_ACCESS_TOKEN = new Error('Invalid access token');
INVALID_ACCESS_TOKEN.code = ERROR_CODE.BAD_REQUEST;

const INTERNAL_DB_ERROR = new Error('Internal database error');
INTERNAL_DB_ERROR.code = ERROR_CODE.INTERNAL_SERVER_ERROR;

const INVALID_EMAIL = new Error('Invalid email address');
INVALID_EMAIL.code = ERROR_CODE.BAD_REQUEST;

const INVALID_PARAMETER = new Error('Invalid parameter');
INVALID_PARAMETER.code = ERROR_CODE.BAD_REQUEST;

const INVALID_PASSWORD = new Error('Invalid password');
INVALID_PASSWORD.code = ERROR_CODE.BAD_REQUEST;

const INTERNAL_SERVER_ERROR = new Error('Internal server error');
INTERNAL_SERVER_ERROR.code = ERROR_CODE.INTERNAL_SERVER_ERROR;

const PERMISSION_DENIED = new Error('Permission denied');
PERMISSION_DENIED.code = ERROR_CODE.UNAUTHORIZED;

export default {
  ACCESS_TOKEN_EXPIRED,
  DATA_NOT_FOUND,
  EMAIL_EXISTS,
  INVALID_ACCESS_TOKEN,
  INTERNAL_DB_ERROR,
  INVALID_EMAIL,
  INVALID_PARAMETER,
  INVALID_PASSWORD,
  INTERNAL_SERVER_ERROR,
  PERMISSION_DENIED,
}
