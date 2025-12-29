import type { UserInfo } from '@vben/types';

import { useUserStore } from '@vben/stores';

import { defineStore } from 'pinia';

/**
 * 获取模拟用户信息
 */
function getMockUserInfo(): UserInfo {
  return {
    avatar: '',
    desc: '默认用户',
    homePath: '/analytics',
    realName: '管理员',
    roles: ['super'],
    token: 'mock-access-token',
    userId: '1',
    username: 'admin',
  };
}

export const useAuthStore = defineStore('auth', () => {
  const userStore = useUserStore();

  /**
   * 获取用户信息（返回模拟数据）
   */
  async function fetchUserInfo() {
    const userInfo = getMockUserInfo();
    userStore.setUserInfo(userInfo);
    return userInfo;
  }

  /**
   * 退出登录（空实现）
   */
  async function logout(_redirect: boolean = true) {
    // TODO: 后续实现登出逻辑
    console.log('Logout called - empty implementation');
  }

  function $reset() {
    // 空实现
  }

  return {
    $reset,
    fetchUserInfo,
    logout,
  };
});
