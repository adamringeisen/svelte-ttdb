<script lang="ts">
    import { result } from '../stores/result'
    
</script>

{#if ($result === undefined)}
<div>&nbsp;</div>
{:else}
<div>{$result.total}</div>
{/if}

<style>
div {
    font-size: 10rem;
}
</style>