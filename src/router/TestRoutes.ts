const TestRoutes = {
  path: '/test',
  component: () => import('@/layouts/full/FullLayout.vue'),
  children: [
    {
      name: 'page1',
      path: 'page1',
      component: () => import('@/views/test/TreeTest.vue')
    },
    {
      name: 'page2',
      path: 'page2',
      component: () => import('@/views/test/MultiSelect.vue')
    }
  ]
};

export default TestRoutes;
