import { Module } from 'vuex-simple';
import UsersListModule from './modules/listUsers/index';
import MainFormModule from './modules/mainForm/index';

export default class Store {
  @Module()
  usersList = new UsersListModule()

  @Module()
  mainForm = new MainFormModule()
}
