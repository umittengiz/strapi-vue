<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="logo"
        :style="collapsed ? 'display: none' : 'display: block'"
      >
        <img :src="logo" width="140px" />
      </div>
      <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
        <a-menu-item v-for="page in navbarLinks" :key="page.id" class="navLink">
          <router-link :to="page.slug">
            <a-row type="flex" justify="start">
                <a-col :span="7">
                  <a-icon :type="page.icon" style="font-size: 18px;" />
                </a-col>
                <a-col align="start">
                  <span style="font-size: 17px;">
                    {{ page.title }}
                  </span>
                </a-col>
            </a-row>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '100vh' }"
      >
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  name: 'Layout',
  data() {
    return {
      collapsed: false,
      logo: 'https://www.lorenya.com/logo.png',
      navbarLinks: [
        {
          id: '1',
          title: 'Anasayfa',
          slug: '/',
          icon: 'home'
        },
        {
          id: '2',
          title: 'Tanımlamalar',
          slug: '/',
          icon: 'unordered-list'
        },
        {
          id: '3',
          title: 'Sipariş',
          slug: '/about',
          icon: 'profile'
        },
        {
          id: '4',
          title: 'Mutfak',
          slug: '/first',
          icon: 'book'
        },
        {
          id: '5',
          title: 'İşlemler',
          slug: '/restaurants',
          icon: 'build'
        },
        {
          id: '6',
          title: 'Raporlar',
          slug: '/dashboard',
          icon: 'bar-chart'
        },
        {
          id: '7',
          title: 'Kullanıcılar',
          slug: '/product-detail',
          icon: 'team'
        },
        {
          id: '8',
          title: 'Ayarlar',
          slug: '/product-detail',
          icon: 'setting'
        },
      ],
    };
  },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  float: left;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #ff1818;
}

#components-layout-demo-custom-trigger .logo {
  /* height: 32px; */
  background: rgb(255, 255, 255);
  /* margin: 16px; */
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 5px;
  padding-right: 5px;
}

.navLink a {
  /* color: #fff; */
}
</style>
