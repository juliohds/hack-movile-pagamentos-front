---

backButton: false

history:
  - avatar: 'none'
    title: 'Almoço restaurante Vovó Maria'
    value: 'R$: 20'
    data: '10-02-2019'
  - avatar: 'none'
    title: 'Compras no Extra'
    value: 'R$: 30'
    data: '10-02-2019'
  - avatar: 'none'
    title: 'Transferencia para o flavio'
    value: 'R$: 37'
    data: '10-02-2019'  
  - avatar: 'none'
    title: 'Almoço restaurante da tia da Maria'
    value: 'R$: 23.00'
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

<script>
// {
//   "status": "ok",
//   "dados": {
//       "flag_aprovacao": 1,
//       "valor_emprestimo": 12
//   }
// }


  export default {
    methods: {
      getBody () {
        return {
            transacao: {
              tipo_saldo: 1,
              valor_emprestimo: 100.00,
              saldo_atual: 10.00
            },

            usuario: {
              nome: "Xico Jose",
              cpf: "98896497845",
              data_nascimento: "1960-02-05",
              sexo: "F",
              email: "mariaa@gmail.com",
              telefone: "78988483669",
              endereco: "Rua Nao sei",
              numero: "666",
              cep: "36759122",
              bairro: "Sao Paulo",
              cidade: "Roca Nova",
              estado: "SP"
            },
            historico:[
              { 
                date : "10-02-2019",
                valor : 5.00
              },
              {
                date : "11-03-2019",
                valor : 5.00
              },
              {
                date : "12-08-2019",
                valor : 5.00
              },
              {
                date : "13-02-2018",
                valor : 5.00
              },
              {
                date : "14-02-2017",
                valor : 5.00
              },
              {
                date : "15-02-2019",
                valor : 5.00
              }
            ]
          }
      }
    },

    mounted () {
      const endpoint = 'http://127.0.0.1:8000/v1/SolicitacaoEmprestimo'

      fetch(endpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.getBody())
      })
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          this.$store.commit('atualizarCredito', 100)
        }) 
    }
  }
</script>