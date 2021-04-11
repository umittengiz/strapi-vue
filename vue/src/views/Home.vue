<template>
  <div class="home">
    <div style="background: #ECECEC; padding: 20px;">
      <a-row>
        <a-skeleton :loading="loading" :active="true" />
      </a-row>
      <a-row v-if="!loading" type="flex" justify="space-around" align="middle">
        <a-col :span="4">
          <a-card title="Bugünkü Toplam Satış" :bordered="false">
            <span v-if="data.currencyPosition === 'left'">
              {{ data.currencySign + data.toplamSatis }}
            </span>
            <span v-else>
              {{ data.toplamSatis + data.currencySign }}
            </span>
          </a-card>
        </a-col>
        <a-col :span="4">
          <a-card title="Bugün Ağırlanan Müşteri" :bordered="true">{{
            data.musteriSayisi
          }}</a-card>
        </a-col>
        <a-col :span="4">
          <a-card title="Anlık Sipariş Toplamı" :bordered="false">
            <span v-if="data.currencyPosition === 'left'">
              {{ data.currencySign + data.anlikToplam }}
            </span>
            <span v-else>
              {{ data.anlikToplam + data.currencySign }}
            </span>
          </a-card>
        </a-col>
        <a-col :span="4">
          <a-card title="Bugünkü Toplam Gider" :bordered="false">
            <span v-if="data.currencyPosition === 'left'">
              {{ data.currencySign + data.toplamGider }}
            </span>
            <span v-else>
              {{ data.toplamGider + data.currencySign }}
            </span>
          </a-card>
        </a-col>
      </a-row>
    </div>
    <ApexChart />
    <a-row type="flex" justify="space-around" align="start">
      <a-col :span="4"></a-col>
      <a-col :span="5">
        <PieChart />
      </a-col>
      <a-col :span="4">
      </a-col>
      <a-col :span="9">
        <ApexChart theme="palette1" />
      </a-col>
      <a-col :span="2">
      </a-col>
    </a-row>
    <img alt="Vue logo" src="../assets/logo.png" />
    <First />
  </div>
</template>

<script>
import First from "../components/First.vue";
import ApexChart from "../components/molecules/ApexChart.vue";
import PieChart from "../components/molecules/PieChart.vue";

export default {
  name: "Home",
  data() {
    return {
      loading: true,
      data: {
        currencySign: "₺",
        currencyPosition: "right",
        toplamSatis: 1259.34,
        musteriSayisi: 89,
        anlikToplam: 613.27,
        toplamGider: 317.65,
      },
    };
  },
  components: {
    First,
    ApexChart,
    PieChart,
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 500);
  },
};
</script>

<style lang="css">
.ant-card-head-title {
  font-weight: bold;
}

.ant-card-body {
  color: #1890ff;
  font-size: 36px;
  font-weight: bold;
}
</style>
