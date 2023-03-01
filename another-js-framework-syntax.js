import { onMount } from 'fish'

export const type = 'route'

export function serverScript() {
  return {
    getUser: async () => {
      return await Promise.resolve('user')
    }
  }
}

export function script() {
  let counter = 0
  let kekw = ['🔹', '💎']
  let user

  onMount(() => {
    user = server.call('getUser')
  })

  return {
    counter,
    kekw,
    user,
    handleClick: () => {
      counter++
    }
  }
}

export const template = `
  <div class="container">
    <p>{user}</p>
    <h1>Count: {counter}</h1>
    <button on:click={handleClick}>Click Me</button>

    {#each kekws as kekw}
      <p>{kekw}</p>
    {/each}
  </div>
`

export const style = `
  .container {
    align-text: center;
  }
`
