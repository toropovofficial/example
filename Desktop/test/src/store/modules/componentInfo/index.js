import {
  State, Getter, Mutation, Action,
} from 'vuex-simple';

export default class ComponentInfoModule {
  @State()
    componentStatus = false;

  @State()
    componentStatistics = {};

  @Getter()
  get getComponentStatus() {
    return this.componentStatus;
  }

  @Getter()
  get getComponentStatistics() {
    return this.componentStatistics;
  }

  @Mutation
  setStatusComponent() {
    this.componentStatus = !this.componentStatus;
  }

  @Mutation
  setComponentStatistics(value) {
    this.componentStatistics = value;
  }

  @Action()
  changeComponentStatus() {
    this.setStatusComponent();
  }

  @Action()
  changeComponentStatistics(value) {
    this.setComponentStatistics(value);
  }
}
