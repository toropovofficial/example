import {
  State, Getter, Mutation, Action,
} from 'vuex-simple';

export default class UsersListModule {
  @State()

    listUsers = [
      {
        name: 'user1',
        number: 24,
        id: Math.random(),
        isShow: true,
      },
      {
        name: 'user2',
        number: 25,
        id: Math.random(),
        isShow: true,
      },
      {
        name: 'user3',
        number: 23,
        id: Math.random(),
        isShow: true,
      },
      {
        name: 'user4',
        number: 19,
        id: Math.random(),
        isShow: true,
      },
    ];

    @State()
    parentUser = '';

    @State()
    allParentUsersList = [];

  @Getter()
    get getListUsers() {
      return this.listUsers;
    }

    @Getter()
  get getAllParent() {
    return this.allParentUsersList;
  }

  @Mutation
    changeAllParentUsersList(list) {
      list.forEach((item) => {
        this.allParentUsersList.push({
          name: item.name,
          id: item.id,
        });
        if (item.child) this.changeAllParentUsersList(item.child);
      });
    }

  @Mutation
  clearallParentUsersList() {
    this.allParentUsersList = [];
  }

  @Mutation
  createUserListInLocalStorage() {
    this.listUsers = JSON.parse(localStorage.getItem('listUsers'));
  }

  @Mutation()
  findParentUser({ list, params }) {
    list.forEach((item) => {
      if (item.name === params || item.id === params) this.parentUser = item;
      if (item.child) this.findParentUser({ list: item.child, params });
    });
  }

  @Mutation()
  addChild({ childName, childNumber }) {
    if (this.parentUser) {
      let isShowStatus = this.parentUser.isShow;
      if (this.parentUser.child) {
        const [firstChild] = this.parentUser.child;
        isShowStatus = firstChild.isShow;
      }
      if (!this.parentUser.child) this.parentUser.child = [];
      this.parentUser.child.push({
        name: childName,
        number: childNumber,
        id: Math.random(),
        isShow: isShowStatus,
      });
    }
    this.parentUser = '';
  }

  @Mutation()
  changeShow() {
    if (!this.parentUser.child) return;
    this.parentUser.child.forEach((item) => { item.isShow = !item.isShow; });
  }

  @Action()
  createdChildUser(newUser) {
    this.findParentUser({ list: this.listUsers, params: newUser.parentName });
    this.addChild(newUser);
  }

  @Action()
  changeIsShowChildEl(id) {
    this.findParentUser({ list: this.listUsers, params: id });
    this.changeShow();
  }

  @Action()
  callCreateUserListInLocalStorage() {
    this.createUserListInLocalStorage();
  }

  @Action()
  callChangeAllParentUsersList() {
    this.clearallParentUsersList();
    this.changeAllParentUsersList(this.listUsers);
  }
}
