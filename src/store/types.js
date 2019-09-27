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
| Modal
|--------------------------------------------------------------------------
*/
// Mutations
export const MUTATE_MODAL_OPEN = 'modal/MUTATE_MODAL_OPEN'

// Actions
export const OPEN_MODAL = 'modal/OPEN_MODAL'
export const CLOSE_MODAL = 'modal/CLOSE_MODAL'

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
| AFAS
|--------------------------------------------------------------------------
*/
// Mutations
export const MUTATE_GET_CONNECTORS = 'connectors/MUTATE_GET_CONNECTORS'
export const MUTATE_LOADING_GET_CONNECTORS = 'connectors/MUTATE_LOADING_GET_CONNECTORS'
export const MUTATE_GET_CONNECTOR_META_INFO = 'connectors/MUTATE_GET_CONNECTOR_META_INFO'
export const MUTATE_LOADING_GET_CONNECTOR_META_INFO = 'connectors/MUTATE_LOADING_GET_CONNECTOR_META_INFO'
export const MUTATE_UPDATE_CONNECTORS = 'connectors/MUTATE_UPDATE_CONNECTORS'
export const MUTATE_LOADING_UPDATE_CONNECTORS = 'connectors/MUTATE_LOADING_UPDATE_CONNECTORS'
export const MUTATE_UPDATE_CONNECTOR_META_INFO = 'connectors/MUTATE_UPDATE_CONNECTOR_META_INFO'
export const MUTATE_LOADING_UPDATE_CONNECTOR_META_INFO = 'connectors/MUTATE_LOADING_UPDATE_CONNECTOR_META_INFO'

// Actions
export const LOAD_GET_CONNECTORS = 'connectors/LOAD_GET_CONNECTORS'
export const LOAD_GET_CONNECTOR_META_INFO = 'connectors/LOAD_GET_CONNECTOR_META_INFO'
export const LOAD_UPDATE_CONNECTORS = 'connectors/LOAD_UPDATE_CONNECTORS'
export const LOAD_UPDATE_CONNECTOR_META_INFO = 'connectors/LOAD_UPDATE_CONNECTOR_META_INFO'

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
