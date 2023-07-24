/**
 * action 接口
 */
export interface IAction {
  type: string;
  data: object | string | number | boolean;
}
/**
 * app 对象
 */
export interface IAppState {
  sidebar: {
    opened: boolean;
  };
}

/**
 * user对象
 */
export interface IUserState {
  realName: string;
}
