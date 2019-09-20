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
| AFAS
|--------------------------------------------------------------------------
*/
// Mutations
export const MUTATE_GET_CONNECTORS = 'afas/MUTATE_GET_CONNECTORS'

// Actions
export const LOAD_GET_CONNECTORS = 'token/LOAD_GET_CONNECTORS'

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
