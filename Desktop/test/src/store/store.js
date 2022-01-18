import { Module } from 'vuex-simple';
import UsersListModule from './modules/listUsers/index';
import MainFormModule from './modules/mainForm/index';
import ComponentInfoModule from './modules/componentInfo/index';

export default class Store {
  @Module()
  usersList = new UsersListModule()

  @Module()
  mainForm = new MainFormModule()

  @Module()
  componentInfo = new ComponentInfoModule()
}
