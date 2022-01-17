<template lang="">
  <form v-if="isForm" @submit.prevent="addNewUser" class="mainForm">
    <form-input
      v-model="childName"
      :placeHolder="'Введите имя'"
      :labelText="'Имя'"
      :formIsValid="formIsValid"
    >
    </form-input>
    <form-input
      v-model="childNumber"
      :placeHolder="'Введите возраст'"
      :labelText="'Телефон'"
      :inputType="'tel'"
      :formIsValid="formIsValid"
    >
    </form-input>
    <form-select
      v-model="parentName"
      :usersForSelect="listUsersForSelect"
      :labelText="'Начальник'">
    </form-select>
    <formButton></formButton>
    <img @click="closeForm" class="mainForm__close" src="https://img.icons8.com/emoji/48/000000/cross-mark-emoji.png"/>
  </form>
</template>
<script>
import formInput from './formComponents/formInput.vue';
import formButton from './formComponents/formButton.vue';
import formSelect from './formComponents/formSelect.vue';

export default {
  name: 'appForm',
  components: {
    formInput,
    formButton,
    formSelect,
  },
  data() {
    return {
      childName: '',
      childNumber: '',
      parentName: 'user1',
      formIsValid: true,
    };
  },
  methods: {
    addNewUser() {
      if (!(this.childName && this.childNumber && this.parentName)) this.formIsValid = false;
      else {
        const newUser = {
          childName: this.childName,
          childNumber: this.childNumber,
          parentName: this.parentName,
        };
        this.$store.dispatch('usersList/createdChildUser', newUser);
        this.$emit('formSubmit');
      }
    },
    closeForm() {
      this.$store.dispatch('mainForm/changeStatusForm');
    },
  },
  computed: {
    isForm() {
      return this.$store.getters['mainForm/getStatusForm'];
    },
    listUsersForSelect() {
      this.$store.dispatch('usersList/callChangeAllParentUsersList');
      return this.$store.getters['usersList/getAllParent'];
    },
  },
};
</script>
<style lang="scss" scoped>
.mainForm {
  width: 500px;
  position: relative;
  height: max-content;
  padding: 30px;
  background: #fffefb;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  &__close {
    position: absolute;
    top: 5px;
    right: 5px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
}
.test {
  display: none;
}
</style>
