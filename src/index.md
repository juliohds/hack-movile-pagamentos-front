---

backButton: false

history:
  - avatar: 'none'
    title: 'Almoço restaurante Vovó Maria'
    value: 'R$: 20.00'
    data: '10-02-2019'

---

<Post
  v-for="post, index in $page.frontmatter.history"
  :key="index"
  :avatar="post.avatar"
  :title="post.title"
  :description="post.value"
/>

<Button :style="{ position: 'fixed', bottom: '30px', right: '20px' }" @click.native="$router.push('/lojas.html')"> PAGAR </Button>