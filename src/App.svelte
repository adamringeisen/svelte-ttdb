<script lang="ts">

  import Output from './lib/Output.svelte';
  import RollCustom from './lib/RollCustom.svelte';
  let bstr: string;
  let btxt: string;
  export let buttons = [
    { string : '1d100', text : 'd100' },
    {string: "1d20", text: "d20"},
    {string: "1d12", text: "d12"},
    { string : '1d10', text : 'd10' },
    { string : '1d8', text : 'd8' },
    { string : '1d6', text : 'd6' },
    { string : '1d4', text : 'd4' },
    { string : '1d2', text : 'd2' },
  ]
  export let customButtons = [];
  const addButton = () => {
    customButtons.push({string: bstr, text: btxt});
    console.log(buttons);
    bstr = null;
    btxt = null
    customButtons = customButtons;
  }
</script>

<main>

  <Output />
  <h1>Regular Dice</h1>
{#each buttons as button}
<RollCustom rs={button.string} buttonText={button.text} />
{/each}
<h1>Custom Buttons</h1>
{#each customButtons as button}
<RollCustom rs={button.string} buttonText={button.text} />
{/each}
<br/> 
<label>Dice to Roll
<input bind:value={bstr}>
</label>
<br/>
<label>Button Text
<input bind:value={btxt}>
</label>
<br/>
<button on:click={addButton}>Add Button</button>

</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
