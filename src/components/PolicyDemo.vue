<script setup lang="ts">
import { computed, ref } from 'vue';

type Decision = 'allow' | 'ask' | 'deny';
const calls = [
  { tool: 'read_invoice', args: '{ id: "INV-204" }', decision: 'allow' as Decision, why: 'Scope finance:read matches. Budget left: 18 calls.' },
  { tool: 'send_email', args: '{ to: "customer", body: "..." }', decision: 'ask' as Decision, why: 'Outbound message on behalf of a user. Needs a human to approve.' },
  { tool: 'delete_user', args: '{ id: 9182 }', decision: 'deny' as Decision, why: 'The agent holds no users:delete scope. Blocked before the MCP server.' },
  { tool: 'web_fetch', args: '{ url: "from a retrieved page" }', decision: 'deny' as Decision, why: 'The URL came from untrusted content. Tainted input cannot pick the target.' },
];
const picked = ref(0);
const current = computed(() => calls[picked.value]);
</script>

<template>
  <div class="demo">
    <div class="demo__head mono"><span>toolwall</span><span class="muted">policy.yaml · agent: support-bot</span></div>
    <div class="demo__body">
      <div class="demo__calls" role="radiogroup" aria-label="Pick a tool call to check">
        <button v-for="(c, i) in calls" :key="c.tool" type="button" role="radio" :aria-checked="picked === i" :class="{ on: picked === i }" @click="picked = i">
          <span class="mono">{{ c.tool }}</span>
          <span class="muted mono small">{{ c.args }}</span>
        </button>
      </div>
      <div class="demo__out" aria-live="polite">
        <p class="mono muted small">$ toolwall check {{ current.tool }}</p>
        <p class="verdict" :class="current.decision">{{ current.decision.toUpperCase() }}</p>
        <p>{{ current.why }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo { border: 1px solid var(--line); border-radius: 12px; background: var(--surface); overflow: hidden; }
.demo__head { display: flex; justify-content: space-between; gap: 12px; padding: 12px 16px; border-bottom: 1px solid var(--line); flex-wrap: wrap; }
.demo__body { display: grid; grid-template-columns: 1fr 1fr; }
.demo__calls { display: grid; border-right: 1px solid var(--line); }
.demo__calls button { all: unset; cursor: pointer; display: grid; gap: 2px; padding: 14px 16px; min-height: 44px; border-bottom: 1px solid var(--line); }
.demo__calls button:last-child { border-bottom: 0; }
.demo__calls button:hover { background: var(--bg); }
.demo__calls button.on { background: var(--bg); box-shadow: inset 3px 0 0 var(--accent); }
.demo__calls button:focus-visible { outline: 2px solid var(--accent); outline-offset: -2px; }
.demo__out { padding: 20px 24px; }
.small { font-size: 12px; }
.verdict { font-family: var(--mono); font-size: 28px; font-weight: 600; margin: 8px 0; }
.verdict.allow { color: var(--ok); }
.verdict.ask { color: var(--warn); }
.verdict.deny { color: var(--bad); }
@media (max-width: 720px) { .demo__body { grid-template-columns: 1fr; } .demo__calls { border-right: 0; border-bottom: 1px solid var(--line); } }
</style>
