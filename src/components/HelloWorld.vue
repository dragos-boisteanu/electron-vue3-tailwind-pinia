<template>
	<h1>{{ msg }}</h1>

	<p>
		Recommended IDE setup:
		<a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
		+
		<a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
	</p>

	<p>
		<a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Documentation </a>
		|
		<a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
	</p>

	<button type="button" @click="count++">count is: {{ count }}</button>
	<p>
		Edit
		<code>components/HelloWorld.vue</code> to test hot module replacement.
	</p>

	<div class="flex flex-col align-top justify-center p-5 gap-y-5">
		<div>
			<span class="font-semibold"
				>Counter: <span>{{ store.count }}</span></span
			>
		</div>
		<div>
			<span class="font-semibold">My Name: </span> <span> {{ myName }}</span>
		</div>
		<div v-if="upperCaseMyName.length > 0">
			<span class="font-semibold">My Name Uppercase: </span>
			<span> {{ upperCaseMyName }}</span>
		</div>
		<div class="flex align-middle justify-center gap-x-5">
			<button
				class="px-4 py-1 rounded-sm bg-teal-800 hover:bg-teal-500 text-white ext-center"
				@click="store.increment()"
			>
				+
			</button>
			<button
				class="px-4 py-1 rounded-sm bg-red-500 hover:bg-red-400 text-white ext-center"
				@click="store.resetCount()"
			>
				Reset
			</button>
			<button
				class="px-4 py-1 rounded-sm bg-teal-800 hover:bg-teal-500 text-white ext-center"
				@click="store.decrement()"
			>
				-
			</button>
		</div>
		<div class="flex align-middle justify-center p-4">
			<input
				class="p-2 rounded-sm border border-slate-700 focus:border-slate-500 text-xs text-gray-600 outline-none"
				v-model="myName"
			/>
		</div>
		<div class="flex align-middle justify-center p-4 gap-x-4">
			<input
				class="p-2 rounded-sm border border-slate-700 focus:border-slate-500 text-xs text-gray-600 outline-none"
				v-model.number="newCounterValue"
			/>
			<button class="px-4 py-1 rounded-sm bg-teal-800 text-white ext-center" @click="store.setCount(newCounterValue)">
				Save
			</button>
		</div>
	</div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { counterStore } from '../stores/counter'

defineProps({
	msg: String,
})

const store = counterStore()

function incrementCounter() {
	store.increment()
}

function decrementCounter() {
	store.decrement()
}

const myName = ref('')
const newCounterValue = ref(0)

const upperCaseMyName = computed(() => {
	return myName.value.toUpperCase()
})
</script>

<style scoped>
a {
	color: #42b983;
}
</style>
