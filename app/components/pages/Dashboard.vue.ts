import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import { UserService } from '../../services/user';
import { Inject } from '../../util/injector';

@Component({})
export default class Dashboard extends Vue {
  @Inject() userService: UserService;
  @Prop() params: Dictionary<string>;

  // mounted() {
  //   (this.$refs.foo as any).webContents.openDevTools({ mode: 'detach' });
  // }

  get loggedIn() {
    return this.userService.isLoggedIn();
  }

  get dashboardUrl() {
    return this.userService.dashboardUrl(this.params.subPage || '');
  }
}
