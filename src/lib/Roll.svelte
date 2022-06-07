<!-- https://www.npmjs.com/package/@ensemblebr/dice
<script lang='ts'>
    import { Dice } from "dice-typescript"
    import { result } from '../stores/result'
    const dice = new Dice();
    let input: string;
    
    
    const output = () => {
    console.log(input);
   
    $result = dice.roll(input).total;
    
}
</script>
    

        <div> Result: {$result}</div>
        <div>Input: {input}</div>
        <input on:keyup={output} bind:value="{input}" />
        -->