/*
|--------------------------------------------------------------------------
| Constants
|--------------------------------------------------------------------------
*/
export const STATUS_INIT = 0
export const STATUS_LOADING = 1
export const STATUS_FINISHED = 2

/*
|--------------------------------------------------------------------------
| AFAS
|--------------------------------------------------------------------------
*/
// Mutations
export const MUTATE_VERSION = 'afas/MUTATE_VERSION'

// Actions
export const LOAD_VERSION = 'token/LOAD_VERSION'

/*
|--------------------------------------------------------------------------
| GetConnectors
|--------------------------------------------------------------------------
*/
// Mutations
export const MUTATE_GET_CONNECTORS = 'get-connectors/MUTATE_GET_CONNECTORS'
export const MUTATE_LOADING_GET_CONNECTORS = 'get-connectors/MUTATE_LOADING_GET_CONNECTORS'
export const MUTATE_GET_CONNECTOR_META_INFO = 'get-connectors/MUTATE_GET_CONNECTOR_META_INFO'
export const MUTATE_LOADING_GET_CONNECTOR_META_INFO = 'get-connectors/MUTATE_LOADING_GET_CONNECTOR_META_INFO'
export const MUTATE_RESPONSE_GET_CONNECTOR = 'get-connectors/MUTATE_RESPONSE_GET_CONNECTOR'
export const MUTATE_EXECUTING_GET_CONNECTOR = 'get-connectors/MUTATE_EXECUTING_GET_CONNECTOR'

// Actions
export const LOAD_GET_CONNECTORS = 'get-connectors/LOAD_GET_CONNECTORS'
export const LOAD_GET_CONNECTOR_META_INFO = 'get-connectors/LOAD_GET_CONNECTOR_META_INFO'
export const EXECUTE_GET_CONNECTOR = 'get-connectors/EXECUTE_GET_CONNECTOR'

/*
|--------------------------------------------------------------------------
| UpdateConnectors
|--------------------------------------------------------------------------
*/
// Mutations
export const MUTATE_UPDATE_CONNECTORS = 'update-connectors/MUTATE_UPDATE_CONNECTORS'
export const MUTATE_LOADING_UPDATE_CONNECTORS = 'update-connectors/MUTATE_LOADING_UPDATE_CONNECTORS'
export const MUTATE_UPDATE_CONNECTOR_META_INFO = 'update-connectors/MUTATE_UPDATE_CONNECTOR_META_INFO'
export const MUTATE_LOADING_UPDATE_CONNECTOR_META_INFO = 'update-connectors/MUTATE_LOADING_UPDATE_CONNECTOR_META_INFO'

// Actions
export const LOAD_UPDATE_CONNECTORS = 'update-connectors/LOAD_UPDATE_CONNECTORS'
export const LOAD_UPDATE_CONNECTOR_META_INFO = 'update-connectors/LOAD_UPDATE_CONNECTOR_META_INFO'

/*
|--------------------------------------------------------------------------
| Token
|--------------------------------------------------------------------------
*/
// Mutations
export const MUTATE_TOKEN = 'token/MUTATE_TOKEN'
export const MUTATE_TOKEN_CONNECTION = 'token/MUTATE_TOKEN_CONNECTION'
export const MUTATE_TOKEN_CONNECTION_STATUS = 'token/MUTATE_TOKEN_CONNECTION_STATUS'
export const MUTATE_TOKEN_CONNECTION_MESSAGE = 'token/MUTATE_TOKEN_CONNECTION_MESSAGE'
export const MUTATE_TOKEN_CONNECTION_SUCCESS = 'token/MUTATE_TOKEN_CONNECTION_SUCCESS'

// Actions
export const LOAD_TOKEN = 'token/LOAD_TOKEN'
export const SAVE_TOKEN = 'token/SAVE_TOKEN'
export const CLEAR_TOKEN = 'token/CLEAR_TOKEN'
export const TEST_CONNECTION = 'token/TEST_CONNECTION'
