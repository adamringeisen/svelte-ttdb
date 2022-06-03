<!-- https://www.npmjs.com/package/@ensemblebr/dice -->

<script lang='ts'>
    import { Dice } from "dice-typescript"
    let result: number = null;
    let codeValue = document.getElementById("code") as HTMLInputElement;
    const dice = new Dice();
    // const getRandomIntInc = (min: number, max: number) => {
    //     min = Math.ceil(min);
    //     max = Math.floor(max);
    //     return Math.floor(Math.random() * (max - min +1)+ min);
    // }
    const roll = () => {
        result = dice.roll(codeValue?.value.toString()).total;
    }
</script>
<div>
    {#if result === null}
     &nbsp;
{:else}
{result}
{/if}
</div>
<div>{codeValue}</div>
<input id="code">
<button on:click={roll}>Roll d20</button>