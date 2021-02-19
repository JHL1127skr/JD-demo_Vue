<template>
  <div class="userdetail">
    <TopNav :TopTitle="'账户设置'" class="top"></TopNav>
    <Accounts></Accounts>
    <Cell>
      <Ineeter le_title=" 收货地址管理 " ri_title="  管理我的地址  "></Ineeter>
    </Cell>
    <Cell>
      <Ineeter
        le_title="  账户与安全  "
        ri_title="  密码/实名认证等管理  "
        :isBorder="true"
      ></Ineeter>
      <Ineeter le_title="  京东支付密码  " ri_title="  去设置  "></Ineeter>
    </Cell>
    <Cell>
      <Ineeter
        le_title="  联系客服  "
        ri_title=" 即时解答用户疑难"
        :isBorder="true"
      ></Ineeter>
      <Ineeter le_title="  切换站点  "></Ineeter>
    </Cell>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
import TopNav from "../components/TopNav";
import Cell from "../components/cell/index";
import Ineeter from "../components/cell/components";
import Accounts from "../components/UserDetail/accounts";
import FooterNav from "../components/UserDetail/FooterNav";

export default {
  components: { TopNav, Cell, Ineeter, Accounts, FooterNav },
};
</script>

<style lang="scss" scoped>
.top {
  border: 1px solid #eee;
  background-color: #fff;
}
</style>