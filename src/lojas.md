---

backButton: true

lojas: 
  - nome: 'Hamburgueria X'

---

<Loja
  v-for="loja, index in $page.frontmatter.lojas"
  :key="index"
  :nome="loja.nome"

  @click.native="$router.push('/loja.html')"
/>
