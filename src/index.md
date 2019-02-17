---

content: 
  height: 400px

history:
  - avatar: 'none'
    title: 'Compra no restaurante batata doce'
    value: 20

  - avatar: 'none'
    title: 'batata'
    value: 20

  - avatar: 'none'
    title: 'batata'
    value: 20

  - avatar: 'none'
    title: 'batata'
    value: 20

  - avatar: 'none'
    title: 'batata'
    value: 20

---

<Post
  v-for="post, index in $page.frontmatter.history"
  :key="index"
  :avatar="post.avatar"
  :title="post.title"
  :value="post.value"
/>