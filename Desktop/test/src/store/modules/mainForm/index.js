import {
  State, Getter, Mutation, Action,
} from 'vuex-simple';

export default class MainFormModule {
    @State()
    statusForm = false;

  @Getter()
    get getStatusForm() {
      return this.statusForm;
    }

  @Mutation
  openForm() {
    this.statusForm = true;
  }

  @Mutation
  closeForm() {
    this.statusForm = false;
  }

  @Action()
  changeStatusForm(param) {
    if (param === 'open') this.openForm();
    else this.closeForm();
  }
}
