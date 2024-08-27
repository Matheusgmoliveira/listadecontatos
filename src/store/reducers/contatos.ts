import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Definindo Contato como um tipo simples
type Contato = {
  id: number
  nome: string
  email: string
  telefone: string
}

type ContatoState = {
  itens: Contato[]
}

const initialState: ContatoState = {
  itens: [
    {
      id: 1,
      nome: 'Matheus Gonçalves',
      email: 'matheuslalala',
      telefone: '18998454849'
    },
    {
      id: 2,
      nome: 'Larissa',
      email: 'larissalalala',
      telefone: '18998454849'
    },
    {
      id: 3,
      nome: 'Paula',
      email: 'matheuslalala',
      telefone: '18998454849'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.itens.find(
        (contato) => contato.telefone === action.payload.telefone
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com esse número')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatoSlice.actions
export default contatoSlice.reducer
